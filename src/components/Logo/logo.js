import React from "react"
import "./logo.css"

const Logo = ({ value }) => {
	return (
		<div className="type-logo">
			{value}<span className="type-logo__dot">.</span>
		</div>
	)
}

module.exports = Logo