export interface MenuItemProps {
  slug: string;
  title: string;
  url: string;
  children?: MenuItemProps[];
}
