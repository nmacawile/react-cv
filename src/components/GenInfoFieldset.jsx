function GenInfoFieldset() {
  const inputFieldClasses =
    "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
  const labelClasses =
    "peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";

  return (
    <fieldset>
      <legend className="text-xl mb-4 text-gray-200">
        General Information
      </legend>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="firstName"
            id="firstName"
            className={inputFieldClasses}
            placeholder=" "
            required
          />
          <label htmlFor="firstName" className={labelClasses}>
            First name
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="lastName"
            id="lastName"
            className={inputFieldClasses}
            placeholder=" "
            required
          />
          <label htmlFor="lastName" className={labelClasses}>
            Last name
          </label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="phone"
            id="phone"
            className={inputFieldClasses}
            autoComplete="off"
            placeholder=" "
            required
          />
          <label htmlFor="phone" className={labelClasses}>
            Phone number (123-456-7890)
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="email"
            id="email"
            className={inputFieldClasses}            
            autoComplete="off"
            placeholder=" "
            required
          />
          <label htmlFor="email" className={labelClasses}>
            Email address
          </label>
        </div>
      </div>

      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          name="jobTitle"
          id="jobTitle"
          className={inputFieldClasses}
          placeholder=" "
          required
        />
        <label htmlFor="jobTitle" className={labelClasses}>
          Job Title
        </label>
      </div>

      <div className="relative z-0 w-full mb-6 group">
        <textarea
          name="personalStatement"
          id="personalStatement"
          className={inputFieldClasses + " min-h-[6ch] h-[12ch]"}
          placeholder=" "
          required
        />
        <label htmlFor="personalStatement" className={labelClasses}>
          Personal Statement
        </label>
      </div>
    </fieldset>
  );
}

export default GenInfoFieldset;
