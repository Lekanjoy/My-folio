"use client";
import { useState, useContext } from "react";
import { ThemeContext } from "@/app/layout";
import hamburger from "@/public/assets/hamburger.svg";
import close from "@/public/assets/Icon-close.svg";
import Image from "next/image";
import NavItemsMob from "./navItemsMob";
import NavItemsDesk from "./navItemsDesk";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { theme, toggletheme, themeStyles } = useContext(ThemeContext);

  const styles =
    "w-full h-16 fixed flex items-center justify-between p-4 border-b border-[#1F2937] z-50 lg:px-20";

  return (
    <header className={`${themeStyles} ${styles}`}>
      <h1 className="uppercase text-xl font-bold">&lt;Olalekan /&gt;</h1>

      {/* Desktop Navigation Items */}
      <NavItemsDesk toggletheme={toggletheme} theme={theme} />
      {/* Mobile Navigation Menu */}
      {showMenu === false ? (
        <Image
          src={hamburger}
          alt="hamburger icon"
          className="cursor-pointer md:hidden"
          onClick={() => setShowMenu((prevState) => !prevState)}
        />
      ) : (
        <Image
          src={close}
          alt="close icon"
          className="cursor-pointer md:hidden"
          onClick={() => setShowMenu((prevState) => !prevState)}
        />
      )}
      <NavItemsMob
        themeStyles={themeStyles}
        showMenu={showMenu}
        toggletheme={toggletheme}
        theme={theme}
      />
    </header>
  );
};

export default Header;
