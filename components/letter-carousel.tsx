"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface CarouselSlide {
  letters: string[];
  title: string;
  description: string;
  backgroundImage: string;
}

export default function LetterCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides: CarouselSlide[] = [
    {
      letters: ["S", "K", "I", "L", "L"],
      title: "Skill Assessment",
      description: "Evaluate your knowledge with our comprehensive skill tests",
      backgroundImage: "/images/homepage/Carousel/Drivers License.jpg",
    },
    {
      letters: ["Q", "U", "I", "Z"],
      title: "Quiz Excellence",
      description: "Interactive quizzes designed by industry experts",
      backgroundImage: "/images/homepage/Carousel/Pick - Laptop.jpg",
    },
    {
      letters: ["L", "E", "A", "R", "N"],
      title: "Learning Journey",
      description: "Continuous improvement through personalized feedback",
      backgroundImage: "/images/homepage/Carousel/Secure Center.jpg",
    },
    {
      letters: ["H", "I", "R", "E"],
      title: "Hiring Simplified",
      description: "Connect verified skills with the right opportunities",
      backgroundImage: "/images/homepage/Carousel/Skill Library.jpg",
    },
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  return (
    <div className="relative w-full md:h-[80vh] h-[400px] overflow-hidden bg-white">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out ${
            index === currentSlide
              ? "opacity-100 translate-x-0"
              : index < currentSlide
              ? "opacity-0 -translate-x-full"
              : "opacity-0 translate-x-full"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0 blur-[0.5px] brightness-85">
            <Image
              src={slide.backgroundImage || "/placeholder.svg"}
              alt={`${slide.title} background`}
              fill
              className="object-cover object-top"
              priority={index === 0}
            />
          </div>

          {/* Title at bottom of image */}
          <div className="absolute bottom-5 md:bottom-16 left-0 right-0 flex flex-col justify-end items-center text-center z-10 px-6">
            <h3 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold text-white tracking-wide">
              {slide.title}
            </h3>
            <p className="text-sm md:text-xl lg:text-[25px] xl:text-[30px] 2xl:text-[35px] text-gray-100 mt-2 tracking-wider font-bold">
              {slide.description}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-3 w-3 md:h-6 md:w-6 text-[#00418d]" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-3 w-3 md:h-6 md:w-6 text-[#00418d]" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-2 md:bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`md:w-2.5 md:h-2.5 w-1 h-1 rounded-full transition-all ${
              index === currentSlide
                ? "bg-[#ffff] w-8"
                : "bg-[#FFE100]"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
