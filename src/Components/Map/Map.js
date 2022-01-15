import React from 'react'
import "./style.css"
import Iframe from 'react-iframe'

export default function Map() {
    return (
        <div className="map-container">

            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96748.74316367506!2d-74.25226676524053!3d40.731262178747926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25370329a0e1d%3A0xe1bcdc2adcfee473!2sNewark%2C%20NJ%2C%20USA!5e0!3m2!1sen!2s!4v1637316341999!5m2!1sen!2s"
                width="600"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy" />
        </div >
    )
}
