"use client";

import { useEffect, useState } from "react";
import { Carousel } from "antd";
import Image from "next/image";
import { fetchData } from "@/utils/api";
import type { Banner as BannerType } from "@/models/banner";

const fallbackSlides: BannerType[] = [
  { id: 1, title: "", image: "/temp/banner.jpg" },
  { id: 2, title: "", image: "/temp/banner2.jpg" },
  { id: 3, title: "", image: "/temp/banner3.jpg" },
];

export default function Banner() {
  const [slides, setSlides] = useState<BannerType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetchData<BannerType[]>("/api/v1/banners", "GET");

        if (mounted && Array.isArray(res.data) && res.data.length > 0) {
          setSlides(res.data);
        }
      } catch (e) {
        // keep fallback slides on error
        console.warn("Failed to load banners, using fallback.", e);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    // return () => {
    //   mounted = false;
    // };
  }, []);

  return (
    <div className="content-width mx-auto relative py-4">
      <Carousel
        autoplay
        lazyLoad="progressive"
        dots={true}
        infinite={true}
        autoplaySpeed={5000}
        dotPosition="bottom"
        arrows={true}
        className="w-full h-[560px]">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="loader"></span>
          </div>
        )}

        {!loading &&
          slides.map((slide) => {
            console.log(slide.image);

            return (
              <div key={slide.id} className="w-full h-[560px] relative">
                <Image
                  src={slide.image}
                  alt={slide.title || "Banner"}
                  height={560}
                  width={1200}
                  style={{ width: "100%", height: "560px" }}
                  className="object-cover w-full h-[560px] rounded-xl"
                  priority={!loading}
                  // unoptimized
                />
              </div>
            );
          })}
      </Carousel>
    </div>
  );
}
