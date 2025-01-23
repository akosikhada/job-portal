import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Jobs from "./Jobs";
import Sidebar from "../components/Sidebar";
import Newsletter from "../components/Newsletter";

const Home = () => {
  // State to manage the selected job category
  const [selectedCategory, setSelectedCategory] = useState(null);
  // State to store the list of jobs fetched from the JSON file
  const [jobs, setJobs] = useState([]);
  // State to manage loading status
  const [isLoading, setIsLoading] = useState(true);
  // State to manage the current page number for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items to display per page

  useEffect(() => {
    // Fetch jobs data from the JSON file on component mount
    setIsLoading(true);
    fetch("http://localhost:3000/all-jobs")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data); // Set the fetched jobs to state
        setIsLoading(false); // Update loading status
      });
  }, []);

  // State to manage the search query input
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    // Update the search query based on user input
    setQuery(event.target.value);
  };

  // Filter jobs based on the search query
  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const handleChange = (event) => {
    // Update the selected category based on user selection
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    // Set the selected category when a category is clicked
    setSelectedCategory(event.target.value);
  };

  const calculatePageRange = () => {
    // Calculate the start and end index for pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  const nextPage = () => {
    // Move to the next page if there are more pages available
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    // Move to the previous page if not on the first page
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const filterData = (jobs, selected, query) => {
    // Filter jobs based on selected category and search query
    let filterJobs = jobs;
    if (query) {
      filterJobs = filteredItems; // Use filtered items if a query exists
    }

    if (selected) {
      // Further filter jobs based on the selected category
      filterJobs = filterJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) === parseInt(selected) ||
          postingDate >= selected ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase === selected.toLowerCase()
      );
    }

    const { startIndex, endIndex } = calculatePageRange(); // Get pagination indices
    filterJobs = filterJobs.slice(startIndex, endIndex); // Slice the jobs for the current page
    return filterJobs.map((data, index) => <Card key={index} data={data} />); // Map filtered jobs to Card components
  };

  const result = filterData(jobs, selectedCategory, query); // Get the filtered job results

  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />
      <div className="bg-[#FAF9F6] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        <div className="bg-white p-4 rounded-xl">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>
        <div className="col-span-2 bg-white p-4 rounded-xl">
          {isLoading ? (
            <p className="font-medium">Loading...</p> // Show loading text while fetching data
          ) : result.length > 0 ? (
            <Jobs result={result} /> // Display the filtered job results
          ) : (
            <>
              <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
              <p>No job found.</p> {/* Message when no jobs are found */}
            </>
          )}
          {result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button
                className="hover:underline cursor-pointer"
                onClick={prevPage}
                disabled={currentPage === 1} // Disable button if on the first page
              >
                Previous
              </button>
              <span className="mx-2">
                Page {currentPage} of{" "}
                {Math.ceil(filteredItems.length / itemsPerPage)}{" "}
                {/* Display current page info */}
              </span>
              <button
                className="hover:underline cursor-pointer"
                onClick={nextPage}
                disabled={
                  currentPage ===
                  Math.ceil(filteredItems.length / itemsPerPage > itemsPerPage) // Disable button if on the last page
                }
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="bg-white p-4 rounded-xl">
          <Newsletter /> {/* Newsletter component */}
        </div>
      </div>
    </div>
  );
};

export default Home;
