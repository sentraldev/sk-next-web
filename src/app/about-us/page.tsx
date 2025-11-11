import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import React from "react";

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

export default function AboutUs(){
    return (
        <>
            <Header />
             <div className="mx-auto py-8 space-y-12 xs:space-y-6">
                <div className="content-width mx-auto">
                    <img
                        src="images/about-us1.png"
                        alt="Opening Event"
                        className="w-full rounded-lg shadow-sm"
                    />
                </div>
             </div>
             <section className="content-width mx-auto py-8 sm:py-8 xs:py-0 space-y-12 xs:space-y-6">
                <div className="text-center space-y-4 xs:space-y-1">
                    <p className="font-medium text-base xl:text-xl lg:text-lg">Sejarah Sentral Komputer</p>
                    <h2 className="font-extrabold text-2xl xl:text-5xl lg:text-4xl md:text-3xl">Bermula Pada Tahun 1991</h2>
                    <p className="font-medium text-xs lg:text-sm md:text-xs lg:max-w-screen-md md:max-w-screen-sm mx-auto">
                        Kami berawal dari sebuah toko komputer dengan nama Sentral Komputer,
                        dan seiring berjalannya waktu, berkembang dan disahkan
                        menjadi PT Sentral Tekno Selaras pada tahun 2009.
                    </p>
                </div>
                <div>
                    <img
                        src="images/about-us2.png"
                        alt="Company History 1991"
                        className="rounded-lg w-full shadow-sm"
                    />
                </div>
                <div className="grid grid-cols-5 sm:grid-cols-5 xs:grid-cols-2 gap-10 lg:gap-10 md:gap-5 xs:gap-3">
                    <div className="relative group col-span-2 sm:col-span-2 xs:col-span-1">
                        <img
                        src="images/about-us3.png" // ganti sesuai gambar
                        alt="Ilustrasi Pelayanan"
                        className="rounded-lg shadow-lg w-full h-auto object-cover sm:aspect-[16/9] xs:aspect-square"
                        />
                        {/* Overlay teks tengah */}
                        <div className="absolute inset-0 flex bg-red items-center justify-center">
                            <h2 className="text-white text-4xl lg:text-4xl md:text-3xl font-bold drop-shadow-md">
                                1991
                            </h2>
                        </div>
                    </div>
                    <div className="col-span-3 sm:col-span-3 xs:col-span-1 content-center space-y-4 xs:space-y-2">
                        <h2 className="font-extrabold text-lg lg:text-[32px] md:text-2xl xs:text-base md:max-w-screen-md">Kami Telah Melayani Ribuan Konsumen, Organisasi & Korporsasi</h2>
                        <p className="font-medium text-[11px] lg:text-sm md:text-[11px] md:max-w-screen-sm">Untuk mendapatkan kebutuhan IT  resmi dan berkualitas melalui program distribusi, retail store, online/e-commerce, proyek, pengadaan korporasi, dan lain sebagainya.</p>
                    </div>
                </div>
             </section>
             <section className="mt-6 bg-gray-100 mx-auto py-8 sm:py-8 xs:py-3 space-y-12 xs:space-y-6">
                <div className="text-center">
                    <p className="font-medium text-sm md:text-xl sm:text-lg">Core Value Kami</p>
                    <h2 className="font-extrabold text-xl lg:text-[40px] lg:text-4xl md:text-3xl sm:text-2xl">Inilah Nilai yang Menuntun Langkah Kami</h2>
                </div>
                <div className="content-width mx-auto grid grid-cols-1 xs:grid-cols-3 gap-6 sm:gap-6 xs:gap-2">
                    {[
                    {
                        title: "Growth Mindset",
                        imageUrl: "images/core-value/core1.jpg",
                    },
                    {
                        title: "Customer First",
                        imageUrl: "images/core-value/core2.jpg",
                    },
                    {
                        title: "Integrity",
                        imageUrl: "images/core-value/core3.jpg",
                    },
                    ].map((item) => (
                    <div
                        key={item.title}
                        className="relative overflow-hidden rounded-xl shadow-md group hover:shadow-lg transition-all duration-300">
                        <div className="relative w-full overflow-hidden aspect-[4/3] ">
                        <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="absolute inset-0 h-full w-full object-cover group-cover:scale-105 transition-transform duration-500"
                            // className="h-[500px] w-full xl:h-[500px] lg:h-[400px] md:h-[325px] sm:h-[250px] object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        </div>
                        {/* Overlay teks di bawah */}
                        <div className="absolute bottom-0 left-0 right-0 px-4 xs:px-0 py-6 xl:py-6 lg:py-4 md:py-3 xs:py-2 text-white text-2xl xl:text-2xl lg:text-xl md:text-lg sm:text-base xs:text-xs font-extrabold text-center bg-gradient-to-t from-[#092566]/90 via-[#092566]/40 to-transparent">
                        {item.title}
                        </div>
                    </div>
                    ))}
                </div>
                <div
                    // className="relative w-full h-48 xl:h-[400px] sm:h-64 md:h-80 rounded-lg overflow-hidden flex items-center justify-center text-center px-4"
                    className="relative content-width mx-auto rounded-lg overflow-hidden flex items-center justify-center text-center px-4 aspect-[48/9] lg:aspect-[48/9] sm:aspect-[31/9] xs:aspect-[21/9]"
                    style={{
                        backgroundImage: `url(${"images/vision.jpg"})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}>
                    {/* Overlay gelap semi transparan */}
                    <div className="absolute inset-0 bg-black/50"></div>

                    {/* Konten teks di atas overlay */}
                    <div className="relative z-10 text-white w-full">
                        <h2 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-extrabold mb-2">
                        Visi
                        </h2>
                        <p className="font-medium text-base xl:text-lg lg:text-base md:text-sm xs:text-sm">
                        Menjadi perusahaan profesional yang bergerak dibidang distribusi
                        dan retail produk IT (Teknologi Informatika) No. 1 di Indonesia.
                        </p>
                    </div>
                </div>
                <div className="content-width mx-auto">
                    <h2 className="text-[40px] xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-extrabold text-center mb-8">
                        Misi
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {missions.map((mission, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-lg shadow-md overflow-hidden grid grid-cols-1 xs:grid-cols-2 md:grid-cols-1"
                        >
                            {/* Gambar */}
                            <div className="relative w-full overflow-hidden aspect-[4/3]">
                            <img
                                src={mission.image}
                                alt={`Mission ${idx + 1}`}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                            </div>

                            {/* Teks */}
                            <div className="p-4 text-gray-800 text-center md:text-center xs:text-left text-base xl:text-lg lg:text-base sm:text-sm xs:text-[11px] xs:leading-[15px] font-medium flex items-center justify-center">
                            {mission.text}
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
             </section>
             <section className="content-width mx-auto text-center space-y-6 sm:pt-9">
                <h2 className="text-[40px] xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-extrabold">
                    Penyebaran Lokasi Kami
                </h2>
                <div
                    className="relative w-full sm:h-96 md:h-[500px] xl:h-[800px] flex items-center justify-center text-center px-4"
                    style={{
                    backgroundImage: `url(${"../../temp/peta-indonesia.png"})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    }}>
                    {/* Overlay transparan (optional, bisa dihilangkan jika tidak perlu) */}
                    {/* <div className="absolute inset-0 bg-white bg-opacity-80"></div> */}

                    {/* Teks di atas peta */}
                    <div className="relative z-10 text-[#1444D5] font-regular text-xl sm:text-2xl md:text-3xl lg:text-5xl max-w-xl xl:max-w-2xl mx-auto">
                    Terdapat di{" "}
                    <span className="text-[#1444D5] text-7xl lg:text-[64px] md:text-4xl sm:text-2xl xs:text-xl font-extrabold">
                        16+
                    </span>{" "}
                    Lokasi di Berbagai Kota di Indonesia
                    </div>
                </div>
                </section>
            <Footer />
        </>
    );
}