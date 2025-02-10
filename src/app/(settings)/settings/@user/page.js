"use client";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";
import { HiMiniMoon } from "react-icons/hi2";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Pill from "@/app/components/Pill";
import { useTranslate } from "@/app/hooks/useTranslate";
import { useState, useEffect, useContext } from "react";

export default function Settings() {
  const { translations, loading, lang, setLang } = useTranslate();
  if (loading) return null;

  const [isEditable, setIsEditable] = useState(false);
  const [darkMode, setDarkMode] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div className="bg-[#dcdcdc] w-full  flex flex-row h-full">
      <div className="w-full flex flex-row items-center  gap-[20px] p-[20px]  max-[768px]:flex-wrap">
        <div className="flex flex-col gap-[20px]   rounded-[20px]">
          <div className="bg-[#F8F8FF]  w-full rounded-[20px] p-[20px] flex flex-col">
            <h2 className="text-[1.6vw] font-medium my-[15px] ">
              Name Surname
            </h2>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row gap-[20px]  font-light">
                <ul className="text-[#808080] gap-[3px] flex flex-col">
                  <li key={1} className="flex items-center gap-1">
                    <FaHouse className="text-[18px]" />{" "}
                    {translations.settings.city}:
                  </li>
                  <li key={2} className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-[18px]" />{" "}
                    {translations.settings.country}:
                  </li>
                  <li key={3} className="flex items-center gap-1">
                    <MdOutlineMail className="text-[20px]" />{" "}
                    {translations.login.email}:
                  </li>
                  <li key={4} className="flex items-center gap-1">
                    <FaPhoneAlt className="text-[18px]" />
                    {translations.login.phone}:
                  </li>
                </ul>

                <ul className="text-[#808080] gap-[3px] flex flex-col">
                  <li
                    className="font-normal text-[14px]"
                    contentEditable={isEditable}
                  >
                    Kyiv
                  </li>
                  <li
                    className="font-normal text-[14px]"
                    contentEditable={isEditable}
                  >
                    Ukraine
                  </li>
                  <li
                    className="font-normal text-[14px]"
                    contentEditable={isEditable}
                  >
                    email@gmail.com
                  </li>
                  <li
                    className="font-normal text-[14px]"
                    contentEditable={isEditable}
                  >
                    067 218 87 50{" "}
                  </li>
                </ul>
              </div>
              <Image
                src="/bg.jpg"
                width={200}
                height={200}
                alt="avatar"
                className="bg-cover h-[6.5vw] w-[6.5vw] rounded-full"
              ></Image>
            </div>
            <div className="flex flex-row justify-between w-full py-[10px] items-end">
              <div className="w-1/2 flex flex-col gap-[10px]">
                <div className="w-full">
                  <button className="bg-[#FFB703] rounded-2xl w-full p-[5px] text-[1vw] hover:text-[#FFB703] hover:bg-[#11181C] transition-all text-nowrap">
                    {translations.settings.signOut}
                  </button>
                </div>
                <div className="w-full flex flex-row gap-[10px]">
                  <button
                    className={`${
                      isEditable
                        ? "bg-[#88e788] hover:text-[#88e788]"
                        : "bg-[#219EBC] hover:text-[#219EBC]"
                    } rounded-2xl w-1/2 p-[5px] text-[0.9vw] hover:bg-[#11181C] transition-all`}
                    onClick={() => {
                      setIsEditable((prev) => !prev);
                    }}
                  >
                    {isEditable ? "Save" : "Edit"}
                  </button>
                  <button className="bg-[#F47174] rounded-2xl w-1/2 p-[5px] text-[0.9vw] hover:text-[#F47174] hover:bg-[#11181C] transition-all">
                    {translations.settings.delete}
                  </button>
                </div>
              </div>
              <div className="flex flex-col text-[0.8vw] gap-2">
                <div className="flex flex-row text-center">
                  <Link
                    href="/cv"
                    className="bg-[#FFB703] rounded-2xl w-full p-[5px] text-[1vw] hover:text-[#FFB703] hover:bg-[#11181C] transition-all text-nowrap "
                  >
                    My CV
                  </Link>
                </div>
                <div className="flex flex-row text-center">
                  <Link
                    href="/portfolio"
                    className="bg-[#FFB703] rounded-2xl w-full p-[5px] text-[1vw] hover:text-[#FFB703] hover:bg-[#11181C] transition-all text-nowrap "
                  >
                    My portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F8F8FF] w-full rounded-[20px] p-[20px]">
            <h2 className="text-[1.3vw] font-medium">Statistics</h2>
            <div className="flex flex-row items-center gap-[30px]">
              <div className="flex flex-col">
                <h3 className="text-[1.3vw] font-light">100%</h3>
                <h3 className="text-[0.9vw] text-[#808080] font-light">
                  Rating
                </h3>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[1.3vw] font-light">5</h3>
                <h3 className="text-[0.9vw] text-[#808080] font-light">Jobs</h3>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[1.3vw] font-light">100</h3>
                <h3 className="text-[0.9vw] text-[#808080] font-light">View</h3>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[1.3vw] font-light">20</h3>
                <h3 className="text-[0.9vw] text-[#808080] font-light">
                  Clicks
                </h3>
              </div>
            </div>
          </div>

          <div className="bg-[#F8F8FF]  w-full rounded-[20px] p-[20px] grid gap-[20px] grid-rows-2 grid-cols-2">
            <div className="flex flex-col w-full">
              <h2 className="text-[1.3vw] font-medium">Password</h2>
              <h2
                className="text-[0.9vw] text-[#808080]"
                contentEditable={isEditable}
              >
                ••••••••••••••••
              </h2>
            </div>
            <div className="flex flex-col w-full">
              <h2 className="text-[1.3vw] font-medium">Own link</h2>
              <h2
                className="text-[0.9vw] text-[#808080]"
                contentEditable={isEditable}
              >
                iamaworker
              </h2>
            </div>
            <div className="flex flex-col w-full">
              <Link
                href="/mfa"
                className="text-[1.3vw] font-medium flex flex-row items-center gap-[10px]"
              >
                MFA<FaArrowUpRightFromSquare></FaArrowUpRightFromSquare>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] h-full  rounded-[20px]">
          <div className="bg-[#F8F8FF]  w-full rounded-[20px] p-[20px]">
            <h2 className="text-[1.3vw] font-medium pb-3">Skills</h2>
            <div className="flex flex-row gap-[10px] flex-wrap pb-3">
              <Pill
                color="#FFB703"
                contentEditable={isEditable}
                text="C++"
              ></Pill>
              <Pill
                color="#FFB703"
                contentEditable={isEditable}
                text="React"
              ></Pill>
              <Pill
                color="#FFB703"
                contentEditable={isEditable}
                text="Vue"
              ></Pill>
              <Pill
                color="#FFB703"
                contentEditable={isEditable}
                text="Python"
              ></Pill>
              <Pill
                color="#FFB703"
                contentEditable={isEditable}
                text="PHP"
              ></Pill>
              <Pill
                color="#FFB703"
                contentEditable={isEditable}
                text="MySQL"
              ></Pill>
            </div>
          </div>
          <div className="bg-[#F8F8FF]  w-full rounded-[20px] p-[20px]">
            <h2
              className="text-[1.3vw] font-medium mb-2"
              contentEditable={isEditable}
            >
              Front end Developer
            </h2>
            <div className="flex flex-row text-[1vw] text-[#808080] gap-[20px] mb-[10px]">
              <p contentEditable={isEditable}>Full time</p>
              <p contentEditable={isEditable}>Remote</p>
            </div>
            <div className="flex flex-col text-[0.8vw] font-light">
              <p className="break-words w-full overflow-ellipsis">
                I am frontend developer and I know react lol also I have 100
                words to type so I'm gonna do it
              </p>
            </div>
          </div>
          <div className="bg-[#F8F8FF]  w-full rounded-[20px] p-[20px] flex flex-col">
            <h2 className="text-[1.3vw] font-medium  mb-2">Education</h2>
            <div className="flex flex-row gap-[20px] items-center">
              <div className="flex flex-col text-[0.8vw] font-light">
                <div className="flex flex-row gap-[5px] ">
                  <p className="text-[#808080]">Education:</p>
                  <p contentEditable={isEditable}>Higher(2)</p>
                </div>
                <div className="flex flex-row gap-[5px] ">
                  <p className="text-[#808080]">Date of registration:</p>
                  <p contentEditable={isEditable}>7.02.2025</p>
                </div>
                <div className="flex flex-row gap-[5px] ">
                  <p className="text-[#808080]">Degree:</p>
                  <p contentEditable={isEditable}>PhD</p>
                </div>
                <div className="flex flex-row gap-[5px] ">
                  <p className="text-[#808080]">Certification:</p>
                  <p contentEditable={isEditable}>Certificate</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F8F8FF]  w-full rounded-[20px] p-[20px] flex flex-col gap-3">
            <h2 className="text-[1.3vw] font-medium">General</h2>
            <div className="text-[1vw] flex flex-row items-center gap-[10px]">
              <label>Send notifications</label>
              <input type="checkbox" className="w-[0.7vw] h-[0.7vw]"></input>
            </div>
            <div className="text-[1vw] flex flex-row items-center gap-[10px]">
              <label>Theme</label>
              <div
                className="flex items-center cursor-pointer hover:scale-[0.96]"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? (
                  <MdSunny className="text-[30px] text-[#FFB703]" />
                ) : (
                  <HiMiniMoon className="text-[30px] text-[#023047]" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
