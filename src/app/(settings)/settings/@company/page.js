"use client";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { MdSunny } from "react-icons/md";
import { HiMiniMoon } from "react-icons/hi2";
import { FaArrowUpRightFromSquare,FaPhoneAlts,FaHouse } from "react-icons/fa6";
import Pill from "@/app/components/Pill";
import { useTranslate } from "@/app/hooks/useTranslate";
import { useState, useEffect } from "react";
import { FaMapMarker, FaPhone } from "react-icons/fa";

export default function Settings() {
  const { translations, loading} = useTranslate();
  const [userData, setUserData] = useState([]);
  const [apiLoad, setApiLoad] = useState(true)

  const [isEditable, setIsEditable] = useState(false);
  const [darkMode, setDarkMode] = useState(window?.localStorage?.getItem("theme") || "dark")

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("/api/user/data", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUserData(data);
      } catch (err) {} 
      finally {
        setApiLoad(false);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  if (loading) return null
  return (
    <div className="bg-[#dcdcdc] w-full flex flex-col md:flex-row gap-4 p-4 md:p-6 h-full">
      <div className="flex flex-col gap-4 rounded-[20px] w-full h-full">
        <div className="bg-[#F8F8FF] w-full rounded-[20px] p-4 flex flex-col justify-between items-stretch h-full">
          <h2 className="text-lg md:text-xl font-medium my-2">{userData.name}</h2>
          <div className="flex flex-col md:flex-row justify-between w-full flex-wrap-reverse gap-3">
            <div className="flex flex-col md:flex-row gap-4 font-light">
              <ul className="text-[#808080] gap-1 flex flex-col">
                <li className="flex items-center gap-1">
                  <FaHouse className="text-lg" /> {translations.settings.city}
                </li>
                <li className="flex items-center gap-1">
                  <FaMapMarker className="text-lg" /> {translations.settings.country}
                </li>
                <li className="flex items-center gap-1">
                  <MdOutlineMail className="text-lg" /> {translations.login.email}:
                </li>
                <li className="flex items-center gap-1">
                  <FaPhone className="text-lg" /> {translations.login.phone}:
                </li>
              </ul>

              <ul className="text-[#808080] gap-1 flex flex-col">
                <li className="font-normal text-sm" contentEditable={isEditable}>
                  {userData.city}
                </li>
                <li className="font-normal text-sm" contentEditable={isEditable}>
                  {userData.country}
                </li>
                <li className="font-normal text-sm" contentEditable={isEditable}>
                  {userData.email}
                </li>
                <li className="font-normal text-sm" contentEditable={isEditable}>
                  {userData.phone}
                </li>
              </ul>
            </div>
            <Image
              src={userData.avatar || "/bg.jpg"}
              width={200}
              height={200}
              alt="avatar"
              className="bg-cover h-24 w-24 rounded-full md:mx-0 mx-auto"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between w-full py-2 items-end gap-4">
            <div className="w-full md:w-1/2 flex flex-col gap-2">
              <button className="bg-[#FFB703] rounded-[20px] w-full xl:p-2 xl:text-sm text-[12px] p-1 hover:text-[#FFB703] hover:bg-[#11181C] transition-all">
                {translations.settings.signOut}
              </button>
              <div className="flex flex-row gap-2">
                <button
                  className={`${
                    isEditable
                      ? "bg-[#88e788] hover:text-[#88e788]"
                      : "bg-[#219EBC] hover:text-[#219EBC]"
                  } rounded-[20px] w-1/2 xl:p-2 xl:text-sm text-[12px] p-1 hover:bg-[#11181C] transition-all`}
                  onClick={() => {
                    setIsEditable((prev) => !prev);
                  }}
                >
                  {isEditable ? translations.settings.save : translations.settings.edit}
                </button>
                <button className="bg-[#F47174] rounded-[20px] w-1/2 xl:p-2 xl:text-sm text-[12px] p-1 hover:text-[#F47174] hover:bg-[#11181C] transition-all">
                  {translations.settings.delete}
                </button>
              </div>
            </div>
            <div className="flex flex-col text-sm gap-2 md:w-fit w-full">
              <Link
                href="/cv"
                className="bg-[#FFB703] rounded-[20px] w-full xl:p-2 xl:text-sm text-[12px] p-1 hover:text-[#FFB703] hover:bg-[#11181C] transition-all text-center"
              >
                {translations.settings.cv}
              </Link>
              <Link
                href="/portfolio"
                className="bg-[#FFB703] rounded-[20px] w-full xl:p-2 xl:text-sm text-[12px] p-1 hover:text-[#FFB703] hover:bg-[#11181C] transition-all text-center"
              >
                {translations.settings.portfolio}
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#F8F8FF] w-full rounded-[20px] p-4 h-full">
          <h2 className="text-lg md:text-xl font-medium">{translations.settings.statistics}</h2>
          <div className="flex flex-row items-center gap-6">
            <div className="flex flex-col">
              <h3 className="text-lg font-light">100%</h3>
              <h3 className="text-sm text-[#808080] font-light">{translations.settings.reputation}</h3>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-light">5</h3>
              <h3 className="text-sm text-[#808080] font-light">{translations.settings.jobs}</h3>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-light">100%</h3>
              <h3 className="text-sm text-[#808080] font-light">{translations.settings.positives}</h3>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-light">20</h3>
              <h3 className="text-sm text-[#808080] font-light">{translations.settings.resumes}</h3>
            </div>
          </div>
        </div>

        <div className="bg-[#F8F8FF] w-full rounded-[20px] p-4 grid gap-4 grid-cols-1 md:grid-cols-2 h-full">
          <div className="flex flex-col w-full">
            <h2 className="text-lg md:text-xl font-medium">{translations.login.password}</h2>
            <h2 className="text-sm text-[#808080]" contentEditable={isEditable}>
              ••••••••••••••••
            </h2>
          </div>
          <div className="flex flex-col w-full">
            <h2 className="text-lg md:text-xl font-medium">{translations.settings.ownLink}</h2>
            <h2 className="text-sm text-[#808080]" contentEditable={isEditable}>
              iamaworker
            </h2>
          </div>
          <div className="flex flex-col w-full">
            <Link
              href="/mfa"
              className="text-lg md:text-xl font-medium flex flex-row items-center gap-2"
            >
              MFA<FaArrowUpRightFromSquare />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 h-full rounded-[20px] w-full">
        <div className="bg-[#F8F8FF] w-full rounded-[20px] p-4 h-full">
          <h2 className="text-lg md:text-xl font-medium pb-3">{translations.settings.skills}</h2>
          <div className="flex flex-row gap-2 flex-wrap pb-3">
            <Pill color="#FFB703" contentEditable={isEditable} text="C++" />
            <Pill color="#FFB703" contentEditable={isEditable} text="React" />
            <Pill color="#FFB703" contentEditable={isEditable} text="Vue" />
            <Pill color="#FFB703" contentEditable={isEditable} text="Python" />
            <Pill color="#FFB703" contentEditable={isEditable} text="PHP" />
            <Pill color="#FFB703" contentEditable={isEditable} text="MySQL" />
          </div>
        </div>
        <div className="bg-[#F8F8FF] w-full rounded-[20px] p-4 h-full">
          <h2 className="text-lg md:text-xl font-medium mb-2" contentEditable={isEditable}>
            Front end Developer
          </h2>
          <div className="flex flex-row text-sm text-[#808080] gap-4 mb-2">
            <p contentEditable={isEditable}>Full time</p>
            <p contentEditable={isEditable}>Remote</p>
          </div>
          <div className="flex flex-col text-xs font-light">
            <p className="break-words w-full overflow-ellipsis">
              I am frontend developer and I know react lol also I have 100 words to type so I'm gonna do it
            </p>
          </div>
        </div>
        {/* <div className="bg-[#F8F8FF] w-full rounded-[20px] p-4 flex flex-col h-full">
          <h2 className="text-lg md:text-xl font-medium mb-2">Education</h2>
          <div className="flex flex-row gap-4 items-center">
            <div className="flex flex-col text-xs font-light">
              <div className="flex flex-row gap-1">
                <p className="text-[#808080]">Education:</p>
                <p contentEditable={isEditable}>Higher(2)</p>
              </div>
              <div className="flex flex-row gap-1">
                <p className="text-[#808080]">Date of registration:</p>
                <p contentEditable={isEditable}>7.02.2025</p>
              </div>
              <div className="flex flex-row gap-1">
                <p className="text-[#808080]">Degree:</p>
                <p contentEditable={isEditable}>PhD</p>
              </div>
              <div className="flex flex-row gap-1">
                <p className="text-[#808080]">Certification:</p>
                <p contentEditable={isEditable}>Certificate</p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="bg-[#F8F8FF] w-full rounded-[20px] p-4 flex flex-col gap-3 h-full">
          <h2 className="text-lg md:text-xl font-medium">{translations.settings.general}</h2>
          <div className="text-sm flex flex-row items-center gap-2">
            <label>{translations.settings.notifications}</label>
            <input type="checkbox" className="w-4 h-4" />
          </div>
          <div className="text-sm flex flex-row items-center gap-2">
            <label>Theme</label>
            <div
              className="flex items-center cursor-pointer hover:scale-95"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? (
                <MdSunny className="text-2xl text-[#FFB703]" />
              ) : (
                <HiMiniMoon className="text-2xl text-[#023047]" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
