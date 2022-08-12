import React from "react";
import Footer from "../../containers/footer/Footer";
import Navbars from "../../containers/header/Nav/Navbar";

import "./newspanel.css";

const NewsPanel = () => {
  return (
    <div>
      <div>
        <Navbars />
      </div>
      <h3 className="text-center py-4">News Panel</h3>
      <div className="col-md-9 mx-auto bd">
        <div>
          <div className="zumba text-center">
            <img src="zumba.png" alt="" />
          </div>
          <div className="new-text">
            <h4 className="pb-4">Bauch-Rücken-Gymnastik</h4>
            <p>
              Diese Sanfte aber sehr wirkungsvolle ganzheitche Ganzkorpetraining
              ermoglicht Kraftigung des gesamten Korpers ohne die Gelenke zu
              sehr zu belasten.Gelenke zu sehr zu belasten.Diese Sanfte aber
              sehr wirkungsvolle ganzheitche Ganzkorpetraining ermoglicht
              Kraftigung des gesamten Korpers ohne die Gelenke zu sehr zu
              belasten.Gelenke zu sehr zu belasten.Diese Sanfte aber sehr
              wirkungsvolle ganzheitche Ganzkorpetraining ermoglicht Kraftigung
              des gesamten Korpers ohne die Gelenke zu sehr zu belasten.Gelenke
              zu sehr zu belasten.Diese Sanfte aber sehr wirkungsvolle
              ganzheitche Ganzkorpetraining ermoglicht Kraftigung des gesamten
              Korpers ohne die Gelenke zu sehr zu belasten.Gelenke zu sehr zu
              belasten.Diese Sanfte aber sehr wirkungsvolle ganzheitche
              Ganzkorpetraining ermoglicht Kraftigung des gesamten.
            </p>
            <div className="new-btn text-center pt-3">
              <button className="newClose pclr">Close</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default NewsPanel;
