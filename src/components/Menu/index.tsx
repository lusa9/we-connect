import { useMediaMaxWidths } from "hooks/usemedia";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

export default () => {
  const isMobile = useMediaMaxWidths([768], [true], false);

  if (isMobile) {
    return <MenuMobile />;
  } else {
    return <MenuDesktop />;
  }
};
