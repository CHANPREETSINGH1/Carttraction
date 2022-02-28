import React, { useContext, useState } from "react";
import signpic from "../images/signup.svg";
import { NavLink } from "react-router-dom";
import { orderContext } from "./store/ContextApi";
import axios from "axios";
import base_url from "./service/BootApi";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const history = useHistory();
  const ctx = useContext(orderContext);

  let name, value;
  console.log(ctx.order);

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const registration = async (event) => {
    event.preventDefault();
    const { name, email, phone, password } = user;

    if (name && email && phone && password) {
      const res = await axios.post(`${base_url}/signup`, user);

      if (res.status === 400) {
        alert("Plz fill correct details");
      } else if (res.status === 200) {
        setUser({});
        alert("Registration Successful");
        history.push("/login");
      } else {
        alert("Bad Credential");
      }
    } else {
      alert("plz fill the data");
    }
  };
  return (
    <>
      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    className="inpt"
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    value={user.name}
                    onChange={handleInputs}
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input
                    className="inpt"
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                  </label>
                  <input
                    className="inpt"
                    type="number"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInputs}
                    placeholder="Your Phone"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    className="inpt"
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInputs}
                    placeholder="Your Password"
                  />
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    onClick={registration}
                    className="form-submit"
                    value="register"
                  />
                </div>
              </form>
            </div>

            <div className="signup-image">
              <figure>
                <img src={signpic} alt="registration pic" />
              </figure>
              <NavLink to="/login" className="nav-image-link">
                Already have an account
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
