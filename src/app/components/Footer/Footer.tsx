import LocationAddress from "./LocationAddress";

export default function Footer() {
  return (
    // TODO: Add absolute bottom
    <footer className="bg-gray-100 pt-8 mt-8 border-blue-900 bottom-0 w-full">
      <div className="flex flex-col md:flex-row content-width w-full mx-auto px-4">
        {/* Logo and Address */}
        <LocationAddress />

        {/* Links */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 md:justify-items-end">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h4 className="font-bold mb-2 text-sm">Tentang Kami</h4>
              <ul className="text-xs space-y-1 flex flex-col gap-2">
                <a href="#" className="hover:underline">
                  Lokasi
                </a>

                <a href="#" className="hover:underline">
                  Profil Perusahaan
                </a>

                <a href="#" className="hover:underline">
                  Sentral Service
                </a>
                <a href="#" className="hover:underline">
                  Marketplace Retail
                </a>
                <a href="#" className="hover:underline">
                  Karir
                </a>
                <a href="#" className="hover:underline">
                  Blog
                </a>
                <a href="#" className="hover:underline">
                  Promo
                </a>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h4 className="font-bold mb-2 text-sm">Transaksi</h4>
              <ul className="text-xs space-y-1 flex flex-col gap-2">
                <a href="#" className="hover:underline">
                  Konfirmasi Pembayaran
                </a>

                <a href="#" className="hover:underline">
                  Lacak Pesanan
                </a>
                <a href="#" className="hover:underline">
                  Riwayat Pesanan
                </a>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-bold mb-2 text-sm">Bantuan Pelanggan</h4>
              <ul className="text-xs space-y-1 flex flex-col gap-2">
                <a href="#" className="hover:underline">
                  FAQ
                </a>

                <a href="#" className="hover:underline">
                  Garansi Produk
                </a>

                <a href="#" className="hover:underline">
                  Syarat dan Ketentuan
                </a>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h4 className="font-bold mb-2 text-sm">Metode Pembayaran</h4>
              <ul className="text-xs space-y-1 flex flex-col gap-2">
                <a href="#" className="hover:underline">
                  Bank Mandiri
                </a>

                <a href="#" className="hover:underline">
                  Permata Bank
                </a>

                <a href="#" className="hover:underline">
                  Gopay
                </a>

                <a href="#" className="hover:underline">
                  Alfamart
                </a>

                <a href="#" className="hover:underline">
                  QRIS
                </a>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-bold mb-2 text-sm">Jasa Pengiriman</h4>
              <ul className="text-xs space-y-1 flex flex-col gap-2">
                <a href="#" className="hover:underline">
                  JNE
                </a>

                <a href="#" className="hover:underline">
                  Grab
                </a>

                <a href="#" className="hover:underline">
                  Paxel
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t bg-primary-800 mt-8 p-2 text-center text-xs text-white">
        © Copyright 2025 PT Sentral Tekno Sejahtera | All Rights Reserved
      </div>
    </footer>
  );
}
