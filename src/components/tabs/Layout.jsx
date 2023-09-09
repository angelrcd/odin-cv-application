export default function Layout({ styles, styleHandlers }) {
  const [layout, color, font] = styles;
  const [setLayout, setColor, setFont] = styleHandlers;

  return (
    <section id="layout-form" role="tabpanel" className="editor-form">
      <section>
        <h2>Layout</h2>
        <button className="btn" onClick={() => setLayout("top")}>
          Top
        </button>
        <button className="btn" onClick={() => setLayout("left")}>
          Left
        </button>
        <button className="btn" onClick={() => setLayout("right")}>
          Right
        </button>
      </section>
      <section>
        <h2>Color</h2>
        <label>
          Select header color
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
      </section>
      <section>
        <h2>Fonts</h2>
        <div style={{ display: "flex" }}>
          <button
            className={
              font == "serif" ? "selected btn font-btn" : "btn font-btn"
            }
            data-font="serif"
            onClick={() => setFont("serif")}>
            <span>Aa</span>
            <span>Serif</span>
          </button>
          <button
            className={
              font == "sans" ? "selected btn font-btn" : "btn font-btn"
            }
            data-font="sans"
            onClick={() => setFont("sans")}>
            <span>Aa</span>
            <span>Sans</span>
          </button>
          <button
            className={
              font == "mono" ? "selected btn font-btn" : "btn font-btn"
            }
            data-font="mono"
            onClick={() => setFont("mono")}>
            <span>Aa</span>
            <span>Mono</span>
          </button>
        </div>
      </section>
    </section>
  );
}
