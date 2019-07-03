import React, { Component } from 'react';

class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = { data: '1' };
  }
  render() {
    let tdstyle = {
      border: '1px solid #bbb',
      margin: '0',
      padding: '5px',
      // textAlign: 'right',
      // cellspacing: '0px',
      color: 'black'
      // backgroundColor: 'red'
    };
    return <td style={tdstyle}>{this.props.data}</td>;
  }
}

export default TableData;
