import React from "react";
import Navbars from "../../containers/header/Nav/Navbar";
import Footer from "../../containers/footer/Footer";

import { FaPlus } from "react-icons/fa";

import "./trainee.css";
import ButtonComp from "../../components/ButtonComp";
const Participant = () => {
  return (
    <div>
      <div>
        <div>
          <Navbars />
        </div>
        <div className="col-md-8 mx-auto bd">
          <h2 className="text-center pb-4">Participants</h2>
          <div className="col-md-6 mx-auto mb-4 py-3 px-3 bx-sho">
            <h4 className="pb-4">NEXT COURSE</h4>
            <div className="d-flex justify-content-between">
              <p>Mo, 22.03.2022 | 18:00 Uhr Faszien- Yoga in Volumerdingsen </p>
              <p>12/15 TL</p>
            </div>
          </div>
          <div className="pb-3">
            <ButtonComp teg={"Hide Participants"} />
          </div>
          <div className="col-md-6 mx-auto py-3 bx-sho pt-3 px-3">
            <p>Lastname, Firstname, Points (x Pkt.) </p>
            <div className="d-flex justify-content-between">
              <p>
                <input
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                  className="me-2"
                />
                Signed In{" "}
              </p>
              <p>Check In</p>
            </div>
          </div>
          <div className="col-md-6 mx-auto py-3 bx-sho px-3">
            <p>Lastname, Firstname, Points (x Pkt.) </p>
            <div className="d-flex justify-content-between">
              <p>
                <input
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                  className="me-2"
                />
                Signed In{" "}
              </p>
              <p>Check In</p>
            </div>
          </div>
          <div className="col-md-6 mx-auto py-3 bx-sho px-3">
            <p>Lastname, Firstname, Points (x Pkt.) </p>
            <div className="d-flex justify-content-between">
              <p>
                <input
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                  className="me-2"
                />
                Signed In{" "}
              </p>
              <p>Check In</p>
            </div>
          </div>
          <div className="col-md-6 mx-auto py-3 bx-sho px-3">
            <p>Lastname, Firstname, Points (x Pkt.) </p>
            <div className="d-flex justify-content-between">
              <p>
                <input
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                  className="me-2"
                />
                Signed In{" "}
              </p>
              <p>Check In</p>
            </div>
          </div>
          <div className="col-md-6 mx-auto py-3 bx-sho px-3">
            <p>Lastname, Firstname, Points (x Pkt.) </p>
            <div className="d-flex justify-content-between">
              <p>
                <input
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                  className="me-2"
                />
                Signed In{" "}
              </p>
              <p>Check In</p>
            </div>
          </div>
          <div className="bx-sho col-md-6 mx-auto py-3 px-3">
            <div className="d-flex justify-content-between">
              <h5>Additional Participant</h5>
              <p className="tpclr fw-bolder">ADD MORE +</p>
            </div>
            <div className="d-flex justify-content-between pt-3">
              <div>
                <input
                  type="text"
                  placeholder="Search for TL"
                  className="searcht"
                />
              </div>
              <div className="d-flex">
                <input
                  type="checkbox"
                  id=""
                  name=""
                  value=""
                  className="me-2 mb-3"
                />
                <p className="check-two">Check In</p>
              </div>
            </div>
            <h5 className="py-4">Course Notification</h5>
            <div className="bx-sho px-3 py-3">
              <div>
                <p className="meus">Message to Users</p>
                <p>Add a Note</p>
              </div>
              <div className="text-end">
                <p className="tpclr fw-bolder">SEND</p>
              </div>
            </div>
            <div className="bx-sho px-3 mt-3 py-3">
              <div>
                <p className="meus">Message to Users</p>
                <p>Add a Note</p>
              </div>
              <div className="text-end">
                <p className="tpclr fw-bolder">SEND</p>
              </div>
            </div>
            <div className="bx-sho mt-3 px-3 py-3">
              <div>
                <h4>Photo Gallery</h4>
              </div>
              <div className="d-flex">
                <div className="pt-gl">
                  <img src="./uniti.png" alt="" />
                </div>
                <div className="pt-gl tpclr">
                  <FaPlus />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-5">
            <ButtonComp teg={"Save"} />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Participant;
