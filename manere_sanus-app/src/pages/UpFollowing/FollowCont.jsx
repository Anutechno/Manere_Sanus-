import React from "react";

const FollowCont = ({ vac, date, pre, Img }) => {
  return (
    <>
      <div className="d-flex justify-content-between foll-sec">
        <div className="vac">
          <p>{vac}</p>
          <span>{date}</span>
        </div>
        <div className="pre">
          <p className="tpclr fw-bold">{pre}</p>
        </div>
        <div className="imgs">
          <img src={Img} alt="" />
        </div>
      </div>
    </>
  );
};

export default FollowCont;
