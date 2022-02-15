import { useMediaMinWidths } from "hooks/usemedia";
import { useState } from "react";
import { MenuItemProps } from "types/MenuItemProps";
import MenuItem from "..";
import MultiLinkMenuItemDesktop from "./MultiLinkMenuItemDesktop";
import MultiLinkMenuItemMobile from "./MultiLinkMenuItemMobile";
import styles from "./styles.module.css";

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
