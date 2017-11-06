import React from "react"
import "./style.css"
import Task from "../task"

const TasksList = ({ title, tasks, handleChange, handleTextChange }) => {
  return (
    <div className="task-list">
      <h2>{title}</h2>
      {tasks.map((task, index) => (
        <Task
          key={task.id}
          id={task.id}
          text={task.text}
          checked={task.isDone}
          handleChange={handleChange}
          handleTextChange={handleTextChange}
        />
      ))}
    </div>
  )
}

module.exports = TasksList
