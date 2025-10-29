import Head from "next/head";
import Header from "./components/Header/Header";
import Banner from "./components/Banner";
import NewArrivals from "./products/NewArrivals";
// import Articles from "./components/Articles";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import CategoryHorizontalList from "./category/CategoryHorizontalList";
import SEOSection from "./components/SEOSection";
import PreferredBrandList from "./brands/PreferredBrandList";
import WhyChooseUsView from "./components/WhyChooseUs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 mx-auto">
      <Head>
        <title>Sentral Komputer</title>
        <meta name="description" content="Sentral Komputer - Tech Store" />
      </Head>
      <Header />
      <div className="shrink-0">
        <Banner />
      </div>
      <CategoryHorizontalList />
      <NewArrivals />
      <WhatsAppButton />
      {/* <Articles /> */}
      <PreferredBrandList />

      <WhyChooseUsView />

      <SEOSection />

      <Footer />
    </div>
  );
}
