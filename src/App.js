import React from 'react'
import { TodoList } from './Todo/TodoList'
import { func } from 'prop-types'
import ContextRemoveTodoItem from './context'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: [
        { id: 1, completed: true, title: 'Buy a bread' },
        { id: 2, completed: false, title: 'Buy some milk' },
        { id: 3, completed: false, title: 'Buy an eggs' }
      ]
    }
  }

  changeTodoItem = function (id) {
    let nextTodos = this.state.todos
    nextTodos[id - 1].completed = !nextTodos[id - 1].completed
    this.setState({ todos: nextTodos })

    console.log('State changed', this.state.todos)
  }

  removeTodo = function (id) {
    let nextTodos = this.state.todos
    nextTodos = nextTodos.filter(todo => todo.id !== id)
    console.log('Next todos new:', nextTodos)
    this.setState({ todos: nextTodos })
  }

  changeTodoItem = this.changeTodoItem.bind(this)
  removeTodo = this.removeTodo.bind(this)

  render() {
    return (
      <ContextRemoveTodoItem.Provider value={{ removeTodo: this.removeTodo }}>
        <div className='wrapper'>
          <h1>ToDo list</h1>
          <TodoList todos={this.state.todos} changeTodoItem={this.changeTodoItem} />
        </div>
      </ContextRemoveTodoItem.Provider>
    )
  }
}

export default App