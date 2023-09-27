import React from "react";
import logoImage from "../assets/LogoImg.png";
import instaLogo from "../assets/social media/FacebookLogo.png";
import tweeterLogo from "../assets/social media/InstagramLogo.png";
import facebookLogo from "../assets/social media/PinterestLogo.png";
import pentrestLogo from "../assets/social media/TwitterLogo.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerleft}>
        <img src={logoImage} alt="Company Logo" />
      </div>
      <div className={styles.footermiddle}>
        <ul>
          <li>Home</li>
          <li>Attorneys</li>
          <li>Practice Areas</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className={styles.footerright}>
        <a href="#">
          <img src={instaLogo} alt="Instagram" />
        </a>
        <a href="#">
          <img src={facebookLogo} alt="Facebook" />
        </a>
        <a href="#">
          <img src={tweeterLogo} alt="twitter" />
        </a>
        <a href="#">
          <img src={pentrestLogo} alt="pinterest" />
        </a>
      </div>
      <div className={styles.footercompanydetails}>
        <p>@2020 Acme. All right reserved. </p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;