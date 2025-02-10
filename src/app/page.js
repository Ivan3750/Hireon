"use client";
import {
  FaMagnifyingGlass,
  FaGlobe,
  FaMoneyBill,
  FaHouse,
} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import example from "./example.json";
import {useTranslate} from "./hooks/useTranslate";
import { useEffect, useState } from "react";


export default function Home() {
  const [found, setFound] = useState([]);
  const [search, setSearch] = useState("");
  const { translations, loading, lang, setLang } = useTranslate();
  useEffect(() => {
    const filtered = example.items
      .filter((e) => {
        return e.name.toLowerCase().includes(search.toLowerCase());
      })
    filtered.length > 10 ? setFound(filtered.slice(0, 10)) : setFound(filtered);;
  }, [search]);
  if (loading) return null;
  return (
    <>
    
      <div className="h-full w-full absolute bg-[rgba(142,202,230,0.6)] -z-40 top-0"></div>
      <Image
        src="/bg.jpg"
        alt="bg.jpg image"
        layout="fill"
        className="absolute -z-50 top-0 blur-sm"
      ></Image>
      <div className="flex flex-col w-screen min-h-[calc(100vh-98px)] justify-end gap-[50px] p-[10px] md:p-[20px]">
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-[30px] md:text-[50px] font-extrabold">
            {translations.home.mainTitle}
          </h2>
          <p className="text-[16px] md:text-[20px] font-medium">
            {translations.home.secondaryTitle}
          </p>
          <div className="flex flex-col mt-3 w-full max-w-[720px]">
            <div className="flex flex-row z-50 w-full">
              <div className="bg-[#F8F8FF] ps-3 rounded-s-[20px] flex items-center">
                <FaMagnifyingGlass size={20} color="808080" className="h-[48px]"></FaMagnifyingGlass>
              </div>
              <input
                placeholder={translations.home.findJob}
                className="p-3 w-full placeholder:text-[#808080] bg-[#F8F8FF] outline-none rounded-e-[20px]"
                onInput={(e) => setSearch(e.target.value.trim())}
              />
            </div>
            <div
              className={`absolute w-[722px] ${
                search ? "h-[518px]" : "h-0"
              } bg-[#F8F8FF] mt-[24px] transition-all rounded-b-[20px] pt-[24px]`}
            >
              {found.map((e) => {
                return (
                  <>
                    <div className="item">
                      <Link href={`/job/${e.name}`} className="link overflow-ellipsis">{e.name.split(new RegExp(`(${search})`, 'gi')).map((f, i) => {
                        return f.toLowerCase() === search.toLowerCase() ? <mark key={i}>{f}</mark> : f
                      })} by {e.by}</Link>
                    </div>
                    <hr></hr>
                  </>
                );
              })}
              {(found.length && found.length >= 10) ? (
                <Link className="font-medium text-center my-[10px] w-full block" href={`/job?search=${search}`}>
                  More
                </Link>
              ) : (
                <h2 className="text-[#808080] text-center my-[10px]">Sorry, nothing found.</h2>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly items-center transition-all w-full gap-8 ">
          <div className="flex flex-col items-start text-center md:text-left w-full md:w-1/2">
            <h2 className="text-[#023047] font-medium text-[30px] md:text-[45px]">
              {translations.home.createResume}
            </h2>
            <p className="text-[#023047] font-medium text-[18px] md:text-[24px] w-full md:w-[400px]">
              {translations.home.createResume2}
            </p>
            <button className="mt-[10px] bg-[#023047] text-[#F8F8FF] h-[40px] text-[18px] md:text-[20px] font-medium rounded-full px-[20px] hover:bg-[#F8F8FF] hover:text-[#023047] transition-all">
              {translations.home.create}
            </button>
          </div>
          <div className="h-auto w-full md:w-[500px] rounded-[20px] bg-[#219EBC] p-[20px] text-[#F8F8FF] overflow-hidden mt-5 md:mt-0">
            <h2 className="text-[#F8F8FF] font-semibold text-[24px] md:text-[32px]">
              {translations.home.bestOffers}
            </h2>
            <div className="flex flex-col gap-5 md:gap-4 justify-between">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="flex  md:flex-row justify-between gap-3">
                  <div className="flex flex-col gap-[10px]">
                    <p className="text-[16px] md:text-[18px]">Software developer</p>
                    <div className="flex flex-row gap-[10px]">
                      <small className="flex flex-row items-center gap-[5px] font-light text-[14px] md:text-[16px]">
                        <FaGlobe />London
                      </small>
                      <small className="flex flex-row items-center gap-[5px] font-light text-[14px] md:text-[16px]">
                        <FaHouse />Remote
                      </small>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[10px] items-center">
                    <p className="text-[16px] md:text-[18px] font-medium flex flex-row gap-[10px]">
                      <FaMoneyBill size={20} />$999
                    </p>
                    <button className="rounded-full bg-[#FFB703] px-[17px] py-[5px] text-[16px] md:text-[18px] hover:bg-[#11181C] hover:text-[#FFB703] transition-all">
                      {translations.home.review}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" w-screen bg-[#F8F8FF] py-10 px-5 sm:py-16 pb-0 sm:px-10 lg:py-20 lg:px-14">
        <h2 className="font-medium text-[42px] text-center mb-5 max-[1537px]:text-[32px] 
          max-[1280px]:text-[28px] 
          max-[1024px]:text-[24px] 
          max-[768px]:text-[20px] 
          max-[480px]:text-[16px]">
          {translations.home.jobsInCountries}
        </h2>
        <div className="flex flex-wrap gap-5 justify-center sm:justify-start">
          <div className="country">
            <small>Ukraine</small>
            <small>1337 {translations.home.vacancy}</small>
          </div>
          <div className="country">
            <small>Ukraine</small>
            <small>1337 {translations.home.vacancy}</small>
          </div>
          <div className="country">
            <small>Ukraine</small>
            <small>1337 {translations.home.vacancy}</small>
          </div>
          <div className="country">
            <small>Ukraine</small>
            <small>1337 {translations.home.vacancy}</small>
          </div>
          <div className="country">
            <small>Ukraine</small>
            <small>1337 {translations.home.vacancy}</small>
          </div>
          <div className="country">
            <small>Ukraine</small>
            <small>1337 {translations.home.vacancy}</small>
          </div>
          <div className="country">
            <small>Ukraine</small>
            <small>1337 {translations.home.vacancy}</small>
          </div>
          <div className="country">
            <small>Ukraine</small>
            <small>1337 {translations.home.vacancy}</small>
          </div>
        </div>
        <h2 className="font-medium text-[42px] text-center mt-5 max-[1537px]:text-[32px] 
          max-[1280px]:text-[28px] 
          max-[1024px]:text-[24px] 
          max-[768px]:text-[20px] 
          max-[480px]:text-[16px]">
          {translations.home.payForTravel}
        </h2>
      </div>
      <div className=" w-screen  bg-[#F8F8FF] py-10 px-5 sm:py-16 sm:px-10 lg:py-20 lg:px-14">
        <h2 className="font-medium text-[38px] text-left w-3/4 my-0 mx-auto
          max-[1537px]:text-[32px] 
          max-[1280px]:text-[28px] 
          max-[1024px]:text-[24px] 
          max-[768px]:text-[20px] 
          max-[480px]:text-[16px] ">
          {translations.home.aiHelper}
        </h2>
        <h2 className="font-medium text-[42px] text-right w-3/4 my-0 mx-auto
          max-[1537px]:text-[32px] 
          max-[1280px]:text-[28px] 
          max-[1024px]:text-[24px] 
          max-[768px]:text-[20px] 
          max-[480px]:text-[16px]">
          {translations.home.aiHelper2}
        </h2>
        <h2 className="font-medium text-[42px] m-[25px]   max-[1537px]:text-[32px] text-center
          max-[1280px]:text-[28px] 
          max-[1024px]:text-[24px] 
          max-[768px]:text-[20px] 
          max-[480px]:text-[16px]">
          {translations.home.convExample}
        </h2>
        <video
          className="m-[20px] bg-[#808080] rounded-[20px] w-[350px] h-[250px] my-0 mx-auto"
          autoPlay muted
        >
          {/* <source src={video} type="video/mp4"></source> */}
        </video>
        <p className="font-light text-[24px] text-left w-3/4   max-[1537px]:text-[20px] mt-4
          max-[1280px]:text-[18px] 
          max-[1024px]:text-[17px] 
          max-[768px]:text-[15px] 
          max-[480px]:text-[14px]">
          {translations.home.poweredBy}
        </p>
      </div>
      <div className=" w-screen bg-[#F8F8FF] p-5 py-10 px-5 sm:py-16 sm:px-10 lg:py-20 lg:px-14 pb-0">
        <h2 className="font-medium text-[42px] text-left    max-[1537px]:text-[32px]  my-[15px] mx-auto
          max-[1280px]:text-[28px] 
          max-[1024px]:text-[24px] 
          max-[768px]:text-[20px] 
          max-[480px]:text-[16px]">
          {translations.home.dontWait}
        </h2>
        <h2 className="font-medium text-[42px] text-right  max-[1537px]:text-[32px] my-[15px] mx-auto 
          max-[1280px]:text-[28px] 
          max-[1024px]:text-[24px] 
          max-[768px]:text-[20px] 
          max-[480px]:text-[16px]">
          {translations.home.makeDreamTrue}
        </h2>
        <Link href="/login" className="my-[25px]">
          <button className="bg-[#FB8500] rounded-[30px] p-[10px] block text-[20px] my-[0px] mx-auto hover:text-[#FB8500] hover:bg-[#11181C] transition-all ">
            {translations.header.getStarted}
          </button>
        </Link>
        <p className="text-[30px] mb-[10px] text-center max-[1537px]:text-[28px] 
          max-[1280px]:text-[26px] 
          max-[1024px]:text-[24px] 
          max-[768px]:text-[20px] 
          max-[480px]:text-[18px]">
          {translations.home.peopleWeHelped}
        </p>
        <div className="flex flex-row gap-[30px] flex-wrap justify-center">
          <div className="flex flex-col items-center max-[768px]:w-[250px]">
            <Image
              src="/person.jpg"
              alt="user"
              width={300}
              height={175}
              className="mb-[5px] rounded-[20px]"
            ></Image>
            <p>Name</p>
            <p>Job name</p>
          </div>
          <div className="flex flex-col items-center max-[768px]:w-[250px]">
            <Image
              src="/person.jpg"
              alt="user"
              width={300}
              height={175}
              className="mb-[5px] rounded-[20px]"
            ></Image>
            <p>Name</p>
            <p>Job name</p>
          </div>
          <div className="flex flex-col items-center max-[768px]:w-[250px]">
            <Image
              src="/person.jpg"
              alt="user"
              width={300}
              height={175}
              className="mb-[5px] rounded-[20px]"
            ></Image>
            <p>Name</p>
            <p>Job name</p>
          </div>
          <div className="flex flex-col items-center max-[768px]:w-[250px]">
            <Image
              src="/person.jpg"
              alt="user"
              width={300}
              height={175}
              className="mb-[5px] rounded-[20px]"
            ></Image>
            <p>Name</p>
            <p>Job name</p>
          </div>
        </div>
      </div>
    </>
  );
}
