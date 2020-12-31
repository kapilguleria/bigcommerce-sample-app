import React, { useEffect, useState } from 'react';
import { Grid, GridItem, Box, H1, Text, Link, Table, Button } from '@bigcommerce/big-design';

export default class ReactGrid extends React.Component<any> {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            itemsPerPageOptions: [5, 10, 20, 30],
            itemsPerPage: 5
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    onItemsPerPageChange(event) {
        this.setCurrentPage(1);
        this.setState({
            itemsPerPage: event
        })
    }

    setCurrentPage(event) {
        this.setState({
            currentPage: event
        })
    }

    handleSubmit(id) {
        const { cancelOrder } = this.props.data;
        cancelOrder(id, this.props.data.that);
    }

    render() {
        const { orderData } = this.props.data;
        let orderTableData = [];
        let totalOrder = orderData.length;
        const maxItems = this.state['currentPage'] * this.state['itemsPerPage'];
        const lastItem = Math.min(maxItems, totalOrder);
        const firstItem = Math.max(0, maxItems - this.state['itemsPerPage']);

        if (totalOrder > 0) {
            for (let order of orderData) {
                var status;
                if (order.status == 'Completed') {
                    status =
                        <span className={"button-completed"}>
                            <Button>{order.status}</Button>
                        </span>;
                } else if (order.status == 'Cancelled') {
                    status =
                        <span className={"button-cancel"}>
                            <Button>{order.status}</Button>
                        </span>;
                } else {
                    status =
                        <span className={"button-others"}>
                            <Button>{order.status}</Button>
                        </span>;
                }
                var action;
                if (order.status == 'Completed' || order.status == 'Shipped' || order.status == 'Cancelled') {
                    action = "";
                } else {
                    action = <Button actionType="destructive" onClick={() => this.handleSubmit(order.id)}>Cancel</Button>
                }

                let row = { orderId: order.id, billingName: order.billing_address.first_name + ' ' + order.billing_address.last_name, orderTotal: order.total_inc_tax, orderStatus: status, actions: action };
                orderTableData.push(row);
                status = "";
                action = "";
            }
        }


        return (
            <>
                <Grid>
                    <GridItem>
                        <div className="col-float">                        
                        <Box className="order-listing-container" backgroundColor="white" border="box" borderRadius="normal" padding="medium">

                            <div className="col-sm-6 bg-none">
                                <span className="custom-hdspc"><H1>Orders</H1></span>
                                <Text>{totalOrder} Orders</Text>
                            </div>

                            <div className="order-table-pro">
                               <div className="tb-responsive">
                                <Table
                                    columns={[
                                        { header: 'Order ID', hash: 'orderId', render: ({ orderId }) => orderId },
                                        { header: 'Billing Name', hash: 'billingName', render: ({ billingName }) => billingName },
                                        { header: 'Order Total', hash: 'orderTotal', render: ({ orderTotal }) => orderTotal },
                                        { header: 'Order Status', hash: 'orderStatus', render: ({ orderStatus }) => orderStatus },
                                        { header: 'Actions', hash: 'actions', render: ({ actions }) => actions },
                                    ]}
                                    items={orderTableData.slice(firstItem, lastItem)}
                                    pagination={{
                                        currentPage: this.state['currentPage'],
                                        totalItems: orderTableData.length,
                                        onPageChange: ($event) => this.setCurrentPage($event),
                                        itemsPerPageOptions: this.state['itemsPerPageOptions'],
                                        onItemsPerPageChange: ($event) => this.onItemsPerPageChange($event),
                                        itemsPerPage: this.state['itemsPerPage']
                                    }}
                                    stickyHeader
                                />
                                </div>
                            </div>
                        </Box>
                        </div>
                    </GridItem>
                </Grid>
            </>
        );
    }
}