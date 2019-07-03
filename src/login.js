import React, { Component } from 'react';
// import {hashHistory} from 'react-router';
// const date = new Date();

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      passCode: 0,
      year: null,
      month: null,
      date: null
    };
    // console.log(Object.keys(props));
  }

  componentDidMount() {
    const date = new Date();
    this.setState({
      year: date.getFullYear(),
      month: date.getMonth(),
      date: date.getDate()
    });
  }

  onChange = e => {
    // switch? how to graceful do it without hook?
    e.target.name === 'username'
      ? this.setState({ username: e.target.value })
      : this.setState({ password: e.target.value });
    // console.log(this.state.username, this.state.password);
  };

  stdlize = (year, month, date) => {
    // console.log(`${year}${month + 1}${date}`);
    if (month < 9) {
      if (date < 10) {
        return `${year}0${month + 1}0${date}`;
      } else {
        return `${year}0${month + 1}${date}`;
      }
    } else {
      if (date < 10) {
        return `${year}${month + 1}0${date}`;
      } else {
        return `${year}${month + 1}${date}`;
      }
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    // boundary condition: 0701, 0630
    // console.log(
    //   this.state.username,
    //   this.stdlize(this.state.year, this.state.month, this.state.date)
    // );
    if (
      (this.state.username === 'today' &&
        this.state.password ===
          this.stdlize(this.state.year, this.state.month, this.state.date)) ||
      (this.state.username === 'yesterday' &&
        this.state.password ===
          this.stdlize(
            this.state.year,
            this.state.month,
            this.state.date - 1
          )) ||
      (this.state.username === 'tomorrow' &&
        this.state.password ===
          this.stdlize(this.state.year, this.state.month, this.state.date + 1))
    ) {
      this.setState({ passCode: 1 });
      //   hashHistory.push(`/user/${this.state.username}`);
      this.props.logInOut();
      console.log(this.props.isAuth, ' in login');
    } else {
      this.setState({ passCode: -1 });
      this.tryAgain = setTimeout(() => {
        this.setState({ passCode: 0 });
      }, 2000);
    }
  };

  render() {
    // const date = new Date();
    const { username, password, passCode, year, month, date } = this.state;
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type='text'
              name='username'
              placeholder='username'
              value={username}
              onChange={this.onChange}
            />
          </div>
          <div>
            <input
              type='password'
              name='password'
              placeholder='password'
              value={password}
              onChange={this.onChange}
            />
          </div>
          <div>
            <input type='submit' value='Submit' className='btn btn-submit' />
          </div>
        </form>
        {passCode > 0 && <h1>success!</h1>}
        {passCode < 0 && <h1>wrong!</h1>}
        <h1>
          {year} - {month + 1} - {date}
        </h1>
        <h3>
          {/* good idea to rewrite */}
          yesterday: {new Date(new Date().getTime() - 86400000).toString()}
        </h3>
      </div>
    );
  }
}

export default Login;
