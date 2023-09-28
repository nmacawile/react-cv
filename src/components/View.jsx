import { useContext } from "react";
import { DataContext } from "../contexts/DataContext.jsx";

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
    },
  } = useContext(DataContext);

  return (
    <>
      <article className="text-gray-200 prose prose-invert max-w-none mb-8">
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
        <section>
          <h2>Work History</h2>
          <ul>
            <li>
              <h3>Position</h3>
              <p>
                <em>Company Name</em>, March 2011 - present
              </p>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sagittis et massa eu euismod. Vivamus viverra nisl libero, eu
                  pharetra libero volutpat id. Vestibulum eu eleifend est.
                  Vestibulum finibus, massa sit amet tincidunt facilisis, nulla
                  erat dignissim felis, non ornare lectus nisl eu nulla. Donec
                  in nisi id lorem varius dictum.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sagittis et massa eu euismod. Vivamus viverra nisl libero, eu
                  pharetra libero volutpat id. Vestibulum eu eleifend est.
                  Vestibulum finibus, massa sit amet tincidunt facilisis, nulla
                  erat dignissim felis, non ornare lectus nisl eu nulla. Donec
                  in nisi id lorem varius dictum.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sagittis et massa eu euismod. Vivamus viverra nisl libero, eu
                  pharetra libero volutpat id. Vestibulum eu eleifend est.
                  Vestibulum finibus, massa sit amet tincidunt facilisis, nulla
                  erat dignissim felis, non ornare lectus nisl eu nulla. Donec
                  in nisi id lorem varius dictum.
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <section>
          <h2>Education</h2>
          <ul>
            <li>
              <h3>Study</h3>
              <p>
                <em>Company Name</em>, March 2011 - present
              </p>
            </li>
          </ul>
        </section>
      </article>
      <button
        type="button"
        onClick={() => setActiveTab("Form")}
        className="text-neutral-100 bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-amber-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full"
      >
        Edit
      </button>
    </>
  );
}

export default View;
