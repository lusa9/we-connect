import { useState } from "react";
import { ReactComponent as HamburgerIcon } from "assets/icon_hamburger.svg";
import styles from "./styles.module.css";
import MenuMobileExpandedMenu from "./MenuMobileExpandedMenu";

export default () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.component}>
        <h5>
          WE-CON<span className={styles.accent}>E</span>CT
        </h5>
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
