import { useEffect } from "react";
import "./App.css";
import Tours from "./Tours";
import { useState } from "react";
import Loding from "./Loding";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = "https://course-api.com/react-tours-project";
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setTours(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTours();
  }, []);
  console.log(tours);

  return (
    <div className="App">
      <h3 className="tours-title">Our Tours</h3>
      <div className="container">
        {loading ? <Loding /> : <Tours tours={tours} />}
      </div>
    </div>
  );
}

export default App;
