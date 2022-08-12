import React from "react";
import Navbars from "../../containers/header/Nav/Navbar";
import Footer from "../../containers/footer/Footer";

import "./trainee.css";
import ButtonComp from "../../components/ButtonComp";

const MyCourses = () => {
  return (
    <>
      <div>
        <div>
          <Navbars />
        </div>
        <div className="col-md-8 mx-auto bd">
          <h3 className="text-center pb-3">My Courses</h3>
          <div>
            <DivCont day={"TODAY"} />
            <DivCont day={"NEXT COURSE"} />
            <DivCont day={"TODAY"} />
            <DivCont day={"NEXT COURSE"} />
            </div>
            <div className="text-center"><button className="close pclr">Close</button></div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MyCourses;

const DivCont = ({ day }) => {
  return (
    <>
      <div className="days bx-sho col-md-8 mx-auto mb-5">
        <div>
          <h6 className="ms-4">{day}</h6>
          <div className="d-flex justify-content-around">
            <p className="p-day">Mo, 22.03.2022 | 18:00 Uhr Faszien- Yoga in Volumerdingsen</p>
            <p>12/15 TL</p>
          </div>
        </div>
        <div>
          <ButtonComp teg={"See Participants"} />
        </div>
      </div>
    </>
  );
};
