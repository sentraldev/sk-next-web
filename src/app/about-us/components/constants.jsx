
const missions = [
  {
    image: "images/missions/mission1.jpg", // Gambar contoh
    text: "Menjadi salah satu perusahaan swasta nasional yang akan terus bertumbuh dan berkontribusi bagi bangsa Indonesia",
  },
  {
    image: "images/missions/mission2.jpg", // Gambar contoh
    text: "Membantu dan memberikan dukungan kepada perusahaan kecil atau UMKM Indonesia yang berpotensi dan progresif.",
  },
  {
    image: "images/missions/mission3.jpg", // Gambar contoh
    text: "Mendidik dan menghasilkan tim yang unggul dalam karakter, pengetahuan, keterampilan, dan kemapanan dalam bekerja secara pribadi dan profesional",
  },
];

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

interface TabData {
  id: string;
  title: string;
  content: Subsection | Subsection[];
}

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

// Definisikan tipe kategori dengan string literal union
type CategoryId = "pengadaan" | "perusahaan" | "organisasi";

// Data kategori dengan tipe yang jelas agar TypeScript tahu key valid
const categories: { id: CategoryId; label: string }[] = [
  { id: "pengadaan", label: "Pengadaan" },
  { id: "perusahaan", label: "Perusahaan" },
  { id: "organisasi", label: "Organisasi dan Sekolah" },
];

// Data klien sesuai kategori, dengan tipe Record untuk key yang ketat
const clients: Record<
  CategoryId,
  { id: number; name: string; logo: string }[]
> = {
  pengadaan: [
    { id: 1, name: "SIPLAH", logo: "../../images/partners/siplah.png" },
    { id: 2, name: "KPP", logo: "../../images/partners/lkpp.png" },
    { id: 3, name: "Iplah", logo: "../../images/partners/siplah-blanja.png" },
  ],
  perusahaan: [
    { id: 4, name: "MIMS", logo: "../../images/partners/mims.png" },
    { id: 5, name: "suara.com", logo: "../../images/partners/suara-com.png" },
    { id: 6, name: "billboard", logo: "../../images/partners/billboard.png" },
    { id: 7, name: "adev", logo: "../../images/partners/adev.png" },
    {
      id: 8,
      name: "Angkasa Pura",
      logo: "../../images/partners/angkasa-pura.png",
    },
    { id: 9, name: "C21", logo: "../../images/partners/c21.png" },
    { id: 10, name: "HIS", logo: "../../images/partners/his.png" },
    { id: 11, name: "Izi Data", logo: "../../images/partners/izidata.png" },
    {
      id: 12,
      name: "Len Telekomunikasi",
      logo: "../../images/partners/len-telekomunikasi-indonesia.png",
    },
    { id: 13, name: "Matsuoka", logo: "../../images/partners/matsuoka.png" },
    { id: 14, name: "SKI", logo: "../../images/partners/ski.png" },
    { id: 15, name: "Telkom", logo: "../../images/partners/telkom-indonesia.png" },
    {
      id: 16,
      name: "Utama Gas Multiperkasa",
      logo: "../../images/partners/utama-gas-multiperkasa.png",
    },
    { id: 17, name: "Biosm", logo: "../../images/partners/biosm.png" },
    { id: 18, name: "tc", logo: "../../images/partners/tc.png" },
    {
      id: 19,
      name: "rosenberger",
      logo: "../../images/partners/rosenberger.png",
    },
    { id: 20, name: "indec", logo: "../../images/partners/indec.png" },
    { id: 21, name: "bsi", logo: "../../images/partners/bsi.png" },
    { id: 22, name: "bri", logo: "../../images/partners/bri.png" },
    {
      id: 23,
      name: "PT. Jaya Mitra Kemilau",
      logo: "../../images/partners/jaya-mitra-kemilau.png",
    },
    {
      id: 24,
      name: "Lintas Teknologi",
      logo: "../../images/partners/lintas-teknologi.png",
    },
    { id: 25, name: "Everwhite", logo: "../../images/partners/everwhite.png" },
    { id: 26, name: "Bank Bengkulu", logo: "../../images/partners/bank-bengkulu.png" },
    { id: 27, name: "Weststar Aviation Service", logo: "../../images/partners/weststar.png" },
    { id: 28, name: "GS Battery", logo: "../../images/partners/gs-battery.png" },
    { id: 29, name: "Bank Bengkulu", logo: "../../images/partners/tkm.png" },
    { id: 30, name: "Bank Bengkulu", logo: "../../images/partners/abe-kogyo.png" },
    { id: 31, name: "Bank Bengkulu", logo: "../../images/partners/rmp.png" },
    { id: 32, name: "Bank Bengkulu", logo: "../../images/partners/amurwa-international.png" },
    { id: 33, name: "Bank Bengkulu", logo: "../../images/partners/pertamina-ep.png" },
    { id: 34, name: "Bank Bengkulu", logo: "../../images/partners/so-indonesia.png" },
    { id: 35, name: "Bank Bengkulu", logo: "../../images/partners/pupuk-kujang.png" },
    { id: 36, name: "Bank Bengkulu", logo: "../../images/partners/ak.png" },
    { id: 37, name: "Bank Bengkulu", logo: "../../images/partners/genflix.png" },
    { id: 38, name: "Bank Bengkulu", logo: "../../images/partners/pizza-hut.png" },
    { id: 39, name: "Bank Bengkulu", logo: "../../images/partners/surya-mas-perkasa.png" },
    { id: 40, name: "Bank Bengkulu", logo: "../../images/partners/sg.png" },
    { id: 41, name: "Bank Bengkulu", logo: "../../images/partners/gong-cha.png" },
    { id: 42, name: "Bank Bengkulu", logo: "../../images/partners/indonesia-technical-machinery.png" },
    { id: 43, name: "Bank Bengkulu", logo: "../../images/partners/bge.png" },
    { id: 44, name: "Bank Bengkulu", logo: "../../images/partners/ekp.png" },
    { id: 45, name: "Bank Bengkulu", logo: "../../images/partners/bio.png" },
    { id: 46, name: "Bank Bengkulu", logo: "../../images/partners/century.png" },
    { id: 47, name: "Bank Bengkulu", logo: "../../images/partners/pku.png" },
    { id: 48, name: "Bank Bengkulu", logo: "../../images/partners/at-indonesia.png" },
    { id: 49, name: "Bank Bengkulu", logo: "../../images/partners/harvest-ariake-indonesia.png" },
    { id: 50, name: "Bank Bengkulu", logo: "../../images/partners/asuransi-ramayana.png" },
    { id: 51, name: "Bank Bengkulu", logo: "../../images/partners/kimia-farma.png" },
    { id: 52, name: "Bank Bengkulu", logo: "../../images/partners/hkmu.png" },
    { id: 53, name: "Bank Bengkulu", logo: "../../images/partners/oozx.png" },
    { id: 54, name: "Bank Bengkulu", logo: "../../images/partners/tecso.png" },
    { id: 55, name: "Bank Bengkulu", logo: "../../images/partners/dipa.png" },
    { id: 56, name: "Bank Bengkulu", logo: "../../images/partners/fuji.png" },
    { id: 57, name: "Bank Bengkulu", logo: "../../images/partners/bukwang-textile.png" },
    { id: 58, name: "Bank Bengkulu", logo: "../../images/partners/ihara.png" },
    { id: 59, name: "Bank Bengkulu", logo: "../../images/partners/runh-power.png" },
    { id: 60, name: "Bank Bengkulu", logo: "../../images/partners/bpb.png" },
    { id: 61, name: "Bank Bengkulu", logo: "../../images/partners/skp.png" },
    { id: 62, name: "Bank Bengkulu", logo: "../../images/partners/baking-world-id.png" },
    { id: 63, name: "Bank Bengkulu", logo: "../../images/partners/astra-infra.png" },
    { id: 64, name: "Bank Bengkulu", logo: "../../images/partners/pum.png" },
    { id: 65, name: "Bank Bengkulu", logo: "../../images/partners/pratama.png" },
    { id: 66, name: "Bank Bengkulu", logo: "../../images/partners/truefriend.png" },
    { id: 67, name: "Bank Bengkulu", logo: "../../images/partners/schema.png" },
    { id: 68, name: "Bank Bengkulu", logo: "../../images/partners/seal-mart.png" },
    { id: 69, name: "Bank Bengkulu", logo: "../../images/partners/gadar-medik-indonesia.png" },
    { id: 70, name: "Bank Bengkulu", logo: "../../images/partners/danamas.png" },
    { id: 71, name: "Bank Bengkulu", logo: "../../images/partners/lnet.png" },
    { id: 72, name: "Bank Bengkulu", logo: "../../images/partners/delta-ultracon.png" },
    { id: 73, name: "Bank Bengkulu", logo: "../../images/partners/buana-inovasi-persada.png" },
    { id: 74, name: "Bank Bengkulu", logo: "../../images/partners/bank-sultra.png" },
    { id: 75, name: "Bank Bengkulu", logo: "../../images/partners/cnm.png" },
    { id: 76, name: "Bank Bengkulu", logo: "../../images/partners/askrindo-insurance.png" },
    { id: 77, name: "Bank Bengkulu", logo: "../../images/partners/nuri.png" },
    { id: 78, name: "Bank Bengkulu", logo: "../../images/partners/nissin.png" },
    { id: 79, name: "Bank Bengkulu", logo: "../../images/partners/megacon.png" },
    { id: 80, name: "Bank Bengkulu", logo: "../../images/partners/astra-international.png" },
    { id: 81, name: "Bank Bengkulu", logo: "../../images/partners/indodrill.png" },
    { id: 82, name: "Bank Bengkulu", logo: "../../images/partners/bank-bjb.png" },
    { id: 83, name: "Bank Bengkulu", logo: "../../images/partners/gpd-indonesia-pro.png" },
    { id: 84, name: "Bank Bengkulu", logo: "../../images/partners/roki-coltd.png" },
    { id: 85, name: "Bank Bengkulu", logo: "../../images/partners/tiga-tunas-selaras.png" },
    { id: 86, name: "Bank Bengkulu", logo: "../../images/partners/bni.png" },
    { id: 87, name: "Bank Bengkulu", logo: "../../images/partners/aaf-international.png" },
    { id: 88, name: "Bank Bengkulu", logo: "../../images/partners/uni-president.png" },
    { id: 89, name: "Bank Bengkulu", logo: "../../images/partners/ysi.png" },
    { id: 90, name: "Bank Bengkulu", logo: "../../images/partners/tpm.png" },
    { id: 91, name: "Bank Bengkulu", logo: "../../images/partners/century-21.png" },
    { id: 92, name: "Bank Bengkulu", logo: "../../images/partners/rk.png" },
    { id: 93, name: "Bank Bengkulu", logo: "../../images/partners/dowa.png" },
    { id: 94, name: "Bank Bengkulu", logo: "../../images/partners/cnaindo.png" },
    { id: 95, name: "Bank Bengkulu", logo: "../../images/partners/sgs.png" },
    { id: 96, name: "Bank Bengkulu", logo: "../../images/partners/marka-inspektindo-technical.png" },
    { id: 97, name: "Bank Bengkulu", logo: "../../images/partners/jilian.png" },
    { id: 98, name: "Bank Bengkulu", logo: "../../images/partners/hanatekindo.png" },
    { id: 99, name: "Bank Bengkulu", logo: "../../images/partners/denki.png" },
    { id: 100, name: "Bank Bengkulu", logo: "../../images/partners/patra-jasa.png" },
    { id: 101, name: "Bank Bengkulu", logo: "../../images/partners/monokem-surya.png" },
    { id: 102, name: "Bank Bengkulu", logo: "../../images/partners/pal-metalindo-perkasa.png" },
    { id: 103, name: "Bank Bengkulu", logo: "../../images/partners/graha-adhi-jaya-abadi.png" },
    { id: 104, name: "Bank Bengkulu", logo: "../../images/partners/chongro.png" },
  ],
  organisasi: [
    {
      id: 105,
      name: "Dinas Kesehatan",
      logo: "../../images/partners/dinkes.png",
    },
    {
      id: 106,
      name: "Kementerian Agama",
      logo: "../../images/partners/kementrian-agama.png",
    },
    {
      id: 107,
      name: "Kementerian Perindustrian",
      logo: "../../images/partners/kemenperin.png",
    },
    {
      id: 108,
      name: "Kementerian Ketenagakerjaan",
      logo: "../../images/partners/kementrian-ketenagakerjaan.png",
    },
    {
      id: 109,
      name: "LAPSPI",
      logo: "../../images/partners/lapspi.png",
    },
    {
      id: 110,
      name: "Institut Pertanian Bogor",
      logo: "../../images/partners/institut-pertanian-bogor.png",
    },
  ],
};


  // Slider settings for desktop/tablet
  const desktopSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    centerMode: true,
    centerPadding: "300px",
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1536,
        settings: { centerPadding: "200px" },
      },
      {
        breakpoint: 1280,
        settings: { centerPadding: "120px" },
      },
      {
        breakpoint: 1024,
        settings: { centerPadding: "60px" },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          centerPadding: "0px",
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          centerPadding: "0px",
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Slider settings for mobile (carousel style)
  const mobileSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Tampilkan 2 logo per slide di mobile
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000, // Lebih lambat dari desktop
    arrows: false, // Hilangkan panah di mobile
    centerMode: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3, // Jika sangat kecil, tampilkan 1 logo
          slidesToScroll: 3,
        },
      },
    ],
  };

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

const portfolioData = [
  {
    id: "pameran",
    title: "Pameran",
    mainImage: "../../temp/portofolio/event/porto-1.jpg",
    thumbnails: [
      "../../temp/portofolio/event/porto-12.jpg",
      "../../temp/portofolio/event/porto-13.jpg",
      "../../temp/portofolio/event/porto-14.jpg",
    ],
  },
  {
    id: "edukasi",
    title: "Edukasi Kampus",
    mainImage: "../../temp/portofolio/event/porto-2.jpg",
    thumbnails: [
      "../../temp/portofolio/event/porto-21.jpg",
      "../../temp/portofolio/event/porto-22.jpg",
      "../../temp/portofolio/event/porto-23.jpg",
    ],
  },
  {
    id: "dealer",
    title: "Dealer Gathering & Training",
    mainImage: "../../temp/portofolio/event/porto-3.jpg",
    thumbnails: [
      "../../temp/portofolio/event/porto-31.jpg",
      "../../temp/portofolio/event/porto-32.jpg",
      "../../temp/portofolio/event/porto-33.jpg",
    ],
  },
];

type Testimonial = {
  name: string;
  subtitle: string;
  rating: number; // 0-5
  text: string;
  avatarUrl?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Mochammad Asep Nazmudin",
    subtitle: "Sentral Komputer Bogor",
    rating: 5,
    text: "Bought Lenovo Legion in 2022, after 2.5 years it had an issue. Brought it for official warranty, staff were friendly, process fast, everything explained clearly. Laptop repaired hassle free, top service.",
    avatarUrl: "../../temp/asep.png",
  },
  {
    name: "Poetri Monalia",
    subtitle: "Sentral Komputer Citos",
    rating: 5,
    text: "We came to find a basic laptop for the kids, staff offered 5–6 options with specs. Technician also helped install Microsoft Office included in the bundle. Helpful and informative service.",
    avatarUrl: "../../temp/poetri.png",
  },
  {
    name: "Galih Satriya Praptama",
    subtitle: "Sentral Service",
    rating: 5,
    text: "Servis jujur, menyampaikan kondisi apa adanya, ngasih opsi dulu untuk solusi perbaikan. Sukses selalu, terima kasih!",
    // tanpa avatar -> otomatis pakai inisial
  },
  {
    name: "Adhitya Priady",
    subtitle: "Adhitya Priady",
    rating: 5,
    text: "Pelayanannya TOP. Dari dibongkar, dijelaskan masalah + solusi, lalu dirakit rapi lagi. Excellent service.",
    avatarUrl: "../../temp/adhitya.png",
  },
];

function Avatar({ name, url }: { name: string; url?: string }) {
  const initial = name?.trim()?.charAt(0)?.toUpperCase() || "U";
  return (
    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-zinc-200 ring-2 ring-white">
      {url ? (
        // pakai <img> biar konsisten dengan file lain
        <img src={url} alt={name} className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-zinc-700">
          {initial}
        </div>
      )}
    </div>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div
      className="flex items-center gap-1"
      aria-label={`${count} dari 5 bintang`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-5 w-5 lg:h-4 lg:w-4 ${
            i < count ? "fill-amber-400" : "fill-zinc-300"
          }`}
          aria-hidden="true">
          <path d="M10 1.5l2.59 5.25 5.8.84-4.2 4.09.99 5.77L10 14.97l-5.18 2.48.99-5.77-4.2-4.09 5.8-.84L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}