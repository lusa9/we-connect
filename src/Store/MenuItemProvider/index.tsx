import { createContext, useEffect, useState } from "react";

interface MenuItemProps {
  slug: string;
  title: string;
  url: string;
  children?: MenuItemProps[];
}

interface MenuItemContextProps {
  menuItems: MenuItemProps[] | undefined;
}

export const MenuItemContext = createContext<MenuItemContextProps>({
  menuItems: undefined,
});

interface MenuItemProviderProps {
  children?: React.ReactNode;
}

export const MenuItemProvider = ({ children }: MenuItemProviderProps) => {
  const [menuItems, setMenuItems] = useState<MenuItemProps[] | undefined>(
    () => {
      const cachedItems = localStorage.getItem("menu-items");
      if (!cachedItems) {
        return undefined;
      }

      const parsedItems = JSON.parse(cachedItems);

      if (!parsedItems) {
        return undefined;
      }

      return parsedItems;
    }
  );

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
      .then(setMenuItems);
  }, []);

  return (
    <MenuItemContext.Provider value={{ menuItems }}>
      {children}
    </MenuItemContext.Provider>
  );
};
