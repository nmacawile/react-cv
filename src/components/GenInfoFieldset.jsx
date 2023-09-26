function GenInfoFieldset() {
  const inputFieldClasses =
    "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
  const labelClasses =
    "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

  return (
    <fieldset>
      <legend className="text-xl mb-4 text-gray-200">General Information</legend>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_first_name"
            id="floating_first_name"
            className={inputFieldClasses}
            placeholder=" "
            required
          />
          <label htmlFor="floating_first_name" className={labelClasses}>
            First name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="floating_last_name"
            id="floating_last_name"
            className={inputFieldClasses}
            placeholder=" "
            required
          />
          <label htmlFor="floating_last_name" className={labelClasses}>
            Last name
          </label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="floating_phone"
            id="floating_phone"
            className={inputFieldClasses}
            placeholder=" "
            required
          />
          <label htmlFor="floating_phone" className={labelClasses}>
            Phone number (123-456-7890)
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className={inputFieldClasses}
            placeholder=" "
            required
          />
          <label htmlFor="floating_email" className={labelClasses}>
            Email address
          </label>
        </div>
      </div>

      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="floating_job_title"
          id="floating_job_title"
          className={inputFieldClasses}
          placeholder=" "
          required
        />
        <label htmlFor="floating_job_title" className={labelClasses}>
          Job Title
        </label>
      </div>

      <div className="relative z-0 w-full mb-6 group">
        <textarea
          name="floating_personal_statement"
          id="floating_personal_statement"
          className={inputFieldClasses + " min-h-[6ch]"}
          placeholder=" "
          required
        />
        <label htmlFor="floating_personal_statement" className={labelClasses}>
          Personal Statement
        </label>
      </div>
    </fieldset>
  );
}

export default GenInfoFieldset;
