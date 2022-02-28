import React, { useState } from 'react'
import "../components/css/ContactUs.css";
import NavBar from '../components/NavBar';
import contactus from "../images/contactus.jpg"

const ContactUs = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message,setMessage] = useState("");
    const [username, setUsername] = useState("");

  return (
    <>
    <NavBar />
      <div className="container mt-5">
        <div className="signin-content">
          <div className="signin-image contactus-img">
            <figure>
              <img src={contactus} alt="Login pic" />
            </figure>
            {/* <NavLink to="/signup" className="nav-image-link">
              Create an Account
            </NavLink> */}
          </div>

          <div className="signin-form">
            <h2 className="form-title">Contact Us</h2>
            <form method="POST" className="register-form" id="register-form">
              <div className="form-group">
                <label className="l" htmlFor="username">
                  <i className="zmdi zmdi-account-circle material-icons-name"></i>
                </label>
                <input
                  className="inpt"
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Your Username"
                />
              </div>

              <div className="form-group">
                <label className="l" htmlFor="email">
                  <i className="zmdi zmdi-email material-icons-name"></i>
                </label>
                <input
                  className="inpt"
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                />
              </div>

              <div className="form-group">
                <label className="l" htmlFor="password">
                  <i className="zmdi zmdi-lock material-icons-name"></i>
                </label>
                <input
                  className="inpt"
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your Password"
                />
              </div>

              <div className="form-group">
                <label className="l" htmlFor="message">
                  <i className="zmdi zmdi-comment-text material-icons-name"></i>
                </label>
                <textarea
                  className="inpt"
                  type="text"
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type some message"
                />
              </div>

              <div className="form-group form-button">
                <input
                  type="submit"
                  name="contactus"
                  id="contactus"
                  className="form-submit"
                  value="Send Query"
                  //onClick={loginUser}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs