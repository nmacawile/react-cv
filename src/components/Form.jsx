import GenInfoFieldset from "./GenInfoFieldset.jsx";
import EducationFieldset from "./EducationFieldset.jsx";
import WorkHistoryFieldset from "./WorkHistoryFieldset.jsx";
import { DataContext } from "../contexts/DataContext.jsx";
import { useContext } from "react";
import PrimaryButton from "./PrimaryButton.jsx";

function Form({ setActiveTab }) {
  const contextValue = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contextValue.data);
    setActiveTab("view");
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <GenInfoFieldset></GenInfoFieldset>
      <WorkHistoryFieldset></WorkHistoryFieldset>
      <EducationFieldset></EducationFieldset>
      <PrimaryButton type="submit" text="Submit"/>
    </form>
  );
}

export default Form;
