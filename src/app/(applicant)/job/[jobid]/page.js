"use client";

import React, { useEffect, useState } from "react";
import { FaMapLocationDot, FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaRegPaperPlane } from "react-icons/fa";

const JobDetailsPage = () => {
  const { jobid } = useParams(); 
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`/api/job?id=${jobid}`);
        const data = await response.json();
        setJob(data);
      } catch (error) {
        console.error("Error fetching job:", error);
      }
    };

    fetchJob();
  }, [jobid]);

  if (!job) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-[#F8F8FF] min-w-[850px] h-max p-4 rounded-2xl m-5 max-[300px]:m-2  box-border">
      <div className="flex justify-between my-2 items-center">
        <Link href="/job" className="flex flex-row gap-[5px] items-center">
          <FaArrowLeft /> Back
        </Link>
        <button className="bg-[#FFB703] text-[#11181C] text-[16px] h-[50px] w-[200px] rounded-2xl hover:bg-[#11181C] hover:text-[#FFB703] transition-all max-[768px]:w-[50px] max-[768px]:flex max-[768px]:justify-center max-[768px]:items-center">
          <p className="max-[768px]:hidden">
          Apply now 
          </p>
          <FaRegPaperPlane className="max-[768px]:block hidden w-[20px] h-[20px]"  width={20} height={20}/>
        </button>
        
      </div>
      <h2 className="font-semibold text-[25px] text-[#11181C] max-[500px]:text-[20px] max-[300px]:text-[16px]">{job.job_title}</h2>
      <div className="flex text-[14px] text-[#5D5D5D] font-normal gap-1 my-2 max-[500px]:text-[12px] max-[300px]:text-[10px]">
        <p>{job.company}</p>
        <p>{job.city}, {job.address} </p>
        <Link href={`https://www.google.com/maps/search/?api=1&query=${job.address}`}>
        <FaMapLocationDot size={18} color="#FB8500"/>
        </Link>
      </div>
      <p className="text-[12px] font-light text-wrap w-full">{job.about}</p>
    </div>
  );
};

export default JobDetailsPage;
