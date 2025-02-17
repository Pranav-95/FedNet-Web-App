import React, { useState } from "react";
import "./Train.css";

function Train() {
  const [modelName, setModelName] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Training started for model: ${modelName}`);
  };

  return (
    <div className="train-container">
      <h2>Train Your Model</h2>
      <p>Upload your model definition and start federated training.</p>

      <form onSubmit={handleSubmit} className="train-form">
        <label>Model Name:</label>
        <input
          type="text"
          value={modelName}
          onChange={(e) => setModelName(e.target.value)}
          required
        />

        <label>Upload Model File:</label>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />

        <button type="submit" className="btn-train">
          Start Training
        </button>
      </form>
    </div>
  );
}

export default Train;
