import React, { Component } from 'react';
import startFace from './assets/win.jpg';
import stopFace from './assets/lose.jpg';

// import Footer from './footer';

class Homeworkcounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      count: 0,
      on: false,
      startStop: 'Start',
      cry: false
    };
  }
  addOne = () => {
    let number = this.state.count;
    this.setState({ count: ++number, cry: true });
    // console.log(this.state.count);
  };
  subOne = () => {
    let number = this.state.count;
    this.setState({ count: --number });
    // console.log(this.state.count);
  };

  timerOnOff = () => {
    if (this.state.on) {
      clearInterval(this.timer);
      this.setState({ startStop: 'Start' });
    } else {
      this.setState({ startStop: 'Stop' });
      this.timer = setInterval(() => {
        // what is timer here?
        this.setState({ time: ++this.state.time, cry: false });
      }, 250);
    }
    this.setState({ on: !this.state.on });
  };

  timerReset = () => {
    // let seconds = this.state.time;
    this.setState({
      time: 0,
      count: 0
    });
  };

  render() {
    const { time, count, on, startStop, cry } = this.state; // optimization? how in class above?
    return (
      <div className='container'>
        <button onClick={this.timerOnOff}>{startStop}</button>
        <button onClick={this.timerReset}>Reset</button>
        <div>
          <label className='count'>Count: {count}</label>
        </div>
        <div>
          <label className='timer'>Time: {time}</label>
        </div>
        <div>
          <label className='apm'>
            Your APM: {time ? parseInt((60 * count) / time) : 0}
          </label>
        </div>

        <button onClick={this.addOne}>+</button>
        <button onClick={this.subOne}>-</button>
        <div>
          {!cry ? (
            <img src={startFace} style={{ width: 200 }} />
          ) : (
            <img src={stopFace} style={{ width: 200 }} />
          )}
        </div>
      </div>
    );
  }
}

export default Homeworkcounter;
