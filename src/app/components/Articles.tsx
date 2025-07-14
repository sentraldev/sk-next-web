import Image from "next/image";

export default function Articles() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold">
        Artikel Sentral Komputer - Lihat Semua
      </h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="border p-2">
          <Image src="/article1.jpg" alt="Article 1" width={200} height={200} />
          <p>AMD Ryzen 5000 Series Mobile...</p>
        </div>
        <div className="border p-2">
          <Image src="/article2.jpg" alt="Article 2" width={200} height={200} />
          <p>AMD Ryzen 5000 Series Mobile...</p>
        </div>
        <div className="border p-2">
          <Image src="/article3.jpg" alt="Article 3" width={200} height={200} />
          <p>AMD Ryzen 5000 Series Mobile...</p>
        </div>
        <div className="border p-2">
          <Image src="/article4.jpg" alt="Article 4" width={200} height={200} />
          <p>AMD Ryzen 5000 Series Mobile...</p>
        </div>
      </div>
    </section>
  );
}
