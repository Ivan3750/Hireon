'use client'
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import logo from '../../public/logo.svg'
export default function Loading() {
  const loadingBarRef = useRef()
  const loadingBoxRef = useRef()
  const splashScreenRef = useRef()
  useEffect(() => {
    if (loadingBarRef.current && loadingBoxRef.current && splashScreenRef.current) {
      const timeout1 = setTimeout(() => {
        loadingBarRef.current.style.transition = 'left 3s ease-out';
        loadingBarRef.current.style.left = '0';
      }, 500);
      const timeout2 = setTimeout(() => {
        loadingBoxRef.current.style.transition = 'opacity 1s ease';
        loadingBoxRef.current.style.opacity = '1';
      }, 1000);
      const timeout3 = setTimeout(() => {
        splashScreenRef.current.style.transition = 'top 1.5s ease';
        splashScreenRef.current.style.display = 'none';
      }, 3000);
      return () => {
        clearTimeout(timeout1);
        clearTimeout(timeout2);
        clearTimeout(timeout3);
      };
    }
  }, []); 
  return (
      <div className="splashScreen absolute top-0 left-0 w-full h-screen bg-[#8ecae6] border-b-5 border-[#023047] overflow-hidden z-[999]" ref={splashScreenRef}>
        <div className="loadingContainer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center overflow-hidden w-[400px]">
          <div className="loadingBox w-full h-full opacity-0" ref={loadingBoxRef}>
            <Image
              src={logo}
              alt="HIREON"
              className="splashLogo w-1/2 mb-12 mx-auto"
            />
            <div className="loadingBarContainer w-full bg-gray-200 h-2 mt-12">
              <div className="loadingbar h-2 bg-[#023047] absolute left-[-100%]" ref={loadingBarRef}></div>
            </div>
          </div>
        </div>
      </div>

  );
}
