'use client'
import noRender from '../noRender.json'
import { usePathname } from "next/navigation";
export default function Footer() {
  if (noRender.includes(usePathname())) return null;
  return (
    <footer className="flex flex-row justify-between items-center footer w-full bg-[#219EBC] p-[20px]">
          <h2 className="text-[30px]">Hireon</h2>
          <h2 className="font-medium">Copyright &copy; 2025, Hireon</h2>
    </footer>
  )
}
