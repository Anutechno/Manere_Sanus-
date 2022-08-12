import React from "react";
import Buttons from "../../components/button/Button";
import FollowCont from "./FollowCont";

import "./UpFollowing.css";

const UpFollowing = () => {
  const handleClick = (event) => {
    // event.preventDefault();
    alert("Button Clicked");
  };
  return (
    <div>
      <div className="col-md-5 mx-auto py-5 bd">
        <h3 className="text-center pb-4">Upload the following</h3>
        <div>
          <FollowCont
            vac={"Vaccine 1"}
            date={"dd:mm:yy"}
            pre={"Preview"}
            Img={"./Attachment.png"}
          />
          <FollowCont
            vac={"Vaccine 2"}
            date={"dd:mm:yy"}
            pre={"Preview"}
            Img={"./Attachment.png"}
          />
          <FollowCont
            vac={"Vaccine 3"}
            date={"dd:mm:yy"}
            pre={"Preview"}
            Img={"./Attachment.png"}
          />
          <div className="text-center pt-3">
            <Buttons
              onClick={() => {
                handleClick();
              }}
              value={"Add More"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpFollowing;
