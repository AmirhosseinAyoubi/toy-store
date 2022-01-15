import React from 'react'
import "./style.css"
export default function Intro({ title, text }) {

    return (
        <div className="title">
            <div className="content">

                <p>{title}</p>
                <h2>{text}</h2>
            </div>
        </div>
    )
}
