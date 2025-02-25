"use client";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { MdSunny } from "react-icons/md";
import { HiMiniMoon } from "react-icons/hi2";
import {
  FaArrowUpRightFromSquare,
  FaPhoneAlts,
  FaHouse,
  FaPlus,
} from "react-icons/fa6";
import Pill from "@/app/components/Pill";
import { useTranslate } from "@/app/hooks/useTranslate";
import React, { useState, useEffect } from "react";
import { FaMapMarker, FaPhone } from "react-icons/fa";
export default function Settings() {
  const { translations, loading } = useTranslate();
  const [userData, setUserData] = useState([]);
  const [apiLoad, setApiLoad] = useState(true);
  const [isDisabled, setIsDisabled] = useState(true);
  const [skills, setSkills] = useState([{text: "abc"},{text: "def"},{text: "ghi"}]);

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
      } catch (err) {
      } finally {
        setApiLoad(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return null;
  return (
    <div className="bg-[#dcdcdc] w-full flex flex-col md:flex-row gap-4 p-4 md:p-6 h-3/4">
      <div className="flex flex-col gap-4 rounded-[20px] w-full h-full">
        <div className="bg-[#F8F8FF] w-full rounded-[20px] p-4 flex flex-col justify-between items-stretch h-full">
          <input
            placeholder="Type here"
            className="text-lg md:text-xl font-medium my-2"
            defaultValue={userData.name}
            disabled={isDisabled}
          ></input>
          <div className="flex flex-col md:flex-row justify-between w-full flex-wrap-reverse gap-3">
            <div className="flex flex-col md:flex-row gap-4 font-light">
              <ul className="text-[#808080] gap-1 flex flex-col">
                <li className="flex items-center gap-1">
                  <FaHouse className="text-lg" /> {translations.settings.city}
                </li>
                <li className="flex items-center gap-1">
                  <FaMapMarker className="text-lg" />{" "}
                  {translations.settings.country}
                </li>
                <li className="flex items-center gap-1">
                  <MdOutlineMail className="text-lg" />{" "}
                  {translations.login.email}:
                </li>
                <li className="flex items-center gap-1">
                  <FaPhone className="text-lg" /> {translations.login.phone}:
                </li>
              </ul>
              <ul className="text-[#808080] gap-1 flex flex-col">
                <li>
                  <input
                    placeholder="Type here"
                    className="font-normal text-sm min-w-[200px]"
                    disabled={isDisabled}
                    defaultValue={userData.city}
                  ></input>
                </li>
                <li>
                  <input
                    placeholder="Type here"
                    className="font-normal text-sm min-w-[200px]"
                    disabled={isDisabled}
                    defaultValue={userData.country}
                  ></input>
                </li>
                <li>
                  <input
                    placeholder="Type here"
                    className="font-normal text-sm min-w-[200px]"
                    disabled={isDisabled}
                    defaultValue={userData.email}
                  ></input>
                </li>
                <li>
                  <input
                    placeholder="Type here"
                    type="tel"
                    className="font-normal text-sm min-w-[200px]"
                    disabled={isDisabled}
                    defaultValue={userData.phone}
                  ></input>
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
                    isDisabled
                      ? "bg-[#219EBC] hover:text-[#219EBC]"
                      : "bg-[#88e788] hover:text-[#88e788]"
                  } rounded-[20px] w-1/2 xl:p-2 xl:text-sm text-[12px] p-1 hover:bg-[#11181C] transition-all`}
                  onClick={() => {
                    setIsDisabled((prev) => !prev);
                  }}
                >
                  {isDisabled
                    ? translations.settings.edit
                    : translations.settings.save}
                </button>
                <button className="bg-[#F47174] rounded-[20px] w-1/2 xl:p-2 xl:text-sm text-[12px] p-1 hover:text-[#F47174] hover:bg-[#11181C] transition-all">
                  {translations.settings.delete}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F8F8FF] w-full rounded-[20px] p-4 h-full">
          <h2 className="text-lg md:text-xl font-medium">
            {translations.settings.statistics}
          </h2>
          <div className="flex flex-row items-center gap-6">
            <div className="flex flex-col">
              <h3 className="text-lg font-light">100%</h3>
              <h3 className="text-sm text-[#808080] font-light">
                {translations.settings.reputation}
              </h3>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-light">5</h3>
              <h3 className="text-sm text-[#808080] font-light">
                {translations.settings.jobs}
              </h3>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-light">100%</h3>
              <h3 className="text-sm text-[#808080] font-light">
                {translations.settings.positives}
              </h3>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-light">20</h3>
              <h3 className="text-sm text-[#808080] font-light">
                {translations.settings.resumes}
              </h3>
            </div>
          </div>
        </div>
        <div className="bg-[#F8F8FF] w-full rounded-[20px] p-4 grid gap-4 grid-cols-1 md:grid-cols-2 h-full">
          <div className="flex flex-col w-full">
            <h2 className="text-lg md:text-xl font-medium">
              {translations.login.password}
            </h2>
            <input
              placeholder="Type here"
              type="password"
              className="text-sm text-[#808080]"
              disabled={isDisabled}
              defaultValue={"********"}
            ></input>
          </div>
          <div className="flex flex-col w-full">
            <h2 className="text-lg md:text-xl font-medium">
              {translations.settings.ownLink}
            </h2>
            <input
              placeholder="Type here"
              className="text-sm text-[#808080]"
              disabled={isDisabled}
              defaultValue={"iamaworker"}
            ></input>
          </div>
          <div className="flex flex-col w-full">
            <Link
              href="/mfa"
              className="text-lg md:text-xl font-medium flex flex-row items-center gap-2"
            >
              MFA
              <FaArrowUpRightFromSquare />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 h-full rounded-[20px] w-full">
        <div className="bg-[#F8F8FF] w-full rounded-[20px] p-4 h-full">
          <h2 className="text-lg md:text-xl font-medium pb-3">
            {translations.settings.skills}
          </h2>
          <div className="flex flex-row gap-2 flex-wrap pb-3 items-center">
            {skills.map((e, i) => {return <Pill key={i} text={e.text} color="#FFB703" disabled={isDisabled} deletePill={() => setSkills(prev => prev.slice(0, -1))} />})}
            {!isDisabled && <FaPlus onClick={() => {console.log(skills);setSkills(prev => [...prev, {text: ""}]);console.log(skills)}} className="cursor-pointer"></FaPlus>}
          </div>
        </div>
        <div className="bg-[#F8F8FF] w-full rounded-[20px] p-4 h-full">
          <input
            placeholder="Type here"
            className="text-lg md:text-xl font-medium mb-2"
            disabled={isDisabled}
            defaultValue={"Front end Developer"}
          ></input>
          <div className="flex flex-row text-sm text-[#808080] gap-4 mb-2">
            <input
              placeholder="Type here"
              disabled={isDisabled}
              defaultValue={"Full time"}
            ></input>
            <input
              placeholder="Type here"
              disabled={isDisabled}
              defaultValue={"Remote"}
            ></input>
          </div>
          <div className="flex flex-col text-xs font-light">
            <input
              placeholder="Type here"
              className="break-words w-full overflow-ellipsis"
              defaultValue={
                "I am frontend developer and I know react lol also I have 100 words to type so I'm gonna do it"
              }
              disabled={isDisabled}
            ></input>
          </div>
        </div>
        <div className="bg-[#F8F8FF] w-full rounded-[20px] p-4 flex flex-col gap-3 h-full">
          <h2 className="text-lg md:text-xl font-medium">
            {translations.settings.general}
          </h2>
          <div className="text-sm flex flex-row items-center gap-2">
            <label>{translations.settings.notifications}</label>
            <input
              placeholder="Type here"
              type="checkbox"
              className="w-4 h-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
