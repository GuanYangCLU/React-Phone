import React, { Component } from 'react';
import axios from 'axios';
// Tags: Inbox, Sent, Draft, Trash
// read: [t/f] {onClick}, number: unread.legnth, nothing: 'empty'
// Detail:
// subject, from to, time, message, DELETE to Trash

// compose: unnecessary
// curId: show detail email
// ==, != 判定id的都是因为id生成器的局限，换成更好的id generation则可以使用===, !==
// setState 浅比较下不触发 rerender
class Homeworkemail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curId: null,
      email: [],
      inbox: [],
      sent: [],
      draft: [],
      trash: [],
      inboxNum: 0,
      TrashNum: 0,
      filter: 'inbox',

      Error: null
    };
  }

  componentDidMount() {
    axios
      .get('http://api.haochuan.io/emails')
      .then(res => {
        let i = 0;
        const emails = res.data.emailData.map(item => {
          return { ...item, id: ++i }; // Math.random().toString()
        });
        this.setState({
          email: emails,
          inbox: emails.filter(item => item.read === 'false'),
          trash: emails.filter(item => item.tag === 'trash'),
          inboxNum: emails.filter(item => item.read === 'false').length,
          trashNum: emails.filter(item => item.tag === 'trash').length
        });
      })
      //   .then(res => {
      //     this.setState({
      //       inbox: [...this.state.email.filter(item => item.read === 'false')],
      //       trash: [...this.state.email.filter(item => item.tag === 'trash')]
      //     });
      //   })
      .catch(err => {
        console.log(err);
        this.setState({ Error: err });
      });
  }

  handleList = name => {
    this.setState({ curId: null, filter: name });
  };

  handleContent = e => {
    // console.log(this.state.email);
    let isRead = 0;
    this.setState({
      curId: e.target.id,
      email: this.state.email.map(item => {
        if (item.read === 'false' && item.id == e.target.id) {
          isRead = 1;
          return { ...item, read: 'true' };
        } else return item;
      }),
      inboxNum: this.state.inboxNum - isRead
      //   inbox: [...this.state.email.filter(item => item.read === 'false')],
      //   inboxNum: 1
    });
  };

  handleDelete = e => {
    // console.log(this.state.email);
    this.setState({
      curId: null,

      email: [
        ...this.state.email.filter(item => item.id != e.target.id),
        this.state.email
          .filter(item => item.id == e.target.id)
          .map(item => {
            // console.log(item);
            return { ...item, tag: 'trash' };
          })[0]
      ],
      trashNum: this.state.trashNum + 1
      //   trash: [...this.state.email.filter(item => item.tag === 'trash')]
    });
    // console.log(this.state.trash);
  };

  render() {
    const navArray = ['inbox', 'sent', 'draft', 'trash'];
    const {
      curId,
      email,
      inbox,
      sent,
      draft,
      trash,
      inboxNum,
      trashNum,
      filter,
      Error
    } = this.state;
    // const unreadlen = this.state.inbox.length;
    // const trashlen = this.state.trash.length;
    return (
      <div className='container'>
        <div className='email-nav'>
          <div>Compose</div>
          {navArray.map(item => {
            let num = 0;
            switch (item) {
              case 'inbox':
                num = inboxNum;

                break;
              case 'trash':
                num = trashNum;
                break;
              default:
                // num = -1;
                break;
            }
            return (
              <div id={item} onClick={() => this.handleList(item)}>
                {item} {num}
              </div>
            );
          })}
        </div>

        <div className='email-list'>
          {email.filter(item => {
            return item.tag === filter;
          }).length > 0 ? (
            email
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
              })
          ) : (
            <div style={{ marginLeft: 5, border: '1px solid black' }}>
              empty here...
            </div>
          )}
        </div>

        <div className='email-content' style={{ fontSize: 8 }}>
          {email
            .filter(item => {
              return item.id == curId;
            })
            .map(item => {
              return (
                <div>
                  <div>
                    <div>
                      {item.subject}{' '}
                      {item.tag !== 'trash' && (
                        <button
                          id={item.id}
                          onClick={e => this.handleDelete(e)}
                        >
                          x
                        </button>
                      )}
                    </div>
                    <div>
                      {item.from} - {item.time}
                    </div>
                  </div>
                  <div>{item.message}</div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Homeworkemail;
