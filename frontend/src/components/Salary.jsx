import React from "react";
import Button from "./Button";
import InputField from "./InputField";

const Salary = ({ handleChange, handleClick }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Salary</h4>
      <div className="mb-4">
        {/* Button components for selecting salary type: Hourly, Monthly, Yearly */}
        <Button onClickHandler={handleClick} value="Hourly" title="Hourly" />
        <Button onClickHandler={handleClick} value="Monthly" title="Monthly" />
        <Button onClickHandler={handleClick} value="Yearly" title="Yearly" />
      </div>
      <div>
        {/* Radio button for selecting 'All' salary options */}
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
        {/* Input fields for specifying salary ranges */}
        {/* <InputField
          handleChange={handleChange}
          value={25}
          title="< 25K"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={50}
          title="< 50K"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={75}
          title="< 75K"
          name="test"
        /> */}
      </div>
    </div>
  );
};

export default Salary;
