import React from "react";
import Form from "react-bootstrap/Form";
import Buttons from "../../components/button/Button";
import Navbars from "../../containers/header/Nav/Navbar";

import "./ForgotPass.css";

const ForgotPass = () => {
  const handleClick = (event) => {
    // event.preventDefault();
    alert("Button Clicked");
  };
  return (
    <>
    <div>
    <div><Navbars/> </div>
      <div className="col-md-4 mx-auto main-div bd">
        <div>
          <h3 className="text-center mb-4">FORGOT PASSOWRD?</h3>
          <p className="text-center clr-em">Enter the Email Address to receive the reset passsword link.</p>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* <label className="userId">Email</label> */}
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          <div className="text-center mt-4">
            <Buttons
              onClick={() => {
                handleClick();
              }}
              value={"Submit"}
            />
          </div>
        </Form>
      </div>
      </div>
    </>
  );
};

export default ForgotPass;
