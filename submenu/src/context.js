import React, { useContext, useState } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isMobilMenuOpen, setIsMobilMenuOpen] = useState(true);
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const [location, setLocation]= useState({});
  const [page, setPage]= useState({page:"",links:[]});

  const openMobilMenu = () => {

    setIsMobilMenuOpen(true);
  };
  const closeMobilMenu = () => {
    setIsMobilMenuOpen(false);
  };
  const openSubMenu = (text,coordinates) => {
    const page= sublinks.find((link)=>link.page === text);
    setPage(page);
    setLocation(coordinates)
    setSubMenuOpen(true);
  };
  const closeSubMenu = () => {
    setSubMenuOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isMobilMenuOpen,
        isSubMenuOpen,
        openSubMenu,
        closeSubMenu,
        closeMobilMenu,
        openMobilMenu,
        location,
        page

      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
