"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Jennifer Cooper",
    title: "Startup Founder, TechFlow",
    quote:
      "SkillKwiz transformed our hiring process — reduced time-to-hire by 40% and improved candidate quality.",
    image: "/images/homepage/5.png",
  },
  {
    id: 2,
    name: "Michael Donovan",
    title: "HR Director, Global Systems",
    quote:
      "The assessments are accurate, the platform intuitive, and it gives us unmatched hiring confidence.",
    image: "/images/homepage/6.png",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    title: "Talent Acquisition, InnovateTech",
    quote:
      "The detailed reports help us make better hiring decisions — quick, data-driven, and reliable.",
    image: "/images/homepage/7.png",
  },
  {
    id: 4,
    name: "David Chen",
    title: "CTO, FutureTech Solutions",
    quote:
      "We save countless interview hours by filtering candidates using SkillKwiz’s technical assessments.",
    image: "/images/homepage/5.png",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const nextSlide = () =>
    setActiveIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="py-16 bg-white relative overflow-hidden pb-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold text-[#093fb4] mb-12">
          What Our Clients Say
        </h2>

        {/* Stage container */}
        <div className="relative flex justify-center items-center h-[420px]">
          {testimonials.map((t, i) => {
            // Determine position relative to active index
            const offset = (i - activeIndex + testimonials.length) % testimonials.length;

            let transform = "";
            let zIndex = 5;
            let opacity = 0.4;

            if (offset === 0) {
              transform = "translateX(-220px) rotate(-15deg) scale(0.9)";
            } else if (offset === 1) {
              transform = "translateX(0px) rotate(0deg) scale(1)";
              zIndex = 20;
              opacity = 1;
            } else if (offset === 2) {
              transform = "translateX(220px) rotate(15deg) scale(0.9)";
            } else {
              transform = "translateY(100px) scale(0.7)";
              opacity = 0;
            }

            return (
              <div
                key={t.id}
                className="absolute bg-[#00418d] text-white rounded-2xl shadow-xl p-6 w-[300px] transition-all duration-500 ease-in-out hover:translate-x-2 hover:-translate-y-2"
                style={{
                  transform,
                  zIndex,
                  opacity,
                }}
              >
                <div className="flex flex-col items-center mb-4">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={80}
                    height={80}
                    className="rounded-full border-2 border-[#f6c648] mb-3 object-cover"
                  />
                  <h3 className="font-semibold text-lg">{t.name}</h3>
                  <p className="text-sm text-gray-300">{t.title}</p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-4 h-4 text-[#f6c648] fill-[#f6c648]"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm italic leading-relaxed">"{t.quote}"</p>
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
          aria-label="Previous"
        >
          <ChevronLeft className="h-6 w-6 text-[#00418d]" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
          aria-label="Next"
        >
          <ChevronRight className="h-6 w-6 text-[#00418d]" />
        </button>
      </div>
    </section>
  );
}
