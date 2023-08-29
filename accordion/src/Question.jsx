import React, {  useState } from "react";
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";


const Question = ({...item}) => {
    const [displayText, setDisplayText]= useState(false);
  
  return (
    <div className="question-wrap">
      <div className="question">
        <span>{item.title}</span>
        <button onClick={()=>{setDisplayText( !displayText)}}>
          {
            displayText ?  <AiOutlineMinus className="icon" />: <AiOutlinePlus className="icon" />
          }
        </button>
      </div>
      {
        displayText ? <p className="answer">{item.info}</p> : null
      }
    </div>
  );
};

export default Question;
