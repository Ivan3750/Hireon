import { Unbounded } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const unbounded = Unbounded({
  display: "swap",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hireon",
  description: "Hireon is the best way to find a job",
};

export default function LayoutFooter({ children }) {
  return (
    <html lang="en">
      <body className={`${unbounded.className} antialiased`}>
        <main className="w-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
