import Menu from "components/Menu";
import Store from "Store";
import { BrowserRouter as Router } from "react-router-dom";
import MenuItemRoutes from "components/MenuItemRoutes";
import styles from "./styles.module.css";

export default () => (
  <Store>
    <Router>
      <div className={styles.container}>
        <Menu />
        <MenuItemRoutes />
      </div>
    </Router>
  </Store>
);
