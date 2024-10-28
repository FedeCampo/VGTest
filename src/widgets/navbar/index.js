import NavbarComponent from "./navbar";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
function Navbar() {
  const history = useHistory();

  const [subMenu, setSubMenu] = useState();

  const handleClick =
    ({ link }) =>
    () => {
      setSubMenu(link);
    };

  const handleCloseSubMenu = () => {
    setSubMenu(undefined);
  };

  const handleMouseEnterFinance = () => {
    if (window.innerWidth < 960) {
      setSubMenu(undefined);
    } else {
      setSubMenu("finance");
    }
  };

  const handleMouseEnterComunication = () => {
    if (window.innerWidth < 960) {
      setSubMenu(undefined);
    } else {
      setSubMenu("comunication");
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth < 960) {
      setSubMenu(undefined);
    } else {
      setSubMenu(undefined);
    }
  };

  const handleClickLogo = (props) => () => {
    let path = "/";
    history.push(path);
  };

  return (
    <NavbarComponent
      subMenu={subMenu}
      onClick={handleClick}
      onClickLogo={handleClickLogo}
      onCloseSubMenu={handleCloseSubMenu}
      onMouseLeave={handleMouseLeave}
      onMouseEnterFinance={handleMouseEnterFinance}
      onMouseEnterComunication={handleMouseEnterComunication}
    />
  );
}

export default Navbar;
