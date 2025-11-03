"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import AuthenticateSkillsSection from "@/components/authenticate-skills-section";
import WhyChooseSection from "@/components/why-choose-section";
import LoginSection from "@/components/login-section";
import TestimonialsSection from "@/components/testimonials-section";
import LetterCarousel from "@/components/letter-carousel";

export default function HomePage() {
  const [scrollStage, setScrollStage] = useState(0);
  const [isCallCenterVisible, setIsCallCenterVisible] = useState(false);
  const globeRef = useRef<HTMLDivElement>(null);
  const callCenterRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 100) setScrollStage(0);
      else if (scrollY < 400) setScrollStage(1);
      else setScrollStage(2);
    };

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.2,
      rootMargin: "-100px",
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.target === callCenterRef.current) {
          setIsCallCenterVisible(entry.isIntersecting);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    if (callCenterRef.current) observer.observe(callCenterRef.current);

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        {/* Hero / Video */}

        {/* Call Center Image overlapping - keep predictable positioning */}
        <div className="relative top-0 " style={{ zIndex: 3 }}>
          <div className="">
            <LetterCarousel />
          </div>
        </div>

        {/* SkillKwiz Tag & Carousel - placed below the overlapping image */}
        
      </div>

      {/* Rest of the content */}
      <div className="bg-white relative" style={{ zIndex: 3 }}>
        <AuthenticateSkillsSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <LoginSection />
      </div>
    </div>
  );
}
