import React from "react"
import "./style.css"
import TasksList from "../taskLIst/"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [
        { id: 1, text: "premiere task", isDone: false, spendTime: 0 },
        {
          id: 2,
          text:
            "The palatable sensation we lovingly refer to as The Cheeseburger has a distinguished and illustrious history. It was born from humble roots, only to rise to well-seasoned greatness.",
          isDone: true,
          spendTime: 0
        }
      ]
    }
    this.handleTaskState = this.handleTaskState.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
  }
  render() {
    return (
      <div>
        <TasksList
          title="TODO"
          tasks={this.state.tasks.filter(task => !task.isDone)}
          handleChange={this.handleTaskState}
          handleTextChange={this.handleTextChange}
        />
        <TasksList
          title="DONE"
          tasks={this.state.tasks.filter(task => task.isDone)}
          handleChange={this.handleTaskState}
          handleTextChange={this.handleTextChange}
        />
      </div>
    )
  }

  handleTaskState(taskId) {
    this.setState(prevState => {
      return {
        tasks: prevState.tasks.map(task => {
          if (task.id == taskId) task.isDone = !task.isDone
          return task
        })
      }
    })
  }

  handleTextChange(taskId, newValue) {
    this.setState(prevState => {
      return {
        tasks: this.state.tasks.map(task => {
          if (task.id == taskId) task.text = newValue
          return task
        })
      }
    })
  }
}

module.exports = App
