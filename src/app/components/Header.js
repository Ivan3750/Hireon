'use client'
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { usePathname } from "next/navigation";
import {FaGear, FaEnvelope} from 'react-icons/fa6'
import noRender from '../noRender.json'

import icon from "../../../public/h6.svg"
import Image from "next/image";
export default function Header() {
  const [isLogin, setIsLogin] = useState(false); 
  const pathname = usePathname();

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

      if (response.ok) {
        const data = await response.json();
        console.log('Token valid:', data);
        setIsLogin(true);
      } else {
        console.error('Invalid token:', await response.json());
        setIsLogin(false); 
      }
    } catch (error) {
      console.error('Error verifying token:', error);
      setIsLogin(false);
    }
  };

  // Виконуємо перевірку токена після завантаження компонента
  useEffect(() => {
    verifyToken();
  }, []);
  if (noRender.includes(usePathname())) return null;
/*   if (loading) return <div>Loading...</div>;
 */  return (
    <header className="flex items-center justify-between w-full p-6 text-[#11181C]">
      <div className="flex flex-row gap-[10px] self-start">
        <Link href="/" className="text-[30px]">
        <Image src={icon} alt="icon" width={220} height={
          220
        } /></Link>
        {/* <select id="lang" className="circle-btn !bg-[#FFB703] text-[#F8F8FF]" onChange={(e) => setLang(e.target.value)} value={lang}>
          <option value="en">EN</option>
          <option value="ua">UA</option>
        </select> */}
      </div>
      <div className="bg-[#219EBC] rounded-full h-[40px] w-[250px] flex flex-row items-center justify-center gap-[10px]">
        <button className="switch"><Link href='/applicant'>Applicant</Link></button>
        <button className="switch"><Link href='/employer'>Employer</Link></button>
      </div>
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
