import Header from "../components/Header";
import Footer from "../components/Footer/Footer";

export default function ShoppingCartPage() {
  return (
    <>
      <Header />
      <div className="content-width mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        <p>Halaman keranjang belanja akan segera hadir.</p>
      </div>
      <Footer />
    </>
  );
}
