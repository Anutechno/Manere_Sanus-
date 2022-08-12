import React from "react";
import Buttons from "../../components/button/Button";
import Navbars from "../../containers/header/Nav/Navbar";
import { FaAngleRight } from "react-icons/fa";

import "./profile.css";
import { Link } from "react-router-dom";

const Profile = () => {
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
        <div className="pb-3">
          <div className="col-md-5 mx-auto bd mt-5">
            <div className="text-center im-div">
              <img src="profile.png" alt="" className="profileimg" />
              <h3 className="pt-3">Profile Pic</h3>
            </div>
            <div>
              <div className="col-md-7 mx-auto py-5">
                <div className="cont-div py-1 px-2 d-flex justify-content-between">
                  <Link to="/edit-profile">
                    <p>Edit Profile</p>
                  </Link>
                  <span className="tpclr icon-s">
                    <FaAngleRight />
                  </span>
                </div>
                <div className="py-1 px-2 my-3 cont-div d-flex justify-content-between">
                  <p>Contact</p>
                  <span className="tpclr icon-s">
                    <FaAngleRight />
                  </span>
                </div>
                <div className="cont-div py-1 px-2 d-flex justify-content-between">
                  <p>History</p>
                  <span className="tpclr icon-s">
                    <FaAngleRight />
                  </span>
                </div>
              </div>
              <div className="text-center mb-3">
                <Buttons
                  onClick={() => {
                    handleClick();
                  }}
                  value={"Sign Up"}
                />
              </div>
              <div className="text-center">
                <Buttons
                  onClick={() => {
                    handleClick();
                  }}
                  value={"Sign Up"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
