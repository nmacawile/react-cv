import Tiptap from "./Tiptap.jsx";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../contexts/DataContext.jsx";

function WorkHistoryFieldset() {
  const {
    data: { workHistory },
    handleFieldsetChange,
  } = useContext(DataContext);
  const [data, setData] = useState(workHistory);

  useEffect(() => {
    handleFieldsetChange("workHistory", [...data]);
  }, [data]);

  const addEntry = () => {
    setData((prevData) => [
      ...prevData,
      { name: "", position: "", start: "", end: "", responsibilities: "" },
    ]);
  };

  const removeEntry = (index) => {
    setData((prevData) => {
      return [...prevData.slice(0, index), ...prevData.slice(index + 1)];
    });
  };

  const handleItemChange = ({ target: { value } }, index, property) => {
    setData((prevData) => {
      return [
        ...prevData.slice(0, index),
        { ...prevData[index], [property]: value },
        ...prevData.slice(index + 1),
      ];
    });
  };

  let incrementingKey = 0;

  const generateKey = () => `company${incrementingKey++}`;

  const inputFieldClasses =
    "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
  const labelClasses =
    "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

  return (
    <fieldset className="grid gap-4">
      <legend className="text-xl mb-4 text-gray-200">Work History</legend>

      {data.map((c, index) => {
        const key = generateKey();

        return (
          <div
            key={key}
            className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-zinc-900 dark:border-zinc-800 p-6"
          >
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
            <div className="grid md:grid-cols-3 md:gap-6">
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
                  required
                />
                <label htmlFor={`${key}End`} className={labelClasses}>
                  End
                </label>
              </div>
              
            </div>

            <div className="mb-6">
              <h2 className="text-md text-gray-200 mb-2">Responsibilities</h2>
              <div className="prose prose-invert max-w-none bg-gray-800 border-2 border-gray-700 w-full p-2 rounded-md">
                <Tiptap />
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
