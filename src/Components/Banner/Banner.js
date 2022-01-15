import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
import { Link as Scroll} from 'react-scroll'

export default function Banner() {

    return (
        <div className="slider">
            <div className="slider-background">
                <div className="slider-modal"
                    data-aos="zoom-in" data-aos-duration="600" data-aos-delay="1000">
                    <div className="slider-modal-content">
                        <p>Say Hello to ToyStore!</p>
                        <p> Free Ecommerce <br /> Template for Webflow</p>
                        <Link to="/catalog" className="modal-btn btn-toys" >Open Catalog</Link> 
                    </div>
                </div>
            </div>
            <Scroll to="categoryCards" spy={true} smooth={true}>
            <div className="mouse-icon-box">
                <div className="mouse-icon">
                </div>
            </div>
            </Scroll>
        </div>
    )
}
