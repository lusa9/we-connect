import { MenuItemProps } from "types/MenuItemProps";
import styles from "./styles.module.css";

export default ({ slug, title, url }: MenuItemProps) => (
  <a className={styles.component} key={slug}>
    <h6>{title}</h6>
  </a>
);
