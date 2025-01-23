import React from "react";

// Functional component that displays a list of jobs
const Jobs = ({ result }) => {
  return (
    <>
      <div>
        {/* Displays the number of jobs available */}
        <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
      </div>
      {/* Section that contains the job listings */}
      <section className="card-container">{result}</section>
    </>
  );
};

export default Jobs;
