import { MenuItemProps } from "types/MenuItemProps";
import styles from "./styles.module.css";

export default ({ slug, title, url, children }: MenuItemProps) => {
  let className = styles.component;
  if (children) {
    className += ` ${styles.multiLink}`;
  }

  return (
    <a
      onClick={() => {
        console.log(`navigate to ${slug}`);
      }}
      {...{ className }}
    >
      <h6>{title}</h6>
    </a>
  );
};
