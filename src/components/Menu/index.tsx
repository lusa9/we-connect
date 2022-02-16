import { useMediaMinWidths } from "hooks/usemedia";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import styles from "./styles.module.css";

export default () => {
  const Menu = useMediaMinWidths([1120], [MenuDesktop], MenuMobile);

  return (
    <div className={styles.component}>
      <Menu />
    </div>
  );
};
