import React, { useState } from 'react'
import "./style.css"

export default function Message() {

    const [inputs, setinputs] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [errors, seterrors] = useState({});

    const handleSubmit = () => {
        if (!inputs.name.trim()) {
            seterrors(errors =>({...errors,name: "name is required" }))
        }
        else {
            seterrors(errors =>({...errors,name: "" }))
            
        }
        if (!inputs.email.trim()) {
            seterrors(errors =>({...errors,email: "email is required" }))
            

        }
        else if (!/\S+@\S+\.\S+/.test(inputs.email.trim())) {
            seterrors(errors =>({...errors,email: "email is not valid" }))
            
        }
        else {
            seterrors(errors =>({...errors,email: "" }))

        }
        if (!inputs.message.trim()) {
            seterrors(errors =>({...errors,message: "message is required" }))
            

            
        }
        else {
            seterrors(errors =>({...errors,message: "" }))
          
        }
        console.log(errors)
    }
    const handleChange = (e) => {
        setinputs({ ...inputs, [e.target.name]: e.target.value })
    }


    return (
        <div className="message">
            <p>
                Leave a Message
            </p>
            <form >
                <div>
                    <label>Full Name
                    </label>
                    <input className={`email-input-field ${errors.name&& "error"}`} type="text"
                        placeholder="Enter your name" name="name"
                        onChange={(e) => handleChange(e)} />
                    <span>{errors.name && `* ${errors.name}`}</span>
                </div>
                <div>
                    <label>Email message
                    </label>
                    <input className={`email-input-field ${errors.email&& "error"}`} type="text"
                        placeholder="Your contact email" name="email"
                        onChange={(e) => handleChange(e)} />
                    <span>{errors.email && `* ${errors.email}`}</span>

                </div>
                <div>
                    <label >Message
                    </label>
                    <textarea className={`email-input-field text-input-field ${errors.message&& "error"}`}
                        placeholder="Message text..."
                        cols="30" rows="5" name="message"
                        onChange={(e) => handleChange(e)}>
                    </textarea>
                    <span>{errors.message && `* ${errors.message}`}</span>

                </div>
            </form>
            <button className="btn-toys message-btn" onClick={() => handleSubmit()}>Send Message</button>
        </div>
    )
}
