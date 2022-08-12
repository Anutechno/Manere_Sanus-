import React from "react";
import Buttons from "../../components/button/Button";
import Navbars from "../../containers/header/Nav/Navbar";
import ResponsiveDatePickers from "./Date";

import "./Reha.css";

const RehaVo = () => {
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
          <div className="col-md-9 mx-auto text-center pt-5 bd">
            <h2 className="pb-3">Reha - VO</h2>
            <div>
              <ResponsiveDatePickers />
            </div>
            <div className="pt-5">
              <Buttons
                onClick={() => {
                  handleClick();
                }}
                value={"Done"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RehaVo;
