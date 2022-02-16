import { Routes, Route, Link } from "react-router-dom";
import styles from "./styles.module.css";

interface SingleLinkMenuItemProps {
  slug: string;
  title: string;
}

export default ({ slug, title }: SingleLinkMenuItemProps) => (
  <Link to={slug} className={styles.component}>
    <h6>{title}</h6>
  </Link>
);
