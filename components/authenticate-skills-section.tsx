"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SkillShowcase() {
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  const leftImages = [
    "/images/homepage/skills_1.png",
    "/images/homepage/skills_2.png",
  ];
  const rightImages = [
    "/images/homepage/skills_3.png",
    "/images/homepage/skills_4.png",
  ];

  // Left carousel auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setLeftIndex((prev) => (prev + 1) % leftImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Right carousel auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setRightIndex((prev) => (prev + 1) % rightImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 md:py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left animated image */}
        <div className="relative w-full md:w-1/3 flex justify-center items-center h-[400px] md:h-[500px] overflow-hidden rounded-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={leftImages[leftIndex]}
              initial={{ opacity: 0, x: -40, rotate: -4 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, x: 40, rotate: 4 }}
              transition={{ duration: 1 }}
              className="absolute w-[80%] h-[80%]"
            >
              <Image
                src={leftImages[leftIndex]}
                alt="Left showcase image"
                width={400}
                height={500}
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Center content */}
        <div className="w-full md:w-1/3 text-center px-2">
          <h2 className="md:text-3xl text-2xl font-bold text-[#093fb4] mb-4">
            Authenticate Skills,
            <br />
            Simplify Hiring
          </h2>
          <p className="text-gray-700 text-[17px] md:text-[21px] tracking-wide">
            SkillKwiz ensures professionals are evaluated accurately in their
            chosen fields. Our secure testing centers provide authenticated skill
            assessments, giving you instant access to verified reports—eliminating
            the need for lengthy technical interviews.
          </p>
        </div>

        {/* Right animated image */}
        <div className="relative w-full md:w-1/3 flex justify-center items-center h-[400px] md:h-[500px] overflow-hidden rounded-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={rightImages[rightIndex]}
              initial={{ opacity: 0, x: 40, rotate: 4 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, x: -40, rotate: -4 }}
              transition={{ duration: 1 }}
              className="absolute w-[80%] h-[80%]"
            >
              <Image
                src={rightImages[rightIndex]}
                alt="Right showcase image"
                width={400}
                height={500}
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
