import { Unbounded } from "next/font/google";
import "@/app/globals.css";
const unbounded = Unbounded({
  display: 'swap',
  subsets: ["latin"],
});
export default function LoginLayout({ children }) {
  return (
    <div className="bg-[#F8F8FF] w-full h-full">{children}</div>
  );
}
