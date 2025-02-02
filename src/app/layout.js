import { Unbounded } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
const unbounded = Unbounded({
  display: 'swap',
  subsets: ["latin"],
});
export const metadata = {
  title: "Hireon - Home",
  description: "Hireon homepage",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${unbounded.className} antialiased`}
      >
        <Header></Header>
        <main className="w-screen h-full flex flex-col items-center flex-1">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
