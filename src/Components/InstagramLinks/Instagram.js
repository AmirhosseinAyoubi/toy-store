import React from 'react'
import "./style.css"
export default function Instagram({ image }) {
    return (
        <div data-aos="zoom-in"
            data-aos-duration="700">
            <a><img
                src={image}
                alt="instgaram-post" />
            </a>
        </div>
    )
}
