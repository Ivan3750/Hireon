import Link from "next/link";



const Footer = () => {
  return (
    <>
      <footer className="footer">
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

              <li>
                <Link href="/settings">Settings</Link>
              </li>
            </ul>
          </li>

          <li className="nav__item nav__item--extra">
            <h2 className="nav__title">Company</h2>

            <ul className="nav__ul nav__ul--extra">
              <li>
                <Link href="/worker">Worker</Link>
              </li>

              <li>
                <Link href="/vacancy">Vacancy</Link>
              </li>

              <li>
                <Link href="/settings">Settings</Link>
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
            <span>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
