export default function Preview({
  generalState,
  profilePic,
  education,
  experience,
  styles,
  showPreview,
}) {
  if (!showPreview) return;

  const fullName = generalState.firstName + " " + generalState.lastName;
  const [color, font] = styles;
  const fontStyle = { fontFamily: font, fontSize: "1rem" };
  const fontColor = isColorDark(color) ? "#ffffff" : "#000000";

  return (
    <div className="preview-container" style={fontStyle}>
      <header
        className="container"
        style={{ backgroundColor: color, color: fontColor }}>
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
      {experience.length !== 0 && (
        <DataSection
          data={experience}
          title="Experience"
          color={color}
          fontColor={fontColor}
        />
      )}
      {education.length !== 0 && (
        <DataSection
          data={education}
          title="Education"
          color={color}
          fontColor={fontColor}
        />
      )}
    </div>
  );
}

function DataSection({ data, title, color, fontColor }) {
  return (
    <section className="container info-section">
      <h3
        style={{ backgroundColor: color, color: fontColor }}
        className="section-title">
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

function isColorDark(color) {
  // Remove any leading "#" if present
  color = color.replace(/^#/, "");

  // Parse the color components (red, green, blue)
  const r = parseInt(color.slice(0, 2), 16);
  const g = parseInt(color.slice(2, 4), 16);
  const b = parseInt(color.slice(4, 6), 16);

  // Calculate the luminance using the formula for relative luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // You can adjust the threshold to your preference (e.g., 0.5 for a mid-point)
  const threshold = 0.5;

  // Check if the luminance is less than the threshold to determine if it's dark
  return luminance < threshold;
}
