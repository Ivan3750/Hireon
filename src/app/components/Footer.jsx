import Image from "next/image";
import icon from '@/app/favicon.ico'
import Link from "next/link";
import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="flex flex-col footer w-full bg-[#219EBC] p-[25px] box-border">
        <div className="flex items-center justify-center relative h-[45px]">
          <h2 className="text-[30px] absolute left-0 font-bold ">Hireon</h2>
          <h2 className="font-medium text-[16px]">Copyright &copy; 2025, Hireon</h2>
        </div>
        <section className="flex flex-row w-full mb-10 my-10 footer justify-around">
        <ul>
            <li className="font-medium text-[16px]">Get in touch</li>
            <li className="footer-item">hireonjob@gmail.com</li>
            <li className="footer-item">+1234567890</li>
        </ul>
        <ul>
            <li className="font-medium text-[16px]">Link</li>
            <li className="footer-item">FAQs</li>
            <li className="footer-item">Support</li>
            <li className="footer-item">Community</li>
        </ul>
        <ul>
            <li className="font-medium text-[16px]">Navigation</li>
            <li className="footer-item">About Us</li>
            <li className="footer-item">Terms of Use</li>
            <li className="footer-item">Privacy Policy</li>
        </ul>
        <ul>
            <li className="font-medium text-[16px]">Follow Us</li>
            <section className="flex flex-row gap-[5px] justify-center">
              <li className="social-networks"><FaFacebook size={20}></FaFacebook></li>
              <li className="social-networks"><FaTwitter size={20}></FaTwitter></li>
              <li className="social-networks"><FaLinkedinIn size={20}></FaLinkedinIn></li>
              <li className="social-networks"><FaYoutube size={20}></FaYoutube></li>
            </section>
        </ul>
        </section>
    </footer>
  )
}