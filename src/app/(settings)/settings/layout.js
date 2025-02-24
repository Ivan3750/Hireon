'use client';
import { useEffect, useState } from 'react';
import "@/app/globals.css";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
export default function SettingsLayout({ company, user }) {
  const [accountType, setAccountType] = useState('employer');

  useEffect(() => {
    const fetchAccountType = async () => {
      try {
        const response = await fetch('/api/auth/account-type', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}` 
          }
        });

        if (response.ok) {
          const data = await response.json();
          setAccountType(data.userType);
        } else {
          console.error('Failed to fetch account type.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchAccountType();
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
    <style jsx global>
        {"input:enabled {border-bottom: 1px solid #11181C;}"}
      </style>
      <Link href="" onClick={() => history.back()} className="flex h-[12.5%] absolute items-center flex-nowrap gap-[5px] text-[25px] top-0 left-[50px]"><FaArrowLeft></FaArrowLeft>Back</Link>
      <h1 className="flex h-[12.5%] absolute items-center flex-nowrap gap-[5px] text-[40px] top-0 left-[50%] translate-x-[-50%]">Settings</h1>
      {accountType === 'applicant' && (
        user
      )}
      {accountType === 'employer' && (
        company
      )}
      {!accountType && <p>Loading...</p>}  
    </div>
  );
}
