import React from "react";
import Navbars from "../../containers/header/Nav/Navbar";
import Footer from "../../containers/footer/Footer";

import "./trainee.css";
import ButtonComp from "../../components/ButtonComp";
const MyHistory = () => {
  return (
    <div>
      <div>
        <div>
          <Navbars />
        </div>
        <div className="col-md-8 mx-auto bd">
            <h4 className="text-center py-4">My History Courses</h4>
          <div className="bx-sho todayon col-md-6 mx-auto">
            <h6>TODAY</h6>
            <div className="d-flex justify-content-between">
              <p>Mp, 18:00 Uhr in Volmerdingsen</p>
              <p className="tpclr">MORE</p>
            </div>
          </div>
          <div className="itembtn">
            <ButtonComp teg={"My Courses"} />
            <ButtonComp teg={"My Licenses"} />
            <ButtonComp teg={"My Possible Training Times"} />
            <ButtonComp teg={"Vacations"} />
            <ButtonComp teg={"Gallery"} />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MyHistory;
