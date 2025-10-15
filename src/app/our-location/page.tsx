import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import LocationStoreUI from "./components/LocationStoreUI";

export default function OurLocationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <div className="content-width mx-auto w-full py-8">
        <h1 className="text-2xl font-bold mb-4">Lokasi Kami</h1>
        <LocationStoreUI />
      </div>
      <Footer />
    </div>
  );
}
