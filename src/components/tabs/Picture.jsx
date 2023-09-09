import { useRef } from "react";

export default function Picture({ profilePic, onChangeProfile }) {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUrl = e.target[0].value;
    onChangeProfile(newUrl);
    e.target[0].value = "";
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      onChangeProfile(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <section id="picture-form" role="tabpanel" className="editor-form">
      <h2>Profile picture</h2>
      {profilePic && (
        <div className="editor-image-container">
          <img src={profilePic} alt="Profile pic" />
          <button
            className="remove-pic clear btn button-with-icon"
            onClick={() => onChangeProfile("")}>
            <svg>
              <use href="/icons/icons.svg#delete" />
            </svg>
          </button>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <label>
          <span>Image URL</span>
          <input type="text" />
        </label>
        <button type="submit">Save</button>
      </form>
      <span>
        <b>or</b>
      </span>
      <form>
        <label>
          <span>Upload new pic</span>
          <input
            ref={inputRef}
            style={{ display: "none" }}
            type="file"
            onChange={onImageChange}
          />
          <input
            className="btn primary-button"
            type="button"
            value="Browse..."
            onClick={() => inputRef.current.click()}
          />
        </label>
      </form>
    </section>
  );
}
