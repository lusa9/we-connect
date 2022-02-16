import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { MenuItemContext } from "Store/MenuItemProvider";
import styles from "./styles.module.css";

export default () => {
  const { menuItems } = useContext(MenuItemContext);

  return (
    <Routes>
      {menuItems
        ?.flatMap(({ children, ...props }) => (children ? children : [props]))
        .map(({ slug, title }) => (
          <Route
            key={slug}
            path={slug}
            element={
              <div className={styles.component}>
                <h1>{title}</h1>
              </div>
            }
          />
        ))}
    </Routes>
  );
};
