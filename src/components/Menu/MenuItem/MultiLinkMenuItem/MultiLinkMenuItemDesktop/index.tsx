import { useState } from "react";
import { MultiLinkMenuItemProps } from "..";
import MenuItem from "../..";
import styles from "./styles.module.css";

export default ({ slug, title, children }: MultiLinkMenuItemProps) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
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
    </div>
  );
};
