import React from "react";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const advantages = [
  'Pengalaman Sejak 1991', 'Barang 100% ORI', 'Garansi Resmi',
  'Service Center Certified', 'Tingkat Kepuasan Pelanggan Terbaik', 'Sales & Teknisi Profesional',
];

const checkIconColor = '#1444D5';

const brandPartners = [
  { name: "ASUS", logo: "images/brands/asus.png" },
  { name: "Apple", logo: "images/brands/apple.png" },
  { name: "Lenovo", logo: "images/brands/lenovo.png" },
  { name: "HP", logo: "images/brands/hp.png" },
  { name: "Samsung", logo: "images/brands/samsung.png" },
  { name: "MSI", logo: "images/brands/msi.png" },
  { name: "Rexus", logo: "images/brands/rexus.png" },
  { name: "Acer", logo: "images/brands/acer.png" },
  { name: "Zyrex", logo: "images/brands/zyrex.png" },
  { name: "Prolink", logo: "images/brands/prolink.png" },
  { name: "Axioo", logo: "images/brands/axioo.png" },
  { name: "Fantech", logo: "images/brands/fantech.png" },
  { name: "Advan", logo: "images/brands/advan.png" },
  { name: "Aukey", logo: "images/brands/aukey.png" },
  { name: "Kaspersky", logo: "images/brands/kaspersky.png" },
  { name: "Epson", logo: "images/brands/epson.png" },
  { name: "Toshiba", logo: "images/brands/toshiba.png" },
  { name: "Logitech", logo: "images/brands/logitech.png" },
  { name: "Intel", logo: "images/brands/intel.png" },
  { name: "AMD", logo: "images/brands/amd.png" },
  { name: "Nvidia", logo: "images/brands/nvidia.png" },
  { name: "McAfee", logo: "images/brands/mcafee.png" },
  { name: "Microsoft", logo: "images/brands/microsoft.png" },
];

export default function MitraKami() {
    return (
        <section className="w-full content-width mx-auto py-8">
              <h2 className="lg:hidden text-center text-4xl font-extrabold mb-2 xl:text-[40px] lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl">Mitra Kami</h2>
              <h3 className="lg:hidden text-center text-xl xs:text-base font-extrabold text-[#1444D5] mb-8">
                Kenapa Jadi Bagian Kami?
              </h3>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-8 items-center">
                {/* Bagian kiri: gambar dua orang, hidden di mobile, col-span 1 */}
                <div className="justify-center col-span-1 place-items-center">
                  <img
                    src="/images/mitrakami.png"
                    alt="Dua Orang Mitra Kami"
                    className="w-auto h-auto xl:h-[700px] aspect-square object-contain"
                  />
                </div>
            
                {/* Bagian kanan: col-span 2 */}
                <div className="col-span-2 xs:col-span-1 max-w-screen-xl flex flex-col justify-center space-y-32 lg:space-y-12">
                  <div className="">
                    <h2 className="hidden lg:block text-center text-4xl font-extrabold mb-2 xl:text-[40px] lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl">Mitra Kami</h2>
                    <h3 className="hidden lg:block text-center text-xl lg:text-xl xs:text-base font-extrabold text-[#1444D5] mb-8">
                      Kenapa Jadi Bagian Kami?
                    </h3>
            
                    {/* Daftar keuntungan */}
                    <ul className="hidden md:grid md:grid-cols-1 lg:grid-cols-2 items-center md:gap-x-12 md:gap-y-4 justify-self-center xs:items-start">
                      {advantages.map((item, idx) => (
                        <li key={idx} className="flex space-x-2">
                          <FontAwesomeIcon icon={faCheck} style={{ color: checkIconColor }} />
                          <span className="font-medium text-[15px] lg:text-[15px] xs:text-[11px] text-left">{item}</span>
                        </li>
                      ))}
                    </ul>
            
                    <ul className="md:hidden flex flex-col items-center space-y-3 justify-self-center xs:items-start">
                      {advantages.map((item, idx) => (
                        <li key={idx} className="flex space-x-2">
                          <FontAwesomeIcon icon={faCheck} style={{ color: checkIconColor }} />
                          <span className="font-medium text-[15px] lg:text-[15px] xs:text-[11px] text-left">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
            
                  {/* Brand partner */}
                  <div className="w-full hidden lg:block bg-[#F5F3F1] p-5">
                    <h4
                      className="mb-4 text-center text-xl lg:text-xl xs:text-base font-extrabold text-[#1444D5]"
                    >
                      Brand Partner
                    </h4>
            
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4 place-items-center">
                      {brandPartners.map((p) => (
                        <img
                          key={p.name}
                          src={p.logo}
                          alt={p.name}
                          loading="lazy"
                          className="h-[clamp(12px,2.0vw,20px)] w-auto object-contain"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile Brand Partner */}
              <div className="w-full lg:hidden md:mt-4 bg-[#F5F3F1] p-5">
                <h4
                  className="mb-4 text-center text-xl lg:text-xl xs:text-base font-extrabold text-[#1444D5]"
                >
                  Brand Partner
                </h4>
        
                <div className="grid grid-cols-3 xs:grid-cols-8 md:grid-cols-6 lg:grid-cols-9 gap-4 place-items-center">
                  {brandPartners.map((p) => (
                    <img
                      key={p.name}
                      src={p.logo}
                      alt={p.name}
                      loading="lazy"
                      className="h-[clamp(12px,2.0vw,12px)] w-auto object-contain"
                    />
                  ))}
                </div>
              </div>
            </section>
    );
}