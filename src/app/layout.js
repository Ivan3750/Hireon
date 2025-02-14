import { Unbounded } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { TranslateProvider } from "./hooks/useTranslate";
import Head from "next/head"; 

const unbounded = Unbounded({
  display: 'swap',
  subsets: ["latin"],
});

export const metadata = {
  title: "Hireon - Home",
  description: "Hireon homepage",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Hireon - Find Your Dream Job</title>
        <meta
          name="description"
          content="Hireon helps you find your perfect job. Browse thousands of job listings, filter by city, employment type, salary, and more. Start your career journey today!"
        />
        <meta
          name="keywords"
          content="job search, jobs, employment, career, hireon, job listings, job opportunities, find a job, apply for jobs, job vacancies"
        />
        <meta name="author" content="Hireon Team" />
        <meta property="og:title" content="Hireon - Find Your Dream Job" />
        <meta
          property="og:description"
          content="Hireon helps you find your perfect job. Browse thousands of job listings, filter by city, employment type, salary, and more. Start your career journey today!"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Hireon - Find Your Dream Job" />
        <meta
          name="twitter:description"
          content="Hireon helps you find your perfect job. Browse thousands of job listings, filter by city, employment type, salary, and more. Start your career journey today!"
        />
      </Head>
      <body className={`${unbounded.className} antialiased`}>
        <TranslateProvider>
          <Header />
          <main className="w-screen" suppressContentEditableWarning suppressHydrationWarning>
            {children}
          </main>
          <Footer />
        </TranslateProvider>
      </body>
    </html>
  );
}
