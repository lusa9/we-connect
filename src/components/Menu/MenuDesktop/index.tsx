import { useContext } from "react";
import { MenuItemContext } from "Store/MenuItemProvider";
import MenuItem from "../MenuItem";
import MenuLogo from "../MenuLogo";
import styles from "./styles.module.css";

export default () => {
  const { menuItems } = useContext(MenuItemContext);

  return (
    <div className={styles.component}>
      <MenuLogo />
      {menuItems ? (
        <nav className={styles.menuItemContainer}>
          {menuItems.map(MenuItem)}
        </nav>
      ) : (
        <h6 className={styles.loadingLabel}>Loading...</h6>
      )}
    </div>
  );
};
