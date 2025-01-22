import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import RootLayout from "../components/RootLayout"; // Передбачається, що є такий компонент

export async function generateMetadata({ params }) {
  const { jobid } = params || {};
  return {
    title: jobid ? `Job Details - ${jobid}` : "Job Details",
  };
}

const JobDetailsPage = ({ params }) => {
  const jobId = params?.jobid;

  if (!jobId) {
    return (
      <RootLayout>
        <p>Завантаження...</p>
      </RootLayout>
    );
  }

  return (
    <RootLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Деталі роботи: {jobId}</h1>
        <div className="flex text-sm text-gray-600 gap-4 my-2">
          <p>SharksCode.ua</p>
          <p>Country City Street, 10</p>
          <FaMapLocationDot size={18} color="#FB8500" />
        </div>
        <div className="my-5 flex gap-2 flex-wrap">
          {["Full Time", "Remote", "Frontend"].map((tag) => (
            <span
              key={tag}
              className="bg-yellow-500 text-black text-xs rounded-xl px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <div>
          <p className="text-sm leading-6">
            {/* Вставте текст вакансії тут */}
            Ми шукаємо досвідченого Front-end розробника...
          </p>
        </div>
      </div>
    </RootLayout>
  );
};

export default JobDetailsPage;
