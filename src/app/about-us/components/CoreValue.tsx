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

export default function CoreValue() {
    return (
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
                    <h2 className="xl:text-[40px] lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-extrabold mb-2">
                    Visi
                    </h2>
                    <p className="font-medium text-base xl:text-lg lg:text-base md:text-sm xs:text-sm">
                    Menjadi perusahaan profesional yang bergerak dibidang distribusi
                    dan retail produk IT (Teknologi Informatika) No. 1 di Indonesia.
                    </p>
                </div>
            </div>
            <div className="content-width mx-auto">
                <h2 className="text-[40px] xl:text-[40px] lg:text-4xl md:text-3xl sm:text-2xl font-extrabold text-center mb-8">
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
    );
}