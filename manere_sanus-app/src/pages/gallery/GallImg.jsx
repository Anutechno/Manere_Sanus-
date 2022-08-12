import React from "react";

import "./gallery.css";

const GallImg = ({img1}) => {
  return (
    <>
      <div className="">
          <img src={img1} alt="" className="galimg" />
      </div>
    </>
  );
};

export default GallImg;
