export default function Preview({
  generalState,
  profilePic,
  education,
  experience,
  styles,
}) {
  const fullName = generalState.firstName + " " + generalState.lastName;
  const [color, font] = styles;

  return (
    <div>
      <img src={profilePic} alt="Profile pic" />
      <p>Name: {fullName}</p>
      <p>Email: {generalState.email}</p>
      <p>Phone: {generalState.phone}</p>
      <p>Location: {generalState.location}</p>
      <p>{JSON.stringify(experience)}</p>
      <p>{JSON.stringify(education)}</p>
      <p>{color}</p>
      <p>{font}</p>
    </div>
  );
}
