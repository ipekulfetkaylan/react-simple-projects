import React from "react";
import { useState } from "react";

const Tour = ({...tour}) => {
    const [readMore, setReadMore]= useState(false)
  return (
    <div className="single-tour-container">
      <div className="single-tour">
        <img src={tour.image} alt="" />
        <div className="tour-info">
          <div className="tour-price-wrap">
          <h4 className="tour-title">{tour.name}</h4>
          <span className="price">{tour.price}</span>
          </div>
          <p className="tour-desc">
            {
             readMore ? tour.info : `${tour.info.substring(0,200)}...`
            }
            <button className="btn" onClick={()=>{setReadMore(!readMore)}}>{readMore ? "Show less" : "Read more"}</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tour;
