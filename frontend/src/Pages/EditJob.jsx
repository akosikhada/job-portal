import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useLoaderData } from "react-router-dom";
import CreatableSelect from "react-select/creatable";

const EditJob = () => {
  const { id } = useParams();
  const {
    _id,
    jobTitle,
    companyName,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    postingDate,
    experienceLevel,
    companyLogo,
    employmentType,
    description,
    postedBy,
    skills,
  } = useLoaderData();
  const [selectedOption, setSelectedOption] = useState(skills || []);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.skills = selectedOption;
    fetch(`http://localhost:3000/update-job/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged === true) {
          alert("Job updated successfully!");
        }
        reset();
      });
  };
  const options = [
    { value: "C", label: "C" },
    { value: "C++", label: "C++" },
    { value: "C#", label: "C#" },
    { value: "Go", label: "Go" },
    { value: "Java", label: "Java" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "TypeScript", label: "TypeScript" },
    { value: "PHP", label: "PHP" },
    { value: "Perl", label: "Perl" },
    { value: "Ruby", label: "Ruby" },
    { value: "Scala", label: "Scala" },
    { value: "Python", label: "Python" },
    { value: "Swift", label: "Swift" },
    { value: "ObjectiveC", label: "ObjectiveC" },
    { value: "Clojure", label: "Clojure" },
    { value: "Rust", label: "Rust" },
    { value: "Haskell", label: "Haskell" },
    { value: "CoffeeScript", label: "CoffeeScript" },
    { value: "Elixir", label: "Elixir" },
    { value: "Erlang", label: "Erlang" },
    { value: "Nim", label: "Nim" },
    { value: "Vue.js", label: "Vue.js" },
    { value: "Angular", label: "Angular" },
    { value: "React", label: "React" },
    { value: "Svelte", label: "Svelte" },
    { value: "Backbone.js", label: "Backbone.js" },
    { value: "Bootstrap", label: "Bootstrap" },
    { value: "Vuetify", label: "Vuetify" },
    { value: "Node.js", label: "Node.js" },
    { value: "Django", label: "Django" },
    { value: "Flask", label: "Flask" },
    { value: "Spring Boot", label: "Spring Boot" },
    { value: "Ruby on Rails", label: "Ruby on Rails" },
    { value: "ASP.NET", label: "ASP.NET" },
    { value: "Express.js", label: "Express.js" },
    { value: "React Native", label: "React Native" },
    { value: "Flutter", label: "Flutter" },
    { value: "Kotlin", label: "Kotlin" },
    { value: "Xamarin", label: "Xamarin" },
    { value: "TensorFlow", label: "TensorFlow" },
    { value: "PyTorch", label: "PyTorch" },
    { value: "Keras", label: "Keras" },
    { value: "Scikit-learn", label: "Scikit-learn" },
    { value: "OpenCV", label: "OpenCV" },
    { value: "MySQL", label: "MySQL" },
    { value: "PostgreSQL", label: "PostgreSQL" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "SQLite", label: "SQLite" },
    { value: "Redis", label: "Redis" },
    { value: "Cassandra", label: "Cassandra" },
    { value: "Oracle", label: "Oracle" },
    { value: "D3.js", label: "D3.js" },
    { value: "Chart.js", label: "Chart.js" },
    { value: "Tableau", label: "Tableau" },
    { value: "Power BI", label: "Power BI" },
    { value: "Plotly", label: "Plotly" },
    { value: "Docker", label: "Docker" },
    { value: "Kubernetes", label: "Kubernetes" },
    { value: "Jenkins", label: "Jenkins" },
    { value: "Ansible", label: "Ansible" },
    { value: "Terraform", label: "Terraform" },
    { value: "GitLab CI/CD", label: "GitLab CI/CD" },
    { value: "Firebase", label: "Firebase" },
    { value: "AWS Amplify", label: "AWS Amplify" },
    { value: "Backendless", label: "Backendless" },
    { value: "Parse", label: "Parse" },
    { value: ".NET", label: ".NET" },
    { value: "Spring", label: "Spring" },
    { value: "Laravel", label: "Laravel" },
    { value: "Ruby on Rails", label: "Ruby on Rails" },
    { value: "Jest", label: "Jest" },
    { value: "Mocha", label: "Mocha" },
    { value: "Selenium", label: "Selenium" },
    { value: "Cypress", label: "Cypress" },
    { value: "JUnit", label: "JUnit" },
    { value: "Microsoft Office", label: "Microsoft Office" },
    { value: "Adobe Creative Suite", label: "Adobe Creative Suite" },
    { value: "Slack", label: "Slack" },
    { value: "Zoom", label: "Zoom" },
    { value: "Jekyll", label: "Jekyll" },
    { value: "Hugo", label: "Hugo" },
    { value: "Gatsby", label: "Gatsby" },
    { value: "Unity", label: "Unity" },
    { value: "Unreal Engine", label: "Unreal Engine" },
    { value: "Godot", label: "Godot" },
    { value: "Selenium", label: "Selenium" },
    { value: "Puppeteer", label: "Puppeteer" },
    { value: "Ansible", label: "Ansible" },
    { value: "WebAssembly", label: "WebAssembly" },
    { value: "GraphQL", label: "GraphQL" },
    { value: "RESTful APIs", label: "RESTful APIs" },
    { value: "gRPC", label: "gRPC" },
  ];
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="bg-[#fafafa] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* 1st Row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              <input
                type="text"
                defaultValue={jobTitle}
                {...register("jobTitle")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name</label>
              <input
                type="text"
                placeholder="Enter your company name"
                defaultValue={companyName}
                {...register("companyName")}
                className="create-job-input"
              />
            </div>
          </div>
          {/* 2nd Row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimum Salary</label>
              <input
                type="text"
                placeholder="Enter your minimum salary"
                defaultValue={minPrice}
                {...register("minPrice")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input
                type="text"
                placeholder="Enter your maximum salary"
                defaultValue={maxPrice}
                {...register("maxPrice")}
                className="create-job-input"
              />
            </div>
          </div>
          {/* 3rd Row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Type</label>
              <select {...register("salaryType")} className="create-job-input">
                <option value={salaryType}>{salaryType}</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location</label>
              <input
                type="text"
                placeholder="Enter your job location"
                defaultValue={jobLocation}
                {...register("jobLocation")}
                className="create-job-input"
              />
            </div>
          </div>
          {/* 4th Row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Posting Date</label>
              <input
                type="date"
                placeholder="Enter your job posting date"
                defaultValue={postingDate}
                {...register("postingDate")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experience Level</label>
              <select
                {...register("experienceLevel")}
                className="create-job-input"
              >
                <option value={experienceLevel}>{experienceLevel}</option>
                <option value="Any Experience">Any Experience</option>
                <option value="Junior">Junior</option>
                <option value="Mid-Level">Mid-Level</option>
                <option value="Senior">Senior</option>
              </select>
            </div>
          </div>
          {/* 5th Row */}
          <div>
            <label className="block mb-2 text-lg">Required Skills:</label>
            <CreatableSelect
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
              placeholder="Select or input required skills"
              className="create-job-input py-4"
            />
          </div>
          {/* 6th Row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input
                type="url"
                defaultValue={companyLogo}
                placeholder="Upload your company logo url"
                {...register("companyLogo")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employment Type</label>
              <select
                {...register("employmentType")}
                className="create-job-input"
              >
                <option value={employmentType}>{employmentType}</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Project Based">Project Based</option>
              </select>
            </div>
          </div>
          {/* 7th Row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Description</label>
            <textarea
              className="w-full pl-3 py-1.5 focus:outline-none"
              rows={6}
              placeholder="Enter your job description"
              defaultValue={description}
              {...register("description")}
            />
          </div>
          {/* Last Row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job Posted By</label>
            <input
              type="email"
              placeholder="Enter your email address"
              defaultValue={postedBy}
              {...register("postedBy")}
              className="create-job-input"
            />
          </div>
          <input
            type="submit"
            className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default EditJob;
