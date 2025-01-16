import Image from "next/image";
import Link from "next/link";
import icon from '@/app/favicon.ico'
import {FaGear, FaEnvelope} from 'react-icons/fa6'
export default function Header() {
  return (
    <header className="flex flex-row items-center w-full p-5 justify-between text-[#11181C]">
      <Image alt="logo" src={icon} width={100} height={100}></Image>
      <nav className="w-2/5 flex flex-row items-center">
        <div>
          <Link href='/applicant'></Link>
          <Link href='/employer'></Link>
        </div>
        <div className="flex flex-row gap-[10px]">
          <button className="bg-[#F8F8FF] rounded-full w-[50px] h-[50px] flex items-center justify-center">
            <FaEnvelope size={30}></FaEnvelope>
          </button>
          <button className="bg-[#F8F8FF] rounded-full w-[50px] h-[50px] flex items-center justify-center">
            <FaGear size={30}></FaGear>
            </button>
          <section>
            <button>Log in</button>
            <button>Sign in</button>
          </section>
        </div>
      </nav>
    </header>
  );
}
