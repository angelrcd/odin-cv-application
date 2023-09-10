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

  // if -1 it creates new form, any other number indicates the index of the info to edit
  const [formSubmitAction, setFormSubmitAction] = useState(-1);

  const handleEditToggle = () => {
    setIsEditOpen(!isEditOpen);
  };

  const submitNewInfo = (e) => {
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
    handleEditToggle();
  };

  const submitEditInfo = (e, index) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    // Use same id as the data you're editing
    formJson.id = data[index].id;
    // Indicate ongoing if no endDate
    if (!formJson.endDate) {
      formJson.endDate = "present";
    }

    console.log(data);
    console.log([...data.slice(0, index), formJson, ...data.slice(index + 1)]);
    onDataChange([...data.slice(0, index), formJson, ...data.slice(index + 1)]);
    handleEditToggle();
  };

  const onSubmit = formSubmitAction === -1 ? submitNewInfo : submitEditInfo;

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
          setFormSubmitAction={setFormSubmitAction}
        />
      )}
      {accordionOpen === index && isEditOpen && (
        <EditForm
          onEditToggle={handleEditToggle}
          data={data}
          index={formSubmitAction}
          onSubmit={onSubmit}
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

function AccordionContent({
  summary,
  data,
  onDataChange,
  onEditToggle,
  setFormSubmitAction,
}) {
  return (
    <div
      id={summary.toLowerCase() + "-content"}
      aria-labelledby={summary.toLowerCase() + "-toggle"}>
      <ul>
        {data.map((dataUnit, index) => (
          <DataListItem
            key={dataUnit.id}
            dataList={data}
            index={index}
            dataUnit={dataUnit}
            onDataChange={onDataChange}
            onEditToggle={onEditToggle}
            setFormSubmitAction={setFormSubmitAction}
          />
        ))}
      </ul>
      <button
        className="btn add-info-button primary-button"
        onClick={() => {
          onEditToggle();
          setFormSubmitAction(-1);
        }}>
        Add {summary}
      </button>
    </div>
  );
}

function DataListItem({
  dataUnit,
  dataList,
  index,
  onDataChange,
  onEditToggle,
  setFormSubmitAction,
}) {
  function removeData(dataToRemove, dataList) {
    const newDataList = [
      ...dataList.slice(0, index),
      ...dataList.slice(index + 1),
    ];
    console.log(newDataList);
    onDataChange(newDataList);
  }

  return (
    <li className="data-item">
      <span
        style={{
          maxWidth: "12rem",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}>
        {dataUnit.name}
      </span>
      <div className="list-info-button-container">
        <button
          className="btn"
          onClick={() => {
            onEditToggle();
            setFormSubmitAction(index);
          }}>
          edit
        </button>
        <button className="btn" onClick={() => removeData(dataUnit, dataList)}>
          remove
        </button>
      </div>
    </li>
  );
}

function EditForm({ onEditToggle, data, index, onSubmit }) {
  // undefined when adding new data
  const thisData = data[index];
  const [ongoing, setOngoing] = useState(thisData?.endDate === "present");

  const toggleOnGoing = () => {
    setOngoing(!ongoing);
  };

  console.log(thisData);

  return (
    <form id="info-form" onSubmit={(e) => onSubmit(e, index)}>
      <label>
        <span>Name</span>
        <input
          required
          name="name"
          type="text"
          defaultValue={thisData?.name}
          placeholder="Degree/course name"
        />
      </label>
      <label>
        <span>Organization</span>
        <input
          required
          name="organization"
          type="text"
          defaultValue={thisData?.organization}
          placeholder="School"
        />
      </label>
      <label className="ongoing-label">
        <span>Ongoing: </span>
        <input type="checkbox" checked={ongoing} onChange={toggleOnGoing} />
      </label>
      <div className="date-row">
        <label>
          <span>Start date</span>
          <input
            name="startDate"
            required
            type="month"
            defaultValue={thisData?.startDate}
            placeholder="2018-05"
          />
        </label>
        {!ongoing && (
          <label>
            <span>End date</span>
            <input
              name="endDate"
              required
              type="month"
              defaultValue={
                thisData?.endDate !== "present" ? thisData?.endDate : ""
              }
              placeholder="2020-05"
            />
          </label>
        )}
      </div>

      <label>
        <span>Description</span>
        <textarea
          name="description"
          className="info-form-description"
          defaultValue={thisData?.description}></textarea>
      </label>
      <div className="buttons-container">
        <button className="btn" onClick={onEditToggle} type="button">
          Cancel
        </button>
        <button className="btn primary-button" type="submit">
          Save
        </button>
      </div>
    </form>
  );
}
