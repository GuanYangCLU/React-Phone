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
      // 里面加text比id更好控制，否则鼠标离开滑块会不好控制
      let pos = e.screenX - 120;
      if (pos < 0) pos = 0;
      else if (pos > 256) pos = 256;

      switch (e.target.innerText) {
        case 'r':
          this.setState({
            positionR: pos // need adjust everytime
          });
          break;
        case 'g':
          this.setState({
            positionG: pos
          });
          break;
        case 'b':
          this.setState({
            positionB: pos
          });
          break;
        case 'a':
          this.setState({
            positionA: pos
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
      left: 25,
      position: 'relative',
      borderRadius: '2px'
    };
    const cubestyle = rgba => {
      return {
        background: 'white',
        border: '',
        width: 25,
        height: 25,
        left: `${rgba + 13}px`,
        top: 0,
        position: 'relative',
        borderRadius: '100%',
        textAlign: 'center',
        userSelect: 'none'
      };
    };
    let txtstyle = {
      // color: `rgba(${positionA / 256 < 0.5 ? positionR : 256 - positionR},
      //   ${positionA / 256 < 0.5 ? positionG : 256 - positionG},
      // ${positionA / 256 < 0.5 ? positionB : 256 - positionB},
      // ${positionA / 256 > 0.5 ? positionA / 256 : 1 - positionA / 256})`
      color:
        //   positionA / 256 > 0.5
        //     ? `rgba(${256 - positionR},
        //   ${256 - positionG},
        // ${256 - positionB},
        // ${positionA / 256})`:
        'black'
    };
    return (
      <div className='container' style={cbstyle}>
        {/* bar r (0 - 255)*/}
        <div className='bar'>
          <div className='rail' style={railstyle} />
          <div
            className='cube'
            id='r'
            style={cubestyle(positionR)}
            onMouseDown={e => this.dragStart(e)}
          >
            r
          </div>
          <div style={txtstyle}>R: {positionR}</div>
        </div>
        {/* bar g */}
        <div className='bar'>
          <div className='rail' style={railstyle} />

          <div
            className='cube'
            id='g'
            style={cubestyle(positionG)}
            onMouseDown={e => this.dragStart(e)}
          >
            g
          </div>
          <div style={txtstyle}>G: {positionG}</div>
        </div>
        {/* bar b */}
        <div className='bar'>
          <div className='rail' style={railstyle} />

          <div
            className='cube'
            id='b'
            style={cubestyle(positionB)}
            onMouseDown={e => this.dragStart(e)}
          >
            b
          </div>
          <div style={txtstyle}>B: {positionB}</div>
        </div>
        {/* bar a (0-1) */}
        <div className='bar'>
          <div className='rail' style={railstyle} />

          <div
            className='cube'
            id='a'
            style={cubestyle(positionA)}
            onMouseDown={e => this.dragStart(e)}
          >
            a
          </div>
          <div style={txtstyle}>A: {(positionA / 256).toFixed(2)}</div>
        </div>
      </div>
    );
  }
}

export default Homeworkcolorbar;
