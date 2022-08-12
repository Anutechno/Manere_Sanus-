import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../containers/footer/Footer";
import Navbars from "../../containers/header/Nav/Navbar";

import "./Trainer.css";

const Trainer = () => {
  return (
    <>
      <div>
        <Navbars />
        <h3 className="text-center py-4">All Trainer</h3>
        <div>
          <div className="col-md-11 mx-auto">
            <div className="d-flex">
              <div className="d-flex bd col-md-4">
                <div>
                  <img src="gucci.png" alt="" className="timg" />
                </div>
                <div>
                  <h6><Link to="/trainer-detail" className="lyd">Lydia</Link></h6>
                  <p>
                    Since 4 years manere 25 years experience trockngmnastik
                    Wassergym Read More
                  </p>
                </div>
              </div>
              <div className="d-flex bd col-md-4">
                <div>
                  <img src="gucci.png" alt="" className="timg" />
                </div>
                <div>
                  <h6 className="lyd">Lydia</h6>
                  <p>
                    Since 4 years manere 25 years experience trockngmnastik
                    Wassergym Read More
                  </p>
                </div>
              </div>
              <div className="d-flex bd col-md-4">
                <div>
                  <img src="gucci.png" alt="" className="timg" />
                </div>
                <div>
                  <h6>Lydia</h6>
                  <p>
                    Since 4 years manere 25 years experience trockngmnastik
                    Wassergym Read More
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div className="d-flex bd col-md-4">
                <div>
                  <img src="gucci.png" alt="" className="timg" />
                </div>
                <div>
                  <h6><Link to="/trainer-detail" className="lyd">Lydia</Link></h6>
                  <p>
                    Since 4 years manere 25 years experience trockngmnastik
                    Wassergym Read More
                  </p>
                </div>
              </div>
              <div className="d-flex bd col-md-4">
                <div>
                  <img src="gucci.png" alt="" className="timg" />
                </div>
                <div>
                  <h6>Lydia</h6>
                  <p>
                    Since 4 years manere 25 years experience trockngmnastik
                    Wassergym Read More
                  </p>
                </div>
              </div>
              <div className="d-flex bd col-md-4">
                <div>
                  <img src="gucci.png" alt="" className="timg" />
                </div>
                <div>
                  <h6>Lydia</h6>
                  <p>
                    Since 4 years manere 25 years experience trockngmnastik
                    Wassergym Read More
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div className="d-flex bd col-md-4">
                <div>
                  <img src="gucci.png" alt="" className="timg" />
                </div>
                <div>
                  <h6>Lydia</h6>
                  <p>
                    Since 4 years manere 25 years experience trockngmnastik
                    Wassergym Read More
                  </p>
                </div>
              </div>
              <div className="d-flex bd col-md-4">
                <div>
                  <img src="gucci.png" alt="" className="timg" />
                </div>
                <div>
                  <h6>Lydia</h6>
                  <p>
                    Since 4 years manere 25 years experience trockngmnastik
                    Wassergym Read More
                  </p>
                </div>
              </div>
              <div className="d-flex bd col-md-4">
                <div>
                  <img src="gucci.png" alt="" className="timg" />
                </div>
                <div>
                  <h6>Lydia</h6>
                  <p>
                    Since 4 years manere 25 years experience trockngmnastik
                    Wassergym Read More
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div className="d-flex bd col-md-4">
                <div>
                  <img src="gucci.png" alt="" className="timg" />
                </div>
                <div>
                  <h6>Lydia</h6>
                  <p>
                    Since 4 years manere 25 years experience trockngmnastik
                    Wassergym Read More
                  </p>
                </div>
              </div>
              <div className="d-flex bd col-md-4">
                <div>
                  <img src="gucci.png" alt="" className="timg" />
                </div>
                <div>
                  <h6>Lydia</h6>
                  <p>
                    Since 4 years manere 25 years experience trockngmnastik
                    Wassergym Read More
                  </p>
                </div>
              </div>
              <div className="d-flex bd col-md-4">
                <div>
                  <img src="gucci.png" alt="" className="timg" />
                </div>
                <div>
                  <h6>Lydia</h6>
                  <p>
                    Since 4 years manere 25 years experience trockngmnastik
                    Wassergym Read More
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Trainer;
