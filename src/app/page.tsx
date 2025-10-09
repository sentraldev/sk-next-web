import Head from "next/head";
import Header from "./components/Header";
import Banner from "./components/Banner";
import NewArrivals from "./components/NewArrivals";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 mx-auto">
      <Head>
        <title>Sentral Komputer</title>
        <meta name="description" content="Sentral Komputer - Tech Store" />
      </Head>
      <Header />
      <Banner />
      <NewArrivals />
      <WhatsAppButton />
      {/* <Articles /> */}

      <Footer />
    </div>
  );
}
