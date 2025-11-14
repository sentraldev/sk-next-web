import React, { useState } from "react";

const portfolioData = [
  {
    id: "pameran",
    title: "Pameran",
    mainImage: "../../temp/portofolio/event/porto-1.jpg",
    thumbnails: [
      "../../temp/portofolio/event/porto-12.jpg",
      "../../temp/portofolio/event/porto-13.jpg",
      "../../temp/portofolio/event/porto-14.jpg",
    ],
  },
  {
    id: "edukasi",
    title: "Edukasi Kampus",
    mainImage: "../../temp/portofolio/event/porto-2.jpg",
    thumbnails: [
      "../../temp/portofolio/event/porto-21.jpg",
      "../../temp/portofolio/event/porto-22.jpg",
      "../../temp/portofolio/event/porto-23.jpg",
    ],
  },
  {
    id: "dealer",
    title: "Dealer Gathering & Training",
    mainImage: "../../temp/portofolio/event/porto-3.jpg",
    thumbnails: [
      "../../temp/portofolio/event/porto-31.jpg",
      "../../temp/portofolio/event/porto-32.jpg",
      "../../temp/portofolio/event/porto-33.jpg",
    ],
  },
];


export default function PortfolioEvent() {
    const [activeTabPortfolio, setActiveTabPortfolio] = useState(portfolioData[0].id);

    const currentTabPortfolio = portfolioData.find(tab => tab.id === activeTabPortfolio);
    if (!currentTabPortfolio) {
      return <div className="text-center py-12">Tab tidak ditemukan.</div>;
    }

    return (
         <section className="content-width mx-auto py-8">
              <p className="text-xl text-center font-medium lg:text-lg md:text-base sm:text-sm xs:text-xs">
                Portofolio Klien
              </p>
              <h2 className="text-center font-extrabold text-[40px] lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl mb-8 text-zinc-900">
                Portofolio Event
              </h2>
              <div className="grid grid-cols-3 justify-between lg:gap-20 xl:gap-32 md:gap-10">
                {portfolioData.map(({ title, mainImage, thumbnails }, i) => (
                  <div
                    key={i}
                    className="w-full hidden lg:w-[325px] xl:w-[400px] bg-white rounded-xl shadow p-6 lg:flex flex-col items-center">
                    <img
                      src={mainImage}
                      alt={title}
                      className="w-full aspect-square object-cover rounded-lg mb-3"
                    />
                    <div className="grid grid-cols-3 gap-3 w-full mb-3">
                      {thumbnails.map((t, j) => (
                        <img
                          key={j}
                          src={t}
                          alt=""
                          className="w-full aspect-square object-cover rounded-md shadow-sm"
                        />
                      ))}
                    </div>
                    <h3 className="font-extrabold text-xl lg:text-lg md:text-base sm:text-2xl xs:text-xs">
                      {title}
                </h3>
                </div>

            ))}
            </div>
            <div className="lg:hidden">
            {/* Tab Navigation */}
            <nav className="mb-8 flex space-x-6 text-sm font-medium justify-center text-gray-500 border-b border-gray-200">
                {portfolioData.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTabPortfolio(tab.id)}
                    className={`pb-3 transition-colors md:text-base xs:text-xs ${
                    activeTabPortfolio === tab.id
                        ? 'text-gray-900 border-b-2 border-indigo-600'
                        : 'hover:text-gray-900'
                    }`}
                >
                    {tab.title}
                </button>
                ))}
            </nav>
                <div
                className="w-full lg:w-[325px] xl:w-[400px] bg-white rounded-xl shadow p-6 lg:flex flex-col items-center">
                <img
                    src={currentTabPortfolio?.mainImage}
                    alt={currentTabPortfolio?.title}
                    className="w-full aspect-square object-cover rounded-lg mb-3"
                />
                <div className="grid grid-cols-3 gap-3 w-full mb-3">
                    {currentTabPortfolio?.thumbnails.map((t, j) => (
                    <img
                        key={j}
                        src={t}
                        alt=""
                        className="w-full aspect-square object-cover rounded-md shadow-sm"
                    />
                    ))}
                </div>
                </div>
            </div>
        </section>
    );
}