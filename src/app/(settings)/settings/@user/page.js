"use client";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";
import { HiMiniMoon } from "react-icons/hi2";
import {
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from "react-icons/fa6";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Pill from "@/app/components/Pill";
import { useTranslate } from "@/app/hooks/useTranslate";
import { useState } from "react";
export default function Settings() {
  const { translations, loading, lang, setLang } = useTranslate();
  const [isEditable, setIsEditable] = useState(false);
  if (loading) return null;
  return (
    <div className="bg-[#dcdcdc] w-full aspect-auto flex flex-row justify-center">
      <div className="w-4/5 h-full flex flex-row items-center justify-center gap-[20px] p-[20px]">
        <div className="flex flex-col gap-[20px] h-full w-[40%] rounded-[20px]">
          <div className="bg-[#F8F8FF] h-2/3 w-full rounded-[20px] p-[20px] flex flex-col">
            <h2 className="text-[1.6vw] font-medium my-[20px] overflow-hidden">
              Name Surname
            </h2>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row gap-[20px] text-[0.9vw] font-light">
                <ul className="text-[#808080]">
                  <li>{translations.login.email}:</li>
                  <li>{translations.login.phone}:</li>
                  <li>{translations.settings.age}</li>
                  <li>{translations.settings.city}</li>
                  <li>{translations.settings.country}</li>
                </ul>
                <ul>
                  <li
                    contentEditable={isEditable}
                    className="text-[#11181C] font-normal"
                  >
                    email@gmail.com
                  </li>
                  <li
                    contentEditable={isEditable}
                    className="text-[#11181C] font-normal"
                  >
                    +1234567890
                  </li>
                  <li
                    contentEditable={isEditable}
                    className="text-[#11181C] font-normal"
                  >
                    42
                  </li>
                  <li
                    contentEditable={isEditable}
                    className="text-[#11181C] font-normal"
                  >
                    Kyiv
                  </li>
                  <li
                    contentEditable={isEditable}
                    className="text-[#11181C] font-normal"
                  >
                    Ukraine
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
              {/*   <div className="w-1/2">
                <h2 className="text-[1.4vw] font-medium my-[20px] text-nowrap">
                  {translations.settings.social}
                </h2>
                <div className="flex flex-row text-[1.3vw] gap-[10px] p-[5px]">
                  <FaFacebook
                    color="#1877F2"
                    className="hover:scale-110 transition-all cursor-pointer"
                  />
                  <FaYoutube
                    color="#FF0000"
                    className="hover:scale-110 transition-all cursor-pointer"
                  />
                  <FaLinkedin
                    color="#0077B5"
                    className="hover:scale-110 transition-all cursor-pointer"
                  />
                  <FaTiktok className="hover:scale-110 transition-all cursor-pointer" />
                  <FaInstagram className="hover:scale-110 transition-all cursor-pointer" />
                  <FaTwitter
                    color="#1DA1F2"
                    className="hover:scale-110 transition-all cursor-pointer"
                  />
                  <FaGithub className="hover:scale-110 transition-all cursor-pointer" />
                </div>
              </div> */}
              <div className="w-1/2 flex flex-col gap-[10px]">
                <div className="w-full">
                  <button className="bg-[#FFB703] rounded-md w-full px-[5px] text-[1vw] hover:text-[#FFB703] hover:bg-[#11181C] transition-all text-nowrap">
                    {translations.settings.signOut}
                  </button>
                </div>
                <div className="w-full flex flex-row gap-[10px]">
                  <button
                    className={`${
                      isEditable
                        ? "bg-[#88e788] hover:text-[#88e788]"
                        : "bg-[#219EBC] hover:text-[#219EBC]"
                    } rounded-md w-1/2 px-[5px] text-[0.9vw] hover:bg-[#11181C] transition-all`}
                    onClick={() => {
                      setIsEditable((prev) => !prev);
                    }}
                  >
                    {isEditable
                      ? translations.settings.save
                      : translations.settings.edit}
                  </button>
                  <button className="bg-[#F47174] rounded-md w-1/2 px-[5px] text-[0.9vw] hover:text-[#F47174] hover:bg-[#11181C] transition-all">
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
          <div className="bg-[#F8F8FF] h-1/3 w-full rounded-[20px] p-[20px]">
            <h2
              className="text-[1.3vw] font-medium"
              contentEditable={isEditable}
            >
              Frontend Developer
            </h2>
            <div className="flex flex-row text-[1vw] text-[#808080] gap-[30px] mb-[10px]">
              <select name="time" id="time" disabled={!isEditable}>
                <option value="fullTime">
                  {translations.settings.time.fullTime}
                </option>
                <option value="weekdays">
                  {translations.settings.time.weekdays}
                </option>
                <option value="weekends">
                  {translations.settings.time.weekends}
                </option>
              </select>
              <select name="type" id="type" disabled={!isEditable}>
                <option value="remote">
                  {translations.settings.type.remote}
                </option>
                <option value="onSite">
                  {translations.settings.type.onSite}
                </option>
                <option value="mixed">
                  {translations.settings.type.mixed}
                </option>
              </select>
            </div>
            <div className="flex flex-col text-[0.8vw] font-light">
              <p className="text-[#808080] text-nowrap flex flex-row gap-[10px]">
                {translations.settings.aboutMe}
                <span className="break-words w-full overflow-ellipsis text-[#11181C] font-normal">
                  idk lol
                </span>
              </p>
              <p className="text-[#808080] text-nowrap flex flex-row gap-[10px]">
                {translations.settings.goals}
                <span className="break-words w-full overflow-ellipsis text-[#11181C] font-normal">
                  Become the best fronted developer.
                </span>
              </p>
              <p className="text-[#808080] text-nowrap flex flex-row gap-[10px]">
                {translations.settings.experience}
                <span className="break-words w-full overflow-ellipsis text-[#11181C] font-normal">
                  10 years
                </span>
              </p>
            </div>
          </div>
          <div className="bg-[#F8F8FF] h-1/3 w-full rounded-[20px] p-[20px] grid gap-[20px] grid-rows-2 grid-cols-2">
            <div className="flex flex-col w-full">
              <h2 className="text-[1.3vw] font-medium">
                {translations.settings.login}
              </h2>
              <h2
                className="text-[0.9vw] text-[#808080]"
                contentEditable={isEditable}
              >
                mylogin1337
              </h2>
            </div>
            <div className="flex flex-col w-full">
              <h2 className="text-[1.3vw] font-medium">
                {translations.login.password}
              </h2>
              <h2
                className="text-[0.9vw] text-[#808080]"
                contentEditable={isEditable}
              >
                ********
              </h2>
            </div>
            <div className="flex flex-col w-full">
              <h2 className="text-[1.3vw] font-medium">
                {translations.settings.ownLink}
              </h2>
              <h2
                className="text-[0.9vw] text-[#808080]"
                contentEditable={isEditable}
              >
                iamaworker
              </h2>
            </div>
            <div className="flex flex-col w-full">
              <h2 className="text-[1.3vw] font-medium">
                {translations.login.email}
              </h2>
              <h2
                className="text-[0.9vw] text-[#808080]"
                contentEditable={isEditable}
              >
                email@example.com
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] h-full w-[60%] rounded-[20px]">
          <div className="bg-[#F8F8FF] h-1/4 w-full rounded-[20px] p-[20px]">
            <h2 className="text-[1.3vw] font-medium">
              {translations.settings.skills}
            </h2>
            <div className="flex flex-row gap-[10px] flex-wrap">
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
          <div className="bg-[#F8F8FF] h-1/4 w-full rounded-[20px] p-[20px]">
            <h2 className="text-[1.3vw] font-medium">
              {translations.settings.statistics}
            </h2>
            <div className="flex flex-row items-center gap-[30px]">
              <div className="flex flex-col">
                <h3 className="text-[1.3vw] font-light">100%</h3>
                <h3 className="text-[0.8vw] text-[#808080] font-light">
                  {translations.settings.reputation}
                </h3>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[1.3vw] font-light">52%</h3>
                <h3 className="text-[0.8vw] text-[#808080] font-light">
                  {translations.settings.positives}
                </h3>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[1.3vw] font-light">25</h3>
                <h3 className="text-[0.8vw] text-[#808080] font-light">
                  {translations.settings.helps}
                </h3>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[1.3vw] font-light">5</h3>
                <h3 className="text-[0.8vw] text-[#808080] font-light">
                  {translations.settings.resumes}
                </h3>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[1.3vw] font-light">5</h3>
                <h3 className="text-[0.8vw] text-[#808080] font-light">
                  {translations.settings.friends}
                </h3>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[1.3vw] font-light">7</h3>
                <h3 className="text-[0.8vw] text-[#808080] font-light">
                  {translations.settings.jobs}
                </h3>
              </div>
            </div>
          </div>
          <div className="bg-[#F8F8FF] h-1/4 w-full rounded-[20px] p-[20px] flex flex-col">
            <h2 className="text-[1.3vw] font-medium w-fit">
              {translations.settings.useful}
            </h2>
            <div className="flex flex-row gap-[20px] items-center">
              <div className="flex flex-col text-[0.8vw] font-light">
                <div className="flex flex-row gap-[5px] w-fit">
                  <p className="text-[#808080]">
                    {translations.settings.registration}
                  </p>
                  <p className="text-[#11181C] font-normal">7.02.2025</p>
                </div>
                <div className="flex flex-row gap-[5px] w-fit">
                  <p className="text-[#808080]">
                    {translations.settings.education}
                  </p>
                  <p
                    contentEditable={isEditable}
                    className="text-[#11181C] font-normal"
                  >
                    Higher(1337)
                  </p>
                </div>
                <div className="flex flex-row gap-[5px] w-fit">
                  <p className="text-[#808080]">
                    {translations.settings.educInst}
                  </p>
                  <p
                    contentEditable={isEditable}
                    className="text-[#11181C] font-normal"
                  >
                    Oxford university
                  </p>
                </div>
                <div className="flex flex-row gap-[5px] w-fit">
                  <p className="text-[#808080]">
                    {translations.settings.certification}
                  </p>
                  <p
                    contentEditable={isEditable}
                    className="text-[#11181C] font-normal"
                  >
                    Certificate(3)
                  </p>
                </div>
              </div>
              <div className="flex flex-col text-[0.8vw]">
                <div className="flex flex-col w-fit">
                  <Link
                    href="/mfa"
                    className="font-medium flex flex-row items-center gap-[10px]"
                  >
                    {translations.settings.cv}
                    <FaArrowUpRightFromSquare></FaArrowUpRightFromSquare>
                  </Link>
                </div>
                <div className="flex flex-col w-fit">
                  <Link
                    href="/mfa"
                    className="font-medium flex flex-row items-center gap-[10px]"
                  >
                    {translations.settings.portfolio}
                    <FaArrowUpRightFromSquare></FaArrowUpRightFromSquare>
                  </Link>
                </div>
                <div className="flex flex-col w-fit">
                  <Link
                    href="/mfa"
                    className="font-medium flex flex-row items-center gap-[10px]"
                  >
                    {translations.settings.website}
                    <FaArrowUpRightFromSquare></FaArrowUpRightFromSquare>
                  </Link>
                </div>
                <div className="flex flex-col w-fit">
                  <Link
                    href="/mfa"
                    className="font-medium flex flex-row items-center gap-[10px]"
                  >
                    {translations.settings.resume}
                    <FaArrowUpRightFromSquare></FaArrowUpRightFromSquare>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F8F8FF] h-1/4 w-full rounded-[20px] p-[20px]">
            <h2 className="text-[1.3vw] font-medium">
              {translations.settings.general}
            </h2>
            <div className="text-[1vw] flex flex-row items-center gap-[10px]">
              <label>{translations.settings.notifications}</label>
              <input type="checkbox" className="w-[0.7vw] h-[0.7vw]"></input>
            </div>
            <div className="text-[1vw] flex flex-row items-center gap-[10px]">
              <label>{translations.settings.messages}</label>
              <input type="checkbox" className="w-[0.7vw] h-[0.7vw]"></input>
            </div>
            <div className="text-[1vw] flex flex-row items-center gap-[10px]">
              <label>{translations.settings.theme}</label>
              <select
                name="themes"
                id="theme-select"
                className="bg-[#F8F8FF] outline-none font-light"
              >
                <option value="system" className="font-light">
                  {translations.settings.system}
                </option>
                <option value="light" className="font-light">
                  {translations.settings.light}
                </option>
                <option value="dark" className="font-light">
                  {translations.settings.dark}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
