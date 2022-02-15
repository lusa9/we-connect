import { useState } from "react";
import { MenuItemProps } from "types/MenuItemProps";
import MenuItem from "..";
import styles from "./styles.module.css";

interface MultiLinkMenuItemProps {
  slug: string;
  title: string;
  children: MenuItemProps[];
}

export default ({ slug, title, children }: MultiLinkMenuItemProps) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <button
      className={styles.component}
      onClick={() => {
        setExpanded((expanded) => !expanded);
      }}
      onBlur={() => {
        setExpanded(false);
      }}
    >
      <h6>{title}</h6>
      {expanded && (
        <div className={styles.linkContainer}>{children.map(MenuItem)}</div>
      )}
    </button>
  );
};
