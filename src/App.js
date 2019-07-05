import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './header';
import Container from './container';
import Footer from './footer';
import Homeworktable from './homeworktable';
import Homeworkcounter from './homeworkcounter';
import Homeworkmodal from './homeworkmodal';
import Homeworkgithub from './homeworkgithub';
import Homeworkcolorbar from './homeworkcolorbar';
import Login from './login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: false };
    // this.setState({ authenticated: true });
  }

  logInOut = () => {
    this.setState({ authenticated: !this.state.authenticated });
  };

  render() {
    const textStyle = {
      color: 'red',
      margin: 20,
      position: 'relative',
      height: '550px'
    };
    console.log(this.state.authenticated, ' in app');
    // inside return are JSX, cannot use if else and loop
    return (
      <BrowserRouter>
        <div className='App' style={textStyle}>
          <Header isAuth={this.state.authenticated} logInOut={this.logInOut} />
          {/* <h4>{'au' && this.state.authenticated}</h4> */}
          <Switch>
            <Route exact path='/' component={Container} />
            <Route path='/hw1' component={Homeworktable} />
            <Route path='/hw2' component={Homeworkcounter} />
            <Route path='/hw3' component={Homeworkmodal} />
            <Route path='/hw4' component={Homeworkgithub} />
            <Route path='/hw5' component={Homeworkcolorbar} />
            <Route
              exact
              path='/login'
              render={props => (
                <Login
                  {...props}
                  isAuth={this.state.authenticated}
                  logInOut={this.logInOut}
                />
              )}
            />
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
