import Editor from "./Editor";
import EditorButtons from "./EditorButtons";

export default function EditorContainer({
  profilePic,
  onChangeProfile,
  generalState,
  generalHandlers,
}) {
  return (
    <main>
      <Editor
        profilePic={profilePic}
        onChangeProfile={onChangeProfile}
        generalState={generalState}
        generalHandlers={generalHandlers}
      />
      <EditorButtons
        onChangeProfile={onChangeProfile}
        generalHandlers={generalHandlers}
      />
    </main>
  );
}
