import { Unbounded } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { TranslateProvider } from "./hooks/useTranslate";
import FavIcon from "../../public/favicon.png"
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
        <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={`${unbounded.className} antialiased w-screen`}>
        <TranslateProvider>
          <Header />
          <main className="w-screen flex-1 h-screen">{children}</main>
          <Footer />
        </TranslateProvider>
      </body>
    </html>
  );
}
