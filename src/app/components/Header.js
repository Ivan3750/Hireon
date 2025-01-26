'use client'
import Image from "next/image";
import Link from "next/link";
import icon from '@/app/favicon.ico'
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {FaGear, FaEnvelope} from 'react-icons/fa6'
import noRender from '../noRender.json'


export default function Header() {
  const [isLogin, setIsLogin] = useState(false); 
  const pathname = usePathname();



  const [selectedType, setSelectedType] = useState(() => localStorage.getItem("type") || "applicant");

  const handleType = (type) => {
    localStorage.setItem("type", type);
    setSelectedType(type);
  };

  const verifyToken = async () => {
    try {
      const response = await fetch('/auth/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: localStorage.getItem('token'),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Token valid:', data);
        setIsLogin(true);
      } else {
        setIsLogin(false); 
      }
    } catch (error) {
      console.error('Error verifying token:', error);
      setIsLogin(false);
    }
  };

  useEffect(() => {
    verifyToken();
  }, []);


  if (noRender.includes(usePathname())) return null;
  return (
    <header className="flex items-center justify-between w-full p-6 text-[#11181C]">
      <div className="flex flex-row gap-[10px] self-start">
        <Link href="/" className="text-[30px]">Hireon</Link>
        <button className="circle-btn !bg-[#FFB703] text-[#F8F8FF]">
          <h2>EN</h2>
        </button>
      </div>
      {!isLogin && <div className="bg-[#219EBC] rounded-full h-[40px] w-[250px] flex flex-row items-center justify-center gap-[10px]">
      <button className={`switch ${selectedType === "applicant" ? "switch-active" : ""}`} onClick={() => handleType("applicant")}>
        Applicant
      </button>
      <button className={`switch ${selectedType === "employer" ? "switch-active" : ""}`}  onClick={() => handleType("employer")}>
        Employer
      </button>
      </div>}
      <nav className="flex flex-row items-center">
        <div className="flex flex-row gap-[10px] items-center">
          <button className="circle-btn">
            <FaEnvelope size={25}></FaEnvelope>
          </button>
          <Link href='/settings'>
            <button className="circle-btn">
              <FaGear size={25}></FaGear>
            </button>
          </Link>
          {isLogin ? <p>Profile</p> : 
          <Link href="/login" className="login-signin">Get started</Link>
          }
        </div>
      </nav>
    </header>
  );
}
