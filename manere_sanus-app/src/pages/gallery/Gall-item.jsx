import React from "react";
import "./gallery.css"
import GallImg from "./GallImg";

const GallItem = () => {
  return (
    <>
      <div>
        <div className="d-flex justify-content-around pt-3 fs-5 fw-bolder">
          <p>14 May, 2022</p>
          <p>Nodle Gym in Water</p>
        </div>
        <div className="img-gal text-center d-flex">
            <GallImg img1="./save.png"/>
            <GallImg img1="./save.png"/>
            <GallImg img1="./save.png"/>
            <GallImg img1="./save.png"/>
            <GallImg img1="./save.png"/>
        </div>
      </div>
    </>
  );
};

export default GallItem;
