import SubMenuComponent from "./sub-menu";
import React from "react";
import { useHistory } from "react-router-dom";
function SubMenu({ subMenu, onCloseSubMenu }) {
  const history = useHistory();
  const handleClick = (path) => () => {
    onCloseSubMenu();
    history.push(path);
  };

  return (
    <SubMenuComponent
      options={subMenu?.options}
      marginTop={subMenu.marginTop}
      onClick={handleClick}
    />
  );
}

export default SubMenu;
