import React from "react";
import Footer from "../../containers/footer/Footer";
import Navbars from "../../containers/header/Nav/Navbar";

import "./history.css";

const UserHistory = () => {
  return (
    <>
      <div>
        <div>
          <Navbars />
        </div>
        <div className="col-md-8 mx-auto bd mt-4">
          <div>
            <h3 className="text-center">History</h3>
            <div className="d-flex justify-content-around">
              <Ticket tik={"Ticket#1"} Prog={"In Progess"} />
              <Ticket tik={"Ticket#2"} Prog={"Resolved"} />
            </div>
            <div className="d-flex justify-content-around">
              <Ticket tik={"Ticket#3"} Prog={"In Progess"} />
              <Ticket tik={"Ticket#4"} Prog={"Resolved"} />
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

export default UserHistory;

const Ticket = ({ tik, Prog }) => {
  return (
    <>
      <div className="col-md-5 ">
        <h6 className="pt-3">{tik}</h6>
        <div className="d-flex justify-content-between bx-sho p-3 br-rd">
          <div>
            <p className="p-bolt">Date</p>
            <p className="clr-gry ">02-02-2022</p>
            <button className="btn-tik">Open</button>
          </div>
          <div className="">
            <p className="p-bolt">Course</p>
            <p className="clr-gry">Swimming C...</p>
            <p className="prog">{Prog}</p>
          </div>
        </div>
      </div>
    </>
  );
};
