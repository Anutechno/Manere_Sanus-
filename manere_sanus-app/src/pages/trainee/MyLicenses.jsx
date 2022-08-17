import React from "react";
import Navbars from "../../containers/header/Nav/Navbar";
import Footer from "../../containers/footer/Footer";

import "./trainee.css";

const MyLicenses = () => {
  return (
    <div>
      <div>
        <div>
          <Navbars />
        </div>
        <div className="col-md-8 mx-auto bd">
          <h2 className="text-center pb-3">My Licenses</h2>
          <div className="col-md-10 mx-auto bx-sho">
            <div className="reli">
              <select
                class="form-select form-select-sm rebak"
                aria-label=".form-select-sm example"
              >
                <option selected>Reha License</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="reli">
              <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm example"
              >
                <option selected>Profile</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="bx-sho">
              <div>
                <div className="d-flex mx-3 pt-3">
                  <p>
                    <input
                      type="checkbox"
                      id=""
                      name=""
                      value=""
                      className="me-2"
                    />
                  </p>
                  <p>Orthopadie</p>
                </div>
                <div className="d-flex justify-content-between mx-3">
                  <p>Expiry- dd:mm:yy</p>
                  <p className="tpclr fw-bolder">UPLOAD</p>
                </div>
              </div>
              <div>
                <div className="d-flex mx-3 pt-3">
                  <p>
                    <input
                      type="checkbox"
                      id=""
                      name=""
                      value=""
                      className="me-2"
                    />
                  </p>
                  <p>Neurologle</p>
                </div>
                <div className="d-flex justify-content-between mx-3">
                  <p>Expiry- dd:mm:yy</p>
                  <p className="tpclr fw-bolder">UPLOAD</p>
                </div>
              </div>
              <div>
                <div className="d-flex mx-3 pt-3">
                  <p>
                    <input
                      type="checkbox"
                      id=""
                      name=""
                      value=""
                      className="me-2"
                    />
                  </p>
                  <p>Innere Medizin</p>
                </div>
                <div className="d-flex justify-content-between mx-3">
                  <p>Expiry- dd:mm:yy</p>
                  <p className="tpclr fw-bolder">UPLOAD</p>
                </div>
              </div>
              <div>
                <div className="d-flex mx-3 pt-3">
                  <p>
                    <input
                      type="checkbox"
                      id=""
                      name=""
                      value=""
                      className="me-2"
                    />
                  </p>
                  <p>Geistige Behinderung</p>
                </div>
                <div className="d-flex justify-content-between mx-3">
                  <p>Expiry- dd:mm:yy</p>
                  <p className="tpclr fw-bolder">UPLOAD</p>
                </div>
              </div>
              <div>
                <div className="d-flex mx-3 pt-3">
                  <p>
                    <input
                      type="checkbox"
                      id=""
                      name=""
                      value=""
                      className="me-2"
                    />
                  </p>
                  <p>Psychiatrie</p>
                </div>
                <div className="d-flex justify-content-between mx-3">
                  <p>Expiry- dd:mm:yy</p>
                  <p className="tpclr fw-bolder">UPLOAD</p>
                </div>
              </div>
              <div>
                <div className="d-flex mx-3 pt-3">
                  <p>
                    <input
                      type="checkbox"
                      id=""
                      name=""
                      value=""
                      className="me-2"
                    />
                  </p>
                  <p>Breitensport</p>
                </div>
                <div className="d-flex justify-content-between mx-3">
                  <p>Expiry- dd:mm:yy</p>
                  <p className="tpclr fw-bolder">UPLOAD</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-10 mx-auto">
            <div className="reli pt-4">
              <select
                class="form-select form-select-sm rebak"
                aria-label=".form-select-sm example"
              >
                <option selected>First Aid License</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="d-flex justify-content-between px-4 val-cont py-2 bx-sho ">
              <div>
                <p className="m-0 val-txt">Valid From</p>
                <p className="m-0">dd:mm:yy</p>
              </div>
              <div>
                <p className="tpclr fw-bolder">DOC PREVIEW</p>
              </div>
            </div>
            <div className="d-flex justify-content-between px-4 val-cont py-2 bx-sho mt-4">
              <div>
                <p className="m-0 val-txt">Valid Duration</p>
                <p className="m-0">xx Months</p>
              </div>
              <div>
                <p className="tpclr fw-bolder">UPLOAD</p>
              </div>
            </div>
            <div className="d-flex justify-content-between px-4 val-cont py-2 bx-sho mt-4">
              <div>
                <p className="m-0 val-txt">Registration Number</p>
                <p className="m-0">Number</p>
              </div>
              {/* <div>
                <p className="tpclr fw-bolder">UPLOAD</p>
              </div> */}
            </div>
            <div className="pt-5 pb-4">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      License Extension
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>Training Description</strong> It Lorem ipsum dolor
                      sit amet, consectetur adipiscing elit. Lacus, sed id
                      mauris arcu. Posuere non ornareLorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Lacus, sed id mauris arcu.
                      Posuere non ornare
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between px-4 val-cont py-2 bx-sho ">
              <div>
                <p className="m-0 val-txt">Valid From</p>
                <p className="m-0">dd:mm:yy</p>
              </div>
              {/* <div>
                <p className="tpclr fw-bolder"></p>
              </div> */}
            </div>
            <div className="d-flex justify-content-between px-4 val-cont py-2 bx-sho mt-4">
              <div>
                <p className="m-0 val-txt">Valid Duration</p>
                <p className="m-0">DOC PREVIEW</p>
              </div>
              <div>
                <p className="tpclr fw-bolder">UPLOAD</p>
              </div>
            </div>
            <div className="d-flex justify-content-between px-4 val-cont py-2 bx-sho mt-4">
              <div>
                <p className="m-0 val-txt">Registration Number</p>
                <p className="m-0">Number</p>
              </div>
              <div>
                <p className="tpclr fw-bolder">UPLOAD</p>
              </div> 
            </div>
            <div className="d-flex justify-content-between px-4 val-cont py-2 bx-sho mt-4">
              <div>
                <p className="m-0 val-txt">Lemeinheiten (Traing Hours)</p>
                <p className="m-0">Number</p>
              </div>
              {/* <div>
                <p className="tpclr fw-bolder">UPLOAD</p>
              </div>  */}
            </div>
          </div>
          <div className="addlicense text-center">
            <button className="pclr">Add License</button>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MyLicenses;
