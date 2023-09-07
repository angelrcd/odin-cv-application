export default function InformationList({ information, onInformationChange }) {
  return (
    <ul>
      {information.map((infoUnit) => (
        <li key={infoUnit.id}>{infoUnit.name}</li>
      ))}
    </ul>
  );
}
