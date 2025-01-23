import React from "react";
import InputField from "./InputField";

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>
      <div>
        {/* Radio button for selecting 'All' option */}
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
        {/* Input fields for specific locations with change handler */}
        {/* <InputField
          handleChange={handleChange}
          value="Mountain View, California"
          title="Mountain View, California"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Redmond, Washington"
          title="Redmond, Washington"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="San Francisco, California"
          title="San Francisco, California"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Menlo Park, California"
          title="Menlo Park, California"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Austin, Texas"
          title="Austin, Texas"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="San Jose, California"
          title="San Jose, California"
          name="test"
        /> */}
      </div>
    </div>
  );
};

export default Location;
