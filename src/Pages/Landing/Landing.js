import React, { useEffect } from 'react'
import Banner from '../../Components/Banner/Banner'
import Border from '../../Components/Border/Border'
import Button from '../../Components/Button/Button'
import CategoryCards from '../../Components/CategoryCards/CategoryCards'
import InstagramLinks from '../../Components/InstagramLinks/InstagramLinks'
import Intro from '../../Components/Intro/Intro'
import IntroCard from '../../Components/IntroCard/IntroCard'
import Products from '../../Components/Products/Products'
import Subscribe from '../../Components/Subscribe/Subscribe'
import Video from '../../Components/Video/Video'
import "./style.css"
export default function Landing() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <>
            <Banner />
            <div className="product">
                <div className="container-lg">
                    <CategoryCards />
                    <Border title={"Stuffed Animals"} />
                    <Products number={4} category={"stuffed"} />
                    <Border title={"Stuffed Animals"} />
                    <Products number={4} category={"wooden"} />
                </div>
            </div>
            <Video />
            <div className="container-lg">
                <Intro text={"Simple & Colorful Ecommerce Template for Your Business"} title={"Made for Webflow"} />
                <IntroCard
                    image={"https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77ee73150e2021b0db4_side-image-01-p-1080.jpeg"}
                    title={"Available for FREE!"}
                    desc={"A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy"}
                />
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
