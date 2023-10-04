import { useContext } from "react";
import { DataContext } from "../contexts/DataContext.jsx";
import {
  inputFieldClasses,
  labelClasses,
} from "../shared/formFieldClasses.jsx";


function GenInfoFieldset() {
  const {
    handleFieldsetChange,
    data: { generalInfo },
  } = useContext(DataContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newGeneralInfo = { ...generalInfo, [name]: value };
    handleFieldsetChange("generalInfo", newGeneralInfo);
  };

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
            value={generalInfo.firstName}
            onChange={handleChange}
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
            value={generalInfo.lastName}
            onChange={handleChange}
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
            value={generalInfo.phone}
            onChange={handleChange}
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
            value={generalInfo.email}
            onChange={handleChange}
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
          value={generalInfo.jobTitle}
          onChange={handleChange}
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
          value={generalInfo.personalStatement}
          onChange={handleChange}
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
