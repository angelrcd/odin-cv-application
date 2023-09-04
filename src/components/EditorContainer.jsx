import Editor from "./Editor";
import EditorButtons from "./EditorButtons";

export default function EditorContainer({ generalState, generalHandlers }) {
  return (
    <main>
      <Editor generalState={generalState} generalHandlers={generalHandlers} />
      <EditorButtons generalHandlers={generalHandlers} />
    </main>
  );
}
