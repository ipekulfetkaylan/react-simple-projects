import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { links, social } from "./data";
import { AppContext } from "./context";

const Sidebar = () => {
    const {closeSidebar,isSidebarOpen}= useContext(AppContext);
  return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className="sidebar-header">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>
                {link.icon}
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((el) => {
          return (
            <li key={el.id}>
              <a href={el.url}>{el.icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
