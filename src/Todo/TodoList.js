import React from 'react'
import PropTypes from 'prop-types'
import { TodoItem } from './TodoItem'

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('Next todos', this.props.todos)

    return (
      <ul style={styles.ul}>
        {
          this.props.todos.map((todo, index) => {
            return <TodoItem todo={todo} key={todo.id} index={index + 1} changeTodoItem={this.props.changeTodoItem} />
          })
        }
      </ul>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export { TodoList }

