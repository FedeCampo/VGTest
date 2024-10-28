import classes from "./sub-menu.module.scss";
//import { Link } from "react-router-dom";

import Flex from "layout/flex";
import Label from "widgets/label";
function SubMenu({ options, marginTop, onClick }) {
  return (
    <div>
      <Flex
        direction="column"
        justify="flex-start"
        align="flex-start"
        className={classes.container}
      >
        {options.map(({ title, link }) => {
          return (
            <Label
              key={title}
              size="lg"
              color="navbar"
              align="center"
              className={classes.link}
              onClick={onClick(link)}
            >
              {title}
            </Label>
          );
        })}
      </Flex>
    </div>
  );
}

export default SubMenu;
