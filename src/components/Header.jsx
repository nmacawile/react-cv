import React from "react";

function Header() {
  return (
    <header className="bg-white border-gray-200 bg-gradient-to-r from-red-950 via-orange-950 to-orange-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Curriculum Vitae
          </span>
        </a>
      </div>
    </header>
  );
}

export default Header;
