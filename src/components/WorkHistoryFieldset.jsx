import Tiptap from "./Tiptap.jsx";

function WorkHistoryFieldset() {
  const inputFieldClasses =
    "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
  const labelClasses =
    "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

  return (
    <fieldset>
      <legend className="text-xl mb-4 text-gray-200">Work History</legend>

      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-zinc-900 dark:border-zinc-800 p-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="companyName"
            id="companyName"
            className={inputFieldClasses}
            placeholder=" "
            required
          />
          <label htmlFor="companyName" className={labelClasses}>
            Company name
          </label>
        </div>
        <div className="grid md:grid-cols-3 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="position"
              id="position"
              className={inputFieldClasses}
              placeholder=" "
              required
            />
            <label htmlFor="position" className={labelClasses}>
              Position
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="month"
              name="workStart"
              id="workStart"
              className={inputFieldClasses}
              placeholder=" "
              required
            />
            <label htmlFor="workStart" className={labelClasses}>
              Start
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="month"
              name="workEnd"
              id="workEnd"
              className={inputFieldClasses}
              placeholder=" "
              required
            />
            <label htmlFor="workEnd" className={labelClasses}>
              End
            </label>
          </div>
        </div>

        <h2 className="text-md text-gray-200 mb-2">Responsibilities</h2>
        <div className="prose prose-invert max-w-none bg-gray-800 border-2 border-gray-700 w-full p-2 rounded-md">
          <Tiptap />
        </div>
      </div>
    </fieldset>
  );
}

export default WorkHistoryFieldset;
