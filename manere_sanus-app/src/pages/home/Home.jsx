import React from "react";
import Navbars from "../../containers/header/Nav/Navbar";
import SecNavBar from "../../containers/header/secNav/SecNavBar";

const Home = () => {
  return (
    <>
      <div>
        <div>
          <Navbars />
        </div>
        <div><SecNavBar/></div>
        <div></div>
      </div>
    </>
  );
};

export default Home;
