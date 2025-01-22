import { Unbounded } from "next/font/google";
import "./globals.css";
const unbounded = Unbounded({
  display: 'swap',
  subsets: ["latin"],
});
export const metadata = {
  title: "Hireon - No Header & Footer",
  description: "Hireon without Header and Footer.",
};
export default function LoginLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${unbounded.className} antialiased bg-white`}>
        <main className="h-screen w-screen flex flex-col items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
