import Editor from "./Editor";
import EditorButtons from "./EditorButtons";

export default function EditorContainer({
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
  showPreview,
  setShowPreview,
}) {
  return (
    <main>
      <Editor
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
      <EditorButtons
        onChangeProfile={onChangeProfile}
        generalHandlers={generalHandlers}
        onEducationChange={onEducationChange}
        onExperienceChange={onExperienceChange}
        showPreview={showPreview}
        setShowPreview={setShowPreview}
      />
    </main>
  );
}
