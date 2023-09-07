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
      />
      <EditorButtons
        onChangeProfile={onChangeProfile}
        generalHandlers={generalHandlers}
        onEducationChange={onEducationChange}
        onExperienceChange={onExperienceChange}
      />
    </main>
  );
}
