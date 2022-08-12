import React from "react";
import Navbars from "../../containers/header/Nav/Navbar";
import Footer from "../../containers/footer/Footer";

import "./trainee.css";
import ButtonComp from "../../components/ButtonComp";
const TrainingTimes = () => {
  return (
    <div>
      <div>
        <div>
          <Navbars />
        </div>
        <div className="col-md-8 mx-auto bd">
          <div>
            <h5>I am available for training:</h5>
            <div>
              <form>
                <div class="mb-3">
                  <input
                    type="date"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    placeholder="Week Day"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    placeholder="Time From"
                    class="form-control"
                    id=""
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    placeholder="Time To"
                    class="form-control"
                    id=""
                  />
                </div>
                <div>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select Course Name</option>
                    <option value="1">Trockengymnastik</option>
                    <option value="2">Wassergymnastik</option>
                    <option value="3">Alles</option>
                  </select>
                </div>
              </form>
            </div>
          </div>
          <div className="pt-5">
            <ButtonComp teg={"Add Another Time"} />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default TrainingTimes;
