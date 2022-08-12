import React from "react";
import Buttons from "../../../components/button/Button";
import Navbars from "../../../containers/header/Nav/Navbar";

import "./Challenges.css";

const Challenges = () => {
  const handleClick = (event) => {
    // event.preventDefault();
    alert("Button Clicked");
  };
  return (
    <>
    <div>
    <div><Navbars/></div>
      <div>
        <div className="col-md-8 mx-auto bd">
          <h2 className="text-center py-3">Challanges</h2>
          <div className="col-md-6 mx-auto pb-3">
            <img className="w-100" src="challenge.png" alt="" />
          </div>
          <div className="col-md-6 mx-auto descrip my-2">
            <div className="p-2 text-center">
              <h6 className="text-center">Description</h6>
              <p className="py-3 px-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vulputate nibh amet id mauris nec et, viverra cras. Odio a
                facilisis vulputate eget morbi molestie faucibus. Enim
                convallis. molestie faucibus. Enim convallis.
              </p>
            </div>
          </div>
          <div className="text-center btn-div">
            <Buttons
              onClick={() => {
                handleClick();
              }}
              value={"Sign In"}
            />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Challenges;
