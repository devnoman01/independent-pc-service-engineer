import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import "./SocialLogin.css";
import google from "../../../images/social/google-logo.png";
import github from "../../../images/social/github-logo.png";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  return (
    <div>
      <div className="d-flex">
        <div className="w-50 border-top mt-3 p-0"></div>
        <p className="px-3 mt-1">or</p>
        <div className="w-50 border-top mt-3 p-0"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn border border-2 w-100 d-flex align-items-center justify-content-center gap-2 mx-auto my-3 social-login-button"
        >
          <img style={{ width: "30px" }} className="" src={google} alt="" />
          Continue with Google
        </button>
        {/* <button
          //   onClick={() => signInWithGithub()}
          className="btn border border-2 w-100 d-flex align-items-center justify-content-center gap-2 mx-auto my-3 social-login-button"
        >
          <img style={{ width: "30px" }} className="" src={github} alt="" />
          Continue with Github
        </button> */}
      </div>
    </div>
  );
};

export default SocialLogin;
