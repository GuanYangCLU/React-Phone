import React, { Component } from 'react';

class Homeworkcolorbar extends Component {
  constructor(props) {
    super(props);
    this.state = { positionR: 0, positionG: 0, positionB: 0, positionA: 128 };
  }

  componentDidMount() {}

  dragStart = e => {
    // alert(e.screenX); // typeof: number
    // this.setState({ postionR: e.screenX });
    document.onmousemove = e => {
      //   console.log(e.target.innerText);
      switch (e.target.innerText) {
        case 'r':
          this.setState({
            positionR: e.screenX - 100
          });
          break;
        case 'g':
          this.setState({
            positionG: e.screenX - 100
          });
          break;
        case 'b':
          this.setState({
            positionB: e.screenX - 100
          });
          break;
        case 'a':
          this.setState({
            positionA: e.screenX - 100
          });
          break;
        default:
          break;
      }
    };
    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmousedown = null;
    };
    // document.addEventListener('mousemove', this.dragMove,false);
    // document.addEventListener('mouseup',this.dragEnd,false);
  };

  render() {
    const { positionR, positionG, positionB, positionA } = this.state;
    let cbstyle = {
      background: `rgba(${positionR},${positionG},${positionB},${positionA /
        256})`
    };
    let railstyle = {
      background: 'white',
      border: '',
      width: 256,
      height: 5,
      top: 15,
      position: 'relative',
      borderRadius: '2px'
    };
    const cubestyle = rgba => {
      return {
        background: 'white',
        border: '',
        width: 25,
        height: 25,
        left: `${rgba}px`,
        top: 0,
        position: 'relative',
        borderRadius: '100%',
        textAlign: 'center'
      };
    };
    return (
      <div className='container' style={cbstyle}>
        {/* bar r (0 - 255)*/}
        <div className='bar'>
          <div className='rail' style={railstyle} />
          <div
            className='cube'
            style={cubestyle(positionR)}
            onMouseDown={e => this.dragStart(e)}
          >
            r
          </div>
        </div>
        {/* bar g */}
        <div className='bar'>
          <div className='rail' style={railstyle} />

          <div
            className='cube'
            style={cubestyle(positionG)}
            onMouseDown={e => this.dragStart(e)}
          >
            g
          </div>
        </div>
        {/* bar b */}
        <div className='bar'>
          <div className='rail' style={railstyle} />

          <div
            className='cube'
            style={cubestyle(positionB)}
            onMouseDown={e => this.dragStart(e)}
          >
            b
          </div>
        </div>
        {/* bar a (0-1) */}
        <div className='bar'>
          <div className='rail' style={railstyle} />

          <div
            className='cube'
            style={cubestyle(positionA)}
            onMouseDown={e => this.dragStart(e)}
          >
            a
          </div>
        </div>
      </div>
    );
  }
}

export default Homeworkcolorbar;
