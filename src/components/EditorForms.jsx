import Picture from "./tabs/Picture";
import General from "./tabs/General";
import Information from "./tabs/Information";
import Style from "./tabs/Style";
import { useState } from "react";

export default function EditorForms({
  currentTab,
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
}) {
  const [informationDetailsOpen, setInformationDetailsOpen] = useState(null);
  const handleDetailsChange = (accordionToOpen) => {
    if (accordionToOpen === informationDetailsOpen) {
      setInformationDetailsOpen(null);
      return;
    }
    setInformationDetailsOpen(accordionToOpen);
  };

  switch (currentTab) {
    case 0:
      return (
        <Picture profilePic={profilePic} onChangeProfile={onChangeProfile} />
      );
    case 1:
      return (
        <General
          generalState={generalState}
          generalHandlers={generalHandlers}
        />
      );
    case 2:
      return (
        <Information
          education={education}
          onEducationChange={onEducationChange}
          experience={experience}
          onExperienceChange={onExperienceChange}
          accordionOpen={informationDetailsOpen}
          onAccordionOpenChange={handleDetailsChange}
        />
      );
    case 3:
      return <Style styles={styles} styleHandlers={styleHandlers} />;
    default:
      break;
  }
}
