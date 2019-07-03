import React, { Component } from 'react';
import TableRow from './tablerow';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <table
        style={{
          border: '1px solid #bbb',
          padding: '0',
          margin: '0',
          borderCollapse: 'collapse',
          borderSpacing: '0.5rem',
          // cellspacing: '0px',
          color: 'blue'
          // backgroundColor: 'red'
        }}
      >
        <TableRow data={this.props.data[0]} />
        <TableRow data={this.props.data[1]} />
        <TableRow data={this.props.data[2]} />
        <TableRow data={this.props.data[3]} />
        <TableRow data={this.props.data[4]} />
      </table>
    );
  }
}

export default Table;
