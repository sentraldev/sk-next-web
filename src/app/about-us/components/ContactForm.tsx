import React from "react";

export default function ContactForm() {
  return (
    <section id="contact-form" className="mx-auto content-width py-6">
      <div className="bg-white rounded-md shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-10">
        <h2 className="text-center text-4xl lg:text-[40px] xs:text-xl font-extrabold text-zinc-900 mb-10">
          Bergabung dengan Kami
        </h2>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* === KIRI === */}
          <div className="flex flex-col gap-4 h-full">
            <input
              type="text"
              name="name"
              placeholder="Nama"
              className="h-12 w-full rounded-lg border border-gray-300 px-4 text-gray-700 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="h-12 w-full rounded-lg border border-gray-300 px-4 text-gray-700 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300 transition"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Nomor Telepon"
              className="h-12 w-full rounded-lg border border-gray-300 px-4 text-gray-700 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300 transition"
            />
            <div className="relative">
              <select
                defaultValue=""
                className="h-12 w-full appearance-none rounded-lg border border-gray-300 bg-white px-4 pr-10 text-gray-700 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300 transition">
                <option value="" disabled>
                  — Pilih —
                </option>
                <option>Kerjasama</option>
                <option>Pengadaan</option>
                <option>Konsultasi</option>
                <option>Lainnya</option>
              </select>

              {/* Icon arrow */}
              <svg
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-600"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.17l3.71-2.94a.75.75 0 1 1 .92 1.18l-4.2 3.33a.75.75 0 0 1-.94 0l-4.2-3.33a.75.75 0 0 1-.06-1.1z" />
              </svg>
            </div>
          </div>

          {/* === KANAN === */}
          <div className="flex flex-col justify-between h-full">
            {/* Textarea sejajar total kiri */}
            <textarea
              name="message"
              placeholder="Deskripsi Keperluan (maksimal 500 kata)"
              className="flex-grow rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300 transition resize-none h-full min-h-[240px]"
            />

            {/* Tombol tetap di bawah */}
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="rounded-lg bg-blue-700 px-8 py-2 w-[150px] text-white font-semibold shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition">
                Kirim
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
