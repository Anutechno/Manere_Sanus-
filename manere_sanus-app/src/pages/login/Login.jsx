import React from "react";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Buttons from "../../components/button/Button";
import Navbars from "../../containers/header/Nav/Navbar";
import "./Login.css";

const Login = () => {
  const handleClick = (event) => {
    // event.preventDefault();
    alert("Button Clicked");
  };
  return (
    <>
      <div>
        <div>
          <Navbars />
        </div>
        <div className="col-md-4 mx-auto main-div bd">
          <h3 className="text-center log-pad pb-3">LOGIN!</h3>
          <Form>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              {/* <label className="userId">User ID</label> */}
              <Form.Control type="email" placeholder="Email"/>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Enter a Password" />
              <p className="text-end">Forgot Password?</p>
            </Form.Group>
            <div className="text-center">
              <Buttons
                onClick={() => {
                  handleClick();
                }}
                value={"Sign In"}
              />
            </div>
          </Form>
          <div className="text-center mt-4">
            <p className="last-p">
              Don’t have an account?{" "}
              <Link to="" className="tpclr">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
