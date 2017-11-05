import React from "react"
import "./style.css"
import TasksList from "../taskLIst/"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [
        { id: 1, text: "premiere task", isDone: false },
        {
          id: 2,
          text:
            "The palatable sensation we lovingly refer to as The Cheeseburger has a distinguished and illustrious history. It was born from humble roots, only to rise to well-seasoned greatness.",
          isDone: true
        }
      ]
    }
    this.handleChange = this.handleChange.bind(this)
  }
  render() {
    return (
      <div>
        <TasksList
          title="TODO"
          tasks={this.state.tasks.filter(task => !task.isDone)}
          handleChange={this.handleChange}
        />
        <TasksList
          title="DONE"
          tasks={this.state.tasks.filter(task => task.isDone)}
          handleChange={this.handleChange}
        />
      </div>
    )
  }

  handleChange(taskId) {
    this.setState(prevState => {
      return {
        tasks: prevState.tasks.map(task => {
          if (task.id == taskId) task.isDone = !task.isDone
          return task
        })
      }
    })
  }
}

module.exports = App
