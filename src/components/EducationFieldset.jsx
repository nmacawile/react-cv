function EducationFieldset() {
  const inputFieldClasses =
    "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
  const labelClasses =
    "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

  return (
    <fieldset>
      <legend className="text-xl mb-4 text-gray-200">Education</legend>

      <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-zinc-900 dark:border-zinc-800 p-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="schoolName"
            id="schoolName"
            className={inputFieldClasses}
            placeholder=" "
            required
          />
          <label htmlFor="schoolName" className={labelClasses}>
            School name
          </label>
        </div>
        <div className="grid md:grid-cols-3 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="study"
              id="study"
              className={inputFieldClasses}
              placeholder=" "
              required
            />
            <label htmlFor="study" className={labelClasses}>
              Study
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="month"
              name="schoolStart"
              id="schoolStart"
              className={inputFieldClasses}
              placeholder=" "
              required
            />
            <label htmlFor="schoolStart" className={labelClasses}>
              Start
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="month"
              name="schoolEnd"
              id="schoolEnd"
              className={inputFieldClasses}
              placeholder=" "
              required
            />
            <label htmlFor="schoolEnd" className={labelClasses}>
              End
            </label>
          </div>
        </div>
      </div>
    </fieldset>
  );
}

export default EducationFieldset;
