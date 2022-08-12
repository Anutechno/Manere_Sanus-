import React from "react";
import Navbars from "../../../containers/header/Nav/Navbar";

import "./course.css";
import InputForm from "./InputForm";

const CoursePanel = () => {
  return (
    <>
      <div>
        <div>
          <Navbars />
        </div>
        <div className="col-md-9 mx-auto bd">
          <h3 className="text-center pt-5 pb-3">Course Panel</h3>
          <div className="col-md-6 mx-auto pb-3">
            <img className="w-100" src="save.png" alt="" />
          </div>
          <div>
            <InputForm />
          </div>
          <div className="py-5">
            <div className="col-md-11 mx-auto my-2 d-flex justify-content-evenly">
              <div className="p-2 descrip col-md-5">
                <h6 className="">Remark to Course</h6>
                <p className="py-3 px-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vulputate nibh amet id mauris nec et, viverra cras. Odio a
                  facilisis vulputate eget morbi molestie faucibus. Enim
                  convallis. molestie faucibus. Enim convallis.
                </p>
              </div>

              <div className="p-2 descrip col-md-5">
                <h6 className="">Bauch-Rücken-Gymnastik</h6>
                <p className="py-3 px-1">
                  Diese Sanfte aber sehr wirkungsvolle ganzheitche
                  Ganzkorpetraining ermoglicht Kraftigung des gesamten Korpers
                  ohne die Gelenke zu sehr zu belasten.
                </p>
              </div>
            </div>
            <div className="col-md-11 pt-2 mx-auto my-2 d-flex justify-content-evenly">
              <div className="p-2 descrip col-md-5">
                <h6 className="">Trainee Message</h6>
                <p className="py-3 px-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vulputate nibh amet id mauris nec et, viverra cras. Odio a
                  facilisis vulputate eget morbi molestie faucibus. Enim
                  convallis. molestie faucibus. Enim convallis.
                </p>
              </div>

              <div className="p-2 descrip col-md-5">
                <h6 className="text-center">Description</h6>
                <p className="py-3 px-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vulputate nibh amet id mauris nec et, viverra cras. Odio a
                  facilisis vulputate eget morbi molestie faucibus. Enim
                  convallis. molestie faucibus. Enim convallis.
                </p>
              </div>
            </div>
            <div className="col-md-10 lh-lg pt-2 mx-auto">
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Lacus, sed id mauris arcu. Posuere non ornare
                  <li>
                    viverra magna eu. Elementum lacinia porta tellus vel pretium
                    augue sed sagittis. Faucibus posuere diam
                  </li>
                  <li>
                    ut amet malesuada vulputate consectetur egestas amet.
                    Elementum nam malesuada feugiat neque, pellentesque et nulla
                    hendrerit ornare.
                  </li>
                  <li>
                    Tellus consectetur id erat vulputate tristique dictum sed.
                    Ipsum magna morbi in quam turpis. A eget erat ut leo netus
                    at elit nunc.
                  </li>
                  <li>
                    Et sit nunc lorem ac enim lacus arcu. Sollicitudin nunc
                    gravida non duis nisi placerat.
                  </li>
                  <li>
                    Nam maecenas elit sem ut id adipiscing etiam dui senectus.
                    Arcu, non malesuada consectetur dis.
                  </li>
                  <li>
                    Vel posuere habitant ornare et sit habitant rhoncus dolor.
                    Metus sed aliquam volutpat nunc feugiat consectetur. Nisi
                    consectetur lectus in.
                  </li>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursePanel;
