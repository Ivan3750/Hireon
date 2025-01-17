import Image from "next/image";
import Link from "next/link";
import icon from '@/app/favicon.ico'
import {FaGear, FaEnvelope} from 'react-icons/fa6'
export default function Header() {
  return (
    <header className="flex flex-row items-center w-full p-[25px] justify-between text-[#11181C]">
      <div className="flex flex-row gap-[10px] self-start">
        <h1 className="text-[30px]">Hireon</h1>
        <button className="circle-btn !bg-[#FFB703] text-[#F8F8FF]">
          <h2>EN</h2>
        </button>
      </div>
      <div className="bg-[#219EBC] rounded-full h-[40px] w-[250px] flex flex-row items-center justify-center gap-[10px]">
        <button className="switch"><Link href='/applicant'>Applicant</Link></button>
        <button className="switch"><Link href='/employer'>Employer</Link></button>
      </div>
      <nav className="flex flex-row items-center">
        <div className="flex flex-row gap-[10px] items-center">
          <button className="circle-btn">
            <FaEnvelope size={30}></FaEnvelope>
          </button>
          <button className="circle-btn">
            <FaGear size={30}></FaGear>
            </button>
          <section className="flex flex-col gap-[10px]">
            <button className="login-signin">Log in</button>
            <button className="login-signin">Sign in</button>
          </section>
        </div>
      </nav>
    </header>
  );
}
