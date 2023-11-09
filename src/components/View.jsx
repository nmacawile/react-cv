import { useContext } from "react";
import { DataContext } from "../contexts/DataContext.jsx";
import HtmlViewer from "./HtmlViewer.jsx";
import PrimaryButton from "./PrimaryButton.jsx";

function View({ setActiveTab }) {
  const {
    data: {
      generalInfo: {
        firstName,
        lastName,
        jobTitle,
        personalStatement,
        email,
        phone,
      },
      education,
      workHistory,
    },
  } = useContext(DataContext);

  const parseYearMonth = (yearMonth) => {
    if (!yearMonth) return;
    const [year, month] = yearMonth.split("-");
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${months[+month - 1]} ${year}`;
  };

  return (
    <>
      <article className="dark:text-gray-200 prose dark:prose-invert max-w-none mb-8">
        <header>
          <h1 className="mb-2">
            {firstName} {lastName}
          </h1>
          <p className="mt-2 underline-offset-2 underline">{jobTitle}</p>
          <ul className="list-none p-0">
            <li>
              <strong>E-mail:</strong> {email}
            </li>
            <li>
              <strong>Phone:</strong> {phone}
            </li>
          </ul>
        </header>
        <hr></hr>
        <section>
          <p>{personalStatement}</p>
        </section>
        <hr></hr>
        <section className={workHistory.length == 0 ? "hidden" : ""}>
          <h2>Work History</h2>
          <ul>
            {workHistory.map((c, i) => {
              return (
                <li key={`viewCompany${i}`}>
                  <h3>{c.position}</h3>
                  <p>
                    <em>{c.name}</em>,{" "}
                    {`${parseYearMonth(c.start)} - ${
                      parseYearMonth(c.end) || "present"
                    }`}
                  </p>

                  <div className="prose dark:prose-invert">
                    <HtmlViewer content={c.responsibilities} />
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
        <hr className={workHistory.length == 0 ? "hidden" : ""}></hr>
        <section className={education.length == 0 ? "hidden" : ""}>
          <h2>Education</h2>
          <ul>
            {education.map((s, i) => {
              return (
                <li key={`viewSchool${i}`}>
                  <h3>{s.study}</h3>
                  <p>
                    <em>{s.name}</em>,{" "}
                    {`${parseYearMonth(s.start)} - ${parseYearMonth(s.end)}`}
                  </p>
                </li>
              );
            })}
          </ul>
        </section>
        <hr className={education.length == 0 ? "hidden" : ""}></hr>
      </article>
      <PrimaryButton
        type="button"
        onClick={() => setActiveTab("form")}
        text="Edit"
      />
    </>
  );
}

export default View;
