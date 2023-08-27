import React from "react";
import Tour from "./Tour";

const Tours = ({tours, setTours}) => {
  return (
    <div>

      {
        tours.map((tour,i)=>{
           return <Tour key={i} {...tour} setTours={setTours} tours={tours}/>
        })
      }
    </div>
  );
};

export default Tours;
