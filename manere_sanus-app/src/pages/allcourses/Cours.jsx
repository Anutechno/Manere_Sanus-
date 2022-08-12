import React from "react";

import "./allcourses.css";
import CorCard from "./CorCard";

const Cours = () => {
  return (
    <>
      <div className="col-md-8 mx-auto pt-3">
        <div className="py-2 d-flex justify-content-between px-5">
          <h5 className="">MONDAY</h5>
          <h5 className="">2 Courses</h5>
        </div>
        <div className="d-flex justify-content-between">
          <CorCard />
          <CorCard />
        </div>
      </div>
    </>
  );
};

export default Cours;
