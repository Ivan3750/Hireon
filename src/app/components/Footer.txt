"use client";
import noRender from "../noRender.json";
import { usePathname } from "next/navigation";
export default function Footer() {
  if (noRender.includes(usePathname())) return null;
  return (
    <footer className="flex flex-row justify-between items-center footer w-full bg-[#219EBC] p-[20px]">
      <h2 className="font-bold  max-[1537px]:text-[30px] 
          max-[1280px]:text-[28px] 
          max-[1024px]:text-[24px] 
          max-[768px]:text-[20px] 
          max-[480px]:text-[16px]" >Hireon</h2>
      <h2 className="font-medium max-[1537px]:text-[18px] 
          max-[768px]:text-[14px] 
          max-[480px]:text-[10px]">Copyright &copy; 2025, Hireon</h2>
    </footer>
  );
}
