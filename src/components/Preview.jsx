export default function Preview({ generalState, profilePic }) {
  const fullName = generalState.firstName + " " + generalState.lastName;
  return (
    <div>
      <img src={profilePic} alt="Profile pic" />
      <p>Name: {fullName}</p>
      <p>Email: {generalState.email}</p>
      <p>Phone: {generalState.phone}</p>
      <p>Location: {generalState.location}</p>
    </div>
  );
}
