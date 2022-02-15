import { MenuItemProps } from "types/MenuItemProps";
import MultilinkMenuItem from "./MultiLinkMenuItem";
import SingleLinkMenuItem from "./SingleLinkMenuItem";

export default (props: MenuItemProps) =>
  props.children ? (
    <MultilinkMenuItem {...props} key={props.slug} />
  ) : (
    <SingleLinkMenuItem {...props} key={props.slug} />
  );
