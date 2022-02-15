import MenuItem from "components/Menu/MenuItem";
import { useContext } from "react";
import { MenuItemContext } from "Store/MenuItemProvider";
import styles from "./styles.module.css";

export default ({ expanded }: { expanded: boolean }) => {
  const { menuItems } = useContext(MenuItemContext);

  let className = styles.component;

  if (expanded) {
    className += ` ${styles.expanded}`;
  }
  return (
    <div {...{ className }}>
      {menuItems ? (
        menuItems.map(MenuItem)
      ) : (
        <h6 className={styles.loadingLabel}>Loading...</h6>
      )}
    </div>
  );
};
