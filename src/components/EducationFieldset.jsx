import { DataContext } from "../contexts/DataContext.jsx";
import { useContext } from "react";

function EducationFieldset() {
  const inputFieldClasses =
    "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
  const labelClasses =
    "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

  const {
    handleFieldsetChange,
    data: { education },
  } = useContext(DataContext);

  const handleItemChange = ({ target: { value } }, index, property) => {
    const editedItem = { ...education[index], [property]: value };
    const newEducation = [
      ...education.slice(0, index),
      editedItem,
      ...education.slice(index + 1),
    ];
    handleFieldsetChange("education", [...newEducation]);
  };

  const addEntry = () => {
    handleFieldsetChange("education", [
      ...education,
      { name: "", study: "", start: "", end: "" },
    ]);
  };

  const removeEntry = (index) => {
    handleFieldsetChange("education", [
      ...education.slice(0, index),
      ...education.slice(index + 1),
    ]);
  };

  return (
    <fieldset className="grid gap-4">
      <legend className="text-xl mb-4 text-gray-200">Education</legend>
      {education.map((s, index) => {
        const key = `school${index}`

        return (
          <div
            key={key}
            className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-zinc-900 dark:border-zinc-800 p-6"
          >
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                value={s.name}
                onChange={(e) => handleItemChange(e, index, "name")}
                name={`${key}Name`}
                id={`${key}Name`}
                className={inputFieldClasses}
                placeholder=" "
                required
              />
              <label htmlFor={`${key}Name`} className={labelClasses}>
                School name
              </label>
            </div>
            <div className="grid md:grid-cols-3 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  value={s.study}
                  onChange={(e) => handleItemChange(e, index, "study")}
                  name={`${key}Study`}
                  id={`${key}Study`}
                  className={inputFieldClasses}
                  placeholder=" "
                  required
                />
                <label htmlFor={`${key}Study`} className={labelClasses}>
                  Study
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="month"
                  value={s.start}
                  onChange={(e) => handleItemChange(e, index, "start")}
                  name={`${key}Start`}
                  id={`${key}Start`}
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
                  value={s.end}
                  onChange={(e) => handleItemChange(e, index, "end")}
                  name={`${key}End`}
                  id={`${key}End`}
                  className={inputFieldClasses}
                  placeholder=" "
                  required
                />
                <label htmlFor={`${key}End`} className={labelClasses}>
                  End
                </label>
              </div>
            </div>
            <button
              type="button"
              onClick={() => removeEntry(index)}
              aria-label="Remove Entry"
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
        onClick={addEntry}
        className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full"
      >
        Add entry
      </button>
    </fieldset>
  );
}

export default EducationFieldset;
