import EditorTabs from "./EditorTabs";
import EditorForms from "./EditorForms";
import { useState } from "react";
import "../styles/Editor.css";

export default function Editor({
  profilePic,
  onChangeProfile,
  generalState,
  generalHandlers,
  education,
  onEducationChange,
  experience,
  onExperienceChange,
  styles,
  styleHandlers,
}) {
  const [currentTab, setCurrentTab] = useState(0);

  const changeTab = (tabIndex) => setCurrentTab(tabIndex);

  return (
    <div className="editor-container">
      <EditorTabs currentTab={currentTab} onTabChange={changeTab} />
      <EditorForms
        currentTab={currentTab}
        profilePic={profilePic}
        onChangeProfile={onChangeProfile}
        generalState={generalState}
        generalHandlers={generalHandlers}
        education={education}
        onEducationChange={onEducationChange}
        experience={experience}
        onExperienceChange={onExperienceChange}
        styles={styles}
        styleHandlers={styleHandlers}
      />
    </div>
  );
}
