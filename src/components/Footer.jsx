import React from "react";

import Classes from "../Styles/Footer.module.css";

import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

function Footer() {
  return (
    <footer className={Classes.footerContainer}>
      <div className={Classes.footer}>
        <div className={Classes.socialLink}>
          <p>+8801305282768</p>
          <p>WeekenPlan@gmail.com</p>

          <a href="https://web.facebook.com/rahi680/">
            <img src={facebook} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/vaibhav-more-8b916124a/">
            <img src={linkedin} alt="" />
          </a>
          <a href="https://github.com/asfak00">
            <img src={github} alt="" />
          </a>
        </div>

        <div className={Classes.footerLogo}>
          <a href="#hero">
            <img
              src="https://st.depositphotos.com/1877361/3020/v/450/depositphotos_30204021-stock-illustration-alphabet-logo.jpg"
              alt=""
            />
            <p>
              Weekend <span>Planning</span>
            </p>
          </a>
        </div>

        <div className={Classes.footerInfo}>
          <h3>Explore the world from your inbox</h3>
          <p>
            let us inspire your next gateway with new destinations and special
            deals
          </p>

          <div>
            <input type="email" placeholder="email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
