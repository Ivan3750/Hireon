"use client";

import React, { useEffect, useState } from "react";
import { FaMapLocationDot, FaArrowLeft, FaRegPaperPlane } from "react-icons/fa6";
import Link from "next/link";
import { useParams } from "next/navigation";
import Loading from "@/app/loading";

const JobDetailsPage = () => {
  const { jobid } = useParams();
  const [job, setJob] = useState(null);
  const [isApplying, setIsApplying] = useState(false);
  const [applicationMessage, setApplicationMessage] = useState("");
  const [hasApplied, setHasApplied] = useState(false); // To track if user has already applied

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`/api/job?id=${jobid}`);
        if (!response.ok) throw new Error("Failed to fetch job");
        const data = await response.json();
        setJob(data);
      } catch (error) {
        console.error("Error fetching job:", error);
      }
    };

    const checkIfApplied = async () => {
      try {
        const response = await fetch(`/api/check-application?jobId=${jobid}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.token}`, // Make sure to pass the token if needed
          },
        });

        if (!response.ok) {
          throw new Error("Failed to check application status");
        }

        const data = await response.json();
        setHasApplied(data.hasApplied); // Assuming the response contains a field 'hasApplied'
      } catch (error) {
        console.error("Error checking application status:", error);
      }
    };

    fetchJob();
    checkIfApplied();
  }, [jobid]);

  const handleApply = async () => {
    setIsApplying(true);
    setApplicationMessage("");

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.token}`,
        },
        body: JSON.stringify({ jobId: jobid }),
      });

      if (!response.ok) {
        throw new Error("Failed to apply for job");
      }

      const data = await response.json();
      setHasApplied(true); // Update the state after applying
      setApplicationMessage(data.message || "Application submitted successfully.");
    } catch (error) {
      console.error("Error applying for job:", error);
      setApplicationMessage("An error occurred. Please try again.");
    } finally {
      setIsApplying(false);
    }
  };

  if (!job) return <Loading />;

  return (
    <div className="bg-[#F8F8FF] min-w-[850px] p-4 rounded-2xl m-5 max-[300px]:m-2 box-border">
      <div className="flex justify-between my-2 items-center">
        <Link href="/job" className="flex items-center gap-1">
          <FaArrowLeft /> Back
        </Link>
        <button
          onClick={handleApply}
          className={`bg-[#FFB703] text-[#11181C] text-[16px] h-[50px] w-[200px] rounded-2xl hover:bg-[#11181C] hover:text-[#FFB703] transition-all max-[768px]:w-[50px] max-[768px]:flex max-[768px]:items-center ${hasApplied ? "bg-gray-400 cursor-not-allowed" : ""}`}
          disabled={isApplying || hasApplied}
        >
          <span className="max-[768px]:hidden">{isApplying ? "Applying..." : hasApplied ? "Applied" : "Apply now"}</span>
          <FaRegPaperPlane className="hidden max-[768px]:block" size={20} />
        </button>
      </div>

      <h2 className="font-semibold text-[25px] text-[#11181C] max-[500px]:text-[20px] max-[300px]:text-[16px]">
        {job.job_title}
      </h2>

      <div className="flex text-[14px] text-[#5D5D5D] font-normal gap-1 my-2 max-[500px]:text-[12px] max-[300px]:text-[10px]">
        <p>{job.company}</p>
        <p>{job.city}, {job.address}</p>
        <Link href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(job.address || '')}`}>
          <FaMapLocationDot size={18} color="#FB8500" />
        </Link>
      </div>

      <div className="text-[12px] font-light break-words w-full" dangerouslySetInnerHTML={{ __html: job.about }} />

      {applicationMessage && (
        <div className="mt-4 p-2 text-sm font-semibold text-center bg-[#f1f1f1] rounded">
          {applicationMessage}
        </div>
      )}
    </div>
  );
};

export default JobDetailsPage;
