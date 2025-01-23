import React from "react";

// Functional component for rendering a radio input field
const InputField = ({ handleChange, value, title, name }) => {
  return (
    <label className="sidebar-label-container">
      {/* Radio input element with associated properties */}
      <input type="radio" name={name} value={value} onChange={handleChange} />
      {/* Custom checkmark span for styling */}
      <span className="checkmark"></span>
      {/* Display the title next to the radio button */}
      {title}
    </label>
  );
};

// Exporting the InputField component for use in other parts of the application
export default InputField;
