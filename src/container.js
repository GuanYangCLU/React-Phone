import React, { Component } from 'react';
import Item from './item';
import { Link } from 'react-router-dom';
import Homeworktable from './homeworktable';

class Container extends Component {
  render() {
    const ctstyle = {
      borderLeft: '1px solid black',
      borderRight: '1px solid black',
      width: 400,
      height: '400px',
      //
      position: 'relative',
      top: 0,
      'overflow-y': 'scroll'
    };
    return (
      <div style={ctstyle}>
        <div>
          <Item text='HW1' link='/hw1' />
          <Item text='HW2' link='/hw2' />
          <Item text='HW3' link='/hw3' />
          <Item text='HW4' link='/hw4' />
        </div>
        <div>
          <Item text='HW5' link='/hw5' />
          <Item text='HW6' link='/hw6' />
          <Item text='HW7' link='/hw7' />
          <Item text='HW8' link='/hw8' />
        </div>
        <div>
          {/* <Link to='/'>Back</Link> */}
          <Item text='6' />
          <Item text='7' />
          <Item text='8' />
          <Item text='1' />
        </div>
        <div>
          <Item text='5' />
          <Item text='6' />
          <Item text='7' />
          <Item text='8' />
        </div>
        <div>
          <Item text='5' />
          <Item text='6' />
          <Item text='7' />
          <Item text='8' />
        </div>

        <div>
          <Item text='5' />
          <Item text='6' />
          <Item text='7' />
          <Item text='8' />
        </div>

        {/* <div>
          <Homeworktable />
        </div> */}
        <div />
      </div>
    );
  }
}

export default Container;
