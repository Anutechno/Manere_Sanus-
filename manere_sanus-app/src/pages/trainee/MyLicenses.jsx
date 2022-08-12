import React from 'react';
import Navbars from "../../containers/header/Nav/Navbar";
import Footer from "../../containers/footer/Footer";

import "./trainee.css";
import ButtonComp from "../../components/ButtonComp";
const MyLicenses = () => {
    return (
        <div>
             <div>
        <div>
          <Navbars />
        </div>
        <div className="col-md-8 mx-auto bd">
          <div>
            <ButtonComp />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
        </div>
    );
}   

export default MyLicenses;
