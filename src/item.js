import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ text, link }) => {
  const itemstyle = {
    width: 60,
    height: 60,
    border: '3px solid red',
    background: 'yellow',
    borderRadius: 15,
    margin: 17,
    float: 'left'
    // display: 'table-cell',
    // verticalAlign: 'middle'
  };
  const textstyle = {
    // top: '50%',
    textAlign: 'center',
    left: '50%',
    transform: 'translate(0,80%)'
  };
  return (
    <div style={itemstyle}>
      <div style={textstyle}>{link ? <Link to={link}>{text}</Link> : text}</div>
    </div>
  );
};

export default Item;
