import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default () => (
  <Link to="/">
    <h5 data-cy="company-logo">
      WE-CON<span className={styles.accent}>E</span>CT
    </h5>
  </Link>
);
