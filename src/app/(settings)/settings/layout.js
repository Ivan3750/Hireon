'use client'
import "@/app/globals.css";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
export default function SettingsLayout({ company, user }) {
  return (
    <div className="w-full h-screen ">
      {false ? user : company}  
    </div>
  );
}
