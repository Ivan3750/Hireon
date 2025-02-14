'use client'
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <h2 className="text-8xl overflow-hidden font-semibold ">404</h2>
      <h3 className="text-3xl">Oops! Page Not Found</h3>
      <button className="bg-[#ffb703] a-btn p-2 rounded-md text-[#023047] hover:bg-[#023047] hover:text-[#ffb703] transition-all">
        <Link
          href='/'
          className=" inline-flex !rounded-3xl text-center items-center gap-2"
          onClick={() => history.back()}
        >
          <FaArrowLeft></FaArrowLeft>Home
        </Link>
      </button>
    </div>
  );
}
