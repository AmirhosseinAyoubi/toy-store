import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs"
export default function Border({ title }) {
    return (
        <>
            <div className="animals-header">
                <h2>{title}</h2>
                <Link to="/catalog"
                    className="see-all-btn">See All Toys <BsArrowRight /></Link >
            </div>
            <div className="border"></div>
        </>
    )
}
