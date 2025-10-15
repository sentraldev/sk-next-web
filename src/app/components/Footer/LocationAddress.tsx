import Image from "next/image";
// import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SocialMediaRow from "./SocialMediaRow";

const LocationAddress = () => {
  return (
    <div className="flex flex-col min-w-[400px] mb-6 md:mb-0 gap-4 align-items-start md:items-start md:pr-8">
      <div className="flex flex-col items-center mb-2 align-items-start md:items-start gap-4">
        <Image
          src="/logo.png"
          alt="Sentral Komputer Logo"
          width={128}
          height={128}
        />
        <p className="text-sm pb-4">PT Sentral Tekno Sejahtera</p>
      </div>
      <div>
        <div className="flex flex-col text-xs mt-1 gap-1">
          <p className="text-sm font-semibold">Sentral Komputer Head Office</p>
          <p>Ruko Taman Pulo Indah</p>
          <p>Jl. Manggis M No. 34</p>
          <p>Jakarta Timur 14940</p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm flex items-center gap-2">
          <FontAwesomeIcon icon={faEnvelope} className="w-3.5 h-3.5" />
          <span>
            Email:{" "}
            <a
              href="mailto:partnership@sentral-komputer.com"
              className="underline">
              partnership@sentralkomputer.com
            </a>
          </span>
        </p>

        <p className="text-sm flex items-center gap-2">
          <FontAwesomeIcon icon={faWhatsapp} className="w-3.5 h-3.5" />
          <span>
            Contact:{" "}
            <a
              href="https://wa.me/628897772400"
              target="_blank"
              rel="noopener noreferrer"
              className="underline">
              +62-889-777-2400
            </a>
          </span>
        </p>
      </div>

      <SocialMediaRow />
    </div>
  );
};

export default LocationAddress;
