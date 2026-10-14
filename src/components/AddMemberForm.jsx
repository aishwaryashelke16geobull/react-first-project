import { useState } from "react";
import "./ContactForm.css";

function AddMemberForm({ onAdd }) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [hobby, setHobby] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name.trim() === "" || city.trim() === "" || hobby.trim() === "") {
      setError("Please fill in all fields.");
      return;
    }

    onAdd({ name: name.trim(), city: city.trim(), hobby: hobby.trim() });

    // clear the form
    setName("");
    setCity("");
    setHobby("");
    setError("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="form-input"
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        className="form-input"
        type="text"
        placeholder="Hobby"
        value={hobby}
        onChange={(e) => setHobby(e.target.value)}
      />

      {error && <p className="form-error">{error}</p>}

      <button className="btn" type="submit">
        Add Member
      </button>
    </form>
  );
}

export default AddMemberForm;