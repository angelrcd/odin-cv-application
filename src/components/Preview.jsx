export default function Preview({
  generalState,
  profilePic,
  education,
  experience,
}) {
  const fullName = generalState.firstName + " " + generalState.lastName;
  return (
    <div>
      <img src={profilePic} alt="Profile pic" />
      <p>Name: {fullName}</p>
      <p>Email: {generalState.email}</p>
      <p>Phone: {generalState.phone}</p>
      <p>Location: {generalState.location}</p>
      <p>{JSON.stringify(experience)}</p>
      <p>{JSON.stringify(education)}</p>
    </div>
  );
}
