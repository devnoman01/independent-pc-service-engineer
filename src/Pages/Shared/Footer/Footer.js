import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container footer">
        <div className="d-flex mx-auto text-center gap-2">
          <div className="col">
            <Link className="footer-link" to="/home">
              Home
            </Link>
          </div>
          <div className="col">
            <Link className="footer-link" to="/pricing">
              Pricing
            </Link>
          </div>
          <div className="col">
            <Link className="footer-link" to="/reviews">
              Reviews
            </Link>
          </div>
          <div className="col">
            <Link className="footer-link" to="/blog">
              Blogs
            </Link>
          </div>
          <div className="col">
            <Link className="footer-link" to="/about">
              About
            </Link>
          </div>
        </div>
        <div className="d-flex mx-auto text-center gap-2">
          <div className="col">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
