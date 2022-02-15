import { useContext } from "react";
import { MenuItemContext } from "Store/MenuItemProvider";
import MenuItem from "./MenuItem";
import styles from "./styles.module.css";

export default () => {
  const { menuItems } = useContext(MenuItemContext);

  if (!menuItems) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.component}>
      <h5 className={styles.logo}>
        WE-CON<span className={styles.accent}>E</span>CT
      </h5>
      <div className={styles.menuItemContainer}>{menuItems.map(MenuItem)}</div>
    </div>
  );
};
