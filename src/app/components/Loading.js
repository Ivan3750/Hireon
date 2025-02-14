import { useEffect } from 'react';
import Logo from "../../../public/logo.svg"
import Image from 'next/image';



export default function Loading() {
  useEffect(() => {
    const loadingbar = document.querySelector('.loadingbar');
    const loadingBox = document.querySelector('.loadingBox');
    const splashScreen = document.querySelector('.splashScreen');

    setTimeout(() => {
      loadingbar.style.transition = 'left 3s ease-out';
      loadingbar.style.left = '0';
    }, 500);

    setTimeout(() => {
      loadingBox.style.transition = 'opacity 1s ease';
      loadingBox.style.opacity = '1';
    }, 1000);

    setTimeout(() => {
      splashScreen.style.transition = 'top 1.5s ease';
      splashScreen.style.display = 'none';
    }, 3000);

    


  }, []);

  return (
      <div className="splashScreen absolute top-0 left-0 w-full h-screen bg-[#8ecae6] border-b-5 border-[#023047] overflow-hidden z-[999]">
        <div className="loadingContainer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center overflow-hidden w-[400px]">
          <div className="loadingBox w-full h-full opacity-0">
            <Image
              src={Logo}
              alt="HIREON"
              className="splashLogo w-1/2 mb-12 mx-auto"
            />
            <div className="loadingBarContainer w-full bg-gray-200 h-2 mt-12">
              <div className="loadingbar h-2 bg-[#023047] absolute left-[-100%]"></div>
            </div>
          </div>
        </div>
      </div>

  );
}
