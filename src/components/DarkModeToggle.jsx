import { useState, useEffect } from "react";

export function DarkModeToggle() {
  const darkMode = localStorage.theme === "dark";
  const [isChecked, setIsChecked] = useState(darkMode);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);

    if (!isChecked) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  useEffect(() => {
    setIsChecked(localStorage.theme === "dark");
  }, []);

  return (
    <>
      <div className="flex items-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            name="dark-mode-toggle"
            className="sr-only peer"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <div className="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-amber-300 dark:peer-focus:ring-amber-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-amber-600"></div>
          <span className="ml-3 text-sm font-medium text-black dark:text-gray-300">
            Dark Mode
          </span>
        </label>
      </div>
    </>
  );
}

export default DarkModeToggle;
