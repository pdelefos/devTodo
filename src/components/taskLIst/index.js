import React from "react"
import Task from "../task"

const TasksList = ({ title, tasks, handleChange }) => {
  return (
    <div>
      <h2>{title}</h2>
      {tasks.map((task, index) => (
        <Task
          key={task.id}
          id={task.id}
          text={task.text}
          checked={task.isDone}
          handleChange={handleChange}
        />
      ))}
    </div>
  )
}

module.exports = TasksList
