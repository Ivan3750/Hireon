'use client'
import Image from "next/image";
import icon from '@/app/favicon.ico'
import Link from "next/link";
import noRender from '../noRender.json'
import { usePathname } from "next/navigation";
import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa6";
export default function Footer() {
  if (noRender.includes(usePathname())) return null;
  return (
    <footer className="flex flex-col footer w-full bg-[#219EBC] p-[25px]">
        <div className="flex items-center justify-center relative h-[45px]">
          <h2 className="text-[30px] absolute left-0">Hireon</h2>
          <h2 className="font-medium">Copyright &copy; 2025, Hireon</h2>
        </div>
        <section className="flex flex-row w-full mb-10 footer">
        <ul>
            <li className="font-medium text-[24px]">Contact us</li>
            <li className="footer-item">hireonjob@gmail.com</li>
            <li className="footer-item">+1234567890</li>
        </ul>
        <ul>
            <li className="font-medium text-[24px]">Useful links</li>
            <li className="footer-item">FAQs</li>
            <li className="footer-item">Support</li>
        </ul>
        <ul>
        <li className="font-medium text-[24px]">Navigation</li>
            <li className="footer-item">About Us</li>
            <li className="footer-item">Terms of Use</li>
            <li className="footer-item">Privacy Policy</li>
        </ul>
        <ul>
            <li className="font-medium text-[24px]">You can find us in</li>
            <section className="flex flex-row gap-[10px] justify-center">
              <li className="social-networks"><FaFacebook size={30}></FaFacebook></li>
              <li className="social-networks"><FaTwitter size={30}></FaTwitter></li>
              <li className="social-networks"><FaLinkedinIn size={30}></FaLinkedinIn></li>
              <li className="social-networks"><FaYoutube size={30}></FaYoutube></li>
            </section>
        </ul>
        </section>
    </footer>
  )
}
