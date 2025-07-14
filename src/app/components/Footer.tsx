import Image from "next/image";
// import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-8 mt-8 border-blue-900">
      <div className="flex md:flex-row content-width w-full mx-auto px-4">
        {/* Logo and Address */}
        <div className="flex-1 flex-col min-w-[400px] mb-6 md:mb-0">
          <div className="flex items-center mb-2">
            <Image
              src="/logo.png"
              alt="Sentral Komputer Logo"
              width={40}
              height={40}
            />
            <span className="ml-2 text-xl font-bold">Sentral Komputer</span>
          </div>
          <p className="text-sm font-semibold">PT Sentral Tekno Sejahtera</p>
          <p className="text-xs mt-1">
            KANTOR PUSAT
            <br />
            Tanah Abang Blok M34
            <br />
            Jl. Mangga Besar No.4
            <br />
            Kebayoran Jakarta, 12401
          </p>
          <p className="text-xs mt-1">
            Contact:{" "}
            <a href="tel:+628897772400" className="underline">
              +62-889-777-2400
            </a>
          </p>
        </div>
        {/* Links */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 justify-items-end">
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
                  Berita
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
                  Panduan Belanja
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
              <h4 className="font-bold mb-2 text-sm">Transaksi</h4>
              <ul className="text-xs space-y-1 flex flex-col gap-2">
                <a href="#" className="hover:underline">
                  Konfirmasi Pembayaran
                </a>

                <a href="#" className="hover:underline">
                  Order Tracking
                </a>
              </ul>
            </div>
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
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h4 className="font-bold mb-2 text-sm">Social Media</h4>
              <ul className="text-xs space-y-1 flex flex-col gap-2 flex flex-col gap-2">
                <a
                  href="https://www.instagram.com/sentralkomputer_id"
                  className="hover:underline">
                  Instagram
                </a>

                <a href="#" className="hover:underline">
                  Facebook
                </a>

                <a
                  href="https://www.tiktok.com/@sentralkomputer_id"
                  className="hover:underline">
                  TikTok
                </a>

                <a
                  href="https://youtube.com/channel/UCj6VTjcNLLJiJo9YS7YgeSA"
                  className="hover:underline">
                  YouTube
                </a>
              </ul>
            </div>
            {/* Marketplace */}
            <div className="flex-1 flex flex-col gap-2">
              <h4 className="font-bold mb-2 text-sm">Marketplace</h4>
              <ul className="text-xs space-y-1 flex flex-col gap-2">
                <a
                  href="https://www.tokopedia.com/sentralkomputer"
                  className="hover:underline">
                  Tokopedia - Sentral Komputer
                </a>

                {/* <a href="#" className="hover:underline">
                  Tokopedia - Sentral Komputer Gaming Center
                </a> */}

                <a
                  href="https://www.blibli.com/merchant/sentral-komputer-store-flagship-store/PTS-19405"
                  className="hover:underline">
                  Blibli - Sentral Komputer
                </a>

                <a
                  href="https://shopee.co.id/sentralkomputerofficial"
                  className="hover:underline">
                  Shopee - Sentral Komputer Official Shop
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
