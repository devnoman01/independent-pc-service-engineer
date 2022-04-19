import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDribbble,
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer">
        <div className="d-flex mx-auto my-2 text-center gap-2">
          <div className="col">
            <Link className="footer-link" to="/home">
              Home
            </Link>
          </div>
          <div className="col">
            <Link className="footer-link" to="/services">
              Services
            </Link>
          </div>
          <div className="col">
            <Link className="footer-link" to="/reviews">
              Reviews
            </Link>
          </div>
          <div className="col">
            <Link className="footer-link" to="/blogs">
              Blogs
            </Link>
          </div>
          <div className="col">
            <Link className="footer-link" to="/about">
              About
            </Link>
          </div>
        </div>
        <div className="icon-row d-flex mx-auto text-center">
          <div className="col">
            <a target="_blank" href="https://www.facebook.com/">
              <FontAwesomeIcon className="footer-icon" icon={faFacebook} />
            </a>
          </div>
          <div className="col">
            <a target="_blank" href="https://instagram.com/">
              <FontAwesomeIcon className="footer-icon" icon={faInstagram} />
            </a>
          </div>
          <div className="col">
            <a target="_blank" href="https://twitter.com/">
              <FontAwesomeIcon className="footer-icon" icon={faTwitter} />
            </a>
          </div>
          <div className="col">
            <a target="_blank" href="https://github.com/">
              <FontAwesomeIcon className="footer-icon" icon={faGithub} />
            </a>
          </div>
          <div className="col">
            <a target="_blank" href="https://dribbble.com/">
              <FontAwesomeIcon className="footer-icon" icon={faDribbble} />
            </a>
          </div>
        </div>
        <div className="row text-center">
          <p className="footer-text">
            &copy; 2020 PC Hardware Man. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
