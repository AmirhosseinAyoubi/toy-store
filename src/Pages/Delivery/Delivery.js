import React,{useEffect} from 'react'
import "./style.css"
import Subscribe from '../../Components/Subscribe/Subscribe'
import Intro from '../../Components/Intro/Intro'
import InstagramLinks from '../../Components/InstagramLinks/InstagramLinks'
import Button from '../../Components/Button/Button'
import DeliveryInfo from '../../Components/DeliveryInfo/DeliveryInfo'
export default function Delivery() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <div className="container-lg">
            <DeliveryInfo />
            <Subscribe />
            <Intro text={"We're on Instagram!"} title={"@ElasticThemes"} />
            <div className="instagram">
                <InstagramLinks number={6} />
                <Button className={"instagram-btn"} text={"See more photos"} />
            </div>
        </div>
    )
}
