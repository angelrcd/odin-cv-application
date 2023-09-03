import EditorTabs from "./EditorTabs";
import EditorForms from "./EditorForms";
import { useState } from "react";
import "../styles/Editor.css";

export default function Editor() {
  const [currentTab, setCurrentTab] = useState(0);

  const changeTab = (tabIndex) => setCurrentTab(tabIndex);

  return (
    <div className="editor-container">
      <EditorTabs currentTab={currentTab} onTabChange={changeTab} />
      <EditorForms currentTab={currentTab} />
    </div>
  );
}
