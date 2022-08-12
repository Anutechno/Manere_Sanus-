import React from "react";
import Footer from "../../containers/footer/Footer";
import Navbars from "../../containers/header/Nav/Navbar";

import "./allcourses.css";
import Cours from "./Cours";

const AllCourses = () => {
  return (
    <>
      <div>
        <div>
          <div>
            <Navbars />
          </div>
          <div>
            <h3 className="text-center py-4">All Courses</h3>
            <Cours />
            <Cours />
            <Cours />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCourses;
