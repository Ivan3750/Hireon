import { Unbounded } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const unbounded = Unbounded({
  display: "swap",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hireon",
  description: "Hireon is the best way to find a job",
};

export default function RootLayout({ children, maincolor, headercolor, bodycolor }) {
  return (
    <html lang="en">
      <body className={`${unbounded.className} antialiased`} style={{background: bodycolor}}>
        <Header />
        <main className="w-screen flex flex-col items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}