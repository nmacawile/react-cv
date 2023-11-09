import Tiptap from "./Tiptap.jsx";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext.jsx";
import {
  inputFieldClasses,
  labelClasses,
} from "../shared/formFieldClasses.jsx";
import DeleteButton from "./DeleteButton.jsx";
import AddEntryButton from "./AddEntryButton";

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
      <legend className="text-xl mb-4 dark:text-gray-200">Work History</legend>

      {workHistory.map((c, index) => {
        const key = `company${index}`;

        return (
          <div
            key={key}
            className="w-full bg-stone-100 border border-gray-300 rounded-lg shadow dark:bg-zinc-900 dark:border-zinc-800 p-6"
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
              <h2 className="text-md dark:text-gray-200 mb-2">
                Responsibilities
              </h2>
              <div className="prose dark:prose-invert max-w-none dark:bg-gray-800 border-2 dark:border-gray-700 w-full p-2 rounded-md">
                <Tiptap
                  content={c.responsibilities}
                  handleUpdate={(value) => handleEditorChange(value, index)}
                />
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

export default WorkHistoryFieldset;
