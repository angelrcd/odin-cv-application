import { EXAMPLE } from "../constants";

export default function EditorButtons({
  onChangeProfile,
  generalHandlers,
  onEducationChange,
  onExperienceChange,
}) {
  const setExample = () => {
    onChangeProfile(EXAMPLE.profilePicUrl);
    generalHandlers.handleFirstNameChange(EXAMPLE.firstName);
    generalHandlers.handleLastNameChange(EXAMPLE.lastName);
    generalHandlers.handleEmailChange(EXAMPLE.email);
    generalHandlers.handlePhoneChange(EXAMPLE.phone);
    generalHandlers.handleLocationChange(EXAMPLE.location);
    onEducationChange(EXAMPLE.education);
    onExperienceChange(EXAMPLE.experience);
  };

  const clear = () => {
    onChangeProfile("");
    Object.values(generalHandlers).forEach((handler) => {
      handler("");
    });
    onEducationChange([]);
    onExperienceChange([]);
  };

  return (
    <div className="editor-buttons-container">
      <div className="buttons-container">
        <button className="btn" onClick={setExample}>
          Example
        </button>
        <button className="btn button-with-icon clear" onClick={clear}>
          <svg>
            <use href="/icons/icons.svg#delete" />
          </svg>
          Clear
        </button>
      </div>
    </div>
  );
}
