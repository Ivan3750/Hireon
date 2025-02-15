'use client'
import "@/app/globals.css";
export default function SettingsLayout({ company, user }) {
  return (
    <div className="w-full h-screen ">
      {false ? user : company}  
    </div>
  );
}
  