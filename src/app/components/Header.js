'use client'
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {FaGear, FaEnvelope} from 'react-icons/fa6'
import noRender from '../noRender.json'


export default function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const {translations, loading, lang, setLang} = useTranslate();
  const [selectedType, setSelectedType] = useState("applicant");
  const [isOpen, setIsOpen] = useState(false);
  const [toggled, setToggled] = useState(false)
  const pathname = usePathname()
  const verifyToken = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsLogin(false);
      return;
    }
    try {
      const response = await fetch('/auth/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
      setIsLogin(response.ok);
    } catch (error) {
      console.error('Error verifying token:', error);
      setIsLogin(false);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") verifyToken();
  }, []);
  if (noRender.includes(usePathname())) return null;
  if (loading) return <div>Loading...</div>;
  return (
    <header className="flex items-center justify-between w-full p-6 text-[#11181C]">
      <div className="flex flex-row gap-[10px] self-start">
        <Link href="/" className="text-[30px]">Hireon</Link>
        <select id="lang" className="circle-btn !bg-[#FFB703] text-[#F8F8FF]" onChange={(e) => setLang(e.target.value)} value={lang}>
          <option value="en">EN</option>
          <option value="ua">UA</option>
        </select> */}
      </div>
      {!isLogin && <div className="bg-[#219EBC] rounded-full h-[40px] flex flex-row items-center justify-center gap-[10px] p-[10px]">
      <button className={`switch ${selectedType === "applicant" ? "switch-active" : ""}`} onClick={() => setSelectedType("applicant")}>
        {translations.header.applicant}
      </button>
      <button className={`switch ${selectedType === "employer" ? "switch-active" : ""}`}  onClick={() => setSelectedType("employer")}>
      {translations.header.employer}
      </button>
      </div>}
      <nav className="flex flex-row items-center">
        <div className="flex flex-row gap-[10px] items-center">
          <button className="circle-btn" onClick={() => setToggled(prev => !prev)}>
            <FaEnvelope size={25}></FaEnvelope>
          </button>
          <div className={`w-[366px] absolute bg-[#8ecae6] border border-black top-[100px] right-[200px] rounded-md transition-all ${!toggled && "opacity-0 !top-[80px]"} gap-[10px] flex flex-col p-[10px] items-center`}>
            <p className="font-medium text-[18px]">Notifications</p>
            <hr className="border-[#11181C] w-full"></hr>
            <Notification text="You have been hired!" jobName="Frontend" companyName="Valve" link="/"></Notification>
            <hr className="border-[#11181C] w-full"></hr>
            <Notification text="You have been hired!" jobName="Frontend" companyName="Valve" link="/"></Notification>
            <hr className="border-[#11181C] w-full"></hr>
            <Notification text="You have been hired!" jobName="Frontend" companyName="Valve" link="/"></Notification>
            <hr className="border-[#11181C] w-full"></hr>
            <Link href="/" className="font-medium text-[18px]">More</Link>
          </div>
          <Link href='/settings'>
            <button className="circle-btn">
              <FaGear size={25}></FaGear>
            </button>
          </Link>
          {isLogin ? <p>Profile</p> : 
          <Link href="/login" className="login-signin">{translations.header.getStarted}</Link>
          }
        </div>
      </nav>
    </header>
  );
}
