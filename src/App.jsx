import Header from "./components/Header.jsx";
import Tabs from "./components/Tabs.jsx";
import GenInfoFieldset from "./components/GenInfoFieldset.jsx";
import EducationFieldset from "./components/EducationFieldset.jsx";
import WorkHistoryFieldset from "./components/WorkHistoryFieldset.jsx";

function App() {

  return (
    <>
      <Header></Header>
      <Tabs></Tabs>
      <form className="max-w-4xl m-auto p-4 grid grid-mar gap-6">
        <GenInfoFieldset></GenInfoFieldset>
        <EducationFieldset></EducationFieldset>
        <WorkHistoryFieldset></WorkHistoryFieldset>
        <button
          type="submit"
          className="text-neutral-100 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-amber-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
