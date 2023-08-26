import React from "react";
import Tour from "./Tour";

const Tours = ({tours }) => {
  return (
    <div>

      {
        tours.map((tour,i)=>{
           return <Tour key={i} {...tour}/>
        })
      }
    </div>
  );
};

export default Tours;
