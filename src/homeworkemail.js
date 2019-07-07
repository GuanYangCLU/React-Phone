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
    this.state = { email: [], filter: 'inbox', Error: null };
  }

  componentDidMount() {
    axios
      .get('http://api.haochuan.io/emails')
      .then(res => {
        this.setState({ email: res.data.emailData });
      })
      .catch(err => {
        console.log(err);
        this.setState({ Error: err });
      });
  }

  handleList = e => {
    this.setState();
  };

  render() {
    const navArray = ['Inbox', 'Sent', 'Draft', 'Trash'];
    const { email, filter, Error } = this.state;
    return (
      <div className='container'>
        <div className='email-nav'>
          <div>Compose</div>
          {navArray.map(item => {
            return (
              <div id={item} onClick={e => this.handleList(e)}>
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
                <div style={{ border: '1px solid black' }}>
                  <div>{item.subject}</div>
                  <div>{item.from}</div>
                  <div>{item.time.slice(10, 19)}</div>
                </div>
              );
            })}
        </div>

        <div className='email-content' />
      </div>
    );
  }
}

export default Homeworkemail;
