import React from 'react'
import { TodoList } from './Todo/TodoList'
import { func } from 'prop-types'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: this.props.data
    }
  }

  changeTodoItem = function(id) {
    let nextTodos = this.state.todos
    nextTodos[id - 1].completed = !nextTodos[id - 1].completed
    this.setState({todos: nextTodos})

    console.log('State changed', this.state.todos)
  }

  changeTodoItem = this.changeTodoItem.bind(this);

  render() {
    return (
      <div className='wrapper'>
        <h1>ToDo list</h1>
        <TodoList todos={this.props.data} changeTodoItem={this.changeTodoItem} />
      </div>
    )
  }
}

export default App