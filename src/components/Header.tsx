"use client";

import { useState } from "react";
import { ThemeButton } from "./ThemeButton";
import { useTheme } from "next-themes";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isChecked, setIsChecked] = useState<boolean>(theme === "dark" ? true : false);

  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setIsChecked((prev) => !prev);
  };

  return (
    <header className="flex">
      <h1 className="text-5xl inline-block">Título da Página</h1>
      <ThemeButton isChecked={isChecked} onClick={handleChangeTheme} />
    </header>
  );
};
