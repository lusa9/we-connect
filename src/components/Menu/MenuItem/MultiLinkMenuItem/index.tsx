import { useMediaMinWidths } from "hooks/usemedia";
import { MenuItemProps } from "types/MenuItemProps";
import MultiLinkMenuItemDesktop from "./MultiLinkMenuItemDesktop";
import MultiLinkMenuItemMobile from "./MultiLinkMenuItemMobile";

export interface MultiLinkMenuItemProps {
  slug: string;
  title: string;
  children: MenuItemProps[];
}

export default (props: MultiLinkMenuItemProps) => {
  const MultiLinkMenuItem = useMediaMinWidths(
    [968],
    [MultiLinkMenuItemDesktop],
    MultiLinkMenuItemMobile
  );

  return <MultiLinkMenuItem {...props} />;
};
