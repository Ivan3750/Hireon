'use client'
import noRender from '../noRender.json'
import { usePathname } from "next/navigation";
import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa6";
import useTranslate from "../hooks/useTranslate";
export default function Footer() {
  const {translations, loading, lang, setLang} = useTranslate();
  if (noRender.includes(usePathname())) return null;
  if (loading) return null;
  return (
    <footer className="flex flex-row justify-between items-center footer w-full bg-[#219EBC] p-[20px]">
          <h2 className="text-[30px]">Hireon</h2>
          <h2 className="font-medium">Copyright &copy; 2025, Hireon</h2>
    </footer>
  )
}
