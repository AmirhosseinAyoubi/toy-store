import "./style.css"
import { Link } from "react-router-dom"


export default function CategoryCard({ category, image, name }) {


    return (
        <div className={`${category}`} data-aos="zoom-in"
            data-aos-duration="500">
            <div className={`${category}-img-container`}>
                <img className={`${category}-img`}
                    src={image}
                    alt="product" />
            </div>

            <div className={`${category}-content`}>
                <h2>{name}</h2>
                <Link to="/catalog"

                    className="btn-toys btn-product">Shop Now</Link >
            </div>

        </div>
    )
}
