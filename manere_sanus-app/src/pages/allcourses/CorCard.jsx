import React from "react";
import { Link } from "react-router-dom";

import "./allcourses.css";

const CorCard = () => {
  return (
    <>
      <div className="col-md-5 bd">
        <div>
          <div className="d-flex justify-content-between cor-rat">
            <Link to="/course-rating">
            <h5 className="py-2 px-2">Bauch-Rücken-Gymnastik</h5>
            </Link>
            <i></i>
          </div>
          <div className="d-flex">
            <div className="col-md-4">
              <img src="save.png" alt="" className="cimg"/>
            </div>
            <div className="col-md-8">
              <p className="">
                MO, 18:00 Uhr <span className="tpclr"> Volmerdingsen</span>
              </p>
              <div className="d-flex justify-content-between py-3">
                <div className="">
                  <img src="profile.png" alt="" className="ag-img me-2" />
                  <span>Agnes</span>
                </div>
                <span>4 Pkt.</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="s-btn ylw me-2">3 Places Free</button>
          <button className="s-btn lgrn">Signed In</button>
        </div>
      </div>
    </>
  );
};

export default CorCard;
