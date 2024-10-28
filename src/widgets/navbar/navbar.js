import classes from "./navbar.module.scss";
import { Link } from "react-router-dom";

import Flex from "layout/flex";
import Label from "widgets/label";
import SubMenu from "./sub-menu";
import subMenus from "static-texts/sub-menus.json";
function Navbar({
  onClick,
  onClickLogo,
  onCloseSubMenu,
  subMenu,
  onMouseEnterFinance,
  onMouseEnterComunication,
  onMouseLeave,
}) {
  return (
    <header className={classes.header}>
      <Flex
        justify="space-between"
        align="center"
        className={classes.header__content}
      >
        <img
          src={"/"}
          alt="Logo"
          onClick={onClickLogo({})}
          className={classes.logo}
        />
        <nav className={classes.header__content__nav}>
          <ul>
            <li>
              <Label
                align="start"
                size="lg"
                color="navbar"
                onClick={onClick({})}
                className={classes.link_parent}
              >
                <Link to="/" className={classes.link_nowrap}>
                  Home
                </Link>
              </Label>
            </li>
            <li>
              <Label
                align="start"
                size="lg"
                color="navbar"
                onClick={onClick({})}
              >
                <Link to="/build-your-solution" className={classes.link_nowrap}>
                  Costruisci la tua soluzione
                </Link>
              </Label>
            </li>
          </ul>
        </nav>
      </Flex>
    </header>
  );
}

export default Navbar;
