"use client";
import { useState } from "react";
import { createContext } from "react";

export const MenuContext = createContext();

const MenuContextProvider = ({ children }) => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        console.log({ open });
        setOpen((prev) => !prev);
    };

    return<MenuContext.Provider value={{open, toggle}}>
        {children}
    </MenuContext.Provider>
};

export default MenuContextProvider;