import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ServiceCenterPage() {
  return (
    <>
      <Header />
      <div className="mx-auto py-8 space-y-12">
        <div className="content-width mx-auto">
          <img
            src="../../images/sentral-service/video.jpg"
            alt="Service Center"
            className="w-full aspect-[31/9] object-cover rounded-lg"
            />
        </div>
        <div className="content-width text-center mx-auto space-y-6">
          <h2 className="font-extrabold xl:text-[32px] lg:text-3xl md:text-2xl sm:text-xl xs:text-lg">
            Sentral Service
          </h2>
          {/* Sentral Service */}
          <div
            // className="relative w-full h-48 xl:h-[400px] sm:h-64 md:h-80 rounded-lg overflow-hidden flex items-center justify-center text-center px-4"
            className="relative w-full rounded-lg overflow-hidden flex items-center justify-center text-center px-4 aspect-[48/9] lg:aspect-[48/9]"
            style={{
              backgroundImage: `url(${"../../images/sentral-service/sentral-service.jpg"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay gelap semi transparan */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Konten teks di atas overlay */}
            <div className="relative z-10 text-white w-[52%]">
              <p className="text-base xl:text-2xl/[50px] lg:text-xl/10 md:text-lg/8 sm:text-base/6">
                <b>Sentral Service</b> adalah layanan service center resmi yang dikembangkan oleh <b>Sentral Komputer</b>, hadir untuk memberikan solusi terbaik bagi kerusakan laptop Anda—baik software maupun hardware.
              </p>
            </div>
          </div>
        </div>
        <section className="bg-gray-100 pt-10 pb-10">
          <h2 className="font-extrabold text-center text-2xl md:text-3xl lg:text-[32px]">
            Teknisi Tersertifikasi & Selalu Update Skill
          </h2>

          <div className="content-width mx-auto mt-10 grid grid-cols-3 gap-4 px-4">

            {/* Gambar utama */}
            <div className="col-span-3 md:col-span-2 row-span-2">
              <img
                src="/images/sentral-service/teknisi-utama.jpg"
                alt="Teknisi Utama"
                className="w-[235px] h-[235px] object-cover rounded-xl aspect-square md:aspect-[4/5]"
              />
            </div>

            {/* 2 gambar kecil kanan */}
            <img
              src="/images/sentral-service/teknisi-2.jpg"
              alt="Teknisi 1"
              className="w-[110px] aspect-square object-cover rounded-xl"
            />
            <img
              src="/images/sentral-service/teknisi-3.jpg"
              alt="Teknisi 2"
              className="w-[110px] aspect-square object-cover rounded-xl"
            />

            {/* Baris bawah 3 gambar */}
            <img
              src="/images/sentral-service/teknisi-4.jpg"
              alt="Teknisi 3"
              className="w-[110px] aspect-square object-cover rounded-xl"
            />
            <img
              src="/images/sentral-service/teknisi-5.jpg"
              alt="Teknisi 4"
              className="w-[110px] aspect-square object-cover rounded-xl"
            />
            <img
              src="/images/sentral-service/teknisi-6.jpg"
              alt="Teknisi 5"
              className="w-[110px] aspect-square object-cover rounded-xl"
            />

          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}
