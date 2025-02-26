"use client";
import { useState, useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Link from "next/link";
import axios from "axios";
import { useTranslate } from "../hooks/useTranslate";
import _ from 'lodash'
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
  const apiID = process.env.ADZUNA_ID;
  const apiKey = process.env.ADZUNA_KEY;
  const [search, setSearch] = useState({ what: "", where: "", country: "" });
  const [found, setFound] = useState([]);
  useEffect(() => {
    async function fetchSearch() {
      try {
        const res = await fetch(
          `/api/search?what=${search.what}&where=${search.where}&country=${search.country}`
        );
        const data = await res.json();
        setFound(data);
      } catch (err) {
        console.error(err);
      }
    };
    const debounced = _.debounce(fetchSearch, 250);
    debounced();
    return () => {
      debounced.cancel();
    };
  }, [search]);
  const { translations, loading, lang, setLang } = useTranslate();
  return (
    <div className="mt-3 w-full max-w-[800px] relative">
      <div className="flex w-full relative z-50">
        <div className="bg-[#F8F8FF] ps-3 rounded-s-[20px] flex items-center">
          <FaMagnifyingGlass size={52} color="#808080" />
        </div>
        <input
          placeholder={translations.home.findJob}
          className="p-3 w-full placeholder:text-[#808080] bg-[#F8F8FF] outline-none"
          onInput={(e) =>
            setSearch((prevState) => ({
              ...prevState,
              what: e.target.value || "",
            }))
          }
        />
        <hr></hr>
        <input
          placeholder={translations.home.city}
          className="p-3 w-full placeholder:text-[#808080] bg-[#F8F8FF] outline-none"
          onInput={(e) =>
            setSearch((prevState) => ({
              ...prevState,
              where: e.target.value || "",
            }))
          }
        />
        <input
          placeholder={translations.home.country}
          className="p-3 w-full placeholder:text-[#808080] bg-[#F8F8FF] outline-none rounded-r-[20px]"
          onInput={(e) =>
            setSearch((prevState) => ({
              ...prevState,
              country: e.target.value || "",
            }))
          }
        />
      </div>
      <div
        className={`relative w-full transition-all rounded-b-[20px] bg-[#F8F8FF] pt-[20px] -top-[20px]`}
      >
        {search.what && search.where && search.where ? (
          found?.length > 0 ? (
            found?.map((e, index) => (
              <div key={index} className="item p-2 font-medium">
                <Link href={`/job/${e.id}`} className="link">
                  {e.job_title
                    .split(
                      new RegExp(`\b(?:${search.what.split("|")})\b`, "gi")
                    )
                    .map((f, i) =>
                      f.toLowerCase() === search.what.toLowerCase() ? (
                        <mark key={i}>{f}</mark>
                      ) : (
                        f
                      )
                    )}{" "}
                  <span className="font-light">by</span>{" "}
                  {e.company || "Unknown"}
                </Link>
              </div>
            ))
          ) : (
            <h2 className="text-[#808080] text-center my-3">
              Sorry, nothing found.
            </h2>
          )
        ) : (
          ""
        )}
        {search.what && search.where && search.country
          ? found?.length >= 10 && (
              <Link
                className="font-medium text-center my-3 w-full block"
                href={`/job?search=${search.what}`}
              >
                More
              </Link>
            )
          : ""}
      </div>
    </div>
  );
};

export default SearchBar;