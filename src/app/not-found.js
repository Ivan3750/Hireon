'use client'
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <h1 className="text-8xl overflow-hidden">404</h1>
      <h2 className="text-3xl">Could not find requested resource</h2>
      <button className="bg-[#ffb703] p-2 rounded-md text-[#023047] hover:bg-[#023047] hover:text-[#ffb703] transition-all">
        <Link
          href=''
          className=" inline-flex text-center items-center gap-2"
          onClick={() => history.back()}
        >
          <FaArrowLeft></FaArrowLeft>Go back
        </Link>
      </button>
    </div>
  );
}
