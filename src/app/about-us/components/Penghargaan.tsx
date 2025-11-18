import React, { useState, useEffect } from "react";

const badges = [
  { title: "Best Sales Performance Jabodetabek", imgUrl: "/images/awards/best-amd.png" },
  { title: "Best Transformation Retail", imgUrl: "/images/awards/best-lenovo.png" },
  { title: "Best Performance Partner", imgUrl: "/images/awards/best-asus.png" },
  { title: "Best Retail Hero", imgUrl: "/images/awards/best-intel.png" },
  { title: "Highest Growth", imgUrl: "/images/awards/best-acer.png" },
];

const trophySets = [
  [{
    title: "Acer The Highest Growth 2025",
    imgUrl: "images/trophies/piagam-1.png",
  },
  {
    title: "Intel Retail Heroes Award 2025",
    imgUrl: "images/trophies/piagam-2.png",
  },
  {
    title: "Lenovo Consumer Platinum Partner Award 2024",
    imgUrl: "images/trophies/piagam-3.png",
  },
  {
    title: "DataScript Appreciation Best Partner 2023",
    imgUrl: "images/trophies/piagam-4.png",
  },
  {
    title: "Asus Best Performance Partner 2023",
    imgUrl: "images/trophies/piagam-5.png",
  },
  {
    title: "Asus Highest Loyalty Partner 2023",
    imgUrl: "images/trophies/piagam-6.png",
  },
  {
    title: "Lenovo Best Transformation Retail 2023",
    imgUrl: "images/trophies/piagam-7.png",
  },
  {
    title: "Blibli Best Seller Computer & Laptop 2022",
    imgUrl: "images/trophies/piagam-8.png",
  },
  {
    title: "Asus Best Performance Partner in Jabodetabek 2022",
    imgUrl: "images/trophies/piagam-9.png",
  },
  {
    title: "AMD Top Revenue Contribution 2022",
    imgUrl: "images/trophies/piagam-10.png",
  },],
[{
    title: "Acer The Highest Growth 2025",
    imgUrl: "images/trophies/piagam-11.png",
  },
  {
    title: "Intel Retail Heroes Award 2025",
    imgUrl: "images/trophies/piagam-12.png",
  },
  {
    title: "Lenovo Consumer Platinum Partner Award 2024",
    imgUrl: "images/trophies/piagam-13.png",
  },
  {
    title: "DataScript Appreciation Best Partner 2023",
    imgUrl: "images/trophies/piagam-14.png",
  },
  {
    title: "Asus Best Performance Partner 2023",
    imgUrl: "images/trophies/piagam-15.png",
  },
  {
    title: "Asus Highest Loyalty Partner 2023",
    imgUrl: "images/trophies/piagam-16.png",
  },
  {
    title: "Lenovo Best Transformation Retail 2023",
    imgUrl: "images/trophies/piagam-17.png",
  },
  {
    title: "Blibli Best Seller Computer & Laptop 2022",
    imgUrl: "images/trophies/piagam-18.png",
  },
  {
    title: "Asus Best Performance Partner in Jabodetabek 2022",
    imgUrl: "images/trophies/piagam-19.png",
  },
  {
    title: "AMD Top Revenue Contribution 2022",
    imgUrl: "images/trophies/piagam-20.png",
  },],
];

const trophySetsMobile = [
  [{
    title: "Acer The Highest Growth 2025",
    imgUrl: "images/trophies/piagam-1.png",
  },
  {
    title: "Intel Retail Heroes Award 2025",
    imgUrl: "images/trophies/piagam-2.png",
  },
  {
    title: "Lenovo Consumer Platinum Partner Award 2024",
    imgUrl: "images/trophies/piagam-3.png",
  },
  {
    title: "DataScript Appreciation Best Partner 2023",
    imgUrl: "images/trophies/piagam-4.png",
  },
  {
    title: "Asus Best Performance Partner 2023",
    imgUrl: "images/trophies/piagam-5.png",
  },
  {
    title: "Asus Highest Loyalty Partner 2023",
    imgUrl: "images/trophies/piagam-6.png",
  },
  {
    title: "Lenovo Best Transformation Retail 2023",
    imgUrl: "images/trophies/piagam-7.png",
  },
  {
    title: "Blibli Best Seller Computer & Laptop 2022",
    imgUrl: "images/trophies/piagam-8.png",
  },],
[
  {
    title: "Asus Best Performance Partner in Jabodetabek 2022",
    imgUrl: "images/trophies/piagam-9.png",
  },
  {
    title: "AMD Top Revenue Contribution 2022",
    imgUrl: "images/trophies/piagam-10.png",
  },
  {
    title: "Acer The Highest Growth 2025",
    imgUrl: "images/trophies/piagam-11.png",
  },
  {
    title: "Intel Retail Heroes Award 2025",
    imgUrl: "images/trophies/piagam-12.png",
  },
  {
    title: "Lenovo Consumer Platinum Partner Award 2024",
    imgUrl: "images/trophies/piagam-13.png",
  },
  {
    title: "DataScript Appreciation Best Partner 2023",
    imgUrl: "images/trophies/piagam-14.png",
  },
  {
    title: "Asus Best Performance Partner 2023",
    imgUrl: "images/trophies/piagam-15.png",
  },
  {
    title: "Asus Highest Loyalty Partner 2023",
    imgUrl: "images/trophies/piagam-16.png",
  },],
  [
    {
    title: "Lenovo Best Transformation Retail 2023",
    imgUrl: "images/trophies/piagam-17.png",
  },
  {
    title: "Blibli Best Seller Computer & Laptop 2022",
    imgUrl: "images/trophies/piagam-18.png",
  },
  {
    title: "Asus Best Performance Partner in Jabodetabek 2022",
    imgUrl: "images/trophies/piagam-19.png",
  },
  {
    title: "AMD Top Revenue Contribution 2022",
    imgUrl: "images/trophies/piagam-20.png",
  },
  ],
];

export default function Penghargaan() {
    const [currentTrophySet, setCurrentTrophySet] = useState(0);
    const [currentTrophySetMobile, setCurrentTrophySetMobile] = useState(0);

    // Efek untuk rotasi otomatis trofi setiap 5 detik
    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentTrophySet((prev) => (prev + 1) % trophySets.length);
        }, 5000);

        const intervalMobile = setInterval(() => {
        setCurrentTrophySetMobile((prev) => (prev + 1) % trophySetsMobile.length);
        }, 5000);

        // Cleanup interval saat komponen unmount
        return () => {
        clearInterval(interval);
        clearInterval(intervalMobile);
        }
    }, []);
    
    return (
        <div className="content-width mx-auto px-4 py-8">
              {/* Judul */}
              <h1 className="text-3xl md:text-[40px] xs:text-xl font-extrabold text-center mb-8">Penghargaan</h1>
              
              {/* Baris atas: Badge penghargaan (dengan gambar) */}
              <div className="flex flex-wrap justify-center mb-12">
                {badges.map((badge, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center p-3"
                  >
                    <img 
                      src={badge.imgUrl} 
                      alt={`${badge.title}`} 
                      className="w-1/2 h-auto lg:w-1/2 md:w-10 sm:w-20 xs:w-8 mb-2 object-contain"
                    />
                  </div>
                ))}
              </div>
              
              {/* Baris bawah: Trofi */}
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                {/* Desktop & Tablet: 1 baris 10 kolom */}
                <div className="hidden lg:flex flex-row gap-6 w-full justify-center">
                  {trophySets[currentTrophySet].map((trophy, index) => (
                    <div 
                      key={index} 
                      className="flex flex-col items-center p-4 duration-300"
                    >
                      <img 
                        src={trophy.imgUrl} 
                        alt={trophy.title} 
                        className="w-20 h-20 xs:w-14 xs:h-14 mb-2 object-contain"
                      />
                      <div className="text-xs md:text-sm xs:text-[7px] text-center font-semibold text-gray-700">
                        {trophy.title}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Mobile: 4 kolom × 2 baris */}
                <div className="lg:hidden grid grid-cols-4 gap-6 w-full">
                  {trophySetsMobile[currentTrophySetMobile].map((trophy, index) => (
                    <div 
                      key={index} 
                      className="flex flex-col items-center p-4 duration-300"
                    >
                      <img 
                        src={trophy.imgUrl} 
                        alt={trophy.title} 
                        className="w-20 h-20 mb-2 object-contain"
                      />
                      <div className="text-xs text-center font-medium text-gray-700">
                        {trophy.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
    );
}