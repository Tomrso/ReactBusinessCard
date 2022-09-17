import React from "react"

export default function Info() {
    return (
        <div>
            <div>
                <img src="./images/profile-pic" className="info--image"/>
            </div>
            <div className="info">
                <h1>Tom Wilson</h1>
                <h2 className="info_title">Full Stack Developer</h2>
            </div>
            <div className="info--email_button_wrapper">
                <a href="mailto:thomas.wilson98@hotmail.com" className="info--email_button">
                    <i className="fa-solid fa-envelope info-email_content"></i>
                    <p className="info-email_content">Email</p>
                </a>
            </div>
        </div>
    )
}