import { useState } from "react";
import { ReactComponent as HamburgerIcon } from "assets/icon_hamburger.svg";
import styles from "./styles.module.css";
import MenuMobileExpandedMenu from "./MenuMobileExpandedMenu";
import MenuLogo from "../MenuLogo";

export default () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.component}>
        <MenuLogo />
        <button
          onClick={() => {
            setExpanded((expanded) => !expanded);
          }}
        >
          <HamburgerIcon />
        </button>
      </div>
      {expanded && <MenuMobileExpandedMenu {...{ expanded }} />}
    </div>
  );
};
