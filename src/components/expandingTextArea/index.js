import React from "react"
import "./style.css"

const ExpandingTextArea = ({ text, handleChange }) => {
  return (
    <div className="expandingArea active">
      <pre>
        <span>{text}</span>
        <br />
      </pre>
      <textarea value={text} onChange={handleChange} />
    </div>
  )
}

module.exports = ExpandingTextArea
