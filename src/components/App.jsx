import EditorContainer from "./EditorContainer";
import Preview from "./Preview";
import { useState } from "react";
import { EXAMPLE } from "../constants";

function App() {
  // State
  const [profilePic, setProfilePic] = useState("/sample-profile.jpg");
  const [firstName, setfirstName] = useState(EXAMPLE.firstName);
  const [lastName, setlastName] = useState(EXAMPLE.lastName);
  const [email, setEmail] = useState(EXAMPLE.email);
  const [phone, setPhone] = useState(EXAMPLE.phone);
  const [location, setLocation] = useState(EXAMPLE.location);
  const generalState = { firstName, lastName, email, phone, location };
  const [experience, setExperience] = useState(EXAMPLE.experience);
  const [education, setEducation] = useState(EXAMPLE.education);

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
        profilePic={profilePic}
        onChangeProfile={setProfilePic}
        generalState={generalState}
        generalHandlers={generalHandlers}
        education={education}
        onEducationChange={setEducation}
        experience={experience}
        onExperienceChange={setExperience}
      />
      <Preview
        generalState={generalState}
        profilePic={profilePic}
        education={education}
        experience={experience}
      />
    </>
  );
}

export default App;
