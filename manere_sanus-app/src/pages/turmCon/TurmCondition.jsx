import React from "react";
import Buttons from "../../components/button/Button";
import Navbars from "../../containers/header/Nav/Navbar";
import "./turm.css";

const TurmCondition = (props) => {
  const handleClick = (event) => {
    // event.preventDefault();
    alert("Button Clicked");
  };
  return (
    <>
      <div>
        <div>
          <Navbars />
        </div>
        <div className="text-center main-div">
          <h4 className="">Terms & Conditions</h4>
          <div className="py-3 col-md-8 m-auto">
            <p className="con-pr text-start lh-base">
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
              Ganzkorpetraining ermoglicht Kraftigung des gesamten.Diese Sanfte
              aber sehr wirkungsvolle ganzheitche Ganzkorpetraining ermoglicht
              Kraftigung des gesamten.Diese Sanfte aber sehr wirkungsvolle
              ganzheitche Ganzkorpetraining ermoglicht Kraftigung des
              gesamten.Diese Sanfte aber sehr wirkungsvolle ganzheitche
              Ganzkorpetraining ermoglicht Kraftigung des gesamten.
            </p>
          </div>
          <div>
            {/* <button className="px-5 py-2 border pclr redis wfnt">Click</button> */}
            <Buttons
              onClick={() => {
                handleClick();
              }}
              value={"Click"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TurmCondition;
