import { TABS } from "../constants";

export default function EditorTabs({ currentTab, onTabChange }) {
  return (
    <nav>
      <ul role="tablist" className="tabs-container">
        {TABS.map((tab, index) => {
          return (
            <li key={index}>
              <button
                role="tab"
                aria-selected={currentTab === index}
                aria-controls={tab.toLowerCase().concat("-form")}
                className={`tab ${currentTab === index ? "selected" : ""}`}
                onClick={() => onTabChange(index)}>
                {tab}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
