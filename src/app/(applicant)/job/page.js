"use client"

import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import JobCard from "@/app/components/JobCard";
import { FaLocationPin } from "react-icons/fa6";

const JobSearchPage = () => {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [city, setCity] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [professionalArea, setProfessionalArea] = useState("");
  const [salary, setSalary] = useState("");
  const [experience, setExperience] = useState("");
  const [firstVisit, setFirstVisit] = useState(true); 

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `api/jobs?title=${searchQuery}&city=${city}&employment=${employmentType}&area=${professionalArea}&salary=${salary}&experience=${experience}`
      );
      const data = await response.json();
      setJobs(data);
      setFirstVisit(false); 
    } catch (error) {
      console.error("Error searching jobs:", error);
    }
  };
  return (
    <>
      <div className="max-w-[1200px] m-auto my-0">
        <div className="w-full flex justify-center gap-5 p-2 max-[500px]:gap-2">
          <div className=" bg-[#F0F8FF] rounded-2xl h-10 flex items-center p-2 w-full">
            <input
              type="text"
              className="w-full pl-2 focus:outline-none bg-transparent"
              placeholder="Enter job"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="flex gap-[1px] w-full max-w-[250px] flex-row items-center">
              <FaLocationPin className="md:block hidden text-[16px] " />
              <input
                type="text"
                placeholder="City"
                className=" pl-2 focus:outline-none bg-transparent"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
          <button
            onClick={handleSearch}
            className="bg-[#FB8500] a-btn text-[#F8F8FF] rounded-2xl w-[120px] max-[768px]:w-[50px] max-[768px]:flex max-[768px]:justify-center max-[768px]:items-center hover:bg-[#11181C] transition-all hover:text-[#FB8500]"
          >
            <p className="max-[768px]:hidden">Search</p>
            <CiSearch className="max-[768px]:block hidden w-[20px] h-[20px]" width={20} height={20} />
          </button>
        </div>
        <div className="my-2 p-2 w-full flex justify-center gap-5 max-[500px]:flex-wrap max-[500px]:gap-1">
          <input
            type="text"
            className="rounded-2xl text-center h-[50px] max-[500px]:h-[45px] max-[500px]:text-[12px] w-full focus:outline-none input"
            placeholder="Type of employment"
            value={employmentType}
            onChange={(e) => setEmploymentType(e.target.value)}
          />
          <input
            type="text"
            className="rounded-2xl text-center h-[50px] max-[500px]:h-[45px] max-[500px]:text-[12px] w-full focus:outline-none input"
            placeholder="Professional areas"
            value={professionalArea}
            onChange={(e) => setProfessionalArea(e.target.value)}
          />
          <input
            type="number"
            className="rounded-2xl text-center h-[50px] max-[500px]:h-[45px] max-[500px]:text-[12px] w-full focus:outline-none input"
            min={0}
            max={50000}
            placeholder="Salary from"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          <input
            type="number"
            className="rounded-2xl text-center h-[50px] max-[500px]:h-[45px] max-[500px]:text-[12px] w-full focus:outline-none input"
            min={0}
            max={50}
            placeholder="Experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </div>
      </div>
      <div className="bg-[#E3E3ED] w-full flex justify-start p-5 flex-col gap-5 items-center min-h-[100vh]">
        {firstVisit && jobs.length === 0 ? (
          <p>No jobs found, let's start searching</p>
        ) : jobs.length > 0 ? (
          jobs.map((job) => (
            <JobCard
              key={job.id}
              id={job.id}
              title={job.job_title}
              company={job.company}
              city={job.city}
              country={job.country}
              info={job.about}
            />
          ))
        ) : (
          <p>No jobs found</p>
        )}
      </div>
    </>
  );
};

export default JobSearchPage;
