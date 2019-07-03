import React, { Component } from 'react';

class Homeworkmodal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isAble: false
    };
  }

  popUp = () => {
    this.setState({ isOpen: !this.state.isOpen, isAble: !this.state.isAble });
  };
  render() {
    const { isOpen, isAble } = this.state;
    const mstyle = {
      width: 350,
      height: 100,

      border: '1px solid black'
    };
    return (
      <div className='container'>
        <button onClick={this.popUp} disabled={isAble}>
          Open
        </button>

        {isOpen && (
          <div style={mstyle}>
            <div>'蔡徐坤' 邀请您进行一场3v3🏀比赛...</div>
            <button onClick={this.popUp}>Accept</button>
            <button onClick={this.popUp}>Reject</button>
          </div>
        )}
      </div>
    );
  }
}

export default Homeworkmodal;
