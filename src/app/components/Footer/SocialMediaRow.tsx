import Image from "next/image";

const iconSize = 24;

const SocialMediaRow = () => {
  return (
    <div className="flex flex-row gap-2">
      <a
        href="https://www.facebook.com/sentralkomputer"
        target="_blank"
        rel="noopener noreferrer">
        <Image
          src="/icons/footer/facebook-small.png"
          alt="Facebook"
          width={iconSize}
          height={iconSize}
        />
      </a>

      <a
        href="https://www.tiktok.com/@sentralkomputer"
        target="_blank"
        rel="noopener noreferrer">
        <Image
          src="/icons/footer/tiktok-small.png"
          alt="TikTok"
          width={iconSize}
          height={iconSize}
        />
      </a>
      <a
        href="https://www.youtube.com/@sentralkomputer"
        target="_blank"
        rel="noopener noreferrer">
        <Image
          src="/icons/footer/youtube-small.png"
          alt="YouTube"
          width={iconSize}
          height={iconSize}
        />
      </a>

      <a
        href="https://www.instagram.com/sentralkomputer/"
        target="_blank"
        rel="noopener noreferrer">
        <Image
          src="/icons/footer/instagram-small.png"
          alt="Instagram"
          width={iconSize}
          height={iconSize}
        />
      </a>
      <a
        href="https://www.youtube.com/@sentralkomputer"
        target="_blank"
        rel="noopener noreferrer">
        <Image
          src="/icons/footer/whatsapp-small.png"
          alt="WhatsApp"
          width={iconSize}
          height={iconSize}
        />
      </a>
    </div>
  );
};

export default SocialMediaRow;
