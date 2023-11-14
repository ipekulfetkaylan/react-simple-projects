import { useState } from 'react';
import './App.css';
import List from './List';
import data from './data';


function App() {
  const [people, setPeople]= useState(data)
  return (
    <div className="App">
      <div className='container'>
        <h3>Today is {people.length} people's birthday </h3>
        <List people={people}/>
        <button onClick={()=> setPeople([])}>Clear All</button>
      </div>
    </div>
  );
}

export default App;
