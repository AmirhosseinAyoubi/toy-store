import React, { useState } from 'react'
import "./style.css"
export default function Subscribe() {
    const [emailInput, setemailInput] = useState("");
    const [error, seterror] = useState("");


    const changeHandler = (e) => {
        setemailInput(e.target.value)
    }
    const onSubmit = () => {
        if (!/\S+@\S+\.\S+/.test(emailInput)) {
            seterror("email is not valid")

        }
        else {
            seterror("")
        }

    }




    return (
        <div className="email" data-aos="zoom-in"
            data-aos-duration="700">
            <div className="subscribe">
                <div>
                    <img
                        src="https://assets.website-files.com/5badda2935e11303a89a461e/5baf56dcace69cfd39b34f7a_paperplane-icon-white.svg"
                        alt="" />
                </div>
                <p>
                    Subscribe to our newsletter
                    & get <span className="g-color"> 10% discount!</span>
                </p>
            </div>
            <div className="email-input">
                <div className="input-container">
                    <input className="email-input-field"
                        type="email"
                        placeholder="Enter your email address"
                        value={emailInput}
                        onChange={(e) => changeHandler(e)}

                    />
                    <span className="email-error">{error && `* ${error} !`}</span>
                </div>

                <button className="btn-toys subscribe-btn" onClick={onSubmit}>Subscribe</button>
            </div>
        </div>
    )
}
