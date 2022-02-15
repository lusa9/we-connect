import { MenuItemProps } from "types/MenuItemProps";
import styles from "./styles.module.css";

export default ({ slug, title }: MenuItemProps) => (
  <button
    className={styles.component}
    onClick={() => {
      console.log(`navigate to ${slug}`);
    }}
  >
    <h6>{title}</h6>
  </button>
);
