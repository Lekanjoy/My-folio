"use client";
import { useState, useEffect, createContext } from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Olalekan Alabi",
  description: "Olalekan Alabi's Portfolio Website",
};

// Sharing Theme context
export const ThemeContext = createContext(null);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "Light");

  // Toggle Theme
  const toggletheme = () => { 
    if (theme === "Dark") {
      setTheme("Light");
    } else {
      setTheme("Dark");
    }
  };

  // Keep Theme Persistent after reload
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

    const themeStyles =
      theme === "Dark"
        ? `bg-lightPrimaryBg text-lightText`
        : ` bg-darkPrimaryBg text-darkText`;
  return (
    <html lang="en">
      <ThemeContext.Provider value={{ theme, toggletheme, themeStyles }}>
        <body className={inter.className}>{children}</body>
      </ThemeContext.Provider>
    </html>
  );
}
