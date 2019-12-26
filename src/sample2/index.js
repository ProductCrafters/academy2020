import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
class TodoApp extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  // state = { text: '' }
  // handleChange = e => {
  //   this.setState({ text: e.target.value })
  // }

  render() {
    return (
      <Container>
        <h3>State</h3>
        <label htmlFor="new-todo">What needs to be done?</label>
        <input id="new-todo" onChange={this.handleChange} value={this.state.text} />
        <br />
        <label>{this.state.text}</label>
      </Container>
    )
  }




}

export default TodoApp
