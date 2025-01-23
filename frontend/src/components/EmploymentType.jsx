import React from "react";
import InputField from "./InputField";

const EmploymentType = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Type of Employment</h4>
      <div>
        {/* Radio button for selecting any experience option */}
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>
        {/* <InputField
          handleChange={handleChange}
          value="Full Time"
          title="Full Time"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Part Time"
          title="Part Time"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Project Based"
          title="Project Based"
          name="test"
        /> */}
      </div>
    </div>
  );
};

export default EmploymentType;
