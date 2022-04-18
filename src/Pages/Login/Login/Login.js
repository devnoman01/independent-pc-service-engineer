import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/home";
  let errorElement;

  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(emailRef.current.value);
      toast("Sent Mail");
    } else {
      toast("Please Enter Your Email Address");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row mt-3 px-3 form-div">
          <h1 className="text-center my-4">Please Login</h1>
          <div className="form-div">
            <form onSubmit={handleLogin}>
              <div className="mb-2">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  ref={emailRef}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  required
                />
              </div>
              {errorElement}
              <div className="w-100 d-flex justify-content-center">
                <input
                  type="submit"
                  className="btn px-3 my-3 primary-button"
                  value="Login"
                />
              </div>
            </form>
            <div>
              <p className="my-1">
                New user?{""}
                <Link
                  to="/register"
                  className="btn text-primary text-decoration-none btn-link"
                >
                  Register Here
                </Link>
              </p>
              <p className="my-1">
                Forgot Password?{""}
                <button
                  onClick={resetPassword}
                  className="btn text-primary mx-1 text-decoration-none btn-link"
                >
                  Reset Password
                </button>
              </p>
            </div>
          </div>
          <div>
            <SocialLogin></SocialLogin>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
