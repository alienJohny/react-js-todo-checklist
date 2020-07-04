import React from 'react'
import { TodoList } from './Todo/TodoList'
import AddTodo from './Todo/AddTodo'
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
    console.group('DEBUG App')
    console.log('id', id)
    console.log(this.constructor.name)
    console.log('State changed', this.state.todos)
    console.groupEnd()

    let nextTodos = this.state.todos
    nextTodos[id - 1].completed = !nextTodos[id - 1].completed
    this.setState({ todos: nextTodos })

    
  }

  removeTodo = function (id) {
    let nextTodos = this.state.todos
    nextTodos = nextTodos.filter(todo => todo.id !== id)
    console.log('Next todos new:', nextTodos)
    this.setState({ todos: nextTodos })
  }

  addTodo = function (title) {
    this.setState({
      todos: this.state.todos.concat([{id: Date.now(), completed: false, title: title}])
    })
  }

  changeTodoItem = this.changeTodoItem.bind(this)
  removeTodo = this.removeTodo.bind(this)
  addTodo = this.addTodo.bind(this)

  render() {
    return (
      <ContextRemoveTodoItem.Provider value={{ removeTodo: this.removeTodo }}>
        <div className='wrapper'>
          <h1>ToDo list</h1>
          <AddTodo onCreate={this.addTodo} />
          {this.state.todos.length
              ? <TodoList todos={this.state.todos} changeTodoItem={this.changeTodoItem} />
              : <p>No todos</p>}
        </div>
      </ContextRemoveTodoItem.Provider>
    )
  }
}

export default App