import { MenuItemProvider } from "./MenuItemProvider";

interface Props {
  children?: React.ReactNode;
}

export default ({ children }: Props) => (
  <MenuItemProvider>{children}</MenuItemProvider>
);
