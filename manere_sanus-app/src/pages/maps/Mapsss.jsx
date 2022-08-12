import React from "react";
import Footer from "../../containers/footer/Footer";
import Navbars from "../../containers/header/Nav/Navbar";
import Maps from "../trainee/Map";

const Mapsss = () => {
  return (
    <>
      <div>
        <div>
          <Navbars />
        </div>
        <div>
          <Maps />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Mapsss;
