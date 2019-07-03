import React, { Component } from 'react';
import Item from './item';

class Footer extends Component {
  render() {
    const ftstyle = {
      border: '1px solid black',
      // display: 'flex',
      position: 'absolute',
      bottom: 0,
      background: 'cyan',
      width: 400,
      height: 100
    };
    return (
      <div style={ftstyle}>
        <Item text='1' />
        <Item text='2' />
        <Item text='3' />
        <Item text='4' />
      </div>
    );
  }
}

export default Footer;
