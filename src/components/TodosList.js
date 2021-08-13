/* eslint-disable */
import React, { Component } from 'react'

export class TodosList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    )
  }
}

export default TodosList
