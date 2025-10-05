import Header from "../components/Header";
import Footer from "../components/Footer";
import LocationStoreUI from "./components/LocationStoreUI";

export default function OutLocationPage() {
  return (
    <>
      <Header />
      <div className="content-width mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Lokasi Kami</h1>
        <LocationStoreUI />
      </div>
      <Footer />
    </>
  );
}
