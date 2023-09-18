import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "./context";


const Submenu = () => {
  const {
    isSubMenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);
  const [colunms, setColumns]= useState('col-2');

  useEffect(() => {
    setColumns('col-2');
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom + 20}px`;
    if(links.length === 3){
        setColumns('col-3')
    }
    if(links.length > 3){
        setColumns('col-4');
    }
  }, [location,links]);

  return (
    <aside
      className={`${isSubMenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${colunms}`}>
        {links.map((link, i) => {
          const { label, icon, url } = link;
          return (
            <a href={url} key={i}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
