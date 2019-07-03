import React, { Component } from 'react';
import TableData from './tabledata';

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = { line: '' };
  }
  render() {
    // let trstyle = {
    //   border: '1px solid black',
    //   padding: '0px',
    //   margin: '0',
    //   color: 'blue'
    //   // backgroundColor: 'red'
    // };
    return (
      <tr>
        <TableData data={this.props.data.head} />
        <TableData data={this.props.data.col1} />
        <TableData data={this.props.data.col2} />
        <TableData data={this.props.data.col3} />
        <TableData data={this.props.data.col4} />
      </tr>
    );
  }
}

export default TableRow;
