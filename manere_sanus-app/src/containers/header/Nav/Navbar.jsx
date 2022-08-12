import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Navbars() {
  return (
    <nav className="navbar navbar-expand-lg pclr">
      <div className="container-fluid">
        <img src="blblogo.png" className="logo" alt="" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active txtw" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link txtw" to="/all-trainers ">
                All Trainers
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link txtw" to="/gallery ">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link txtw" to="/news-panel ">
                News Panel
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link txtw" to="/all-courses ">
                All Courses
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle txtw"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Trainer
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/trainer ">
                    Trainer
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/my-courses ">
                    My Courses
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/my-history ">
                    My History
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/participant ">
                    Participant
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/my-licenses ">
                    My Licenses
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/training-times ">
                    My Possible Training Times
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle txtw"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Panel One
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/turm-condition ">
                    Turm Condition
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/challenges">
                    Challenges
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/corona-accepted ">
                    Corona Accepted
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/reha-vo ">
                    Reha-Vo
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/course-detail ">
                    Courses detail
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/places-training ">
                    Places Training
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/user-history">
                    User History
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle txtw"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Panal Two
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/profile ">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/contact ">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/sign-up">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/forgot-password">
                    Forgot Password
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/reset-password">
                    Reset Password
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Admin
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/course-panel">
                    Course-Panel
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/contact-process">
                    Contact Process
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/contact-resolve">
                    Contact Resolve
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/contact-admin">
                    Contact Admin
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/map">
                    Maps
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <div className=" proimg d-flex pclr justify-content-between">
                <div>
                  <h6 className="wfnt pt-2 pe-2">Hello Julia!</h6>
                </div>
                <div className="d-flex">
                  <div className="">
                    <img src="Profile1.png" alt="" />
                  </div>
                  {/* <div className="">
                    <img src="Vector4.png" alt="" />
                  </div> */}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbars;
