import React from "react";
import Footer from "../../../containers/footer/Footer";
import Navbars from "../../../containers/header/Nav/Navbar";
import Caros from "../Caros";
import Maps from "../Map";

import "./training.css";

const PlacesTraining = () => {
  return (
    <div>
      <div>
        <Navbars />
      </div>
      <div>
        <div className="col-md-7 mx-auto bd">
          <h3 className="text-center">Places of Training</h3>
          <div className="ber-content d-flex justify-content-between py-3">
            <div>
              <h5>Bernart- Halle</h5>
            </div>
            <div>
              <p>Pestalozzistr: 16</p>
              <p>32549 Bad Oeynhausen</p>
            </div>
          </div>
          <div className="caro">
            <Caros />
          </div>
          <div className="map">
            <Maps />
            {/* <img src="./Maps.png" alt="" /> */}
          </div>
          <div className="text-center fw-bolder pt-3">
            <p>Remarks to this place, Please watch steps.</p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default PlacesTraining;
