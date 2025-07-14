"use client";

import Image from "next/image";
import { useState } from "react";

const slides = [
  {
    image: "/temp/banner.jpg",
    title: "CALLING ALL STUDENTS!",
    subtitle: "Claim Your 10% OFF Discount! Laptops, Desktops & More",
    note: "Student Discount - Register Now!",
  },
  {
    image: "/temp/banner.jpg",
    title: "BACK TO SCHOOL DEALS!",
    subtitle: "Save big on tech essentials for students.",
    note: "Limited time offer!",
  },
  {
    image: "/temp/banner.jpg",
    title: "EXCLUSIVE STUDENT PRICING!",
    subtitle: "Desktops, laptops, and accessories at 10% OFF.",
    note: "Sign up to unlock your discount.",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);
  const slide = slides[current];

  return (
    <div className="content-width mx-auto relative py-4">
      <section
        className="relative w-full overflow-hidden flex justify-center items-center"
        style={{ minHeight: 320 }}>
        <Image
          src={slide.image}
          alt="Banner"
          width={1200}
          height={560}
          className="object-cover w-full h-[560px] rounded-xl"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-12 py-8 text-left pointer-events-none">
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 drop-shadow-lg mb-2">
            {slide.title}
          </h1>
          <p className="text-lg md:text-2xl font-semibold text-white drop-shadow mb-1">
            {slide.subtitle}
          </p>
          <span className="bg-blue-900 bg-opacity-90 text-yellow-300 px-4 py-1 rounded-full text-xs font-bold mt-2 inline-block">
            {slide.note}
          </span>
        </div>
        {/* Left Arrow */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-white text-slate-800 rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10 border border-blue-200"
          onClick={prevSlide}
          aria-label="Previous Slide"
          style={{ pointerEvents: "auto" }}>
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              d="M15 19l-7-7 7-7"
              stroke="#1e293b"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {/* Right Arrow */}
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-white text-slate-800 rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10 border border-blue-200"
          onClick={nextSlide}
          aria-label="Next Slide"
          style={{ pointerEvents: "auto" }}>
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              d="M9 5l7 7-7 7"
              stroke="#1e293b"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`inline-block w-3 h-3 rounded-full border-2 border-white ${
                idx === current ? "bg-secondary-400" : "bg-white"
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
