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
    return (
      <ul style={styles.ul}>
        {
          this.props.todos.map(todo => {
            return <TodoItem todo={todo} key={todo.id} changeTodoItem={this.props.changeTodoItem} />
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

