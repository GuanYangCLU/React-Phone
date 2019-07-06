import React, { Component } from 'react';

class Homeworktaginput extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '', todo: [] };
  }

  componentDidMount() {}

  handleSubmit = e => {
    e.preventDefault();
    let listId = new Date()
      .getTime()
      .toString()
      .slice(3, 12); // (6,12) ssss.msms 6 digits
    this.setState({
      todo: [
        ...this.state.todo,
        { id: listId, content: this.state.input, isCompleted: false }
      ]
    });
    this.setState({ input: '' });
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleComplete = e => {
    // console.log(e.target);
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === e.target.id) {
          return {
            ...item,
            isCompleted: !item.isCompleted
          };
        } else {
          return item;
        }
      })
    });
  };

  handleDelete = e => {
    this.setState({
      todo: this.state.todo.filter(item => item.id !== e.target.id)
    });
  };

  render() {
    const { input, todo } = this.state;
    return (
      <div className='container'>
        <div style={{ float: 'left' }}>
          {todo.map(item => {
            return (
              <div
                key={item.id}
                style={{
                  float: 'left',
                  border: '1px solid black',
                  borderRadius: 15,
                  margin: 5,
                  padding: 3
                }}
              >
                <li
                  style={{
                    listStyle: 'none',
                    textDecoration: item.isCompleted && 'line-through',
                    float: 'left'
                  }}
                  key={item.id}
                  id={item.id}
                  onClick={e => this.handleComplete(e)}
                >
                  {item.content}
                </li>
                <button id={item.id} onClick={e => this.handleDelete(e)}>
                  x
                </button>
              </div>
            );
          })}
        </div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input value={input} onChange={e => this.handleChange(e)} />
          <input type='submit' value='Submit' className='btn btn-submit' />
        </form>
      </div>
    );
  }
}

export default Homeworktaginput;
