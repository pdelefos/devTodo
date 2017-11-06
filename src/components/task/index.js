import React from "react"
import "./style.css"
import ExpandingTextArea from "../expandingTextArea"

const Task = ({ id, text, checked, handleChange, handleTextChange }) => {
  return (
    <div className="task">
      <div className="task__part">
        <span className="task__highlight" />
        <input
          type="checkbox"
          className="checkbox"
          checked={checked}
          onChange={evt => handleChange(id)}
        />
      </div>
      {/* <input
        type="text"
        className="task__center"
        value={text}
        onChange={evt => handleTextChange(id, evt.target.value)}
			/> */}
      <div className="task__center">
        <ExpandingTextArea
          text={text}
          handleChange={evt => handleTextChange(id, evt.target.value)}
        />
      </div>
      <div className="task__part" />
    </div>
  )
}

module.exports = Task
