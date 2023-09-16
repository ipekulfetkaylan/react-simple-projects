import React from "react";
import { useGlobalContext } from "./context";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const { openMobilMenu, openSubMenu, closeSubMenu } = useGlobalContext();
  const displaySubMenu = (e)=>{
    const page= e.target.textContent;
    const tempBtn= e.target.getBoundingClientRect();
    const center= (tempBtn.left + tempBtn.right)/2;
    const bottom= (tempBtn.bottom - 3);
    openSubMenu(page,{center,bottom});
  }
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <span className="nav-logo">Logo</span>
          <button className="btn toggle-btn" onClick={openMobilMenu}>
            <FaBars />
          </button>
          <ul className="nav-links">
            <li>
              <button className="link-btn" onMouseOver={displaySubMenu}>products</button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubMenu}>developers</button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubMenu}>company</button>
            </li>
          </ul>
          <button className="btn signin-btn">Sign in</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
