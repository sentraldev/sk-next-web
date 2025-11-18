import { useState } from "react";
import type { MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTiktok,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const iconSize = "lg";
const marketplaces = [
  {
    name: "Tokopedia",
    href: "https://www.tokopedia.com/sentralkomputer",
    logoSrc: "/images/marketplaces/tokopedia.png",
    shops: [
      {
        name: "Sentral Komputer",
        href: "https://www.tokopedia.com/sentralkomputer",
      },
      {
        name: "Sentral Komputer - HP Authorized",
        href: "https://www.tokopedia.com/sentralkomputer-",
      },
      {
        name: "AMD Authorized Jakarta Timur",
        href: "https://www.tokopedia.com/amd-authorized",
      },
      {
        name: "Lenovo Authorized Bekasi",
        href: "https://www.tokopedia.com/lenovoauthorizedbekasi",
      },
    ],
  },
  {
    name: "Shopee",
    href: "https://shopee.co.id/sentralkomputerofficial?entryPoint=ShopBySearch&searchKeyword=sentral%20komputer",
    logoSrc: "/images/marketplaces/shopee.png",
    shops: [
      {
        name: "Sentral Komputer Official Shop",
        href: "https://shopee.co.id/sentralkomputerofficial?entryPoint=ShopBySearch&searchKeyword=sentral%20komputer",
      },
      {
        name: "Acer Authorized Store Bekasi",
        href: "https://shopee.co.id/acer.bekasi?entryPoint=ShopBySearch&searchKeyword=acer%20authorized%20store%20bekasi",
      },
    ],
  },
  {
    name: "Blibli",
    href: "https://www.blibli.com/merchant/sentral-komputer-store-flagship-store/PTS-19405",
    logoSrc: "/images/marketplaces/blibli.png",
    shops: [
      {
        name: "Sentral Komputer Official Shop",
        href: "https://www.blibli.com/merchant/sentral-komputer-store-flagship-store/PTS-19405",
      },
      {
        name: "Lenovo Authorized Bekasi Official Store",
        href: "https://www.blibli.com/merchant/lenovo-authorized-bekasi/SEL-70089?pickupPointCode=PP-3324179&fbbActivated=false",
      },
    ],
  },
  {
    name: "Tiktok",
    href: "https://www.tiktok.com/@sentralkomputer_id",
    logoSrc: "/images/marketplaces/tiktok.png",
    shops: [
      {
        name: "Sentral Komputer Pusat",
        href: "https://vt.tiktok.com/ZSH3CXRd7XWdo-gCNJA/",
      },
    ],
  },
];

const TopBar = () => {
  const [isMarketplaceOpen, setIsMarketplaceOpen] = useState(false);

  const handleOpen = () => setIsMarketplaceOpen(true);
  const handleClose = () => setIsMarketplaceOpen(false);
  const handleToggleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setIsMarketplaceOpen((prev) => !prev);
  };

  return (
    <div className="bg-primary-900 text-xs text-white flex justify-between items-center">
      <div className="w-full content-width flex flex-row mx-auto justify-between items-center gap-4">
        {/* Left Section: Social Icons */}
        <div className="flex items-center gap-2 md:gap-4">
          <Link
            href="https://www.facebook.com/sentralkomputerofficial/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook">
            <FontAwesomeIcon
              icon={faFacebookF}
              size={iconSize}
              className="w-4 h-4 hover:text-blue-400 transition-colors"
            />
          </Link>
          <Link
            href="https://www.instagram.com/sentralkomputer_id"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram">
            <FontAwesomeIcon
              icon={faInstagram}
              size={iconSize}
              className="w-4 h-4 hover:text-pink-400 transition-colors"
            />
          </Link>
          <Link
            href="https://youtube.com/channel/UCj6VTjcNLLJiJo9YS7YgeSA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube">
            <FontAwesomeIcon
              icon={faYoutube}
              size={iconSize}
              className="w-4 h-4 hover:text-red-500 transition-colors"
            />
          </Link>
          <Link
            href="https://www.tiktok.com/@sentralkomputer_id"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok">
            <FontAwesomeIcon
              icon={faTiktok}
              size={iconSize}
              className="w-4 h-4 hover:text-gray-300 transition-colors"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/company/pt-sentral-tekno-selaras/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size={iconSize}
              className="w-4 h-4 hover:text-blue-300 transition-colors"
            />
          </Link>
        </div>

        {/* Center Text */}
        <span className="text-center text-xs font-semibold text-white line-clamp-1">
          Pusat IT, Laptop, dan Service Terbaik Online & Offline di Indonesia
        </span>

        {/* Right Section */}
        <div className="flex flex-row gap-4 md:gap-8">
          <div
            className="relative flex items-center"
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}>
            <Link
              href="#"
              className="font-extrabold py-2"
              onClick={handleToggleClick}
              onFocus={handleOpen}>
              Marketplace
            </Link>
            {isMarketplaceOpen && (
              <div
                className="fixed inset-0 z-50 flex w-screen h-screen flex-col bg-white text-primary-900 lg:bottom-auto lg:left-0 lg:right-0 lg:top-8 lg:h-[50vh] lg:w-screen pt-8"
                role="dialog"
                aria-modal="true">
                <button
                  type="button"
                  onClick={handleClose}
                  className="ml-auto mr-4 mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-900 text-white lg:hidden"
                  aria-label="Tutup daftar marketplace">
                  ✕
                </button>
                <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-4 overflow-y-auto px-6 py-4 md:py-0">
                  <h2 className="text-lg font-bold md:text-xl">
                    Marketplace Kami
                  </h2>
                  <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {marketplaces.map((marketplace) => (
                      <li
                        key={marketplace.name}
                        className="rounded-md bg-white shadow-md hover:shadow-md transition-shadow">
                        <Link
                          href={marketplace.href}
                          className="flex flex-col items-center gap-3 rounded-t-md px-4 py-4 transition-colors hover:bg-primary-50"
                          onClick={handleClose}>
                          <div className="flex h-32 w-32 items-center justify-center rounded-md bg-white">
                            <Image
                              src={marketplace.logoSrc}
                              alt={`${marketplace.name} Logo`}
                              width={128}
                              height={128}
                              className="h-32 w-32 object-contain"
                            />
                          </div>
                        </Link>
                        {marketplace.shops?.length ? (
                          <ul className="flex flex-col gap-2 px-4 py-3">
                            {marketplace.shops.map((shop) => (
                              <li key={shop.name}>
                                <Link
                                  href={shop.href}
                                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-primary-800 transition-colors hover:bg-primary-50"
                                  onClick={handleClose}>
                                  <span>{shop.name}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-row items-center gap-2">
            <FontAwesomeIcon
              icon={faEnvelope}
              size={iconSize}
              className="w-4 h-4 hover:text-blue-300 transition-colors"
            />
            <Link href="#" className="hidden lg:block lg:font-extrabold">
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
