import React from "react";
import InputField from "./InputField";

const JobPostingData = ({ handleChange }) => {
  // Get the current date and time
  const now = new Date();
  // Calculate the date 24 hours ago
  const twentyFourHourAgo = new Date(now - 24 * 60 * 60 * 1000);
  // Calculate the date 7 days ago
  const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
  // Calculate the date 30 days ago
  const thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

  // Format the date for the last 24 hours to YYYY-MM-DD
  const twentyFourHourAgoDate = twentyFourHourAgo.toISOString().slice(0, 10);
  // Format the date for the last 7 days to YYYY-MM-DD
  const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10);
  // Format the date for the last 30 days to YYYY-MM-DD
  const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0, 10);

  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Date of Posting</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange} // Handle change event for the radio button
          />
          <span className="checkmark"></span>All Time
        </label>
        {/* <InputField
          handleChange={handleChange}
          value={twentyFourHourAgoDate}
          title="Last 24 hours"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={sevenDaysAgoDate}
          title="Last 7 days"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={thirtyDaysAgoDate}
          title="Last 30 days"
          name="test"
        /> */}
      </div>
    </div>
  );
};

export default JobPostingData;
