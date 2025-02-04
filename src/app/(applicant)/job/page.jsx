'use client'
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import JobCard from "@/app/components/JobCard";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
const JobSearchPage = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const [search, setSearch] = useState(searchParams.get('search') || '')
  useEffect(() => {
    router.push(`${pathname}?search=${search}`)
  }, [search])
  return (
    <>
      <div className="w-full flex justify-center gap-5">
        <div className="w-[900px] bg-[#F0F8FF]  rounded-2xl h-10 flex items-center p-3">
          <CiSearch size={40} />
          <input
            type="text"
            className="w-full ml-4 pl-2 focus:outline-none bg-transparent"
            placeholder="Enter job"
            onInput={(e) => {setSearch(e.target.value)}}
            defaultValue={searchParams.get('search')}
          />
          <div className="flex ml-4 ">
            <FaMapMarkerAlt size={25} color={"#FFB703"} />
            <input
              type="text"
              placeholder="City"
              className="ml-4 pl-2 focus:outline-none bg-transparent"
            />
          </div>
        </div>
        <button className="bg-[#FB8500] text-[#F8F8FF] rounded-2xl w-[120px] ">
          Search
        </button>
      </div>
      <div className="my-2 w-full flex justify-center gap-5">
        <input
          type="text"
          className="rounded-2xl text-center p-2 w-[250px] focus:outline-none"
          placeholder="Type of employment"
        />
        <input
          type="text"
          className="rounded-2xl text-center p-2 w-[250px] focus:outline-none"
          placeholder="Professional areas"
        />
        <input
          type="number"
          className="rounded-2xl text-center p-2 w-[250px] focus:outline-none"
          min={0}
          max={50000}
          placeholder="Salary from"
        />
        <input
          type="number"
          className="rounded-2xl text-center p-2 w-[250px] focus:outline-none"
          min={0}
          max={50}
          placeholder="Experience"
        />
      </div>
      <div className="bg-[#E3E3ED] w-full flex justify-center p-5 flex-col gap-5 items-center">
        <JobCard
          id={"123"}
          title={"Junior Front End  Developer"}
          company={"SharksCode.ua"}
          city="Cherkassy"
          country={"UA"}
          info={
            "Full-time. Work experience more than 2 years. The company is looking for a WordPress Full-stack (backend-frontend) website developer with 2 years of experience. Required knowledge of php. Work is remote. It will be necessary to copy"
          }
        />
        <JobCard
          title={"Junior Front End  Developer"}
          company={"SharksCode.ua"}
          city="Cherkassy"
          country={"UA"}
          info={
            "Full-time. Work experience more than 2 years. The company is looking for a WordPress Full-stack (backend-frontend) website developer with 2 years of experience. Required knowledge of php. Work is remote. It will be necessary to copy"
          }
        />
        <JobCard
          title={"Junior Front End  Developer"}
          company={"SharksCode.ua"}
          city="Cherkassy"
          country={"UA"}
          info={
            "Full-time. Work experience more than 2 years. The company is looking for a WordPress Full-stack (backend-frontend) website developer with 2 years of experience. Required knowledge of php. Work is remote. It will be necessary to copy"
          }
        />
        <JobCard
          title={"Junior Front End  Developer"}
          company={"SharksCode.ua"}
          city="Cherkassy"
          country={"UA"}
          info={
            "Full-time. Work experience more than 2 years. The company is looking for a WordPress Full-stack (backend-frontend) website developer with 2 years of experience. Required knowledge of php. Work is remote. It will be necessary to copy"
          }
        />
      </div>
    </>
  );
};

export default JobSearchPage;
