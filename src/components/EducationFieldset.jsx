import { DataContext } from "../contexts/DataContext.jsx";
import { useContext } from "react";
import {
  inputFieldClasses,
  labelClasses,
} from "../shared/formFieldClasses.jsx";
import DeleteButton from "./DeleteButton.jsx";
import AddEntryButton from "./AddEntryButton";

function EducationFieldset() {
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
      <legend className="text-xl mb-4 dark:text-gray-200">Education</legend>
      {education.map((s, index) => {
        const key = `school${index}`;

        return (
          <div
            key={key}
            className="w-full bg-stone-100 border border-gray-300 rounded-lg shadow dark:bg-zinc-900 dark:border-zinc-800 p-6"
          >
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
            <div className="grid md:grid-cols-3 md:gap-6">
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
            <DeleteButton onClick={() => removeEntry(index)} />
          </div>
        );
      })}

      <AddEntryButton onClick={addEntry} />
    </fieldset>
  );
}

export default EducationFieldset;
