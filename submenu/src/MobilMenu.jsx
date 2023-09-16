import React from "react";
import { useGlobalContext } from "./context";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";

const MobilMenu = () => {
  const { isMobilMenuOpen, closeMobilMenu } = useGlobalContext();
  return (
    <aside
      className={`${
        isMobilMenuOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeMobilMenu}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((sublink, i) => {
            const { links, page } = sublink;
            return (
              <ul key={i}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, i) => {
                    const { url, label, icon } = link;
                    return (
                      <li>
                        <a href={url} key={i}>
                          {icon}
                          {label}
                        </a>
                      </li>
                    );
                  })}
                </div>
              </ul>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default MobilMenu;
