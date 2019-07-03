import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import ButtonLink from './buttonlink';

class Header extends Component {
  constructor(props) {
    super(props);
    // this.state = { authenticated: false };
  }

  // logInOut = () => {
  //   this.setState({ authenticated: !this.state.authenticated });
  // };

  render() {
    console.log(this.props.isAuth, ' in header');
    // console.log(Object.keys(this.props));
    const hdstyle = {
      border: '1px solid black',
      // display: 'flex',
      position: 'sticky', // set always show in where of the window
      top: 0,
      background: 'cyan',
      width: '400px',
      height: 50,
      zIndex: 100 // set always put on the very top layer (z-axis)
    };
    const textstyle = {
      // top: '50%',
      // display: 'flex',
      width: '75%',
      textAlign: 'center',
      left: '150%',
      transform: 'translate(0,50%)',
      color: 'black',
      fontSize: '20px',
      float: 'left'
    };
    return (
      <div style={hdstyle} className='nav'>
        <div className='nav home' style={{ float: 'left' }}>
          <Link to='/'>Home</Link>
        </div>
        <div style={textstyle}>Status Bar</div>
        <div>
          <button onClick={this.props.logInOut}>
            <Link to='/login'>{this.props.isAuth ? 'Logout' : 'Login'}</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
