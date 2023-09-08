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
          <DataListItem key={dataUnit.id} name={dataUnit.name} />
        ))}
      </ul>
      <button>+ {summary}</button>
    </div>
  );
}

function DataListItem({ name }) {
  return (
    <li className="data-item">
      <span>{name}</span>
      <div>
        <button>edit</button>
        <button>remove</button>
      </div>
    </li>
  );
}
