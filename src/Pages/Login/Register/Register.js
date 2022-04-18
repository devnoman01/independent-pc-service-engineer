import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import SocialLogin from "../SocialLogin/SocialLogin";
import auth from "../../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  let errorElement;

  const handleRegister = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await createUserWithEmailAndPassword(email, password);
    navigate("/home");
    // toast("Registration complete");
  };

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  return (
    <div>
      <div className="container">
        <div className="row form-div mt-3 px-3">
          <h1 className="text-center my-4">Please Register</h1>
          <div className="">
            <form onSubmit={handleRegister}>
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
                  ref={passwordRef}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  required
                />
              </div>
              <div>
                <input
                  onClick={() => setAgree(!agree)}
                  className="me-2"
                  type="checkbox"
                  name="terms"
                  id="terms"
                />
                <label
                  className={agree ? "text-primary" : "text-danger"}
                  htmlFor="terms"
                >
                  Accept Terms and Conditions
                </label>
              </div>
              {errorElement}
              <div className="w-100 d-flex justify-content-center">
                <input
                  disabled={!agree}
                  className={`${
                    !agree ? "primary-button" : "primary-button"
                  } btn px-3 my-3`}
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
            <div>
              <p className="my-1">
                Already registered?{""}
                <Link
                  to="/login"
                  className="btn text-primary text-decoration-none btn-link"
                >
                  Login Here
                </Link>
              </p>
            </div>
          </div>
          <SocialLogin></SocialLogin>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Register;
