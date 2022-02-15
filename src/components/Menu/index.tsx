import { useMediaMinWidths } from "hooks/usemedia";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

export default () => {
  const isDesktop = useMediaMinWidths([968], [true], false);

  if (isDesktop) {
    return <MenuDesktop />;
  } else {
    return <MenuMobile />;
  }
};
