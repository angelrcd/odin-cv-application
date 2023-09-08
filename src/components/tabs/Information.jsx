import { useState } from "react";

export default function Information({
  education,
  onEducationChange,
  experience,
  onExperienceChange,
  accordionOpen,
  onAccordionOpenChange,
}) {
  return (
    <section id="information-form" role="tabpanel" className="editor-form">
      <Accordion
        summary="Experience"
        index={0}
        data={experience}
        onDataChange={onExperienceChange}
        accordionOpen={accordionOpen}
        onAccordionOpenChange={onAccordionOpenChange}
      />

      <Accordion
        summary="Education"
        index={1}
        data={education}
        onDataChange={onEducationChange}
        accordionOpen={accordionOpen}
        onAccordionOpenChange={onAccordionOpenChange}
      />
    </section>
  );
}

function Accordion({
  summary,
  index,
  data,
  onDataChange,
  accordionOpen,
  onAccordionOpenChange,
}) {
  return (
    <div className="accordion">
      <Summary
        summary={summary}
        index={index}
        accordionOpen={accordionOpen}
        onAccordionOpenChange={onAccordionOpenChange}
      />
      {accordionOpen === index && (
        <AccordionContent
          summary={summary}
          data={data}
          onDataChange={onDataChange}
        />
      )}
    </div>
  );
}

function Summary({ summary, index, accordionOpen, onAccordionOpenChange }) {
  const isOpen = accordionOpen === index;
  return (
    <h2>
      <button
        id={summary.toLowerCase() + "-toggle"}
        aria-expanded={isOpen}
        aria-controls={summary.toLowerCase() + "-content"}
        className={`accordion-toggle ${isOpen ? "open" : ""}`}
        onClick={() => onAccordionOpenChange(index)}>
        {summary}
      </button>
    </h2>
  );
}

function AccordionContent({ summary, data, onDataChange }) {
  return (
    <div
      id={summary.toLowerCase() + "-content"}
      aria-labelledby={summary.toLowerCase() + "-toggle"}>
      <ul>
        {data.map((dataUnit) => (
          <DataListItem
            key={dataUnit.id}
            dataList={data}
            dataUnit={dataUnit}
            onDataChange={onDataChange}
          />
        ))}
      </ul>
      <button>+ {summary}</button>
      <EditForm />
    </div>
  );
}

function DataListItem({ dataUnit, dataList, onDataChange }) {
  function removeData(dataToRemove, dataList) {
    const indexToRemove = dataList.findIndex((data) => data.id === dataUnit.id);
    const newDataList = [
      ...dataList.slice(0, indexToRemove),
      ...dataList.slice(indexToRemove + 1),
    ];
    console.log(newDataList);
    onDataChange(newDataList);
  }

  return (
    <li className="data-item">
      <span>{dataUnit.name}</span>
      <div>
        <button>edit</button>
        <button onClick={() => removeData(dataUnit, dataList)}>remove</button>
      </div>
    </li>
  );
}

function EditForm() {
  const [ongoing, setOngoing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <form id="info-form" onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input required type="text" placeholder="Degree/course name" />
      </label>
      <label>
        <span>Organization</span>
        <input required type="text" placeholder="School" />
      </label>
      <label className="ongoing-label">
        <span>Ongoing: </span>
        <input type="checkbox" onChange={() => setOngoing(!ongoing)} />
      </label>
      <div className="date-row">
        <label>
          <span>Start date</span>
          <input required type="mont" placeholder="2018-05" />
        </label>
        {!ongoing && (
          <label>
            <span>End date</span>
            <input required type="month" placeholder="2020-05" />
          </label>
        )}
      </div>

      <label>
        <span>Description</span>
        <textarea className="info-form-description"></textarea>
      </label>
      <div className="buttons-container">
        <button type="button">Cancel</button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
}
