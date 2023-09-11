export default function Preview({
  generalState,
  profilePic,
  education,
  experience,
  styles,
  showPreview,
}) {
  const fullName = generalState.firstName + " " + generalState.lastName;
  const [color, font] = styles;

  const fontStyle = { fontFamily: font, fontSize: "1rem" };

  if (!showPreview) return;

  return (
    <div className="preview-container" style={fontStyle}>
      <header className="container" style={{ backgroundColor: color }}>
        <img src={profilePic} alt="Profile pic" />
        <div>
          <h1>{fullName}</h1>
          <h2>{generalState.jobTitle}</h2>
        </div>
      </header>
      <section className="contact container">
        <p>
          <svg style={{ color: color }}>
            <use href="/icons/icons.svg#email" />
          </svg>
          {generalState.email}
        </p>
        <p>
          <svg style={{ color: color }}>
            <use href="/icons/icons.svg#phone" />
          </svg>
          {generalState.phone}
        </p>
        <p>
          <svg style={{ color: color }}>
            <use href="/icons/icons.svg#location" />
          </svg>
          {generalState.location}
        </p>
      </section>
      <DataSection data={experience} title="Experience" color={color} />
      <DataSection data={education} title="Education" color={color} />
    </div>
  );
}

function DataSection({ data, title, color }) {
  return (
    <section className="container info-section">
      <h3 style={{ backgroundColor: color }} className="section-title">
        {title}
      </h3>
      <ul>
        {data.map((dataUnit) => {
          return (
            <li className="info-unit" key={dataUnit.id}>
              <h4>
                {dataUnit.name} ({dataUnit.startDate} - {dataUnit.endDate})
              </h4>
              <h5>{dataUnit.organization}</h5>
              <p>{dataUnit.description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
