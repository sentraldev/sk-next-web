import React, { useState } from "react";



type Stat = {
  value: string;
  label: string;
  isLogo?: boolean; // Flag to indicate if this stat is a logo (optional)
  logoSrc?: string; // Path to logo image (optional)
};

const IMAGE_POSITIONS = {
  LEFT: 'left',
  RIGHT: 'right',
} as const;

type Subsection = {
  heading: string;
  description: string;
  stats: Stat[];
  image: string;
  imagePosition: string;
};


const tabsData = [
    {
      id: 'b2b',
      title: 'Business to Business',
      content: {
        heading: 'Dealership dan Reseller',
        description:
          'Kami mendukung UMKM dan individu yang ingin berkembang dengan menyediakan pasokan dari brand IT ternama serta edukasi agar bisnis mereka tumbuh dan adaptif terhadap perkembangan zaman.',
        stats: [
          { value: '150+', label: 'Dealer Partnership' },
          { value: '100K+', label: 'Total Transaksi' },
          { value: '99%', label: 'Kepuasan Kerjasama' },
        ],
        image: 'images/tentang-bisnis/b2b.png', // Ganti dengan path gambar yang sesuai
        imagePosition: IMAGE_POSITIONS.LEFT, // 'left' atau 'right'
      },
    },
    {
      id: 'b2c',
      title: 'Business to Customer',
      content: [
        {
          heading: 'Retail Offline',
          description:
            'Sentral Komputer hadir untuk memenuhi kebutuhan laptop, komputer, aksesoris untuk masyarakat umum. Dengan lebih dari 17+ retail store yang tersebar di Indonesia, tim kami siap melayani dan membantu setiap pelanggan dengan sepenuh hati.',
          stats: [
            { value: '17+', label: 'Cabang' },
            { value: '10.000+', label: 'Konsumen Terlayani' },
            { value: '99%', label: 'Kepuasan Pelanggan' },
          ],
          image: 'images/tentang-bisnis/retail-offline.png',
          imagePosition: IMAGE_POSITIONS.LEFT,
        },
        {
          heading: 'Service Center',
          description: 'Sebagai mitra resmi dari berbagai brand, Sentral Service by Sentral Komputer menyediakan layanan purna jual yang berkualitas tinggi. Seluruh proses service ditangani oleh teknisi bersertifikat yang mengutamakan ketepatan, keamanan, dan kepuasan pelanggan.',
          stats: [
            { value: 'HP', label: 'Certified', isLogo: true, logoSrc: '/images/brands/hp.png' },
            { value: 'Lenovo', label: 'Certified', isLogo: true, logoSrc: '/images/brands/lenovo.png' },
            { value: 'ASUS', label: 'Certified', isLogo: true, logoSrc: '/images/brands/asus.png' },
            { value: 'MSI', label: 'Certified', isLogo: true, logoSrc: '/images/brands/msi.png' },
            { value: 'Acer', label: 'Certified', isLogo: true, logoSrc: '/images/brands/acer.png' },
            { value: 'Zyrex', label: 'Certified', isLogo: true, logoSrc: '/images/brands/zyrex.png' },
            { value: 'Axioo', label: 'Certified', isLogo: true, logoSrc: '/images/brands/axioo.png' },
          ],
          image: '/images/tentang-bisnis/service-center.png',
          imagePosition: IMAGE_POSITIONS.RIGHT,
        },
        {
          heading: 'Retail Online',
          description: 'Dengan jaringan resmi di Tokopedia, Shopee, TikTok Shop, BliBli, serta website utama yang terus diperbarui, Sentral Komputer memastikan konsumen dapat berbelanja produk teknologi dengan yang mudah, aman, dan nyaman di era digital.',
          stats: [
            { value: '17+', label: 'Cabang' },
            { value: '99%', label: 'Kepuasan Pelanggan' },
            { value: 'Tokopedia', label: '', isLogo: true, logoSrc: '/images/brands/tokopedia.png' },
            { value: 'Shopee', label: '', isLogo: true, logoSrc: '/images/brands/shopee.png' },
            { value: 'TikTok Shop', label: '', isLogo: true, logoSrc: '/images/brands/tiktokshop.png' },
            { value: 'Blibli', label: '', isLogo: true, logoSrc: '/images/brands/blibli.png' },
          ],
          image: '/images/tentang-bisnis/retail-online.png',
          imagePosition: IMAGE_POSITIONS.LEFT,
        },
      ],
    },
    {
      id: 'project',
      title: 'Proyek, Pengadaan, dan Kerjasama',
      content: {
        heading: 'Proyek & Pengadaan',
        description:
          'Kami menyediakan solusi pengadaan IT untuk instansi pemerintah, pendidikan, dan korporasi. Dengan tim ahli dan jaringan distribusi yang luas, kami siap menjadi mitra terpercaya dalam setiap proyek besar Anda.',
        stats: [
          { value: '50+', label: 'Proyek Selesai' },
          { value: '200+', label: 'Klien Korporasi' },
          { value: '98%', label: 'Kepuasan Klien' },
        ],
        image: 'images/tentang-bisnis/proyek.png',
        imagePosition: IMAGE_POSITIONS.LEFT,
      },
    },
  ];

const renderStats = (stats: Stat[]) => (
  <div className="grid grid-cols-3 gap-4 text-left bg-white p-3 rounded-md shadow-md w-full">
    {stats.map((stat, index) => (
      <div key={index} className="py-3 px-3 text-center">
        <p className="text-3xl sm:text-2xl xs:text-xl md:text-3xl font-extrabold">{stat.value}</p>
        <p className="mt-1 text-xs sm:text-sm md:text-xs">{stat.label}</p>
      </div>
    ))}
  </div>
);



  const renderSubsection = (subsection: Subsection, index: number) => {
  return (
    <div
      key={index}
      className={`flex flex-col md:flex-row items-center gap-8 ${
        subsection.imagePosition === 'left' ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Gambar & Teks (Sejajar di Mobile) */}
      <div
        className={`flex flex-col xs:flex-row sm:items-center gap-6 w-full ${
          subsection.imagePosition === 'left' ? 'xs:flex-row-reverse' : ''
        }`}
      >
        {/* Gambar */}
        <div className="flex-shrink-0 w-[200px] lg:w-1/2 md:w-[325px] sm:w-[200px]">
          <img
            src={subsection.image}
            alt={subsection.heading}
            className="w-full h-[235px] xl:h-[425px] lg:h-[375px] md:h-[285px] sm:h-[200px]  object-cover"
          />
        </div>

        {/* Teks */}
        <div className="flex-1">
          <h3 className="text-4xl lg:text-4xl md:text-2xl sm:text-lg xs:text-sm font-extrabold mb-4">
            {subsection.heading}
          </h3>
          <p className="mb-6 md:text-sm sm:text-[13px] xs:text-xs">{subsection.description}</p>
          {/* Statistik — Width Full (Di Bawah Gambar & Teks) */}
          <div className="w-full hidden md:block mt-4">
            <div className="bg-white p-4 rounded-md shadow-md justify-center">
              {subsection.heading === 'Service Center' ? (
                <p className="font-extrabold py-2">Certified Service Center for: </p>
              ) : null}
              <div
                className={`grid grid-cols-3 ${
                  subsection.heading != 'Retail Offline'
                    ? subsection.heading === 'Retail Online'
                      ? 'md:grid-cols-6 gap-0'
                      : 'md:grid-cols-7'
                    : 'md:grid-cols-3 sm:grid-cols-3 gap-6'
                } py-4 items-center`}
              >
                {subsection.stats.map((stat, idx) => (
                  <div key={idx} className="text-center place-items-center">
                    {stat.isLogo ? (
                      <img
                        src={stat.logoSrc ?? ''}
                        alt={stat.value}
                        className={`w-auto ${
                          subsection.heading === 'Retail Online' ? 'xl:h-9 lg:h-6' : 'h-4'
                        } mx-auto`}
                      />
                    ) : (
                      <>
                        <div className="flex text-3xl sm:text-2xl xs:text-xl md:text-3xl font-extrabold">
                          {stat.value}
                        </div>
                        <div className="mt-1 text-xs sm:text-sm md:text-xs">
                          {stat.label}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistik — Width Full (Di Bawah Gambar & Teks) */}
      <div className="w-full md:hidden">
        <div className="bg-white p-4 rounded-md shadow-md justify-center content-center">
          {subsection.heading === 'Service Center' ? (
            <p className="font-extrabold py-2">Certified Service Center for: </p>
          ) : null}
          <div
            className={`grid grid-cols-3 ${
              subsection.heading != 'Retail Offline'
                ? subsection.heading === 'Retail Online'
                  ? 'xs:grid-cols-[15%_1fr_10%_10%_10%_20%] gap-0'
                  : 'xs:grid-cols-7'
                : 'md:grid-cols-3 sm:grid-cols-3 gap-6'
            } py-3 justify-center place-items-center`}
          >
            {subsection.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                {stat.isLogo ? (
                  <img
                    src={stat.logoSrc ?? ''}
                    alt={stat.value}
                    className={`w-auto ${
                      subsection.heading === 'Retail Online' ? 'h-8 xs:h-5' : 'h-4 xs:h-[10px] gap-3'
                    } mx-auto`}
                  />
                ) : (
                  <>
                    <div className="text-center">
                      <div className="text-3xl sm:text-2xl xs:text-xl md:text-3xl font-extrabold">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs sm:text-sm md:text-xs">
                      {stat.label}
                    </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TentangBisnis() {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);
  
  const currentTab = tabsData.find(tab => tab.id === activeTab);
  if (!currentTab) {
    return <div className="text-center py-12">Tab tidak ditemukan.</div>;
  }
  return (
    <section className="py-12 bg-gray-100">
      <div className="content-width mx-auto space-y-4">
        <h2 className="text-[40px] font-extrabold mb-6 text-center xl:text-[40px] lg:text-3xl md:text-2xl xs:text-xl">Tentang Bisnis Kami</h2>

        {/* Tab Navigation */}
        <nav className="mb-8 flex space-x-6 text-sm font-medium justify-center text-gray-500 border-b border-gray-200">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 transition-colors md:text-base xs:text-xs ${
                activeTab === tab.id
                  ? 'text-gray-900 border-b-2 border-indigo-600'
                  : 'hover:text-gray-900'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </nav>

        {/* Tab Content */}
        {Array.isArray(currentTab.content) ? (
          currentTab.content.map((subsection, index) => renderSubsection(subsection, index))
        ) : (
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            {/* Gambar & Teks (Sejajar di Mobile) */}
            <div className="flex flex-col xs:flex-row sm:items-center gap-6 w-full">
              {/* Gambar */}
              <div className="flex-shrink-0 w-[150px] lg:w-1/2 md:w-[325px] sm:w-[200px]">
                <img
                  src={currentTab.content.image}
                  alt={currentTab.content.heading}
                  className="w-full h-[150px] xl:h-[425px] lg:h-[375px] md:h-[285px] sm:h-[200px] object-cover"
                />
              </div>

              {/* Teks */}
              <div className="flex-1">
                <h3 className="text-4xl lg:text-4xl md:text-2xl sm:text-lg xs:text-sm font-extrabold mb-4">
                  {currentTab.content.heading}
                </h3>
                <p className="mb-6 md:text-sm sm:text-[13px] xs:text-xs">
                  {currentTab.content.description}
                </p>
                <div className="w-full hidden md:flex mt-4">
                  {renderStats(currentTab.content.stats)}
                </div>
              </div>
            </div>

            {/* Statistik — Width Full (Di Bawah Gambar & Teks) */}
            {currentTab.content.stats && (
              <div className="w-full md:hidden mt-4">
                {renderStats(currentTab.content.stats)}
              </div>
            )}
          </div>
        )}


      </div>
    </section>
  );
}