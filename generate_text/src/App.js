import React, { useState } from "react";
import data from "./data";
function App() {
  const [datas, setDatas] = useState([]);
  const [count, setCount] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count < 0) {
      amount = 1;
    }
    if (count >= 20) {
      amount = 20;
    }
    setDatas(data.slice(0, amount));
  };

  return (
    <section className="section-center" onSubmit={handleSubmit}>
      <h3>generate text</h3>
      <form className="lorem-form">
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {datas.map((data, index) => {
          return <p key={index}>{data}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
