import React, { useState } from "react";
import Values from "values.js";
import SingleColorBox from "./SingleColorBox";
function App() {
  const [color, setColor] = useState("");
  const [colorList, setColorList] = useState([]);
  const [error, setError] = useState(false);
  const [colorArray, setColorArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const newColor = new Values(color).all(10);
      setColorList(newColor);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  const colorCopy=()=>{
    navigator.clipboard.writeText(colorArray)
  }

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
        {colorArray.length > 0 && (
          <div className="copyColors" onClick={colorCopy}>
            {colorArray.map((color, i) => {
              return <span className="copyColor" key={i}>{color}</span>;
            })}
          </div>
          )}
      </section>
      <section className="colors">
        {colorList.map((color, i) => {
          return (
            <SingleColorBox
              key={i}
              {...color}
              hexColor={colorList.hex}
              index={i}
              setColorArray={setColorArray}
              colorArray={colorArray}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
