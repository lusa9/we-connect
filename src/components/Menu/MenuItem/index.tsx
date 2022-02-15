import { MenuItemProps } from "types/MenuItemProps";
import MultilinkMenuItem from "./MultiLinkMenuItem";
import SingleLinkMenuItem from "./SingleLinkMenuItem";

export default ({ children, ...props }: MenuItemProps) =>
  children ? (
    <MultilinkMenuItem {...{ children, ...props }} key={props.slug} />
  ) : (
    <SingleLinkMenuItem {...props} key={props.slug} />
  );
