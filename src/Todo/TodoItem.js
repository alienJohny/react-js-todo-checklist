import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  componentWillReceiveProps(obj) {
    console.log('componentWillRecieveProps')
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate')
  }

  render() {
    return (
      <li>
        <span>
          {`${this.props.todo.id}.`}
          <input type='checkbox'
                 onChange={() => this.props.changeTodoItem(this.props.todo.id)}
                 checked={this.props.todo.completed} />
          {`${this.props.todo.title}`}
          &nbsp;
          <button className='rm-item'>&times;</button>
        </span>
      </li>
    )
  }
}

export { TodoItem }