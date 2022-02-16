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
    [1120],
    [MultiLinkMenuItemDesktop],
    MultiLinkMenuItemMobile
  );

  return <MultiLinkMenuItem {...props} />;
};
