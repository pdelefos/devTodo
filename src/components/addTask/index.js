import React from "react"
import "./style.css"
import ExpandingTextArea from "../expandingTextArea"

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }
  render() {
    return (
      <div>
        <ExpandingTextArea
          value={this.state.value}
          handleChange={this.handleChange}
        />
        <button onClick={evt => this.props.handleAddTodo(this.state.value)}>
          add
        </button>
      </div>
    )
  }
  handleChange(evt) {
    this.setState({ value: evt.target.value })
  }
}

module.exports = AddTodo
