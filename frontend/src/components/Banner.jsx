import React, { useState } from "react";
import { FiMapPin, FiSearch } from "react-icons/fi";

// Banner component for job search functionality
const Banner = ({ query, handleInputChange }) => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14">
      <h1 className="text-5xl font-bold text-primary mb-3">
        Find your <span className="text-[#3575e2]">new job</span> here today
      </h1>
      <p className="text-lg text-black/70 mb-8">
        Thousand of job opportunities are waiting for you.
      </p>
      <form>
        <div className="flex justify-start md:flex-row flex-col md:gap-0 gap-4">
          {/* Input field for job title search */}
          <div className="flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#3575e2] md:w-1/2 w-full">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="What job are you looking for?"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-800 placeholder:text-gray-800 focus:ring=0 sm:text-sm sm:leading-6"
              onChange={handleInputChange} // Handles input change for job title
              value={query} // Binds input value to query state
            />
            <FiSearch className="absolute mt-2.5 ml-2 text-gray-400" />
          </div>
          {/* Input field for location search */}
          <div className="flex md:rounded-s-none rounded shadow-sm ring-1 ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#3575e2] md:w-1/3 w-full">
            <input
              type="text"
              name="location" // Changed name to 'location' for clarity
              id="location" // Changed id to 'location' for clarity
              placeholder="Location"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-800 placeholder:text-gray-800 focus:ring=0 sm:text-sm sm:leading-6"
            />
            <FiMapPin className="absolute mt-2.5 ml-2 text-gray-400" />
          </div>
          {/* Submit button for the search form */}
          <button
            type="submit"
            className="bg-[#3575e2] py-2 px-8 text-[#FAF9F6] md:rounded-s-none rounded"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Banner;
