import React from 'react'
import PropTypes from 'prop-types'
import ContextRemoveTodoItem from '../context'

class TodoItem extends React.Component {
  constructor(props) {
    super(props)
  }

  static contextType = ContextRemoveTodoItem

  componentWillReceiveProps(obj) {
    console.log('componentWillRecieveProps')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate')
  }

  componentDidMount() {
    const context = this.context
    console.log('Context', context)
  }

  render() {
    return (
      <ContextRemoveTodoItem.Consumer>
        {
          context => (
            <li>
              <input type='checkbox'
                onChange={() => this.props.changeTodoItem(this.props.todo.id)}
                checked={this.props.todo.completed} />
              <span className={this.props.todo.completed ? "done" : ""}>
                {`${this.props.todo.id}.`}
                {`${this.props.todo.title}`}
                &nbsp;
                <button className='rm-item' onClick={() => {context.removeTodo(this.props.todo.id)}}>&times;</button>
              </span>
            </li>
          )
        }
      </ContextRemoveTodoItem.Consumer>

    )
  }
}


export { TodoItem }