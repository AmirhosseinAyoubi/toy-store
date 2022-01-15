import React, { useEffect } from 'react'
import "./style.css"
import Subscribe from '../../Components/Subscribe/Subscribe'
import Intro from '../../Components/Intro/Intro'
import InstagramLinks from '../../Components/InstagramLinks/InstagramLinks'
import Button from '../../Components/Button/Button'
import Video from "../../Components/Video/Video"
import IntroCard from '../../Components/IntroCard/IntroCard'
import AboutImg from '../../Components/AboutImage/AboutImg'

export default function About() {


    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <><div className="container-lg">
            <Intro text={"Introducing ToyStore"} title={"All You Need is Fun!"} />
            <AboutImg />
            <Intro text={"Simple & Colorful Ecommerce Template for Your Business"} title={"Made for Webflow"} />
            <IntroCard
                image={"https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77ee73150e2021b0db4_side-image-01-p-1080.jpeg"}
                title={"Available for FREE!"}
                desc={"A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy"}
            />
            <IntroCard
                image={"https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77f0b5b7843138dc3c3_side-image-02-p-1080.jpeg"}
                title={"100% Responsive"}
                desc={"A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy"}
            />
        </div>
            <Video />
            <div className="container-lg">
                <Subscribe />
                <Intro text={"We're on Instagram!"} title={"@ElasticThemes"} />
                <div className="instagram">
                    <InstagramLinks number={6} />
                    <Button className={"instagram-btn"} text={"See more photos"} />
                </div>
            </div>
        </>
    )
}
