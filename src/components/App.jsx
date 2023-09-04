import EditorContainer from "./EditorContainer";
import Preview from "./Preview";
import { useState } from "react";
import { EXAMPLE } from "../constants";

function App() {
  // State
  const [firstName, setfirstName] = useState(EXAMPLE.firstName);
  const [lastName, setlastName] = useState(EXAMPLE.lastName);
  const [email, setEmail] = useState(EXAMPLE.email);
  const [phone, setPhone] = useState(EXAMPLE.phone);
  const [location, setLocation] = useState(EXAMPLE.location);
  const generalState = { firstName, lastName, email, phone, location };

  // Event Handlers
  const handleFirstNameChange = (newVal) => setfirstName(newVal);
  const handleLastNameChange = (newVal) => setlastName(newVal);
  const handleEmailChange = (newVal) => setEmail(newVal);
  const handlePhoneChange = (newVal) => setPhone(newVal);
  const handleLocationChange = (newVal) => setLocation(newVal);
  const generalHandlers = {
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
    handlePhoneChange,
    handleLocationChange,
  };

  return (
    <>
      <EditorContainer
        generalState={generalState}
        generalHandlers={generalHandlers}
      />
      <Preview generalState={generalState} />
    </>
  );
}

export default App;
