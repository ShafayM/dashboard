import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children}) => {
   const [activeMenu, setActiveMenu] = useState(true);
   const [isClicked, setIsClicked] = useState(initialState);
   const [screenSize, setScreenSize] = useState(undefined);
   const [currentColor, setcurrentColor] = useState('#03c907');
   const [currentMode, setCurrentMode] = useState('Light');
   const [ThemeSettings, setThemeSetting] = useState(false);

   const setColor = (color) => {
      setcurrentColor(color);

      localStorage.setItem('colorMode', color);

      setThemeSetting(false);
   }

   const setMode = (e) => {
    setCurrentMode(e.target.value);

    localStorage.setItem('themeMode', e.target.value);

    setThemeSetting(false);
 }

   const handleClick = (clicked) => {
       setIsClicked({ ...initialState, [clicked]:
    true });
   }

    return (
      <StateContext.Provider
        value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize,
            currentColor,
            currentMode,
            ThemeSettings,
            setThemeSetting,
            setMode,
            setColor
        }}
      >
        {children}
      </StateContext.Provider>
    )
}
 export const useStateContext = () => useContext(StateContext);