export default function GeneralInput({ label, type = "text", state, handler }) {
  return (
    <label>
      <span>{label}</span>
      <input
        type={type}
        value={state}
        onChange={(e) => handler(e.target.value)}
      />
    </label>
  );
}
