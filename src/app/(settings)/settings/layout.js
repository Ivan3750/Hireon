import "@/app/globals.css";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
export const metadata = {
  title: "Settings",
  description: "Your local settings",
};
export default function SettingsLayout({ children }) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="flex flex-row absolute h-[12.5%] w-full top-0 items-center justify-center">
        <Link href="/" className="flex flex-row items-center left-0 absolute text-[25px] ms-[50px] gap-[5px]"><FaArrowLeft></FaArrowLeft>Home</Link>
        <h1 className="text-[42px]">Settings</h1>
      </div>
      {children}
    </div>
  );
}
