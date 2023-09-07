import { useState } from "react";
import InformationList from "./InformationList";

export default function Information({
  education,
  onEducationChange,
  experience,
  onExperienceChange,
  detailsOpen,
  onDetailsChange,
}) {
  return (
    <section id="information-form" role="tabpanel" className="editor-form">
      <details onClick={(e) => onDetailsChange(e, 0)} open={detailsOpen === 0}>
        <summary>Experience</summary>
        <InformationList
          information={experience}
          onInformationChange={onExperienceChange}
        />
      </details>

      <details onClick={(e) => onDetailsChange(e, 1)} open={detailsOpen === 1}>
        <summary>Education</summary>
        <InformationList
          information={education}
          onInformationChange={onEducationChange}
        />
      </details>
    </section>
  );
}
