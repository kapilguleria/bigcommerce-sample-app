import React from 'react';
import { Grid, GridItem, Box, H1, Text, Link, Button } from '@bigcommerce/big-design';
export default class ReactGrid extends React.Component<any> {

    constructor(props) {
        super(props)
    }

    render() {
        const { storeDomain, variantCount, inventoryCount, inventoryValue } = this.props.data;
        return (
            < >
                <Grid>
                    <GridItem>
                        <Box backgroundColor="white" border="box" borderRadius="normal" padding="medium">

                            <div className="row">
                                <div className="col-md-10">
                                    <H1>Store Overview</H1>
                                    <Text>A view into your default Bigcommerce storefront.</Text>
                                </div>
                                <div className="col-md-2 mob-button">
                                    <Button variant="secondary">
                                        <Link href={"https://"+ storeDomain} target="_blank">View Storefront</Link>
                                    </Button>
                                </div>
                            </div>

                            <Box marginTop="medium" backgroundColor="white" border="box" borderRadius="normal" padding="medium">
                                <span><Text bold>Domain</Text></span>
                                <Text>{storeDomain} </Text>
                            </Box>
                        </Box>

                        <Box marginTop="medium" backgroundColor="white" border="box" borderRadius="normal" padding="medium">
                            <div className="row">
                                <div className="col-md-10">
                                    <H1>Catalog Summary</H1>
                                    <Text>A simple overview of your catalog.</Text>
                                </div>
                                <div className="col-md-2" >
                                </div>
                            </div>
                            <div style={{ marginTop: '10px' }} className="row">
                                <div className="col-md-4 count-heading">
                                    <Box backgroundColor="white" border="box" borderRadius="normal" padding="small">
                                        <Text bold>Variant count</Text>
                                        <H1>{variantCount}</H1>
                                    </Box>
                                </div>
                                <div className="col-md-4 count-heading">
                                    <Box backgroundColor="white" border="box" borderRadius="normal" padding="small">
                                        <Text bold>Inventory count</Text>
                                        <H1>{inventoryCount}</H1>
                                    </Box>
                                </div>
                                <div className="col-md-4 count-heading">
                                    <Box backgroundColor="white" border="box" borderRadius="normal" padding="small">
                                        <Text bold>Inventory value</Text>
                                        <H1>${inventoryValue}</H1>
                                    </Box>
                                </div>
                            </div>
                        </Box>
                    </GridItem>
                </Grid>
            </>
        );
    }
}