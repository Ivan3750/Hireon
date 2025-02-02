'use client'
import Image from "next/image";
import Link from "next/link";
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
import { useState } from "react";
export default function Settings() {
  const [isEditable, setIsEditable] = useState(false)
  return (
    <div className="bg-[#dcdcdc] w-full aspect-auto flex flex-row justify-center" suppressContentEditableWarning>
      <div className="w-4/5 h-full flex flex-row items-center justify-center gap-[20px] p-[20px]">
        <div className="flex flex-col gap-[20px] h-full w-[40%] rounded-[20px]">
          <div className="bg-[#F8F8FF] h-2/3 w-full rounded-[20px] p-[20px] flex flex-col">
            <h2 className="text-[1.6vw] font-medium my-[20px] overflow-hidden">Name Surname</h2>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row gap-[20px] text-[0.9vw] font-light">
                <ul className="text-[#808080]">
                  <li>Email:</li>
                  <li>Phone:</li>
                  <li>Age:</li>
                  <li>City of residence:</li>
                  <li>Country:</li>
                </ul>
                <ul>
                  <li contentEditable={isEditable}>email@gmail.com</li>
                  <li contentEditable={isEditable}>+1234567890</li>
                  <li contentEditable={isEditable}>42</li>
                  <li contentEditable={isEditable}>Kyiv</li>
                  <li contentEditable={isEditable}>Ukraine</li>
                </ul>
              </div>
              <Image
                src="/bg.jpg"
                width={200}
                height={200}
                alt="avatar"
                className="bg-cover h-[7.5vw] w-[7.5vw]"
              ></Image>
            </div>
            <div className="flex flex-row justify-between w-full items-end">
              <div className="w-1/2">
                <h2 className="text-[1.4vw] font-medium my-[20px] text-nowrap">
                  Social networks
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
              </div>
              <div className="w-1/2 flex flex-col gap-[10px]">
                <div className="w-full">
                  <button className="bg-[#FFB703] rounded-md w-full px-[5px] text-[1vw] hover:text-[#FFB703] hover:bg-[#11181C] transition-all text-nowrap">
                    Sign out
                  </button>
                </div>
                <div className="w-full flex flex-row gap-[10px]">
                  <button className={`${isEditable ? "bg-[#88e788] hover:text-[#88e788]" : "bg-[#219EBC] hover:text-[#219EBC]"} rounded-md w-1/2 px-[5px] text-[0.9vw] hover:bg-[#11181C] transition-all`} onClick={() => {setIsEditable(prev => !prev)}}>
                    {isEditable ? "Save" : "Edit"}
                  </button>
                  <button className="bg-[#F47174] rounded-md w-1/2 px-[5px] text-[0.9vw] hover:text-[#F47174] hover:bg-[#11181C] transition-all">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F8F8FF] h-1/3 w-full rounded-[20px] p-[20px]">
            <h2 className="text-[1.3vw] font-medium" contentEditable={isEditable}>Frontend Developer</h2>
            <div className="flex flex-row text-[1vw] text-[#808080] gap-[30px] mb-[10px]">
              <p contentEditable={isEditable}>Full time</p>
              <p contentEditable={isEditable}>Remote</p>
            </div>
            <div className="flex flex-col text-[0.8vw] font-light">
              <p className="text-[#808080] text-nowrap">About me:</p>
              <p className="break-words w-full overflow-ellipsis" >
                i am frontend developer and i know react lol also i have 100
                words to type so im gonna do it
              </p>
            </div>
          </div>
          <div className="bg-[#F8F8FF] h-1/3 w-full rounded-[20px] p-[20px] grid gap-[20px] grid-rows-2 grid-cols-2">
            <div className="flex flex-col w-full">
              <h2 className="text-[1.3vw] font-medium">Login</h2>
              <h2 className="text-[0.9vw] text-[#808080]" contentEditable={isEditable}>mylogin1337</h2>
            </div>
            <div className="flex flex-col w-full">
              <h2 className="text-[1.3vw] font-medium">Password</h2>
              <h2 className="text-[0.9vw] text-[#808080]" contentEditable={isEditable}>********</h2>
            </div>
            <div className="flex flex-col w-full">
              <h2 className="text-[1.3vw] font-medium">Own link</h2>
              <h2 className="text-[0.9vw] text-[#808080]" contentEditable={isEditable}>iamaworker</h2>
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
        <div className="flex flex-col gap-[20px] h-full w-[60%] rounded-[20px]">
          <div className="bg-[#F8F8FF] h-1/4 w-full rounded-[20px] p-[20px]">
            <h2 className="text-[1.3vw] font-medium">Skills</h2>
            <div className="flex flex-row gap-[10px] flex-wrap">
              <Pill color="#FFB703" contentEditable={isEditable} text="C++"></Pill>
              <Pill color="#FFB703" contentEditable={isEditable} text="React"></Pill>
              <Pill color="#FFB703" contentEditable={isEditable} text="Vue"></Pill>
              <Pill color="#FFB703" contentEditable={isEditable} text="Python"></Pill>
              <Pill color="#FFB703" contentEditable={isEditable} text="PHP"></Pill>
              <Pill color="#FFB703" contentEditable={isEditable} text="MySQL"></Pill>
            </div>
          </div>
          <div className="bg-[#F8F8FF] h-1/4 w-full rounded-[20px] p-[20px]">
            <h2 className="text-[1.3vw] font-medium">Statistics</h2>
            <div className="flex flex-row items-center gap-[30px]">
              <div className="flex flex-col">
                <h3 className="text-[1.3vw] font-light">100</h3>
                <h3 className="text-[0.9vw] text-[#808080] font-light">
                  Level
                </h3>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[1.3vw] font-light">25</h3>
                <h3 className="text-[0.9vw] text-[#808080] font-light">
                  Helps
                </h3>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[1.3vw] font-light">5</h3>
                <h3 className="text-[0.9vw] text-[#808080] font-light">
                  Resumes
                </h3>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[1.3vw] font-light">2</h3>
                <h3 className="text-[0.9vw] text-[#808080] font-light">Jobs</h3>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[1.3vw] font-light">5</h3>
                <h3 className="text-[0.9vw] text-[#808080] font-light">
                  Friends
                </h3>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[1.3vw] font-light">2</h3>
                <h3 className="text-[0.9vw] text-[#808080] font-light">Jobs</h3>
              </div>
            </div>
          </div>
          <div className="bg-[#F8F8FF] h-1/4 w-full rounded-[20px] p-[20px] flex flex-col">
            <h2 className="text-[1.3vw] font-medium w-fit">
              Useful information
            </h2>
            <div className="flex flex-row gap-[20px] items-center">
              <div className="flex flex-col text-[0.8vw] font-light">
                <div className="flex flex-row gap-[5px] w-fit">
                  <p className="text-[#808080]">Education:</p>
                  <p contentEditable={isEditable}>Higher(2)</p>
                </div>
                <div className="flex flex-row gap-[5px] w-fit">
                  <p className="text-[#808080]">Date of registration:</p>
                  <p contentEditable={isEditable}>7.02.2025</p>
                </div>
                <div className="flex flex-row gap-[5px] w-fit">
                  <p className="text-[#808080]">Degree:</p>
                  <p contentEditable={isEditable}>PhD</p>
                </div>
                <div className="flex flex-row gap-[5px] w-fit">
                  <p className="text-[#808080]">Certification:</p>
                  <p contentEditable={isEditable}>Certificate</p>
                </div>
              </div>
              <div className="flex flex-col text-[0.8vw]">
                <div className="flex flex-col w-fit">
                  <Link
                    href="/mfa"
                    className="font-medium flex flex-row items-center gap-[10px]"
                  >
                    My CV<FaArrowUpRightFromSquare></FaArrowUpRightFromSquare>
                  </Link>
                </div>
                <div className="flex flex-col w-fit">
                  <Link
                    href="/mfa"
                    className="font-medium flex flex-row items-center gap-[10px]"
                  >
                    My portfolio
                    <FaArrowUpRightFromSquare></FaArrowUpRightFromSquare>
                  </Link>
                </div>
                <div className="flex flex-col w-fit">
                  <Link
                    href="/mfa"
                    className="font-medium flex flex-row items-center gap-[10px]"
                  >
                    My website
                    <FaArrowUpRightFromSquare></FaArrowUpRightFromSquare>
                  </Link>
                </div>
                <div className="flex flex-col w-fit">
                  <Link
                    href="/mfa"
                    className="font-medium flex flex-row items-center gap-[10px]"
                  >
                    My resumes
                    <FaArrowUpRightFromSquare></FaArrowUpRightFromSquare>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F8F8FF] h-1/4 w-full rounded-[20px] p-[20px]">
            <h2 className="text-[1.3vw] font-medium">General</h2>
            <div className="text-[1vw] flex flex-row items-center gap-[10px]">
              <label>Send notifications</label>
              <input type="checkbox" className="w-[0.7vw] h-[0.7vw]"></input>
            </div>
            <div className="text-[1vw] flex flex-row items-center gap-[10px]">
              <label>Theme</label>
              <select
                name="themes"
                id="theme-select"
                className="bg-[#F8F8FF] outline-none font-light"
              >
                <option value="system" className="font-light">
                  System
                </option>
                <option value="light" className="font-light">
                  Light
                </option>
                <option value="dark" className="font-light">
                  Dark
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
