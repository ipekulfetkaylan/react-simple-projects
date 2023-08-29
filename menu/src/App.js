import { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import data from "./data"


const allCategories=['all', ...new Set(data.map((item)=>item.category))] ;

function App() {
  const [menuItems, setMenuItems]= useState(data);
  const [categories, setCategories]= useState(allCategories);
  

  const filterCategories = (category)=>{
    if(category === "all"){
      setMenuItems(data);
      return;
    }
    const newData = data.filter((item)=>item.category === category);
    setMenuItems(newData)
  };

  return (
    <div className="App">
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <Categories categories={categories} filterCategories={filterCategories} />
          <Menu menuItems={menuItems}/>
        </section>
      </main>
    </div>
  );
}

export default App;
