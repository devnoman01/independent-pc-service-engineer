import React from "react";
import Footer from "../Footer/Footer";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="">
      <div className="container not-found-div d-flex flex-column align-items-center">
        <h1 className="error-404 text-center">404</h1>
        <h1 className="error-message text-center">Page Not Found</h1>
        <p className="text-message text-center">
          Please try to find pages from menubar
        </p>
      </div>
      <div className="fixed-bottom">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default NotFound;
