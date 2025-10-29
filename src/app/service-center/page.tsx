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
        <section className="bg-white py-16">
  <div className="content-width mx-auto px-6 lg:px-8">
    {/* GRID UTAMA */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 items-start">
      
      {/* === KIRI: GRID FOTO === */}
      <div className="grid grid-cols-3 gap-4 max-w-lg">
        {/* Foto besar */}
        <div className="col-span-3 lg:col-span-2 lg:row-span-2">
          <img
            src="/images/sentral-service/teknisi-utama.jpg"
            alt="Teknisi utama"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>

        {/* Foto kecil kanan atas */}
        <img
          src="/images/sentral-service/teknisi-2.jpg"
          alt="Teknisi 2"
          className="rounded-xl object-cover aspect-square w-full h-full"
        />
        <img
          src="/images/sentral-service/teknisi-3.jpg"
          alt="Teknisi 3"
          className="rounded-xl object-cover aspect-square w-full h-full"
        />

        {/* Baris bawah */}
        <img
          src="/images/sentral-service/teknisi-4.jpg"
          alt="Teknisi 4"
          className="rounded-xl object-cover aspect-square w-full h-full"
        />
        <img
          src="/images/sentral-service/teknisi-5.jpg"
          alt="Teknisi 5"
          className="rounded-xl object-cover aspect-square w-full h-full"
        />
        <img
          src="/images/sentral-service/teknisi-6.jpg"
          alt="Teknisi 6"
          className="rounded-xl object-cover aspect-square w-full h-full"
        />
      </div>

      {/* === KANAN: TEKS === */}
      <div className="flex flex-col justify-start text-zinc-800 max-w-xl">
        <h2 className="font-extrabold text-[24px] md:text-[30px] lg:text-[32px] mb-6 leading-tight">
          Teknisi Tersertifikasi & Selalu Update Skill
        </h2>

        <p className="text-base md:text-lg mb-4 leading-relaxed">
          Kami bangga memiliki tim teknisi{" "}
          <span className="font-semibold text-blue-600">bersertifikat resmi</span>{" "}
          dengan pengalaman luas di bidang perbaikan laptop.
        </p>

        <p className="text-base md:text-lg mb-4 leading-relaxed">
          Secara rutin, teknisi kami mengikuti{" "}
          <span className="font-semibold text-blue-600">
            pelatihan update teknologi terbaru
          </span>
          . Dengan pembaruan ini, mereka siap menghadapi berbagai jenis kerusakan,
          mulai dari masalah ringan hingga perbaikan tingkat lanjut, menggunakan{" "}
          <span className="font-semibold text-blue-600">
            metode terbaik yang sesuai standar industri
          </span>
          .
        </p>

        <p className="text-base md:text-lg leading-relaxed">
          Selain keterampilan teknis, kami juga membekali tim dengan{" "}
          <span className="font-semibold text-blue-600">
            pengetahuan keselamatan kerja
          </span>{" "}
          serta{" "}
          <span className="font-semibold text-blue-600">
            etika pelayanan pelanggan
          </span>
          , sehingga setiap proses servis dilakukan secara{" "}
          <span className="font-semibold text-blue-600">
            profesional, aman, dan transparan
          </span>
          .
        </p>
      </div>
    </div>
  </div>
</section>



      </div>
      <Footer />
    </>
  );
}
