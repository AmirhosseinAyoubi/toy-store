import React from 'react'
import "./style.css"
import { FaPlay } from "react-icons/fa"
export default function Video() {
    return (
        <div className="video mb-5">
            <div className="video-content" data-aos="zoom-in"
                data-aos-duration="500">
                <p className="video-title1">About The Shop
                </p>
                <h2 className="video-title2">Watch Our Story
                </h2>
                <p className="video-description">There is no magic formula to
                    write perfect ad copy. It is
                    based on a number of factors, including ad placement,
                    demographic, even the consumer’s mood.</p>

                <a className="btn-toys video-play-btn"><FaPlay />
                </a>
            </div>


        </div >
    )
}
