export default function GeneralInput({ label, state, handler }) {
  return (
    <label>
      <span>{label}</span>
      <input
        type="text"
        value={state}
        onChange={(e) => handler(e.target.value)}
      />
    </label>
  );
}
