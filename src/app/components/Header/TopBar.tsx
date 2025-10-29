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

const TopBar = () => {
  return (
    <div className="bg-primary-900 text-xs text-white flex justify-between items-center py-2">
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
          <div className="flex items-center gap-2">
            <Link href="#" className="font-extrabold">
              Marketplace
            </Link>
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
