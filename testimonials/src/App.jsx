import "./App.css";
import { PiQuotesFill } from "react-icons/pi";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { useState } from "react";
import data from "./data";

function App() {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = data[index];

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    } else if (number < 0) {
      return data.length - 1;
    } else {
      return number;
    }
  };
  const increaseIndex = ()=>{
    setIndex((index)=>{
      let newIndex= index + 1;
      return checkNumber(newIndex)
    })
  }
  const decreaseIndex = () => {
    setIndex((index)=>{
      let newIndex = index - 1;
      return checkNumber(newIndex)
    })
  };

  return (
    <div className="App">
      <div className="testimonials-container">
        <div className="img-wrap">
          <div className="img-background">
            <img src={image} alt="" />
            <div className="testi-icon">
              <PiQuotesFill />
            </div>
          </div>
        </div>
        <div className="testi-info">
          <h5 className="testi-name">{name}</h5>
          <span className="testi-title">{job}</span>
          <p className="testi-text">{text}</p>
          <div className="testi-arrow-wrap">
            <button className="testi-arrow" onClick={decreaseIndex}>
              <AiOutlineLeft />
            </button>
            <button
              className="testi-arrow testi-arrow2"
              onClick={increaseIndex}
            >
              <AiOutlineRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
