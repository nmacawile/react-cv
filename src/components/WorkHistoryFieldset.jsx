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
            name="floating_company_name"
            id="floating_company_name"
            className={inputFieldClasses}
            placeholder=" "
            required
          />
          <label htmlFor="floating_company_name" className={labelClasses}>
            Company name
          </label>
        </div>
        <div className="grid md:grid-cols-3 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_position"
              id="floating_position"
              className={inputFieldClasses}
              placeholder=" "
              required
            />
            <label htmlFor="floating_position" className={labelClasses}>
              Position
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="month"
              name="floating_company_start"
              id="floating_company_start"
              className={inputFieldClasses}
              placeholder=" "
              required
            />
            <label htmlFor="floating_company_start" className={labelClasses}>
              Start
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="month"
              name="floating_company_end"
              id="floating_company_end"
              className={inputFieldClasses}
              placeholder=" "
              required
            />
            <label htmlFor="floating_company_end" className={labelClasses}>
              End
            </label>
          </div>
        </div>

        <h2 className="text-md text-gray-200 mb-2">Responsibilities</h2>
        <div className="relative z-0 w-full mb-6 group">
          <textarea
            name="responsibilities"
            id="responsibilities"
            className={inputFieldClasses}
            placeholder=" "
            required
          />
        </div>
      </div>
    </fieldset>
  );
}

export default WorkHistoryFieldset;