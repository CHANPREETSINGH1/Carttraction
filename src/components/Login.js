import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import base_url from "./service/BootApi";
import { useHistory } from "react-router-dom";

import loginPic from "../images/login.svg";
import { orderContext } from "./store/ContextApi";

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const ctx = useContext(orderContext);
  console.log(ctx);
  let name, value;
  const handleInput = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const loginUser = async (e) => {
    console.log(e);
    e.preventDefault();
    const { username, password } = user;

    if (username && password) {
      const res = await axios.post(`${base_url}/login`, user);
      console.log(user);
      if(res.status===400){
        alert("Bad Credentials")
      }
      if (res.status===200) {
        setUser({});

        alert("Login Successful");
        history.push("/home");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("Bad Credential");
    }
  };
  return (
    <>
      <section className="sign-in">
        <div className="container mt-5">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src={loginPic} alt="Login pic" />
              </figure>
              <NavLink to="/" className="nav-image-link">
                Create an Account
              </NavLink>
            </div>

            <div className="signin-form">
              <h2 className="form-title">Sign in</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label className="l" htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input
                    className="inpt"
                    type="email"
                    name="username"
                    id="email"
                    autoComplete="off"
                    value={user.username}
                    onChange={handleInput}
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
                    value={user.password}
                    onChange={handleInput}
                    placeholder="Your Password"
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Log In"
                    onClick={loginUser}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
