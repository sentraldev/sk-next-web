"use client";

import { Carousel } from "antd";
import Image from "next/image";

const slides = [
  {
    image: "/temp/banner.jpg",
    title: "CALLING ALL STUDENTS!",
    subtitle: "Claim Your 10% OFF Discount! Laptops, Desktops & More",
    note: "Student Discount - Register Now!",
  },
  {
    image: "/temp/banner2.jpg",
    title: "BACK TO SCHOOL DEALS!",
    subtitle: "Save big on tech essentials for students.",
    note: "Limited time offer!",
  },
  {
    image: "/temp/banner3.jpg",
    title: "EXCLUSIVE STUDENT PRICING!",
    subtitle: "Desktops, laptops, and accessories at 10% OFF.",
    note: "Sign up to unlock your discount.",
  },
];

export default function Banner() {
  return (
    <div className="content-width mx-auto relative py-4">
      {/* <section
        className="relative w-full overflow-hidden flex justify-center items-center"
        style={{ minHeight: 320 }}> */}
      <Carousel
        autoplay
        lazyLoad="progressive"
        dots={true}
        infinite={true}
        autoplaySpeed={5000}
        dotPosition="bottom"
        arrows={true}
        className="w-full h-[560px]">
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-[560px] relative">
            <Image
              src={slide.image}
              alt="Banner"
              width={1200}
              height={560}
              className="object-cover w-full h-[560px] rounded-xl"
              priority
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
