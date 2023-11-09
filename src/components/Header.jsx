import React from "react";
import { DarkModeToggle } from "./DarkModeToggle.jsx";

function Header() {
  return (
    <header className="bg-white border-gray-200 dark:bg-gradient-to-r dark:from-red-950 dark:via-orange-950 dark:to-orange-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Curriculum Vitae
          </span>
        </a>
        <DarkModeToggle></DarkModeToggle>
      </div>
    </header>
  );
}

export default Header;
