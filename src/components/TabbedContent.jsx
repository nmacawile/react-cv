import { useState } from "react";
import Form from "./Form.jsx";
import View from "./View.jsx";

function TabbedContent() {
  const [activeTab, setActiveTab] = useState("form");

  const activeTabClasses =
    "inline-block p-4 border-b-2 rounded-t-lg text-amber-600 dark:text-amber-500 border-red-600";
  const inactiveTabClasses =
    "inline-block p-4 border-b-2 rounded-t-lg border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";

  return (
    <>
      <div className="mb-4 border-b border-gray-300 dark:border-gray-700 backdrop-blur-sm z-10 sticky top-0">
        <ul
          className="flex flex-wrap -mb-px text-sm dark:text-gray-400 font-medium text-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          {["form", "view"].map((tab, index) => (
            <li className="tab" key={`${tab}-tab`} role="presentation">
              <button
                className={
                  activeTab == tab ? activeTabClasses : inactiveTabClasses
                }
                onClick={() => setActiveTab(tab)}
                id={`${tab}-tab`}
                type="button"
                role="tab"
                aria-controls={tab}
                aria-selected={activeTab == tab}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <main id="myTabContent" className="max-w-4xl m-auto p-4">
        <div
          className={activeTab == "form" ? "" : "hidden"}
          id="form"
          role="tabpanel"
          aria-labelledby="form-tab"
        >
          <Form setActiveTab={setActiveTab}></Form>
        </div>
        <div
          className={activeTab == "view" ? "" : "hidden"}
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
