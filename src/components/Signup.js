import React from "react"
import { Link } from 'react-router-dom'
import "./Signup.css"

function Signupform() {
  const handleButton = e => {
    alert("successfully submitted");
    e.preventDefault();
  }

  return (
    <div className="signupContainer">
      <div className="signupForm">
        <h1 className="signupHeadTitle">Sign Up</h1>
        <form className="formev" onSubmit={handleButton}>
          <div><label htmlFor="fname">FullName: </label></div>
          <div ><input className="shadow" type="text" placeholder='Enter your fullname' id="fullname" required /></div>
          <div><label htmlFor="password">Password: </label></div>
          <div ><input className="shadow" type="password" placeholder='Enter your password' id="password" required /></div>
          <div><label htmlFor="phonenumber">PhoneNumber: </label></div>
          <div ><input className="shadow" type="number" placeholder='Enter mobile number' required /></div>
          <div><label htmlFor="email">Email: </label></div>
          <div ><input className="shadow" type="email" placeholder='E.g.: John@gmail.com' id="email" required /></div>
          <div><label htmlFor="DateOfBirth">DateOfBirth: </label></div>
          <div><input type="date" id="DateOfBirth" required /></div>
          <div>
            <div><label htmlFor="gender">Gender:</label>
              <input type="radio" name="Gender" />Male
              <input type="radio" name="Gender" />Female
              <input type="radio" name="Gender" />Other
            </div>
          </div>
          <div><button type='submit'>Submit</button></div>
          <div className="loginlink">Already have a username?<Link className="link" to="/Loginform"> <strong>Login</strong></Link></div>
        </form>
      </div>
    </div >
  )
}

export default Signupform;