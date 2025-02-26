'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import noRender from "../noRender.json";
const Footer = () => {
  if (noRender.includes(usePathname())) return null;
  return (
      <footer className="footer w-full flex text-[#2f2f2f] bg-white border-t-neutral-200 pt-[30px] pb-5 px-[30px] border-t border-solid">
        <div className="footer__addr">
          <h3 className="footer__logo">HIREON</h3>
          <address>
            We can help you with Link job.
            <Link className="footer__btn" href="mailto:example@gmail.com">
              Email Us
            </Link>
          </address>
        </div>
        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Applicant</h2>
            <ul className="nav__ul">
              <li>
                <Link href="/cv">CV</Link>
              </li>
              <li>
                <Link href="/job">Job</Link>
              </li>
            </ul>
          </li>
          <li className="nav__item nav__item">
            <h2 className="nav__title">Company</h2>
            <ul className="nav__ul">
              <li>
                <Link href="/worker">Worker</Link>
              </li>
              <li>
                <Link href="/vacancy">Vacancy</Link>
              </li>
            </ul>
          </li>
          <li className="nav__item">
            <h2 className="nav__title">Legal</h2>
            <ul className="nav__ul">
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms of Use</Link>
              </li>
              <li>
                <Link href="#">Sitemap</Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="legal">
          <p>&copy; 2025 Hireon. All rights reserved.</p>
          <div className="legal__links">
            <span></span>
          </div>
        </div>
      </footer>
  );
};
export default Footer;
