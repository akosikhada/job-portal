import React from "react";

// Functional component for rendering a button
const Button = ({ onClickHandler, value, title }) => {
  return (
    <button
      // Event handler for button click
      onClick={onClickHandler}
      // Value attribute for the button
      value={value}
      // Dynamic class names for styling the button
      className={`px-4 py-1 border text-base hover:bg-blue hover:text-white`}
    >
      {/* Display the title prop as the button text */}
      {title}
    </button>
  );
};

// Exporting the Button component for use in other parts of the application
export default Button;
