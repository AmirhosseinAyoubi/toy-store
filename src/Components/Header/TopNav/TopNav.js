import React from 'react'
import "./style.css"

export default function TopNav() {
    return (
        <div className="top-nav">
            <div className="container-xl">
                <div className="top-nav-content">
                    <div className="communication">
                        <ul>
                            <li>Call Us: +1 213 974-5898</li>
                            <li className="pointer">Email: toystore@template.com</li>
                        </ul>
                    </div>
                    <div className="social-media">
                        <ul>
                            <li><a><img
                                src="https://assets.website-files.com/5badda2935e11303a89a461e/5bae5eec5227792568635e37_twitter-icon-white.svg"
                                alt="twitter" /></a></li>
                            <li><a><img
                                src="https://assets.website-files.com/5badda2935e11303a89a461e/5bae5eec3cb36463d4cf4661_facebook-icon-white.svg"
                                alt="facebook" /></a></li>
                            <li><a ><img
                                src="https://assets.website-files.com/5badda2935e11303a89a461e/5bae5eec7fe624275552217c_instagram-icon-white.svg"
                                alt="instagram" /></a></li>
                            <li><a><img
                                src="https://assets.website-files.com/5badda2935e11303a89a461e/5bae5eec6e93377c0bbdba8a_pinterest-icon-white.svg"
                                alt="pinterset" /></a></li>
                            <li className="mr-0"><a><img
                                src="https://assets.website-files.com/5badda2935e11303a89a461e/5bae5eecfff242b7c309e311_youtube-icon.svg"
                                alt="youtube" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
