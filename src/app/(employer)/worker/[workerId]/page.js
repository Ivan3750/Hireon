"use client";

import { useEffect, useState } from "react";
import { FaMapLocationDot, FaRegPaperPlane, FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const JobDetailsPage = async ({ params }) => {
  const { workerId } = await params;
  const [worker, setWorker] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkerData = async () => {
      try {
        const res = await fetch(`/api/worker/${workerId}`);
        if (!res.ok) throw new Error("Failed to fetch worker data");
        const data = await res.json();
        setWorker(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkerData();
  }, [workerId]);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error || !worker) {
    return <div className="text-center text-red-500 mt-10">Worker not found.</div>;
  }

  return (
    <div className="bg-[#F8F8FF] w-[90%] max-w-[800px] p-4 rounded-2xl my-5 m-auto">
      <div className="flex justify-between my-2 items-center">
        <Link href="/worker" className="flex flex-row gap-[5px] items-center">
          <FaArrowLeft /> Back
        </Link>
        <button className="bg-[#FFB703] text-[#11181C] text-[16px] h-[50px] w-[200px] rounded-2xl hover:bg-[#11181C] hover:text-[#FFB703] transition-all">
          Apply now <FaRegPaperPlane className="inline ml-2" />
        </button>
      </div>
      <h2 className="font-semibold md:text-[25px] text-[#11181C] text-[20px]">
        {worker.full_name}
      </h2>
      <h3 className="font-semibold md:text-[20px] text-[#11181C] text-[16px]">
        {worker.job}
      </h3>
      <div className="text-[14px] text-[#5D5D5D] font-normal my-3">
        <p>Salary: <span className="text-[#11181C]">${worker.salary ?? "N/A"}</span></p>
        <p>City of residence: <span className="text-[#11181C]">{worker.city}</span></p>
        <p>Registered on: <span className="text-[#11181C]">{worker.created_at ? new Date(worker.created_at).toLocaleDateString() : "Unknown"}</span></p>
      </div>
      <h3 className="text-[#11181C] font-normal text-[16px]">Contact information</h3>
      <div className="flex gap-2 mb-5 mt-1 items-center flex-wrap">
        <div className="flex items-center gap-2">
          <BsFillTelephoneFill />
          <p className="text-[#11181C] text-[14px] cursor-pointer">{worker.phone}</p>
        </div>
        <div className="flex items-center gap-2">
          <MdEmail size={20} />
          <p className="text-[#11181C] text-[14px] cursor-pointer">{worker.email}</p>
        </div>
      </div>
      <div>
        <p className="text-[12px] font-light">{worker.additionalInfo}</p>
      </div>
    </div>
  );
};

export default JobDetailsPage;
