import { useEffect } from "react";
import Header from "./components/Header.jsx";
import TabbedContent from "./components/TabbedContent.jsx";
import { DataProvider } from "./contexts/DataContext.jsx";

function App() {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  });

  return (
    <>
      <Header></Header>
      <DataProvider>
        <TabbedContent></TabbedContent>
      </DataProvider>
    </>
  );
}

export default App;
