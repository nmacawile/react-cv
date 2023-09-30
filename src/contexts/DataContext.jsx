import { createContext, useState } from "react";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState({
    generalInfo: {
      firstName: "John",
      lastName: "Wick",
      email: "johnwick@email.com",
      personalStatement:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      phone: "123-456-7890",
      jobTitle: "Customer Service Representative",
    },
    education: [],
    workHistory: [],
  });

  const handleFieldsetChange = (fieldset, value) => {
    setData((prevData) => ({ ...prevData, [fieldset]: value }));
  };

  return (
    <DataContext.Provider value={{ data, setData, handleFieldsetChange }}>
      {children}
    </DataContext.Provider>
  );
}
