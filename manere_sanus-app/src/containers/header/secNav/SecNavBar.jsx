import React from "react";
import "../Nav/Nav.css";

const SecNavBar = () => {
  return (
    <>
      <div>
        {/* <div className="bd col-md-10 mx-auto d-flex mt-4 pclr justify-content-between">
          <div>
            <h4 className="wfnt ps-5">Hello Julia!</h4>
          </div>
          <div className="d-flex">
            <div className="pe-4">
              <img src="Profile1.png" alt="" />
            </div>
            <div className="pe-4">
              <img src="Vector4.png" alt="" />
            </div>
          </div>
        </div> */}
        <div className="col-md-10 mx-auto">
          <div className="d-flex my-4 justify-content-evenly">
            <div className="col-md-5 ">
              <div className="boost d-flex box-brd justify-content-evenly">
                <div className="cost">
                  <h5>COVID 2- Status</h5>
                  <button>BOOSTED</button>
                </div>
                <div className="cost">
                  <h5>Member- Status</h5>
                  <div className="mg text-center ms-auto">
                    <p>MG</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="boost d-flex box-brd justify-content-evenly">
                <div className="cost d-flex">
                  <div>
                    <h5>Your Current Score is:</h5>
                    <h6 className="val">Valid Until: dd.mm.yyyy</h6>
                  </div>
                </div>
                <div className="costkg">
                  <div className="mg text-center ms-auto kg">
                    <p>
                      55
                      <br /> Pkt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-10 mx-auto">
          <div className="d-flex my-4 justify-content-evenly">
            <div className="col-md-5 ">
              <div className="box-brd justify-content-evenly">
                <div className="d-flex px-3 pt-3">
                  <h6>Your Next Classes</h6>
                  <img src="Vector4.png" className="nclass" alt="" />
                </div>
                <div className="d-flex px-3 ">
                  <h6>
                    22.03. : Water Gym in Bath Rehme-
                    <span className="tpclr">Agnes</span>
                  </h6>
                  <p className="ps-3 tpclr">TODAY</p>
                </div>
                <div className="d-flex px-3">
                  <h6>
                    22.03. : Water Gym in Bath Rehme-
                    <span className="tpclr">Agnes</span>
                  </h6>
                  <p className="ps-3 tpclr">TOMORROW</p>
                </div>
                <div className="text-center">
                  <button className="allcor">All Courses</button>
                </div>
              </div>
            </div>
            <div className="col-md-5 ">
              <div className="box-brd justify-content-evenly">
                <div className="d-flex px-3 pt-3">
                  <h5>News</h5>
                  <img src="Vector4.png" className="nclass" alt="" />
                </div>
                <div className="d-flex px-3 ">
                  <h6 className="tpclr">24.2. : Happy Birthday to Natalie</h6>
                  <p className="ps-3 tpclr">TODAY</p>
                </div>
                <div className="px-3 py-1">
                  <h6>
                    22.03. : We start Zumba Soon. Interested?{" "}
                    <span className="tpclr"> MORE</span>
                  </h6>
                </div>
                <div className="px-3 py-3">
                  <h6>
                    22.03. : We Collect for Ukraine? Interested?{" "}
                    <span className="tpclr"> MORE</span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="manu-sec box-brd">
          <div className="menu-item d-flex">
            <img src="CreateTicket.png" alt="" />
            <h5>Create Ticket</h5>
          </div>
          <div className="menu-item d-flex">
            <img src="Challanges.png" alt="" />
            <h5>Challanges</h5>
          </div>
          <div className="menu-item d-flex">
            <img src="Userof.png" alt="" />
            <h5>User of the month</h5>
          </div>
          <div className="menu-item d-flex">
            <img src="Places.png" alt="" />
            <h5>Places of Training</h5>
          </div>
          <div className="menu-item d-flex">
            <img src="Alltrainer.png" alt="" />
            <h5>All Trainer</h5>
          </div>
          <div className="menu-item d-flex">
            <img src="Gallery.png" alt="" />
            <h5>Gallery</h5>
          </div>
        </div>
        <div className="text-center txtw pclr copyrit">Copyright @ 2011 Inc.</div>
      </div>
    </>
  );
};

export default SecNavBar;
