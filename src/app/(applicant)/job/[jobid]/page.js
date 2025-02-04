"use client";

import React, { useEffect, useState } from "react";
import { FaMapLocationDot, FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import { useParams } from "next/navigation";

const JobDetailsPage = () => {
  const { jobid } = useParams(); // Отримуємо параметр jobid
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
    <div className="bg-[#F8F8FF] w-[850px] h-max p-4 rounded-2xl my-5 m-auto">
      <div className="flex justify-between my-2 items-center">
        <Link href="/job" className="flex flex-row gap-[5px] items-center">
          <FaArrowLeft /> Back
        </Link>
        <button className="bg-[#FFB703] text-[#11181C] text-[16px] h-[50px] w-[200px] rounded-2xl hover:bg-[#11181C] hover:text-[#FFB703] transition-all">
          Apply now
        </button>
      </div>
      <h2 className="font-semibold text-[25px] text-[#11181C]">{job.job_title}</h2>
      <div className="flex text-[14px] text-[#5D5D5D] font-normal gap-4 my-2">
        <p>{job.company}</p>
        <p>{job.city}, {job.address}</p>
        <Link href={`https://www.google.com/maps/search/?api=1&query=${job.address}`}>
        <FaMapLocationDot size={18} color="#FB8500"/>
        </Link>
      </div>
      <p className="text-[12px] font-light text-wrap w-full">{job.about}</p>
    </div>
  );
};

export default JobDetailsPage;
