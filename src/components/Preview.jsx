export default function Preview({ generalState }) {
  const fullName = generalState.firstName + " " + generalState.lastName;
  return (
    <div>
      <p>Name: {fullName}</p>
      <p>Email: {generalState.email}</p>
      <p>Phone: {generalState.phone}</p>
      <p>Location: {generalState.location}</p>
    </div>
  );
}
