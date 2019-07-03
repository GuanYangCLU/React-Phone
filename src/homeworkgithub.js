import React, { Component } from 'react';
import axios from 'axios';

class Homeworkgithub extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: false,
      detail: []
    };
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users?per_page=100')
      .then(res => {
        const arr = [...res.data];
        // console.log(typeof res.data, res.data);
        this.setState({ data: arr });
      })
      .catch(err => console.log(err));
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
    const { data, isLoading, detail } = this.state;
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
                style={{ listStyle: 'none' }}
                onClick={() => this.showDetail(git)}
              >
                {git.id} {git.login}
                {git.login.length < 5
                  ? '\t\t\t'
                  : git.login.length < 13
                  ? '\t\t'
                  : '\t'}
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
