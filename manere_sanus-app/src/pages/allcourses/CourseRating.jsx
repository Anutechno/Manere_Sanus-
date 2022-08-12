import React from "react";
import { FaStar } from "react-icons/fa";
import Buttons from "../../components/button/Button";
import Footer from "../../containers/footer/Footer";
import Navbars from "../../containers/header/Nav/Navbar";
import "./allcourses.css";

const CourseRating = () => {
  const handleClick = (event) => {
    // event.preventDefault();
    alert("Button Clicked");
  };
  return (
    <>
      <div>
        <div className="">
          <Navbars />
        </div>
        <div className="col-md-6 mt-3 mx-auto bd">
          <div>
            <h3 className="text-center">Course Rating</h3>
          </div>
          <div>
            <div className="d-flex justify-content-between bx-sho cor-item">
              <div className="ps-4 py-2">
                <p className="fnt-bold">Date</p>
                <p className="cor-p">02.02.2022</p>
              </div>
              <div className="pe-3 py-2">
                <p className="fnt-bold">Course</p>
                <p className="cor-p">Swimming C...</p>
              </div>
            </div>
            <div className="d-flex justify-content-between cor-item bx-sho">
              <div className="ps-4 py-2">
                <p className="fnt-bold">General Course Rating?</p>
                <p className="cor-p">
                  (Rate the course from general point of view)
                </p>
              </div>
              <div className="pe-3 py-2"><Rating/></div>
            </div>
            <div className="d-flex justify-content-between cor-item bx-sho">
              <div className="ps-4 py-2">
                <p className="fnt-bold">Intensity OK?</p>
                <p className="cor-p">(Were you challanged?)</p>
              </div>
              <div className="pe-3 py-2"><Rating/></div>
            </div>
            <div className="d-flex justify-content-between cor-item bx-sho">
              <div className="ps-4 py-2">
                <p className="fnt-bold">Trainer Rating?</p>
                <p className="cor-p">(Rate the trainer in this training)</p>
              </div>
              <div className="pe-3 py-2"><Rating/></div>
            </div>
            <div className="d-flex justify-content-between cor-item bx-sho">
              <div className="ps-4 py-2">
                <p className="fnt-bold">New Exercise Included?</p>
                <p className="cor-p">(New Exercise Shown?)</p>
              </div>
              <div className="pe-3 py-2"><Rating/></div>
            </div>
            <div className="bx-sho cor-item">
              <p className="ps-3 pt-2 fw-bolder">Your Comment</p>
              <p className="px-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,
                sed id mauris arcu. Posuere non ornareLorem ipsum dolor sit
                amet, consectetur adipiscing elit. Lacus, sed id mauris arcu.
                Posuere non ornare
              </p>
            </div>
            <div className="text-center pt-3">
              <Buttons
                onClick={() => {
                  handleClick();
                }}
                value={"Send"}
              />
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
const Rating=()=>{
    return(
    <div className="d-flex rstar">
        <div><FaStar/></div>
        <div><FaStar/></div>
        <div><FaStar/></div>
        <div><FaStar/></div>
        <div><FaStar/></div>
    </div>
    )
}
export default CourseRating;
