export default function Layout({ styles, styleHandlers }) {
  const [layout, color, font] = styles;
  const [setLayout, setColor, setFont] = styleHandlers;

  return (
    <section id="layout-form" role="tabpanel" className="editor-form">
      <section>
        <h2>Layout</h2>
        <button onClick={() => setLayout("top")}>Top</button>
        <button onClick={() => setLayout("left")}>Left</button>
        <button onClick={() => setLayout("right")}>Right</button>
      </section>
      <section>
        <h2>Color</h2>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </section>
      <section>
        <h2>Fonts</h2>
        <button onClick={() => setFont("serif")}>Serif</button>
        <button onClick={() => setFont("sans")}>Sans</button>
        <button onClick={() => setFont("mono")}>Mono</button>
      </section>
    </section>
  );
}
