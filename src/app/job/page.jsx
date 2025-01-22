import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import JobCard from "../components/JobCard";
import RootLayout from "@/app/layouts/RootLayout";

const JobSearchPage = () => {
  return (
    <RootLayout maincolor="#ff0">
      <div className="search-container">
        <div className="flex items-center gap-4">
          <CiSearch size={40} />
          <input
            type="text"
            placeholder="Enter job"
            className="border rounded p-2 focus:outline-none"
          />
          <div className="flex items-center border rounded p-2">
            <FaMapMarkerAlt size={25} color="#FFB703" />
            <input
              type="text"
              placeholder="City"
              className="ml-4 pl-2 focus:outline-none bg-transparent"
            />
          </div>
          <button className="bg-[#FB8500] text-[#F8F8FF] rounded-2xl px-4 py-2">
            Search
          </button>
        </div>
        <div className="my-4 w-full flex justify-center gap-5">
          <input
            type="number"
            className="rounded-2xl text-center p-2 w-[250px] focus:outline-none"
            min={0}
            max={50}
            placeholder="Experience"
          />
        </div>
      </div>

      <div className="bg-[#E3E3ED] w-full flex justify-center p-5 flex-col gap-5 items-center">
        <JobCard
          id="123"
          title="Junior Front End Developer"
          company="SharksCode.ua"
          city="Cherkassy"
          country="UA"
          info="Full-time. Work experience more than 2 years. The company is looking for a WordPress Full-stack (backend-frontend) website developer with 2 years of experience. Required knowledge of PHP. Work is remote."
        />
        <JobCard
          title="Junior Front End Developer"
          company="SharksCode.ua"
          city="Cherkassy"
          country="UA"
          info="Full-time. Work experience more than 2 years. The company is looking for a WordPress Full-stack (backend-frontend) website developer with 2 years of experience. Required knowledge of PHP. Work is remote."
        />
      </div>
    </RootLayout>
  );
};

export default JobSearchPage;
