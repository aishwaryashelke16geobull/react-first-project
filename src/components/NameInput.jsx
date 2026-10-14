import { useState } from "react";
import "./ContactForm.css";

function NameInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        className="form-input"
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: "100%" }}
      />
      <p className="hello-text">Hello, {name}!</p>
    </div>
  );
}

export default NameInput;