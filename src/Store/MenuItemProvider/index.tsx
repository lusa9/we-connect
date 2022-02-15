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
    if (menuItems) {
      localStorage.setItem("menu-items", JSON.stringify(menuItems));
    } else {
      localStorage.removeItem("menu-item");
    }
  }, [menuItems]);

  useEffect(() => {
    fetch("response.json")
      .then((response) => response.json())
      .then(console.log);
  }, []);

  return (
    <MenuItemContext.Provider value={{ menuItems }}>
      {children}
    </MenuItemContext.Provider>
  );
};
