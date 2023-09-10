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
    <div style={fontStyle}>
      <header style={{ backgroundColor: color }}>
        <img src={profilePic} alt="Profile pic" />
        <h1>{fullName}</h1>
        <p>Email: {generalState.email}</p>
        <p>Phone: {generalState.phone}</p>
        <p>Location: {generalState.location}</p>
      </header>
      <p>{JSON.stringify(experience)}</p>
      <p>{JSON.stringify(education)}</p>
      <p>{color}</p>
      <p>{font}</p>
    </div>
  );
}
