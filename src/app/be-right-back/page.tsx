import Head from "next/head";
import Image from "next/image";
// import Banner from "./components/Banner";
// import NewArrivals from "./components/NewArrivals";
// import Articles from "./components/Articles";
// import WhatsAppButton from "./components/WhatsAppButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function BeRightBack() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Head>
        <title>Sentral Komputer</title>
        <meta name="description" content="Sentral Komputer - Tech Store" />
      </Head>

      <Header />

      <main className="flex flex-1 flex-col items-center justify-center text-center gap-4">
        <Image
          src="/images/brb.png"
          alt="Be Right Back"
          width={300}
          height={300}
        />
        <p className="text-2xl">Kami Akan Segera Kembali!</p>
        <div>
          <p>
            Kami sedang menyiapkan pengalaman belanja online yang lebih
            menyenangkan
          </p>
          <p>
            dengan tampilan baru, produk pilihan, dan layanan yang lebih cepat!
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
