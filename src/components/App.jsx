import EditorContainer from "./EditorContainer";
import Preview from "./Preview";
import { useState } from "react";
import { EXAMPLE } from "../constants";

function App() {
  // State
  const [profilePic, setProfilePic] = useState("/sample-profile.jpg");
  const [firstName, setfirstName] = useState(EXAMPLE.firstName);
  const [lastName, setlastName] = useState(EXAMPLE.lastName);
  const [jobTitle, setJobTitle] = useState(EXAMPLE.jobTitle);
  const [email, setEmail] = useState(EXAMPLE.email);
  const [phone, setPhone] = useState(EXAMPLE.phone);
  const [location, setLocation] = useState(EXAMPLE.location);
  const generalState = {
    firstName,
    lastName,
    jobTitle,
    email,
    phone,
    location,
  };
  const [experience, setExperience] = useState(EXAMPLE.experience);
  const [education, setEducation] = useState(EXAMPLE.education);
  const [color, setColor] = useState("#0E374E");
  const [font, setFont] = useState("serif");
  const styleData = [color, font];
  const styleHandlers = [setColor, setFont];
  const [showPreview, setShowPreview] = useState(true);

  // Event Handlers
  const handleFirstNameChange = (newVal) => setfirstName(newVal);
  const handleLastNameChange = (newVal) => setlastName(newVal);
  const handleJobTitleChange = (newVal) => setJobTitle(newVal);
  const handleEmailChange = (newVal) => setEmail(newVal);
  const handlePhoneChange = (newVal) => setPhone(newVal);
  const handleLocationChange = (newVal) => setLocation(newVal);
  const generalHandlers = {
    handleFirstNameChange,
    handleLastNameChange,
    handleJobTitleChange,
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
        styles={styleData}
        styleHandlers={styleHandlers}
        showPreview={showPreview}
        setShowPreview={setShowPreview}
      />
      <Preview
        generalState={generalState}
        profilePic={profilePic}
        education={education}
        experience={experience}
        styles={styleData}
        showPreview={showPreview}
      />
    </>
  );
}

export default App;
