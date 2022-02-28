import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import abt from "../images/abt4.jpg";
import "./css/AboutUs.css";
import NavBar from "./NavBar";

const AboutUs = () => {
  const [rmore, setRmore] = useState(false);
  const [btn, setBtn] = useState(true);
  return (
    <>
      <NavBar />
      <div className="about-section">
        <div className="about-container">
          <div className="content-section">
            <div className="title">
              <h1>About Us</h1>
            </div>
            <div className="content">
              <h3>
                Hello!! Welcome to the Carttraction.We are glad that you are
                here...
              </h3>
              <p>
                we provide you the best of the products. We are sourcing ,buying
                unique deals from all over the world and selling directly to
                you.
                {rmore ? (
                  <p>
                    WE SHARE WE COLLECT WE PROVIDE FOR WHAT YOU WILL LOVE. We
                    like to keep things simple. Order it online
                  </p>
                ) : null}
              </p>

              {btn ? (
                <div className="button">
                  <a
                    href="#"
                    onClick={() => {
                      setRmore(true);
                      setBtn(false);
                    }}
                  >
                    Read More
                  </a>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="social-sites">
              <FacebookIcon className="social-icon" />
              <InstagramIcon className="social-icon" />
              <TwitterIcon className="social-icon" />
            </div>
          </div>
        </div>
        <div className="aboutus-image">
          <img src={abt} alt="About Us Image" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
