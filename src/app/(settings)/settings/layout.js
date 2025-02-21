'use client';
import { useEffect, useState } from 'react';
import "@/app/globals.css";

export default function SettingsLayout({ company, user }) {
  const [accountType, setAccountType] = useState(null);

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
    <div className="">
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
