"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FaGear, FaEnvelope, FaXmark } from "react-icons/fa6";
import { MdBusiness, MdWork } from "react-icons/md";
import { IoLogIn, IoMenu } from "react-icons/io5";
import { useTranslate } from "../hooks/useTranslate";
import Notification from "./Notification";
import noRender from "../noRender.json";
import Logo from "../../../public/logo-cropped.svg"



export default function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const { translations, loading, lang, setLang } = useTranslate();
  const [selectedType, setSelectedType] = useState("applicant");
  const [isOpen, setIsOpen] = useState(false);
  const [toggled, setToggled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const verifyToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsLogin(false);
      return;
    }
    try {
      const response = await fetch("/auth/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
      setIsLogin(response.ok);
    } catch (error) {
      console.error("Error verifying token:", error);
      setIsLogin(false);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") verifyToken();
  }, []);
  if (noRender.includes(usePathname())) return null;
  if (loading) return null;
  return (
    <header className="flex items-center justify-between w-full p-6 text-[#11181C]">
      <div className="flex flex-row gap-[10px] self-start items-center">
        <Link href="/" className="text-[30px]">
          <Image src={Logo} width={100} height={100}/>
        </Link>
        <div className="flex flex-row">
          <div
            className="!bg-[#FFB703] text-[#F8F8FF] flex flex-row circle-btn z-50"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <h2>{lang.toUpperCase()}</h2>
          </div>
          <div className={`absolute bg-[#F8F8FF] gap-x-[20px] flex flex-row items-center justify-end h-[50px] ms-[25px] rounded-e-full cursor-pointer transition-all ${isOpen ? 'w-[170px]' : 'w-0'}`}>
            <h2 onClick={() => {setLang("en");router.push(`${pathname}?lang=en`)}}>EN</h2>
            <h2 onClick={() => {setLang("ua");router.push(`${pathname}?lang=ua`)}}>UA</h2>
            <FaXmark onClick={() => {setIsOpen(false)}} className="me-[20px]"></FaXmark>
          </div>
        </div>
      </div>
      {!isLogin && (
        <div className="bg-[#219EBC] rounded-full h-[40px]  flex-row items-center justify-center gap-[10px] p-[10px] hidden sm:flex">
          <button
            className={`switch ${
              selectedType === "applicant" ? "switch-active" : ""
            }`}
            onClick={() => setSelectedType("applicant")}
          >
            <span className="hidden md:inline">
              {translations.header.applicant}
            </span>
            <MdWork className="md:hidden" size={20} />
          </button>
          <button
            className={`switch ${
              selectedType === "employer" ? "switch-active" : ""
            }`}
            onClick={() => setSelectedType("employer")}
          >
            <span className="hidden md:inline">
              {translations.header.employer}
            </span>
            <MdBusiness className="md:hidden" size={20} />
          </button>
        </div>
      )}
      
      <nav className="flex flex-row items-center">
     
        <div className="flex flex-row gap-[10px] items-center">
        <div className="flex flex-row">
          <div
            className="!bg-[#FFB703] text-[#F8F8FF] flex flex-row circle-btn z-50"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <h2>{lang.toUpperCase()}</h2>
          </div>
          <div
            className={`absolute bg-[#F8F8FF] gap-x-[20px] flex flex-row items-center justify-end h-[50px] ms-[25px] rounded-e-full cursor-pointer transition-all ${
              isOpen ? "w-[170px]" : "w-0"
            }`}
          >
            <h2
              onClick={() => {
                setLang("en");
                router.push(`${pathname}?lang=en`);
              }}
            >
              EN
            </h2>
            <h2
              onClick={() => {
                setLang("ua");
                router.push(`${pathname}?lang=ua`);
              }}
            >
              UA
            </h2>
            <FaXmark
              onClick={() => {
                setIsOpen(false);
              }}
              className="me-[20px]"
            ></FaXmark>
          </div>
        </div>
          <button
            className="circle-btn"
            onClick={() => setToggled((prev) => !prev)}
          >
            <FaEnvelope size={25}></FaEnvelope>
          </button>
          <div
  className={`w-[366px] max-w-full absolute bg-[#8ecae6] z-[80] border border-black top-[100px] right-[200px] rounded-md transition-all 
              ${!toggled ? "hidden !top-[80px]" : ""} gap-[10px] flex flex-col p-[10px] items-center 
              max-[1024px]:right-[50px] max-[768px]:w-[300px] max-[500px]:w-[100vw] max-[500px]:right-0`}
>
            <p className="font-medium text-[18px]">Notifications</p>
            <hr className="border-[#11181C] w-full"></hr>
            <Notification
              text="You have been hired!"
              jobName="Frontend"
              companyName="Valve"
              link="/"
            ></Notification>
            <hr className="border-[#11181C] w-full"></hr>
            <Notification
              text="You have been hired!"
              jobName="Frontend"
              companyName="Valve"
              link="/"
            ></Notification>
            <hr className="border-[#11181C] w-full"></hr>
            <Notification
              text="You have been hired!"
              jobName="Frontend"
              companyName="Valve"
              link="/"
            ></Notification>
            <hr className="border-[#11181C] w-full"></hr>
            <Link href="/" className="font-medium text-[18px]">
              More
            </Link>
          </div>
          <Link href="/settings">
            <button className="circle-btn">
              <FaGear size={25}></FaGear>
            </button>
          </Link>
          {isLogin ? (
            <p>Profile</p>
          ) : (
            <Link href="/login" className="login-signin ">
             <p className="md:block hidden"> {translations.header.getStarted}</p>
              <IoLogIn className="md:hidden"/>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
