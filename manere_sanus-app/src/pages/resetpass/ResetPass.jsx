import React from "react";
import Form from "react-bootstrap/Form";
import Buttons from "../../components/button/Button";
import Navbars from "../../containers/header/Nav/Navbar";

import "./ResetPass.css";

const ResetPass = () => {
  const handleClick = (event) => {
    // event.preventDefault();
    alert("Button Clicked");
  };
  return (
    <>
      <div>
        <div>
          <Navbars />{" "}
        </div>
        <div className="col-md-4 mx-auto main-div bd">
          <div>
            <h3 className="text-center mb-4">RESET PASSWORD</h3>
            <p className="text-center clr-em">
              Enter the new password and confirm password to reset.
            </p>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="password" placeholder="New Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <div className="text-center mt-4">
              <Buttons
                onClick={() => {
                  handleClick();
                }}
                value={"Save"}
              />
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ResetPass;
