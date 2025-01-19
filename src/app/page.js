'use client'
import { FaMagnifyingGlass, FaGlobe, FaMoneyBill, FaHouse } from "react-icons/fa6"
import Image from "next/image"
import bg from './bg.jpg'
export default function Home() {
  return (
    <>
      <div className="h-full w-full absolute bg-[rgba(142,202,230,0.6)] -z-40 top-0"></div>
      <Image src={bg} alt="bg.jpg image" width={screen.width} height={screen.height} className="absolute -z-50 top-0"></Image>
      <div className="flex flex-col h-screen w-screen justify-end gap-[50px] p-[75px]">
        <div className="flex flex-col flex-nowrap justify-center items-center">
          <h2 className="text-[50px] text-nowrap font-extrabold">Hireon is the best way to success</h2>
          <p className="text-[20px] font-medium">Here anyone can find a job that fits you the best</p>
          <div className="flex flex-row mt-3">
            <div className="bg-[#F8F8FF] ps-3 rounded-s-full">
              <FaMagnifyingGlass size={20} color="808080" className="bg-[#F8F8FF] h-[48px]"></FaMagnifyingGlass>
            </div>
            <input placeholder="Find dream job" className="p-3 w-[690px] placeholder:text-[#808080] bg-[#F8F8FF] outline-none"></input>
            <button className="bg-[#FB8500] p-3 rounded-e-full text-[#023047] hover:bg-[#023047] hover:text-[#FB8500] transition-all">Search</button>
          </div>
        </div>
        <div className="flex flex-row justify-around items-center">
          <div className="flex flex-col items-start">
            <h2 className="text-[#023047] font-medium text-[45px]">Create resume</h2>
            <p className="text-[#023047] font-medium text-[24px] w-[400px]">Create a resume, so employers can see you and offer you a job</p>
            <button className="mt-[10px] bg-[#023047] text-[#F8F8FF] h-[40px] text-[20px] font-medium rounded-full w-[140px] hover:bg-[#F8F8FF] hover:text-[#023047] transition-all">Create</button>
          </div>
          <div className="h-[530px] w-[580px] rounded-[20px] bg-[#219EBC] p-[25px] text-[#F8F8FF] overflow-hidden">
            <h2 className="text-[#F8F8FF] font-semibold text-[32px]">Best offers</h2>
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
                  <button className="rounded-full bg-[#FFB703] px-[30px] py-[5px] text-[20px]">Review</button>
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
                  <button className="rounded-full bg-[#FFB703] px-[30px] py-[5px] text-[20px]">Review</button>
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
                  <button className="rounded-full bg-[#FFB703] px-[30px] py-[5px] text-[20px]">Review</button>
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
                  <button className="rounded-full bg-[#FFB703] px-[30px] py-[5px] text-[20px]">Review</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}