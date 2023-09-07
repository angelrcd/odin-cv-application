import GeneralInput from "./GeneralInput";

export default function General({ generalState, generalHandlers }) {
  return (
    <section id="general-form" role="tabpanel" className="editor-form">
      <h2>Personal Details</h2>
      <form>
        <GeneralInput
          label="First name"
          state={generalState.firstName}
          handler={generalHandlers.handleFirstNameChange}
        />
        <GeneralInput
          label="Last name"
          state={generalState.lastName}
          handler={generalHandlers.handleLastNameChange}
        />
        <GeneralInput
          label="Email"
          type="email"
          state={generalState.email}
          handler={generalHandlers.handleEmailChange}
        />
        <GeneralInput
          label="Phone"
          type="tel"
          state={generalState.phone}
          handler={generalHandlers.handlePhoneChange}
        />
        <GeneralInput
          label="Location"
          state={generalState.location}
          handler={generalHandlers.handleLocationChange}
        />
      </form>
    </section>
  );
}
