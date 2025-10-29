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
        <section className="bg-gray-100 py-16">
          <h2 className="text-center font-extrabold text-[24px] md:text-[30px] lg:text-[32px] mb-6 leading-tight">
          Teknisi Tersertifikasi & Selalu Update Skill
        </h2>
  <div className="content-width mx-auto">
    {/* GRID UTAMA */}
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">
      
     {/* CONTAINER GRID: semua baris sama tinggi (auto-rows:1fr) */}
      <div
        className="grid grid-cols-3 gap-4"
        style={{ gridAutoRows: "0.5fr" }} // alternatif: "auto-rows-[1fr]" jika Tailwind mendukung
      >
        {/* Gambar besar: menempati 2 kolom x 2 baris pada md+ */}
        <div className="aspect-square col-span-3 md:col-span-2 md:row-span-2 rounded-xl overflow-hidden">
          <img
            src="/images/sentral-service/teknisi-utama.jpg"
            alt="Teknisi utama"
            className="w-full h-full object-cover block"
          />
        </div>

        {/* Kotak-kotak kecil: setiap kotak sama ukuran karena row height = 1fr */}
        <div className="aspect-square rounded-xl overflow-hidden">
          <img src="/images/sentral-service/teknisi-2.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="aspect-square rounded-xl overflow-hidden">
          <img src="/images/sentral-service/teknisi-3.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        {/* baris bawah: 3 kotak kecil */}
        <div className="aspect-square rounded-xl overflow-hidden">
          <img src="/images/sentral-service/teknisi-4.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-xl overflow-hidden">
          <img src="/images/sentral-service/teknisi-5.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="rounded-xl overflow-hidden">
          <img src="/images/sentral-service/teknisi-6.jpg" alt="" className="w-full h-full object-cover" />
        </div>
      </div>


      {/* === KANAN: TEKS === */}
      <div className="flex flex-col col-span-3 justify-between">
        

        <p className="font-medium text-xl md:text-xl mb-4 leading-relaxed">
          Kami bangga memiliki tim teknisi{" "}
          <span className="font-extrabold text-blue-600">bersertifikat resmi</span>{" "}
          dengan pengalaman luas di bidang perbaikan laptop.
        </p>

        <p className="font-medium text-xl md:text-xl mb-4 leading-relaxed">
          Secara rutin, teknisi kami mengikuti{" "}
          <span className="font-extrabold text-blue-600">
            pelatihan update teknologi terbaru
          </span>
          . Dengan pembaruan ini, mereka siap menghadapi berbagai jenis kerusakan,
          mulai dari masalah ringan hingga perbaikan tingkat lanjut, menggunakan{" "}
          <span className="font-extrabold text-blue-600">
            metode terbaik yang sesuai standar industri
          </span>
          .
        </p>

        <p className="font-medium text-xl md:text-xl leading-relaxed">
          Selain keterampilan teknis, kami juga membekali tim dengan{" "}
          <span className="font-extrabold text-blue-600">
            pengetahuan keselamatan kerja
          </span>{" "}
          serta{" "}
          <span className="font-extrabold text-blue-600">
            etika pelayanan pelanggan
          </span>
          , sehingga setiap proses servis dilakukan secara{" "}
          <span className="font-extrabold text-blue-600">
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
