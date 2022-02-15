import styles from "./styles.module.css";

interface SingleLinkMenuItemProps {
  slug: string;
  title: string;
}

export default ({ slug, title }: SingleLinkMenuItemProps) => (
  <button
    className={styles.component}
    onClick={() => {
      console.log(`navigate to ${slug}`);
    }}
  >
    <h6>{title}</h6>
  </button>
);
