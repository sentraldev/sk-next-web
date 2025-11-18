import React from "react";

export default function LokasiKami() {
    return (
        <section className="content-width mx-auto text-center space-y-6 py-8 sm:pt-9">
            <h2 className="text-[40px] xl:text- lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-extrabold">
                Penyebaran Lokasi Kami
            </h2>
            <div
                className="relative w-full xs:h-40 sm:h-96 md:h-[500px] xl:h-[800px] flex items-center justify-center text-center px-4"
                style={{
                backgroundImage: `url(${"images/peta-indonesia.png"})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                }}>
                {/* Overlay transparan (optional, bisa dihilangkan jika tidak perlu) */}
                {/* <div className="absolute inset-0 bg-white bg-opacity-80"></div> */}

                {/* Teks di atas peta */}
                <div className="relative z-10 text-[#1444D5] font-regular text-xl xs:text-base sm:text-2xl md:text-3xl lg:text-5xl max-w-xl xl:max-w-2xl mx-auto">
                Terdapat di{" "}
                <span className="text-[#1444D5] text-7xl lg:text-[64px] md:text-4xl sm:text-2xl xs:text-xl font-extrabold">
                    16+
                </span>{" "}
                Lokasi di Berbagai Kota di Indonesia
                </div>
            </div>
        </section>
    );
}