'use client'
import { FaMagnifyingGlass, FaGlobe, FaMoneyBill, FaHouse } from "react-icons/fa6"
import Image from "next/image"
import Link from "next/link"
import useTranslate from "./hooks/useTranslate";
// import video from './conversation_example.mp4'
export default function Home() {
  const {translations, loading, lang, setLang} = useTranslate();
  if (loading) return null;
  return (
    <>
      <div className="h-full w-full absolute bg-[rgba(142,202,230,0.6)] -z-40 top-0"></div>
      <Image src='/bg.jpg' alt="bg.jpg image" layout="fill" className="absolute -z-50 top-0 blur-sm"></Image>
      <div className="flex flex-col w-screen h-[calc(100vh-98px)] justify-end gap-[50px] p-[75px]">
        <div className="flex flex-col flex-nowrap justify-center items-center">
          <h2 className="text-[50px] text-nowrap font-extrabold">{translations.home.mainTitle}</h2>
          <p className="text-[20px] font-medium">{translations.home.secondaryTitle}</p>
          <div className="flex flex-row mt-3">
            <div className="bg-[#F8F8FF] ps-3 rounded-s-full">
              <FaMagnifyingGlass size={20} color="808080" className="bg-[#F8F8FF] h-[48px]"></FaMagnifyingGlass>
            </div>
            <input placeholder={translations.home.findJob} className="p-3 w-[690px] placeholder:text-[#808080] bg-[#F8F8FF] outline-none"></input>
            <Link href="/job">
              <button className="bg-[#FB8500] p-3 rounded-e-full text-[#023047] hover:bg-[#023047] hover:text-[#FB8500] transition-all">{translations.home.search}</button>
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-around items-center">
          <div className="flex flex-col items-start">
            <h2 className="text-[#023047] font-medium text-[45px]">{translations.home.createResume}</h2>
            <p className="text-[#023047] font-medium text-[24px] w-[400px]">{translations.home.createResume2}</p>
            <button className="mt-[10px] bg-[#023047] text-[#F8F8FF] h-[40px] text-[20px] font-medium rounded-full px-[20px] hover:bg-[#F8F8FF] hover:text-[#023047] transition-all">{translations.home.create}</button>
          </div>
          <div className="h-[530px] w-[580px] rounded-[20px] bg-[#219EBC] p-[25px] text-[#F8F8FF] overflow-hidden">
            <h2 className="text-[#F8F8FF] font-semibold text-[32px]">{translations.home.bestOffers}</h2>
            <div className="flex flex-col justify-evenly h-full">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[20px]">Software developer</p>
                  <div className="flex flex-row gap-[10px]">
                    <small className="flex flex-row items-center gap-[5px] font-light text-[16px]"><FaGlobe></FaGlobe>London</small>
                    <small className="flex flex-row items-center gap-[5px] font-light text-[16px]"><FaHouse></FaHouse>Remote</small>
                  </div>
                </div>
                <div className="flex flex-col gap-[10px] items-center">
                  <p className="text-[20px] font-medium items-center flex flex-row gap-[10px]"><FaMoneyBill size={30}></FaMoneyBill>$999</p>
                  <button className="rounded-full bg-[#FFB703] px-[20px] py-[5px] text-[20px] hover:bg-[#11181C] hover:text-[#FFB703] transition-all">{translations.home.review}</button>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[20px]">Software developer</p>
                  <div className="flex flex-row gap-[10px]">
                    <small className="flex flex-row items-center gap-[5px] font-light text-[16px]"><FaGlobe></FaGlobe>London</small>
                    <small className="flex flex-row items-center gap-[5px] font-light text-[16px]"><FaHouse></FaHouse>Remote</small>
                  </div>
                </div>
                <div className="flex flex-col gap-[10px] items-center">
                  <p className="text-[20px] font-medium items-center flex flex-row gap-[10px]"><FaMoneyBill size={30}></FaMoneyBill>$999</p>
                  <button className="rounded-full bg-[#FFB703] px-[20px] py-[5px] text-[20px] hover:bg-[#11181C] hover:text-[#FFB703] transition-all">{translations.home.review}</button>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[20px]">Software developer</p>
                  <div className="flex flex-row gap-[10px]">
                    <small className="flex flex-row items-center gap-[5px] font-light text-[16px]"><FaGlobe></FaGlobe>London</small>
                    <small className="flex flex-row items-center gap-[5px] font-light text-[16px]"><FaHouse></FaHouse>Remote</small>
                  </div>
                </div>
                <div className="flex flex-col gap-[10px] items-center">
                  <p className="text-[20px] font-medium items-center flex flex-row gap-[10px]"><FaMoneyBill size={30}></FaMoneyBill>$999</p>
                  <button className="rounded-full bg-[#FFB703] px-[20px] py-[5px] text-[20px] hover:bg-[#11181C] hover:text-[#FFB703] transition-all">{translations.home.review}</button>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[20px]">Software developer</p>
                  <div className="flex flex-row gap-[10px]">
                    <small className="flex flex-row items-center gap-[5px] font-light text-[16px]"><FaGlobe></FaGlobe>London</small>
                    <small className="flex flex-row items-center gap-[5px] font-light text-[16px]"><FaHouse></FaHouse>Remote</small>
                  </div>
                </div>
                <div className="flex flex-col gap-[10px] items-center">
                  <p className="text-[20px] font-medium items-center flex flex-row gap-[10px]"><FaMoneyBill size={30}></FaMoneyBill>$999</p>
                  <button className="rounded-full bg-[#FFB703] px-[20px] py-[5px] text-[20px] hover:bg-[#11181C] hover:text-[#FFB703] transition-all">{translations.home.review}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-screen h-[75vh] bg-[#F8F8FF] items-center justify-center gap-[50px]">
        <h2 className="font-medium text-[42px]">{translations.home.jobsInCountries}</h2>
        <div className="grid gap-[20px] grid-rows-2 grid-cols-4">
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
        <h2 className="font-medium text-[42px]">{translations.home.payForTravel}</h2>
      </div>
      <div className="flex flex-col w-screen h-[60vh] bg-[#F8F8FF] items-center justify-center border-[#023047] border-t-[10px]">
        <h2 className="font-medium text-[42px] text-left w-3/4">{translations.home.aiHelper}</h2>
        <h2 className="font-medium text-[42px] text-right w-3/4">{translations.home.aiHelper2}</h2>
        <h2 className="font-medium text-[42px] m-[25px]">{translations.home.convExample}</h2>
        <video className="m-[20px] bg-[#808080] rounded-[20px] w-[350px] h-[250px]" autoPlay>
          {/* <source src={video} type="video/mp4"></source> */}
        </video>
        <p className="font-light text-[24px] text-left w-3/4">{translations.home.poweredBy}</p>
      </div>
      <div className="flex flex-col w-screen h-[50vh] bg-[#F8F8FF] items-center justify-center px-[100px] border-[#023047] border-t-[10px]">
        <h2 className="font-medium text-[42px] text-left w-1/2">{translations.home.dontWait}</h2>
        <h2 className="font-medium text-[42px] text-right w-1/2">{translations.home.makeDreamTrue}</h2>
        <Link href='/login'>
          <button className="bg-[#FB8500] rounded-full p-[15px] text-[32px] my-[20px] hover:text-[#FB8500] hover:bg-[#11181C] transition-all ">{translations.header.getStarted}</button>
        </Link>
        <p className="text-[30px] mb-[10px] text-center">{translations.home.peopleWeHelped}</p>
        <div className="flex flex-row gap-[30px]">
          <div className="flex flex-col items-center">
            <Image src='/person.jpg' alt="user" width={300} height={175} className="mb-[5px] rounded-[20px]"></Image>
            <p>Name</p>
            <p>Job name</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src='/person.jpg' alt="user" width={300} height={175} className="mb-[5px] rounded-[20px]"></Image>
            <p>Name</p>
            <p>Job name</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src='/person.jpg' alt="user" width={300} height={175} className="mb-[5px] rounded-[20px]"></Image>
            <p>Name</p>
            <p>Job name</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src='/person.jpg' alt="user" width={300} height={175} className="mb-[5px] rounded-[20px]"></Image>
            <p>Name</p>
            <p>Job name</p>
          </div>
        </div>
      </div>
    </>

  )
}