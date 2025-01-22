import Image from "next/image";
import Link from "next/link";
import icon from '@/app/favicon.ico'
import {FaGear, FaEnvelope} from 'react-icons/fa6'
export default function Header() {
  return (
<header className="flex flex-wrap items-center justify-between w-full p-6 text-[#11181C]">
  <div className="flex flex-row gap-[10px] self-start">
    <Link href={"/"}>
    <h1 className="text-[30px]">Hireon</h1>
    </Link>
    <button className="circle-btn !bg-[#FFB703] text-[#F8F8FF]">
      <h2>EN</h2>
    </button>
  </div>
  <div className="bg-[#219EBC] rounded-full h-[40px] w-full max-w-[250px] flex flex-row items-center justify-center gap-[10px]">
    <button className="switch">
      <Link href='/applicant'>Applicant</Link>
    </button>
    <button className="switch">
      <Link href='/employer'>Employer</Link>
    </button>
  </div>
  <nav className="flex flex-row items-center flex-wrap">
    <div className="flex flex-row gap-[10px] items-center">
      <button className="circle-btn">
        <FaEnvelope size={25} />
      </button>
      <button className="circle-btn">
        <FaGear size={25} />
      </button>
      <section className="flex flex-col gap-[10px]">
        <Link href="/login" className="login-signin">Get started</Link>
      </section>
    </div>
  </nav>
</header>

  );
}
