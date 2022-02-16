import MenuItem from "components/Menu/MenuItem";
import { useContext } from "react";
import { MenuItemContext } from "Store/MenuItemProvider";
import styles from "./styles.module.css";

export default () => {
  const { menuItems } = useContext(MenuItemContext);

  return (
    <div className={styles.component}>
      {menuItems ? (
        menuItems.map(MenuItem)
      ) : (
        <h6 className={styles.loadingLabel}>Loading...</h6>
      )}
    </div>
  );
};
