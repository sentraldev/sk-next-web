import Head from "next/head";
import Header from "./components/Header";
// import Banner from "./components/Banner";
// import NewArrivals from "./components/NewArrivals";
// import Articles from "./components/Articles";
import Footer from "./components/Footer";
// import WhatsAppButton from "./components/WhatsAppButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Head>
        <title>Sentral Komputer</title>
        <meta name="description" content="Sentral Komputer - Tech Store" />
      </Head>

      <Header />

      <main className="flex flex-1 flex-col items-center justify-center text-center gap-4">
        <FontAwesomeIcon icon={faCode} size="3x" />
        <p className="text-2xl">Website sedang dalam pengembangan</p>
        <p>Nantikan update selanjutnya dari Sentral Komputer!</p>
      </main>

      <Footer />
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 mx-auto">
      <Head>
        <title>Sentral Komputer</title>
        <meta name="description" content="Sentral Komputer - Tech Store" />
      </Head>
      <Header />
      {/* <Banner />
      <NewArrivals />
      <WhatsAppButton /> */}
      {/* <Articles /> */}

      <div className="flex flex-col h-full text-center align-center justify-center bg-red-500">
        <p>Website sedang dalam pengembangan</p>
        <p>Nantikan update selanjutnya dari Sentral Komputer!</p>
      </div>
      <Footer />
    </div>
  );
}
