import React from "react";

const Register = () => {
  return (
    <div>
      <div className="container">
        <div className="row mt-3 px-3">
          <h1 className="text-center my-4">Please Register</h1>
          <div className="form-div">
            <form>
              <div className="mb-2">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="w-100 d-flex justify-content-center">
                <input
                  type="submit"
                  className="btn px-3 my-3 primary-button"
                  value="Register"
                />
              </div>
            </form>
          </div>
          <div className="d-flex">
            <div className="w-50 border-top mt-3 p-0"></div>
            <p className="px-3 mt-1">or</p>
            <div className="w-50 border-top mt-3 p-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
