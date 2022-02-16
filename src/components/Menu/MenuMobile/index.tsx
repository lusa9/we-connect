import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as HamburgerIcon } from "assets/icon_hamburger.svg";
import styles from "./styles.module.css";
import MenuMobileExpandedMenu from "./MenuMobileExpandedMenu";
import MenuLogo from "../MenuLogo";

export default () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    return () => {
      setExpanded(false);
    };
  }, [location]);

  return (
    <React.Fragment>
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
      {expanded && <MenuMobileExpandedMenu />}
    </React.Fragment>
  );
};
