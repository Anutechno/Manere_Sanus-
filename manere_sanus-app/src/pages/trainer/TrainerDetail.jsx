import React from "react";
import Footer from "../../containers/footer/Footer";
import Navbars from "../../containers/header/Nav/Navbar";

import "./Trainer.css";

const TrainerDetail = () => {
  return (
    <div>
      <div>
        <Navbars />
      </div>
      <div>
        <h3 className="text-center py-4">Trainer Detail Page</h3>
        <div className="col-md-9 mx-auto bd">
          <div>
            <div>
              <div>
                <div className="d-flex justify-content-evenly">
                  <div className="d-flex col-md-5">
                    <div>
                      <img src="gucci.png" alt="" className="timg" />
                    </div>
                    <div className="prinfo">
                      <h6>
                        <h6 className="fw-bolder">Lydia</h6>
                      </h6>
                      <p>
                        Since 4 years manere 25 years experience trockngmnastik
                        Wassergym Read More
                      </p>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div>
                      <h6>Courses </h6>
                      <p>Watergym,yoga,Nordic,Wallking</p>
                    </div>
                    <div>
                      <h6>Strength</h6>
                      <p>Watergym,yoga,Nordic,Wallking</p>
                    </div>
                  </div>
                </div>
                <div className="pt-5 pb-3 px-5" >
                  <h4>Additional info</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Venenatis turpis ac, ultrices quam neque. In mauris, enim
                    quam rhoncus nunc, condimentum eu cursus. Tincidunt et
                    lacus, venenatis sodales sed pellentesque. Cursus risus
                    consectetur in amet. Viverra aliquet sit velit tempor,
                    aliquet volutpat. Imperdiet orci fermentum augue urna. Massa
                    semper enim sagittis, tellus nunc.{" "}
                  </p>
                  <div className="text-center py-4">
                    <button className="close pclr fw-bolder">Close</button>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default TrainerDetail;
