import React from "react"
import "./style.css"

const Task = ({ id, text, checked, handleChange }) => {
  return (
    <div className="task">
      <div className="task__part">
        <span className="task__highlight" />
        <input
          type="checkbox"
          className="checkbox"
          checked={checked}
          onChange={e => handleChange(id)}
        />
      </div>
      <div className="task__center">{text}</div>
      <div className="task__part" />
    </div>
  )
}

module.exports = Task
