"use client";

import { useEffect, useState } from "react";
import { Carousel } from "antd";
import Image from "next/image";
import { fetchData } from "@/utils/api";
import type { Banner as BannerType } from "@/models/banner";

export default function Banner() {
  const [slides, setSlides] = useState<BannerType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const mounted = true;
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
        className="md:w-full">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="loader"></span>
          </div>
        )}

        {!loading &&
          slides.map((slide) => (
            <div key={slide.id} className="relative w-full">
              <div
                className="relative w-full"
                style={{ aspectRatio: "1200 / 560" }}>
                <Image
                  src={slide.image}
                  alt={slide.title || "Banner"}
                  fill
                  className="object-cover rounded-xl"
                  priority={!loading}
                />
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  );
}
