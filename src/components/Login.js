import React from "react"
import { SocialIcon } from "react-social-icons";
import { Link } from 'react-router-dom'
import "./Login.css"

function Loginform() {
    const handleButton = (event) => {
        event.preventDefault()
        window.location.href = "/dashboard"
    }
    const SocialMediaIcon = () => (
        <div id="alternativeLogin">
            <label>Or sign in with</label>
            <div id="iconGroup">
                <SocialIcon
                    className="facebook" url="https://www.facebook.com/login/"
                />
                <SocialIcon
                    className="twitter" url="https://twitter.com/i/flow/login"
                />
                <SocialIcon
                    className="instagram" url="https://www.instagram.com/"
                />
            </div>
        </div>
    );
    return (
        <div className="container">
            <form className="loginform">
                <h1 className="headerTitle">Log In</h1>
                <div className="row">
                    <div><label htmlFor="username">Username:</label></div>
                    <div><input type="text" placeholder='Enter name here' id="username" name="name" /></div>
                    <div><label htmlFor="userpassword">Password:</label></div>
                    <div><input type="password" placeholder='Enter password here' id="userpassword" name="password" /></div>
                    <div className="button"><button id="button" onClick={handleButton}>login</button></div>
                </div>
                <SocialMediaIcon />
                <div className="signup">don't have an account?<Link className="link" to="/Signupform"><strong>Signup</strong></Link></div>
            </form >
        </div >
    )
}
export default Loginform;