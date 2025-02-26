"use client";

import { useState, useEffect, useRef } from "react";

const VacancyPage = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [salary, setSalary] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");

  useEffect(() => {
    fetch("/api/myvacancy")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setJobTitle(data.job_title);
          setSalary(data.salary);
          setAddress(data.address);
          setContact(data.contact);
          setEmail(data.email);
          setAbout(data.about);
        }
      })
      .catch((err) => console.error("Error fetching job:", err));
  }, []);

  const handleSave = async () => {
    const jobData = {
      job_title: jobTitle,
      salary: salary,
      address: address,
      contact: contact,
      email: email,
      about: about,
    };

    try {
      const response = await fetch("/api/new/job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jobData),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error saving job:", error);
    }
  };

  return (
    <div className="w-full bg-[#E5E5E5] p-4 md:p-10 flex flex-col">
      <h1 className="text-[40px] mb-[20px] self-center">Create a job</h1>
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-14">
        <div className="flex flex-col w-full md:w-[70%] space-y-3">
          <label className="label">Job</label>
          <input
            type="text"
            className="border p-2 rounded-2xl input"
            placeholder="Front end"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
          <label className="label">Salary</label>
          <input
            type="text"
            className="border p-2 rounded-2xl input"
            placeholder="2 000"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          <label className="label">Address</label>
          <input
            type="text"
            className="border p-2 rounded-2xl input"
            placeholder="Hireon street 1"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label className="label">Contact</label>
          <input
            type="text"
            className="border p-2 rounded-2xl input"
            placeholder="+38 067 320 70 22"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <label className="label">Email</label>
          <input
            type="email"
            className="border p-2 rounded-2xl input"
            placeholder="hireon@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="label">About this job</label>
          <textarea
            className="border p-2 min-h-[400px] rounded-2xl text-[12px] bg-[#F8F8FF] resize-none"
            placeholder="Tell about this job"
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>
      </div>
      <div className="my-5">
        <button className="button-disable">Cancel</button>
        <button className="button" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default VacancyPage;
