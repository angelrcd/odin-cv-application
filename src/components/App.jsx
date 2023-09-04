import EditorContainer from "./EditorContainer";
import Preview from "./Preview";
import { useState } from "react";

function App() {
  // State
  const [firstName, setfirstName] = useState("John");
  const [lastName, setlastName] = useState("Doe");
  const [email, setEmail] = useState("john_doe@email.com");
  const [phone, setPhone] = useState("+34 52912933");
  const [location, setLocation] = useState("New York, USA");
  const generalState = { firstName, lastName, email, phone, location };

  // Event Handlers
  const handleFirstNameChange = (e) => setfirstName(e.target.value);
  const handleLastNameChange = (e) => setlastName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);
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
