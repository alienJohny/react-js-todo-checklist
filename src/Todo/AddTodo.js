import React from 'react'

class AddTodo extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      todoInput: ""
    }
  }

  sumbitHandler = (event) => {
    event.preventDefault()

    if (this.state.todoInput.trim()) {
      this.props.onCreate(this.state.todoInput)
      this.setState({todoInput: ""})
    }
  }

  render() {
    return (
      <form onSubmit={this.sumbitHandler}>
        <input value={this.state.todoInput} onChange={event => { this.setState({ todoInput: event.target.value }) }} />
        <button type="submit">Add ToDo</button>
      </form>
    )
  }
}

export default AddTodo