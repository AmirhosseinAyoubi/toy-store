import React from 'react'
import "./style.css"


export default function ContactInfo() {
    return (
        <div className="contact-info">
            <p>
                Contact Info
            </p>
            <p>
                4293 Euclid Avenue, Los Angeles, CA 90012
                <br />
                +1 213 974-3898
            </p>
            <button className="see-all-btn">toystore@template.com</button>
            <p>Follow Us
            </p>
            <div className="footer-menu-communication">
                <ul >
                    <li className="bg-light-blue"><a><img
                        src="https://assets.website-files.com/5badda2935e11303a89a461e/5bae5eec5227792568635e37_twitter-icon-white.svg"
                        alt="" /></a></li>
                    <li className="bg-dark-blue"><a ><img
                        src="https://assets.website-files.com/5badda2935e11303a89a461e/5bae5eec3cb36463d4cf4661_facebook-icon-white.svg"
                        alt="" /></a></li>
                    <li className="bg-pink"><a ><img
                        src="https://assets.website-files.com/5badda2935e11303a89a461e/5bae5eec7fe624275552217c_instagram-icon-white.svg"
                        alt="" /></a></li>
                    <li className="bg-light-red"><a ><img
                        src="https://assets.website-files.com/5badda2935e11303a89a461e/5bae5eec6e93377c0bbdba8a_pinterest-icon-white.svg"
                        alt="" /></a></li>
                    <li className="bg-dark-red"><a><img
                        src="https://assets.website-files.com/5badda2935e11303a89a461e/5bae5eecfff242b7c309e311_youtube-icon.svg"
                        alt="" /></a></li>
                </ul>
            </div>
        </div>
    )
}
