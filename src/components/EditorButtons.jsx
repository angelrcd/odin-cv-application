import { EXAMPLE } from "../constants";

export default function EditorButtons({ generalHandlers }) {
  const setExample = () => {
    generalHandlers.handleFirstNameChange(EXAMPLE.firstName);
    generalHandlers.handleLastNameChange(EXAMPLE.lastName);
    generalHandlers.handleEmailChange(EXAMPLE.email);
    generalHandlers.handlePhoneChange(EXAMPLE.phone);
    generalHandlers.handleLocationChange(EXAMPLE.location);
  };

  const clear = () => {
    Object.values(generalHandlers).forEach((handler) => {
      handler("");
    });
  };

  return (
    <div>
      <button onClick={setExample}>Example</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}
