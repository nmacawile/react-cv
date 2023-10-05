import Tiptap from "./Tiptap.jsx";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext.jsx";
import {
  inputFieldClasses,
  labelClasses,
} from "../shared/formFieldClasses.jsx";

function WorkHistoryFieldset() {
  const {
    data: { workHistory },
    handleFieldsetChange,
  } = useContext(DataContext);

  const addEntry = () => {
    handleFieldsetChange("workHistory", [
      ...workHistory,
      { name: "", position: "", start: "", end: "", responsibilities: "" },
    ]);
  };

  const removeEntry = (index) => {
    handleFieldsetChange("workHistory", [
      ...workHistory.slice(0, index),
      ...workHistory.slice(index + 1),
    ]);
  };

  const handleItemChange = ({ target: { value } }, index, property) => {
    handleUpdate(value, index, property);
  };

  const handleEditorChange = (value, index) => {
    handleUpdate(value, index, "responsibilities");
  };

  const handleUpdate = (value, index, property) => {
    const editedItem = { ...workHistory[index], [property]: value };
    const newWorkHistory = [
      ...workHistory.slice(0, index),
      editedItem,
      ...workHistory.slice(index + 1),
    ];
    handleFieldsetChange("workHistory", [...newWorkHistory]);
  };

  return (
    <fieldset className="grid gap-4">
      <legend className="text-xl mb-4 text-gray-200">Work History</legend>

      {workHistory.map((c, index) => {
        const key = `company${index}`;

        return (
          <div
            key={key}
            className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-zinc-900 dark:border-zinc-800 p-6"
          >
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name={`${key}Position`}
                id={`${key}Position`}
                value={c.position}
                onChange={(e) => handleItemChange(e, index, "position")}
                className={inputFieldClasses}
                placeholder=" "
                required
              />
              <label htmlFor={`${key}Position`} className={labelClasses}>
                Position
              </label>
            </div>
            <div className="grid md:grid-cols-3 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name={`${key}Name`}
                  id={`${key}Name`}
                  value={c.name}
                  onChange={(e) => handleItemChange(e, index, "name")}
                  className={inputFieldClasses}
                  placeholder=" "
                  required
                />
                <label htmlFor={`${key}Name`} className={labelClasses}>
                  Company name
                </label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="month"
                  name={`${key}Start`}
                  id={`${key}Start`}
                  value={c.start}
                  onChange={(e) => handleItemChange(e, index, "start")}
                  className={inputFieldClasses}
                  placeholder=" "
                  required
                />
                <label htmlFor={`${key}Start`} className={labelClasses}>
                  Start
                </label>
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="month"
                  name={`${key}End`}
                  id={`${key}End`}
                  value={c.end}
                  onChange={(e) => handleItemChange(e, index, "end")}
                  className={inputFieldClasses}
                  placeholder=" "
                />
                <label htmlFor={`${key}End`} className={labelClasses}>
                  End
                </label>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-md text-gray-200 mb-2">Responsibilities</h2>
              <div className="prose prose-invert max-w-none bg-gray-800 border-2 border-gray-700 w-full p-2 rounded-md">
                <Tiptap
                  content={c.responsibilities}
                  handleUpdate={(value) => handleEditorChange(value, index)}
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => removeEntry(index)}
              aria-label="Delete Entry"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-zinc-800 dark:text-white dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-500 dark:focus:text-white border rounded-md float-right"
            >
              <svg
                className="w-[16px] h-[16px] text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 20"
              >
                <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
              </svg>
            </button>
          </div>
        );
      })}

      <button
        type="button"
        onClick={() => addEntry()}
        className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full"
      >
        Add entry
      </button>
    </fieldset>
  );
}

export default WorkHistoryFieldset;
