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
    <div className="">
          <div className="relative w-full h-[400px] sm:h-[500px] md:h-[75vh] lg:h-[80vh] overflow-hidden  shadow-xl">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out flex flex-col justify-center items-center text-center ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
          }`}
        >
          <div className="absolute inset-0">
            <Image
              src={slide.backgroundImage || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover object-center brightness-75"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
          </div>

          {/* Animated Letters */}
          <div className="flex justify-center gap-2 md:gap-4 mb-4 relative z-10">
            {slide.letters.map((letter, i) => (
              <span
                key={i}
                className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-lg animate-pulse"
              >
                {letter}
              </span>
            ))}
          </div>

          {/* Slide Text */}
          <div className="px-6 md:px-12 lg:px-24 relative z-10">
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-yellow-300 mb-3 drop-shadow-md">
              {slide.title}
            </h3>
            <p className="text-sm sm:text-base md:text-xl text-gray-100 font-medium max-w-3xl mx-auto leading-relaxed">
              {slide.description}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md z-20 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md z-20 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-3 md:bottom-5 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-yellow-300 scale-125"
                : "bg-white/60 hover:bg-yellow-200"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
        </div>
    </div>
  
  );
}
