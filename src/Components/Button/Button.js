import React from 'react'
import "./style.css"

export default function Button({ text, className}) {
    return (
        <button className={`btn-toys ${className}`}>{text}</button>
    )
}
