import React, { Component } from 'react';

class Homeworktodolist extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '', todo: [], filter: 'all' };
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
        {
          id: listId,
          content: this.state.input,
          isCompleted: false
        }
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

  handleFilter = button => {
    this.setState({ filter: button });
  };

  render() {
    const { input, todo, filter } = this.state;
    const buttonArray = ['all', 'completed', 'active'];
    return (
      <div className='container'>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input value={input} onChange={e => this.handleChange(e)} />
          <input type='submit' value='Submit' className='btn btn-submit' />
        </form>
        {buttonArray.map(button => {
          return (
            <button
              onClick={() => this.handleFilter(button)}
              disabled={button === filter}
            >
              {button}
            </button>
          );
        })}

        <div>
          {todo
            .filter(item => {
              switch (filter) {
                case 'all':
                  return item;

                case 'active':
                  return !item.isCompleted;
                case 'completed':
                  return item.isCompleted;

                default:
                  break;
              }
            })
            .map(item => {
              return (
                <div key={item.id}>
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
                    id: {item.id} - text: {item.content}
                  </li>
                  <button id={item.id} onClick={e => this.handleDelete(e)}>
                    Delete
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Homeworktodolist;
