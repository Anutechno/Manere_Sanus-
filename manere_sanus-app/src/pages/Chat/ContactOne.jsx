import React from "react";
import Navbars from "../../containers/header/Nav/Navbar";
import Footer from "../../containers/footer/Footer";
import TextField from "@mui/material/TextField";

import "./contacts.css";

const ContactOne = () => {
  return (
    <>
      <div>
        <div>
          <Navbars />
        </div>
        <div className="col-md-9 mx-auto my-4 py-3">
          <h3 className="text-center pb-2">Write a message to Alex</h3>
          <div className="bd">
            <div className="text-fr pt-4">
              <TextField
                id="outlined-basic"
                label="Courses"
                variant="outlined"
              />
              <p className="text-end pt-2 fw-bold">Ticket#1 from 22.04.2022</p>
            </div>
            <div className="">
              <div className="col-md-4 bx-sho">
                <p className="alx">
                  Hi Alex . i need the formular for the contract can you send it
                  to me
                </p>
              </div>
              <div className="text-center col-md-4 dv-end m-end float-end mb-4">
                <p className="bx-sho juli">
                  Hi julia sure will send it to you here.
                </p>
                <p className="bx-sho hijuli">Hi julia</p>
              </div>
              <div class="">
                <input
                  type="file"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Add a file"
                />
              </div>
              <div class="my-4">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Enter your Message"
                />
              </div>
              <div className="text-center mb-3">
                <button className="btn-sed btsm">Send</button>
              </div>
              <div className="text-center">
                <button className="btn-re btsm">Resolved</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ContactOne;
