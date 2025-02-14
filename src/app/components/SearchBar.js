"use client";

import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Link from "next/link";
import { useTranslate } from "../hooks/useTranslate";
// Тестові дані
const testJobs = [
  { name: "Frontend Developer", by: "Google" },
  { name: "Backend Engineer", by: "Amazon" },
  { name: "Full Stack Developer", by: "Microsoft" },
  { name: "React Developer", by: "Meta" },
  { name: "Software Engineer", by: "Tesla" },
  { name: "UI/UX Designer", by: "Apple" },
  { name: "DevOps Engineer", by: "Netflix" },
  { name: "QA Tester", by: "Spotify" },
  { name: "Cybersecurity Specialist", by: "IBM" },
  { name: "Data Scientist", by: "OpenAI" },
];

const SearchBar = () => {
  const [search, setSearch] = useState("");
    const { translations, loading, lang, setLang } = useTranslate();
  const found = search
    ? testJobs.filter((job) =>
        job.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  return (
    <div className="mt-3 w-full max-w-[800px] relative">
      <div className="flex w-full ">
        <div className="bg-[#F8F8FF] ps-3 rounded-s-[20px] flex items-center">
          <FaMagnifyingGlass size={20} color="#808080" className="h-[48px]" />
        </div>
        <input
          placeholder={translations.home.findJob}
          className="p-3 w-full placeholder:text-[#808080] bg-[#F8F8FF] outline-none rounded-r-[20px]"
          onInput={(e) => setSearch(e.target.value.trim())}
        />
      </div>
      <div
        className={`relative -z-10 w-full transition-all rounded-b-[20px] bg-[#F8F8FF] pt-[20px] -top-[20px]`}
      >
        {search ? (found.length > 0 ? (
          found.map((e, index) => (
            <div key={index} className="item p-2">
              <Link href={`/job/${e.name}`} className="link">
                {e.name
                  .split(new RegExp(`(${search})`, "gi"))
                  .map((f, i) =>
                    f.toLowerCase() === search.toLowerCase() ? (
                      <mark key={i}>{f}</mark>
                    ) : (
                      f
                    )
                  )}{" "}
                by {e.by}
              </Link>
            </div>
          ))
        ) : (
          <h2 className="text-[#808080] text-center my-3">
            Sorry, nothing found.
          </h2>
        )) : ''}
        {search ? (found.length >= 10 && (
          <Link
            className="font-medium text-center my-3 w-full block"
            href={`/job?search=${search}`}
          >
            More
          </Link>
        )) : ''}
      </div>
    </div>
  );
};

export default SearchBar;
