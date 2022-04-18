import React from "react";
import "./Header.css";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light py-3">
          <div className="container-fluid">
            <Link
              className="navbar-brand d-flex align-items-center gap-1"
              to="/"
            >
              <img
                style={{ width: "36px", height: "36px" }}
                src={logo}
                className="me-3"
                alt=""
              />
              <span className="fs-3 fw-bold"></span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link text-dark menu-link" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark menu-link" to="/projects">
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark menu-link" to="/blogs">
                    Blogs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark menu-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
              <form className="">
                <Link to="/login" className="btn primary-button">
                  Login
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
