import { TABS } from "../constants";

export default function EditorTabs({ currentTab, onTabChange }) {
  return (
    <nav>
      {TABS.map((tab, index) => {
        return (
          <button
            className={`tab ${currentTab === index ? "selected" : ""}`}
            key={index}
            onClick={() => onTabChange(index)}>
            {tab}
          </button>
        );
      })}
    </nav>
  );
}
