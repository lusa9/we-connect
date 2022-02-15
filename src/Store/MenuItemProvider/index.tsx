import { createContext, useEffect, useState } from "react";

interface MenuItemContextProps {}

export const MenuItemContext = createContext<MenuItemContextProps>({});

interface MenuItemProps {
  children?: React.ReactNode;
}

export const MenuItemProvider = ({ children }: MenuItemProps) => {
  const [menuItems] = useState<MenuItemProps[]>(() => {
    const cachedItems = localStorage.getItem("menu-items");
    if (!cachedItems) {
      return undefined;
    }

    const parsedItems = JSON.parse(cachedItems);

    if (!parsedItems) {
      return undefined;
    }

    return parsedItems;
  });

  useEffect(() => {
    localStorage.setItem("menu-items", JSON.stringify(menuItems));
  }, [menuItems]);

  return (
    <MenuItemContext.Provider value={{ menuItems }}>
      {children}
    </MenuItemContext.Provider>
  );
};
