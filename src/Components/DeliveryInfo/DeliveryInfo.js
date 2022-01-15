import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
export default function DeliveryInfo() {
    return (


        <div className="delivery-body-content">
            <div className="delivery-body-content-description">
                <h1>Delivery Info
                </h1>
                <p>A successful marketing plan relies heavily on the
                    pulling-power of advertising copy. Writing
                    result-oriented ad copy is difficult, as it must
                    appeal to, entice, and convince consumers to
                    take action. There is no magic formula to write
                    perfect ad copy; it is based on a number of
                    factors, including ad placement, demographic,
                    even the consumer’s mood when they see your ad.</p>
                <h2>What’s a Rich Text element?
                </h2>
                <p>The rich text element allows you to create and
                    format headings, paragraphs, blockquotes,
                    images, and video all in one place instead of
                    having to add and format them individually. Just
                    double-click and easily create content.</p>
                <h3>Static and dynamic content editing
                </h3>
                <p>A rich text element can be used with static or
                    dynamic content. For static content, just drop
                    it into any page and begin editing.</p>
                <ul>
                    <li>Beautifully Designed
                    </li>
                    <li>100% Responsive
                    </li>
                    <li>CMS Content
                    </li>
                    <li>Smooth Animations
                    </li>
                </ul>
                <p>For dynamic content, add a rich text field to any
                    collection and then connect a rich text element
                    to that field in the settings panel. Voila!</p>
                <h4>
                    How to customize formatting for each rich text
                </h4>
                <p>Headings, paragraphs, blockquotes, figures,
                    images, and figure captions can all be styled
                    after a className is added to the rich text element
                    using the "When inside of" nested selector
                    system.</p>
            </div>
            <div className="answer-box">
                <div className="answer-box-content">
                    <p>Can't Find the Answer to Your Question?</p>
                    <Link className="btn-toys subscribe-btn" to="/contacts">Contact Us</Link>
                </div>
            </div>
        </div>

    )
}
