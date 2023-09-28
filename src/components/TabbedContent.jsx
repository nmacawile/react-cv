import { useState } from "react";
import Form from "./Form.jsx";
import View from "./View.jsx";

function TabbedContent() {
  const [activeTab, setActiveTab] = useState("Form");

  const activeTabClasses =
    "inline-block p-4 border-b-2 rounded-t-lg text-amber-500 border-red-600";
  const inactiveTabClasses =
    "inline-block p-4 border-b-2 rounded-t-lg border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";

  return (
    <>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700 backdrop-blur-sm z-10 sticky top-0">
        <ul
          className="flex flex-wrap -mb-px text-sm text-gray-400 font-medium text-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li className="mr-2" role="presentation">
            <button
              className={
                activeTab == "Form" ? activeTabClasses : inactiveTabClasses
              }
              onClick={() => setActiveTab("Form")}
              id="form-tab"
              type="button"
              role="tab"
              aria-controls="form"
              aria-selected={activeTab == "Form"}
            >
              Form
            </button>
          </li>
          <li role="presentation">
            <button
              className={
                activeTab == "View" ? activeTabClasses : inactiveTabClasses
              }
              onClick={() => setActiveTab("View")}
              id="view-tab"
              type="button"
              role="tab"
              aria-controls="view"
              aria-selected={activeTab == "View"}
            >
              View
            </button>
          </li>
        </ul>
      </div>
      <main id="myTabContent" className="max-w-4xl m-auto p-4">
        <div
          className={activeTab == "Form" ? "" : "hidden"}
          id="form"
          role="tabpanel"
          aria-labelledby="form-tab"
        >
          <Form setActiveTab={setActiveTab}></Form>
        </div>
        <div
          className={activeTab == "View" ? "" : "hidden"}
          id="view"
          role="tabpanel"
          aria-labelledby="view-tab"
        >
          <View setActiveTab={setActiveTab}></View>
        </div>
      </main>
    </>
  );
}

export default TabbedContent;
