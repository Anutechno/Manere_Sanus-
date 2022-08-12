import React from "react";
import Buttons from "../../components/button/Button";
import Navbars from "../../containers/header/Nav/Navbar";

import "./contact.css";

const Contact = () => {
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
        <div className="bd col-md-5 mx-auto my-4">
          <div>
            <h4 className="text-center">Write a message to Alex</h4>
            <div>
              <div>
                <div className="mb-3 d-flex justify-content-between pt-3 pb-2">
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="1 Ticket"
                  />
                  <span className="frm-span">
                    <img src="Vector.png" alt="" className="icon-imga"/>
                  </span>
                </div>
              </div>
              <div >
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Subject</option>
                  <option value="1">Courses</option>
                  <option value="2">Trainer</option>
                  <option value="3">I am ill</option>
                  <option value="3">Contract</option>
                  <option value="3">Others</option>
                </select>
                <div className="mb-3 d-flex justify-content-between pt-3 ">
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Add a file"
                  />
                  <span className="frm-span">
                    <img src="Vector3.png" alt="" className="icon-imga"/>
                  </span>
                </div>
                <div className="mb-3 d-flex justify-content-between">
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Enter your Message"
                  />
                  <span className="frm-span">
                    <img src="Vector2.png" alt="" className="icon-imga"/>
                  </span>
                </div>
              </div>
              <div className="text-center">
                <Buttons
                  onClick={() => {
                    handleClick();
                  }}
                  value={"Send"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
