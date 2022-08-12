import React from "react";
import Buttons from "../../components/button/Button";
import Navbars from "../../containers/header/Nav/Navbar";
import "./Corona-Acc.css";

const CoronaAcc = () => {
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
        <div>
          <div className="col-md-8 mx-auto text-center head-teg pb-5 bd">
            <h3 className="">Corona-Accepted</h3>
            <div className="pt-4 col-md-8 mx-auto">
              <img src="maner-cert.png" alt="" className="maner-img" />
            </div>
            <div className="d-flex justify-content-evenly py-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label className="form-check-label" for="flexCheckChecked">
                  No
                </label>
              </div>
            </div>
            <div>
              <Buttons
                onClick={() => {
                  handleClick();
                }}
                value={"Save & Close"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoronaAcc;
