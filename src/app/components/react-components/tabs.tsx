import React from 'react';
import { Tabs, Box, Text } from '@bigcommerce/big-design';
import GridSummary from '../react-components/grid-summary';
import GridOrderList from '../react-components/grid-orderlist';

export default class ReactTab extends React.Component<any> {

  constructor(props) {
    super(props)
    
    this.state = {
      activeTab: 'summary'
    }

    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(event) {
    this.setState({ activeTab: event })
  }

  render() {
    const  { items } = this.props;
    return (
      <>
        <Tabs activeTab={this.state['activeTab']} items={items} onTabClick={this.changeTab} />
        <Box marginTop="large">
          {this.state['activeTab'] === 'summary' && <GridSummary data ={this.props} />}
          {this.state['activeTab'] === 'orderlist' && <GridOrderList data ={this.props} />}
        </Box>
      </>
    );
  }
}