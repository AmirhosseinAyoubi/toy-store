import React from 'react'
import "./style.css"

export default function IntroCard({ title, desc,image }) {
    return (
        <div className="business-body">
            <div className="business-description">
                <h2>{title}</h2>
                <div className="business-border"></div>
                <p>{desc}</p>
                <button className="btn-toys business-btn">Get It Now!</button>
            </div>
            <div className="business-img-container" data-aos="zoom-in"
                data-aos-duration="700">
                <img className="business-img" data-aos="zoom-in"
                    data-aos-duration="800"
                    src={image}
                    alt="intro-img" />
            </div>
        </div>
    )
}
