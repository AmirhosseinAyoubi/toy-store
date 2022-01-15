import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <div className="footer">
            <div className="container-lg">
                <div className="footer-menu">
                    <div>
                        <h2><Link to="/home"> ToyStore</Link> </h2>
                    </div>
                    <div className="footer-menu-items">
                        <ul>
                            <li><Link to="/home"> Home</Link></li>
                            <li><Link to="/catalog"> Catalog</Link>
                            </li>
                            <li><Link to="/delivery"> Delivery</Link>
                            </li>
                            <li><Link  to="/about">About</Link>
                            </li>
                            <li><Link to="/contacts"> Contacts</Link>
                            </li>

                        </ul>
                    </div>
                    <div className="footer-menu-communication">
                        <ul>
                            <li>
                                <a><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5bae5eec5227792568635e37_twitter-icon-white.svg"
                                        alt="link"/></a>
                            </li>
                            <li>
                                <a><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5bae5eec3cb36463d4cf4661_facebook-icon-white.svg"
                                        alt="link"/></a>
                            </li>
                            <li>
                                <a><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5bae5eec7fe624275552217c_instagram-icon-white.svg"
                                        alt="link"/></a>
                            </li>
                            <li>
                                <a><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5bae5eec6e93377c0bbdba8a_pinterest-icon-white.svg"
                                        alt="link"/></a>
                            </li>
                            <li className="mr-0">
                                <a><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5bae5eecfff242b7c309e311_youtube-icon.svg"
                                        alt="link"/></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-communication">
                    <p>Created with love by <a>Elastic Themes</a></p>
                    <ul>
                        <li>Powered by <a>Webflow</a></li>
                        <li><a >Style Guide</a></li>
                        <li><a >Licensing</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
