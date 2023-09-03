import { TABS } from "../constants";

export default function EditorTabs({ currentTab, onTabChange }) {
  return (
    <nav>
      <ul className="tabs-container">
        {TABS.map((tab, index) => {
          return (
            <li key={index}>
              <button
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
