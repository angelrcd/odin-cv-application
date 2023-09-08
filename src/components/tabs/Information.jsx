import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
  const [isEditOpen, setIsEditOpen] = useState(false);
  const handleEditToggle = () => {
    setIsEditOpen(!isEditOpen);
  };

  return (
    <div className="accordion">
      <Summary
        summary={summary}
        index={index}
        accordionOpen={accordionOpen}
        onAccordionOpenChange={onAccordionOpenChange}
      />
      {accordionOpen === index && !isEditOpen && (
        <AccordionContent
          summary={summary}
          data={data}
          onDataChange={onDataChange}
          onEditToggle={handleEditToggle}
        />
      )}
      {accordionOpen === index && isEditOpen && (
        <EditForm
          onEditToggle={handleEditToggle}
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

function AccordionContent({ summary, data, onDataChange, onEditToggle }) {
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
      <button onClick={onEditToggle}>+ {summary}</button>
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

function EditForm({ onEditToggle, data, onDataChange }) {
  const [ongoing, setOngoing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    // Generate a unique id to use as key
    formJson.id = uuidv4();
    // Indicate ongoing if no endDate
    if (!formJson.endDate) {
      formJson.endDate = "present";
    }

    onDataChange([...data, formJson]);
    onEditToggle();
  };

  return (
    <form id="info-form" onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input
          required
          name="name"
          type="text"
          placeholder="Degree/course name"
        />
      </label>
      <label>
        <span>Organization</span>
        <input required name="organization" type="text" placeholder="School" />
      </label>
      <label className="ongoing-label">
        <span>Ongoing: </span>
        <input type="checkbox" onChange={() => setOngoing(!ongoing)} />
      </label>
      <div className="date-row">
        <label>
          <span>Start date</span>
          <input name="startDate" required type="mont" placeholder="2018-05" />
        </label>
        {!ongoing && (
          <label>
            <span>End date</span>
            <input name="endDate" required type="month" placeholder="2020-05" />
          </label>
        )}
      </div>

      <label>
        <span>Description</span>
        <textarea
          name="description"
          className="info-form-description"></textarea>
      </label>
      <div className="buttons-container">
        <button onClick={onEditToggle} type="button">
          Cancel
        </button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
}
