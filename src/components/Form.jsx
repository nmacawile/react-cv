import GenInfoFieldset from "./GenInfoFieldset.jsx";
import EducationFieldset from "./EducationFieldset.jsx";
import WorkHistoryFieldset from "./WorkHistoryFieldset.jsx";
import { DataContext } from "../contexts/DataContext.jsx";
import { useContext } from "react";

function Form({ setActiveTab }) {
  const contextValue = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contextValue.data);
    setActiveTab("View");
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <GenInfoFieldset></GenInfoFieldset>
      <EducationFieldset></EducationFieldset>
      <WorkHistoryFieldset></WorkHistoryFieldset>
      <button
        type="submit"
        className="text-neutral-100 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-amber-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
