'use client';
import { useEffect, useState } from 'react';
import "@/app/globals.css";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
export default function SettingsLayout({ company, user }) {
  const [accountType, setAccountType] = useState('applicant');

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
          console.log("type:" + data.userType)
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
    <div className="w-full  flex flex-col justify-center items-center">
    <style jsx global>
        {"input:enabled {border-bottom: 1px solid #11181C;}"}
      </style>
      <div className='items-center justify-between w-full p-4 shadow-lg hidden sm:flex'>
      <Link href='' onClick={() => history.back()} className='flex items-center text-[25px] text-gray-700 hover:text-black transition'>
        <FaArrowLeft className='mr-2' /> Back
      </Link>
      <h1 className='text-[40px] font-semibold text-gray-900'>Settings</h1>
      <div className='w-[50px]'></div>
    </div>
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
