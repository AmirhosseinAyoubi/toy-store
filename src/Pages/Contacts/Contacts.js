import React, { useEffect } from 'react'
import "./style.css"
import Subscribe from '../../Components/Subscribe/Subscribe'
import Intro from '../../Components/Intro/Intro'
import InstagramLinks from '../../Components/InstagramLinks/InstagramLinks'
import Button from '../../Components/Button/Button'
import Message from '../../Components/Message/Message'
import Map from '../../Components/Map/Map'
import ContactInfo from '../../Components/ContactInfo/ContactInfo'


export default function Contacts() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className="container-lg">
            <div className="contact-body-content">
                <Map />
                <div className="message-container">
                    <Message />
                    <ContactInfo />
                </div>
            </div>
            <Subscribe />
            <Intro text={"We're on Instagram!"} title={"@ElasticThemes"} />
            <div className="instagram">
                <InstagramLinks number={6} />
                <Button className={"instagram-btn"} text={"See more photos"} />
            </div>
        </div>
    )
}
