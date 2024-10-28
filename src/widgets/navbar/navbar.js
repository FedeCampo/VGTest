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
          src={"/images/header/PROSSIMITI-logo.svg"}
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
            <li>
              <div
                onMouseEnter={onMouseEnterFinance}
                onMouseLeave={onMouseLeave}
              >
                <Flex
                  justify="center"
                  align="flex-start"
                  direction="column"
                  className={classes.link_container}
                >
                  <Label
                    size="lg"
                    color="navbar"
                    align="start"
                    className={classes.link_parent}
                  >
                    <Link to="/finance" className={classes.link_nowrap}>
                      Finanza agevolata
                    </Link>
                  </Label>
                  {subMenu === "finance" && (
                    <SubMenu
                      subMenu={subMenus.finance}
                      onCloseSubMenu={onCloseSubMenu}
                    />
                  )}
                </Flex>
              </div>
            </li>
            {/*<li>
              <div
                onMouseEnter={onMouseEnterComunication}
                onMouseLeave={onMouseLeave}
              >
                <Flex
                  justify="center"
                  align="flex-start"
                  direction="column"
                  className={classes.link_container}
                >
                  <Label
                    size="lg"
                    color="navbar"
                    align="start"
                    //onClick={onClick({ link: "comunication" })}
                    className={classes.link_parent}
                  >
                    <Link to="/comunication" className={classes.link_nowrap}>
                      Comunicazione
                    </Link>
                  </Label>
                  {subMenu === "comunication" && (
                    <SubMenu
                      subMenu={subMenus.comunication}
                      onCloseSubMenu={onCloseSubMenu}
                    />
                  )}
                </Flex>
              </div>
                  </li>*/}
            <li>
              <Label
                size="lg"
                color="navbar"
                onClick={onClick({})}
                align="start"
              >
                <Link to="/services" className={classes.link_nowrap}>
                  Software MES 4.0
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
                <Link to="/about" className={classes.link_nowrap}>
                  Chi siamo
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
                <Link to="/contacts" className={classes.link_nowrap}>
                  Contatti
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
