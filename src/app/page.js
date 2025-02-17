"use client";
import {
  FaGlobe,
  FaMoneyBill,
  FaHouse,
  FaMagnifyingGlass,
} from "react-icons/fa6";
import Image from "next/image";
import example from "./example.json";
import { useTranslate } from "./hooks/useTranslate";
import { useEffect, useState } from "react";
import Link from "next/link";
import SearchBar from "@/app/components/SearchBar";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  const [found, setFound] = useState([]);
  const [search, setSearch] = useState("");
  const { translations, loading } = useTranslate();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const [hovered, setHovered] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  useEffect(() => {
    const filtered = example.items.filter((e) => {
      return e.name.toLowerCase().includes(search.toLowerCase());
    });
    filtered.length > 10 ? setFound(filtered.slice(0, 10)) : setFound(filtered);
  }, [search]);
  if (loading) return null;
  return (
    <>
      <div className="h-full w-full absolute bg-[rgba(142,202,230,0.6)] -z-40 top-0"></div>
      <Image
        src="/work.jpg"
        alt="bg.jpg image"
        layout="fill"
        className="absolute -z-50 top-0 blur-sm bg-cover"
      ></Image>
      <div className="flex flex-col w-screen min-h-[calc(100vh-98px)] justify-evenly gap-[50px] p-[10px] md:p-[20px]">
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-[30px] md:text-[50px] font-extrabold">
            {translations.home.mainTitle}
          </h2>
          <p className="text-[16px] md:text-[20px] font-medium">
            {translations.home.secondaryTitle}
          </p>
          <SearchBar />
        </div>
        <div className="flex flex-col md:flex-row justify-evenly items-center transition-all w-full gap-8 ">
          <div className="flex flex-col items-start text-center md:text-left w-full md:w-1/2">
            <h2 className="text-[#023047] font-bold text-[25px] md:text-[30px]">
              {translations.home.createResume}
            </h2>
            <p className="text-[#023047] font-normal text-[16px] md:text-[18px] w-full md:w-[400px]">
              {translations.home.createResume2}
            </p>
            <button className="mt-[10px] bg-[#023047] text-[#F8F8FF] h-[40px] text-[18px] md:text-[20px] font-medium rounded-full px-[20px] hover:bg-[#F8F8FF] hover:text-[#023047] transition-all">
              {translations.home.create}
            </button>
          </div>
          <div className="h-auto w-full md:w-[500px] rounded-[20px] bg-[#219EBC] p-[20px] text-[#F8F8FF] overflow-hidden mt-5 md:mt-0">
            <h2 className="text-[#F8F8FF] font-semibold text-[24px] md:text-[32px] pb-[30px]">
              {translations.home.bestOffers}
            </h2>
            <div className="flex flex-col gap-5 md:gap-4 justify-between">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="flex  md:flex-row justify-between gap-3"
                >
                  <div className="flex flex-col gap-[10px]">
                    <p className="text-[16px] md:text-[18px]">
                      Software developer
                    </p>
                    <div className="flex flex-row gap-[10px]">
                      <small className="flex flex-row items-center gap-[5px] font-light text-[12px] md:text-[16px]">
                        <FaGlobe />
                        London
                      </small>
                      <small className="flex flex-row items-center gap-[5px] font-light text-[12px] md:text-[16px]">
                        <FaHouse />
                        Remote
                      </small>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[10px] items-center">
                    <p className="text-[12px] md:text-[18px] font-medium flex flex-row gap-[10px]">
                      <FaMoneyBill size={20} />
                      €999
                    </p>
                    <button className="rounded-full bg-[#FFB703] px-[15px] py-[5px] text-[12px] md:text-[16px] font-light hover:bg-[#11181C] hover:text-[#FFB703] transition-all a-btn">
                      {translations.home.review}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" w-screen bg-[#F8F8FF] py-5 px-5 sm:py-5 pb-0 sm:px-10 lg:py-20 lg:px-14">
        <h2
          className="font-bold text-[42px] text-center mb-5 max-[1537px]:text-[32px] 
          max-[1280px]:text-[28px] 
          max-[1024px]:text-[24px] 
          max-[768px]:text-[20px] 
          max-[480px]:text-[16px]"
        >
          {translations.home.jobsInCountries}
        </h2>
        <div
          className="flex flex-wrap gap-5 justify-center sm:justify-start max-w-[1400px] m-auto my-0"
          data-aos="fade-up"
        >
          <div className="relative country">
            <div className="absolute inset-0 bg-[url(/Ukraine.jpg)] bg-cover bg-center bg-blend-multiply bg-black/50"></div>
            <div className="relative z-10 flex flex-col">
              <small>Ukraine</small>
              <small>
                {" "}
                <span className="text-[25px] font-semibold">2337</span>
                {translations.home.vacancy}
              </small>
            </div>
          </div>
          <div className="relative country">
            <div className="absolute inset-0 bg-[url(/Denmark.jpg)] bg-cover bg-center bg-blend-multiply bg-black/50"></div>
            <div className="relative z-10 flex flex-col">
              <small>Denmark</small>
              <small>
                <span className="text-[25px] font-semibold">458</span>{" "}
                {translations.home.vacancy}
              </small>
            </div>
          </div>
          <div className="relative country">
            <div className="absolute inset-0 bg-[url(/Germany.jpg)] bg-cover bg-center bg-blend-multiply bg-black/50"></div>
            <div className="relative z-10 flex flex-col">
              <small>Germany</small>
              <small>
                <span className="text-[25px] font-semibold">742</span>{" "}
                {translations.home.vacancy}
              </small>
            </div>
          </div>
          <div className="relative country">
            <div className="absolute inset-0 bg-[url(/Poland.jpg)] bg-cover bg-center bg-blend-multiply bg-black/50"></div>
            <div className="relative z-10 flex flex-col">
              <small>Poland</small>
              <small>
                <span className="text-[25px] font-semibold">860</span>{" "}
                {translations.home.vacancy}
              </small>
            </div>
          </div>
          <div className="relative country">
            <div className="absolute inset-0 bg-[url(/France.jpg)] bg-cover bg-center bg-blend-multiply bg-black/50"></div>
            <div className="relative z-10 flex flex-col">
              <small>France</small>
              <small>
                <span className="text-[25px] font-semibold">1501</span>{" "}
                {translations.home.vacancy}
              </small>
            </div>
          </div>
          <div className="relative country">
            <div className="absolute inset-0 bg-[url(/Spain.jpg)] bg-cover bg-center bg-blend-multiply bg-black/50"></div>
            <div className="relative z-10 flex flex-col">
              <small>Spain</small>
              <small>
                <span className="text-[25px] font-semibold">854</span>{" "}
                {translations.home.vacancy}
              </small>
            </div>
          </div>
          <div className="relative country">
            <div className="absolute inset-0 bg-[url(/Italy.jpg)] bg-cover bg-center bg-blend-multiply bg-black/50"></div>
            <div className="relative z-10 flex flex-col">
              <small>Italy</small>
              <small>
                <span className="text-[25px] font-semibold">398</span>{" "}
                {translations.home.vacancy}
              </small>
            </div>
          </div>
          <div className="relative country">
            <div className="absolute inset-0 bg-[url(/Sweden.jpg)] bg-cover bg-center bg-blend-multiply bg-black/50"></div>
            <div className="relative z-10 flex flex-col">
              <small>Sweden</small>
              <small>
                <span className="text-[25px] font-semibold">470</span>{" "}
                {translations.home.vacancy}
              </small>
            </div>
          </div>
        </div>
        <h2
          className="font-medium text-[42px] text-center mt-5 max-[1537px]:text-[32px] 
          max-[1280px]:text-[28px] 
          max-[1024px]:text-[24px] 
          max-[768px]:text-[20px] 
          max-[480px]:text-[16px]"
        >
          {translations.home.payForTravel}
        </h2>
      </div>
      <div className=" w-screen  bg-[#F8F8FF] py-10 px-5 sm:py-16 sm:px-10 lg:py-20 lg:px-14">
        <h2
          className="font-medium text-[38px] text-left w-3/4 my-0 mx-auto
          max-[1537px]:text-[32px] 
          max-[1280px]:text-[28px] 
          max-[1024px]:text-[24px] 
          max-[768px]:text-[20px] 
          max-[480px]:text-[16px] "
        >
          {translations.home.aiHelper}
        </h2>
        <h2
          className="font-medium text-[42px] text-right w-3/4 my-0 mx-auto
          max-[1537px]:text-[32px] 
          max-[1280px]:text-[28px] 
          max-[1024px]:text-[24px] 
          max-[768px]:text-[20px] 
          max-[480px]:text-[16px]"
        >
          {translations.home.aiHelper2}
        </h2>
        <h2
          className="font-medium text-[42px] m-[25px]   max-[1537px]:text-[32px] text-center
          max-[1280px]:text-[28px] 
          max-[1024px]:text-[24px] 
          max-[768px]:text-[20px] 
          max-[480px]:text-[16px]"
        >
          {translations.home.convExample}
        </h2>
        <video
          className="m-[20px] bg-[#808080] rounded-[20px] w-[350px] h-[250px] my-0 mx-auto"
          autoPlay
          muted
        >
          {/* <source src={video} type="video/mp4"></source>  */}
        </video>
        <p
          className="font-light text-[24px] text-left w-3/4 max-[1537px]:text-[20px] mt-4
          max-[1280px]:text-[18px] 
          max-[1024px]:text-[17px] 
          max-[768px]:text-[15px] 
          max-[480px]:text-[14px]"
        >
          {translations.home.poweredBy}
        </p>
      </div>
      <div className="w-screen bg-[#F8F8FF] pb-[100px] whitespace-nowrap will-change-transform ">
        <h2
          className="font-medium text-[42px] text-left max-[1537px]:text-[32px] my-[15px] mx-auto
          max-[1280px]:text-[28px] 
          max-[1024px]:text-[24px] 
          max-[768px]:text-[20px] 
          max-[480px]:text-[16px]
          w-1/2
          "
        >
          {translations.home.dontWait}
        </h2>
        <h2
          className="font-medium text-[42px] text-right max-[1537px]:text-[32px] my-[15px] mx-auto 
          max-[1280px]:text-[28px]
          max-[1024px]:text-[24px]
          max-[768px]:text-[20px]
          max-[480px]:text-[16px]
          w-1/2
          "
        >
          {translations.home.makeDreamTrue}
        </h2>
        <Link href="/login" className="my-[25px]">
          <button className="bg-[#FB8500] rounded-[30px] p-[10px] block text-[20px] my-[0px] mx-auto hover:text-[#FB8500] hover:bg-[#11181C] transition-all">
            {translations.header.getStarted}
          </button>
        </Link>
        <p
          className="text-[30px] mb-[10px] text-center max-[1537px]:text-[28px] 
          max-[1280px]:text-[26px] 
          max-[1024px]:text-[24px] 
          max-[768px]:text-[20px] 
          max-[480px]:text-[18px]"
        >
          {translations.home.peopleWeHelped}
        </p>
        {/*цей блок має бути 100% ширини екрану*/}
        <div
          className={`flex flex-row gap-[20px] flex-nowrap w-full whitespace-nowrap will-change-transform !overflow-visible animate-[scroll_10s_infinite_linear]`}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              id={i}
              className={`flex flex-col items-center text-[20px] flex-shrink-0 p-4 rounded-[20px] cursor-pointer transition-all
            ${hoveredId === i && "scale-105 shadow-md"}`}
              onMouseEnter={() => {
                setHoveredId(i);
              }}
              onMouseLeave={() => {
                setHoveredId(null);
              }}
            >
              <Image
                src="/person.jpg"
                alt="user"
                width={300}
                height={225}
                className="mb-[5px] rounded-[20px]"
              />
              <p>
                {((Math.random() * 0xffffff) << 0)
                  .toString(16)
                  .padStart(6, "0")}
              </p>
              <p className="font-light">
                {((Math.random() * 0xffffff) << 0)
                  .toString(16)
                  .padStart(6, "0")}
              </p>
              <p className="font-light">
                {((Math.random() * 0xffffff) << 0)
                  .toString(16)
                  .padStart(6, "0")}
              </p>
            </div>
          ))}
        </div>
        {/*цей блок має бути 100% ширини екрану*/}
      </div>
    </>
  );
}
