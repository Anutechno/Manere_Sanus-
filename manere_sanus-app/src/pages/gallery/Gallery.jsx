import React from "react";
import Footer from "../../containers/footer/Footer";
import Navbars from "../../containers/header/Nav/Navbar";
import GallItem from "./Gall-item";

import "./gallery.css";

const Gallery = () => {
  return (
    <div>
      <div>
        <Navbars />
      </div>
      <div>
        <div>
          <h2 className="pg pt-3">Gallery</h2>
        </div>
        <div className="col-md-10 mx-auto bd">
          <h3 className="text-center">Swimming Course</h3>
          <div className="gal-item">
            <GallItem />
            <GallItem />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Gallery;
