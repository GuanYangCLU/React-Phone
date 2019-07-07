import React, { Component } from 'react';
import axios from 'axios';
// Tags: Inbox, Sent, Draft, Trash
// read: [t/f] {onClick}, number: unread.legnth, nothing: 'empty'
// Detail:
// subject, from to, time, message, DELETE to Trash

// compose: unnecessary
class Homeworkemail extends Component {
  constructor(props) {
    super(props);
    this.state = { curId: null, email: [], filter: 'inbox', Error: null };
  }

  componentDidMount() {
    axios
      .get('http://api.haochuan.io/emails')
      .then(res => {
        let i = 0;
        this.setState({
          email: res.data.emailData.map(item => {
            return { ...item, id: ++i }; // Math.random().toString()
          })
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({ Error: err });
      });
  }

  handleList = name => {
    this.setState({ filter: name });
  };

  handleContent = e => {
    // console.log(e.target);
    this.setState({
      curId: e.target.id,
      email: this.state.email.map(item => {
        if (!item.read) return { ...item, read: true };
        else return item;
      })
    });
  };

  render() {
    const navArray = ['inbox', 'sent', 'draft', 'trash'];
    const { curId, email, filter, Error } = this.state;
    return (
      <div className='container'>
        <div className='email-nav'>
          <div>Compose</div>
          {navArray.map(item => {
            return (
              <div id={item} onClick={() => this.handleList(item)}>
                {item}
              </div>
            );
          })}
        </div>

        <div className='email-list'>
          {email
            .filter(item => {
              return item.tag === filter;
            })
            .map(item => {
              return (
                <div
                  id={item.id}
                  key={item.id}
                  style={{
                    border: '1px solid black',
                    fontSize: 8
                  }}
                  onClick={e => this.handleContent(e)}
                >
                  {item.subject} <br />
                  {item.from} {item.time.slice(0, 10)}
                </div>
              );
            })}
        </div>

        <div className='email-content' style={{ fontSize: 8 }}>
          {email
            .filter(item => {
              return item.id == curId;
            })
            .map(item => {
              return item.message;
            })}
        </div>
      </div>
    );
  }
}

export default Homeworkemail;
