import Question from "./Question";
import data from "./data";

function App() {
  return (
    <div className="App">
      <div className="question-container">
        <div className="left-side">
          <h3>Questions and answers about the topics you are curious about</h3>
        </div>
        <div className="right-side">
          {data.map((item,i) => {
            return <Question {...item} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
