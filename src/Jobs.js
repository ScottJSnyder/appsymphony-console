import React from 'react';
//import { Drawer, Toolbar } from 'devextreme-react';
import DataGrid, { Column, SearchPanel, Pager, Paging } from 'devextreme-react/data-grid';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';
import Box, { Item } from 'devextreme-react/box';
//import { HashRouter as Router } from 'react-router-dom';

const dataSource = AspNetData.createStore({
    key: 'executionId',
    loadUrl: 'https://10.3.1.48:8080/execution/status'
  });
 
class Jobs extends React.Component {

    constructor() {
        super();
    
        this.onSelectionChanged = this.onSelectionChanged.bind(this);      
        this.state = {
    
          selectedRowExId: '',
          selectedRowAppId: '',
          selectedRowiterationCount: ''
        };
      }

    render() {
        return (
            <div>
<div>Jobs</div>
<React.Fragment>
<DataGrid
    elementAttr ={{
      id: 'gridContainer'
    }}
    dataSource={dataSource}
    selection={{ mode: 'single' }}
    showBorders={true}
    hoverStateEnabled={true}
    keyExpr="executionId"
    onSelectionChanged={this.onSelectionChanged}
    >
<Paging defaultPageSize={10} />

<Pager
showPageSizeSelector={true}
allowedPageSizes={[5, 10, 20]}
showInfo={true} />
<SearchPanel visible={true} highlightCaseSensitive={true} />
<Column dataField="executionName" caption="App Name" width="300" />
<Column dataField="executionPhase" caption="Execution Phase" width="150" />
<Column dataField="appId" caption="App ID" width="400" />
<Column dataField="applicationStart" caption="Start" width="200"/>
<Column dataField="applicationStop" caption="Stop" width="200">
</Column>
</DataGrid>
{
this.state.showAppInfo &&
<Box
      direction="row"
      height={100}>
      <Item ratio={1}>
          <div className="box-item orange"><strong> Execution Id </strong></div>

<div id="employee-info">
  <p className="employee-notes">{this.state.selectedRowExId}</p>
</div>
      </Item>
      <Item ratio={1}>
          <div className="box-item yellow"><strong> App Id </strong></div>

<div id="employee-info">
  <p className="employee-notes"> {this.state.selectedRowAppId}</p>
</div>
      </Item>

      <Item ratio={1}>
          <div className="box-item yellow"> <strong>Iteration Count </strong></div>

<div id="employee-info">
  <p className="employee-notes"> {this.state.selectedRowiterationCount}</p>
</div>
      </Item>

  </Box>
}
</React.Fragment>
            </div>
          );
    }
    onSelectionChanged({ selectedRowsData }) {
        const data = selectedRowsData[0];
    
        this.setState({
          showAppInfo: !!data,
          selectedRowExId: data && data.executionId,
          selectedRowAppId: data && data.appId,
          selectedRowiterationCount: data && data.iterationCount,
        });
      }
}
export default Jobs;