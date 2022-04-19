import React from "react";
import "./Header.css";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleSignOut = (event) => {
    event.preventDefault();
    signOut(auth);
    toast("Signed out!");
  };

  return (
    <header className="sticky-top">
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
                className="me-1"
                alt=""
              />
              <span className="fs-6 fw-bold my-0">
                <span className="m-0">Independent PC</span>
                <br />
                Service Engineer
              </span>
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link text-dark menu-link" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark menu-link" to="/services">
                    Services
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
                {user ? (
                  <button
                    onClick={handleSignOut}
                    className="btn primary-button"
                  >
                    Sign out
                  </button>
                ) : (
                  <Link to="/login" className="btn primary-button">
                    Login
                  </Link>
                )}
              </form>
            </div>
          </div>
        </nav>
      </div>
      <ToastContainer />
    </header>
  );
};

export default Header;
