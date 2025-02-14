'use client'
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import { useTranslate } from "./hooks/useTranslate";
export default function NotFound() {
  const { translations, loading, lang, setLang } = useTranslate();
  if (loading) return null
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <h1 className="text-8xl overflow-hidden">404</h1>
      <h2 className="text-3xl">{translations.notFound.notFound}</h2>
      <button className="bg-[#ffb703] p-2 rounded-md text-[#023047] hover:bg-[#023047] hover:text-[#ffb703] transition-all">
        <Link
          href='/'
          className=" inline-flex !rounded-3xl text-center items-center gap-2"
          onClick={() => history.back()}
        >
          <FaArrowLeft></FaArrowLeft>{translations.notFound.back}
        </Link>
      </button>
    </div>
  );
}
