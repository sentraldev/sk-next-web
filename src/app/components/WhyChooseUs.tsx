import Image from "next/image";

type WhyChooseUs = {
  title: string;
  subtitle: string;
  description: string;
  iconPath: string;
  imagePath: string;
};

const data: WhyChooseUs[] = [
  {
    title: "Pengalaman",
    subtitle: "Sejak 1991",
    description:
      "Memiliki lebih dari 17 retail store yang tersebar di Indonesia",
    iconPath: "/icons/why_choose_us/experienced.png",
    imagePath: "/images/why_choose_us/experienced.png",
  },
  {
    title: "Tingkat Kepuasan",
    subtitle: "Pelanggan Terbaik",
    description:
      "Kami telah dipercayai oleh ribuan pelanggan di seluruh Indonesia",
    iconPath: "/icons/why_choose_us/satisfaction.png",
    imagePath: "/images/why_choose_us/satisfaction.png",
  },
  {
    title: "Garansi Resmi",
    subtitle: "100% Ori",
    description: "Seluruh barang bergaransi resmi dan legal",
    iconPath: "/icons/why_choose_us/guaranteed.png",
    imagePath: "/images/why_choose_us/guaranteed.png",
  },
  {
    title: "Service Center",
    subtitle: "Terverifikasi",
    description: "Seluruh teknisi kami sudah terlatih secara profesional",
    iconPath: "/icons/why_choose_us/service.png",
    imagePath: "/images/why_choose_us/service.png",
  },
  {
    title: "Sales & Teknisi",
    subtitle: "Profesional",
    description: "Seluruh Tim Sales kami sudah terlatih secara profesional",
    iconPath: "/icons/why_choose_us/professional.png",
    imagePath: "/images/why_choose_us/professional.png",
  },
];

const WhyChooseUsView = () => {
  return (
    <section className="content-width mx-auto py-6 w-full flex flex-col gap-4">
      <h2 className="text-xl md:text-2xl font-bold ">
        Kenapa Pilih Sentral Komputer
      </h2>
      {/* Responsive layout: carousel on small, grid on md, row on lg+ */}
      <div
        className="
          flex gap-3 overflow-x-auto snap-mandatory px-0 mx-0 pb-4
          sm:grid sm:grid-cols-2 sm:gap-3 sm:overflow-visible sm:snap-none 
          lg:grid lg:grid-cols-3 md:gap-4 md:overflow-visible md:snap-none md:px-0 md:mx-0
          xl:flex xl:flex-row xl:gap-4
          shadow-md rounded-xl bg-white
        ">
        {data.map((item, index) => (
          <div
            key={index}
            className="snap-start shrink-0 w-72 md:w-auto lg:flex-1 ">
            <WhyChooseUsItem item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsView;

const WhyChooseUsItem = ({ item }: { item: WhyChooseUs }) => {
  return (
    <div className="flex flex-col p-2 w-full ">
      <img
        src={item.imagePath}
        alt={item.title}
        className="w-full h-auto object-cover"
      />

      <div className="flex flex-row items-start space-x-4 py-4">
        <Image
          src={item.iconPath}
          alt={item.title}
          width={40}
          height={40}
          // className="w-12 md:w-14 lg:w-16 w-auto object-contain"
        />
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">{item.title}</h3>
          <h4 className="text-lg font-bold text-[#1444D5]">{item.subtitle}</h4>
          <p className="text-xs text-gray-700 pt-2">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export const WhyChooseUsSkeleton = () => {
  return (
    <div className="flex items-start space-x-4 py-4">
      <div className="h-12 w-12 bg-gray-200 animate-pulse" />
      <div>
        <h3 className="text-lg font-semibold bg-gray-200 animate-pulse h-6 w-1/2" />
        <h4 className="text-md font-medium text-gray-500 bg-gray-200 animate-pulse h-4 w-1/3" />
        <p className="text-sm text-gray-700 bg-gray-200 animate-pulse h-4 w-full" />
      </div>
    </div>
  );
};
