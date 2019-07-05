import React, { Component } from 'react';
import axios from 'axios';

class Homeworkgithub extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: false,
      detail: [], // 用obj方便定位取你想要的
      err: null
    };
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users?per_page=100')
      .then(res => {
        // const arr = [...res.data];
        // console.log(typeof res.data, res.data);
        this.setState({ data: res.data });
      })
      .catch(err => {
        console.log(err);
        this.setState({ err: err.data });
      });
  }

  showDetail = git => {
    // alert(git.login);
    axios
      .get(`https://api.github.com/users/${git.login}`)
      .then(res => {
        // const arr = {...res.data};
        this.setState({
          detail: [
            res.data.name,
            res.data.location,
            res.data.followers,
            res.data.following
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { data, isLoading, detail, err } = this.state;
    const detailArr = ['Name: ', 'Location: ', 'Followers: ', 'Followings: '];
    return (
      <div className='container'>
        <div style={{ float: 'left', color: 'black' }}>
          七月枪毙名单：
          <br />
          id username avatar
          {/* <ul> */}
          {data.map(git => {
            return (
              <li
                key={git.id}
                style={{ listStyle: 'none' }}
                onClick={() => this.showDetail(git)}
              >
                {git.id} {git.login}
                <img src={git.avatar_url} style={{ width: 30, height: 30 }} />
              </li>
            );
          })}
          {/* </ul> */}
        </div>
        <div>
          Detail:
          <div
            style={{
              border: '1px solid DarkViolet',
              width: 200,
              height: 250,
              left: '45%',
              position: 'absolute'
            }}
          >
            {detail.map((item, index) => {
              return (
                <li>
                  {detailArr[index]}
                  {item}
                </li>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Homeworkgithub;
