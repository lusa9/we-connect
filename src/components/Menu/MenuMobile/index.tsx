import { useContext } from "react";
import { MenuItemContext } from "Store/MenuItemProvider";
import { ReactComponent as HamburgerIcon } from "assets/icon_hamburger.svg";
import styles from "./styles.module.css";

export default () => {
  const { menuItems } = useContext(MenuItemContext);

  return (
    <div className={styles.component}>
      <h5>
        WE-CON<span className={styles.accent}>E</span>CT
      </h5>
      {menuItems ? (
        <button>
          <HamburgerIcon />
        </button>
      ) : (
        <h6 className={styles.loadingLabel}>Loading...</h6>
      )}
    </div>
  );
};
