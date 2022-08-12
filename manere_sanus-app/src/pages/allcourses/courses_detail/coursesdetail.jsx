import React from "react";
import Buttons from "../../../components/button/Button";
import Footer from "../../../containers/footer/Footer";
import Navbars from "../../../containers/header/Nav/Navbar";

import "../allcourses.css";

const Coursesdetail = () => {
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
          <div className="col-md-6 mx-auto bd">
            <div className="mx-5">
              <h3 className="text-center">Courses detail</h3>
              <div>
                <h4 className="py-3">Bauch-Rücken-Gymnastik</h4>
                <div className="d-flex justify-content-between point">
                  <p>Points</p>
                  <span>4 PKT.</span>
                </div>
                <div className="text-end minut">
                  <p>Time join for 12 minutes Left </p>
                </div>
                <div>
                  <p className="tpclr hours">
                    NOTE: Only 48 hours more left, if you leave the course
                    points will be deduncted.
                  </p>
                </div>
                <div>
                  <div className="d-flex justify-content-between reason">
                    <p>Reason</p>
                    <img src="vec.png" alt="" className="vec" />
                  </div>
                  <div className="d-flex justify-content-between imgwrk">
                    <p>
                      I have come to the important work, I will not be able to
                      come
                    </p>
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Buttons
                  onClick={() => {
                    handleClick();
                  }}
                  value={"Sign Out"}
                />
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

export default Coursesdetail;
