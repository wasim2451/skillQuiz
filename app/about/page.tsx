"use client";
import { useRef, useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      {/* 🌌 Hero Section */}
      <section className="relative w-full text-white overflow-hidden pt-24">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/homepage/banner_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-blue-900/40 to-black/70 z-0" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-yellow-300 via-pink-400 to-orange-400 bg-clip-text text-transparent">
            Elevate Your Business
          </h1>
          <p className="max-w-3xl mx-auto text-sm md:text-lg mb-8 leading-relaxed text-gray-100">
            Empowering organizations with intelligent skill assessments built on
            trust, innovation, and precision. Discover insights that shape the
            workforce of tomorrow.
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-all shadow-lg">
            Get Started
          </button>
        </div>

        <div className="absolute right-0 top-0 h-full w-1/2 opacity-20 hidden md:block">
          <Image
            src="/images/homepage/home_globe.gif"
            alt="SkillKwiz Globe"
            width={600}
            height={400}
            className="object-contain"
          />
        </div>
      </section>

      {/* 💡 Vision / Mission / Purpose */}
      <section className="w-full bg-gradient-to-b from-white via-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              img: "/images/aboutpage/eye.gif",
              title: "Our Vision",
              desc: "Empowering companies to grow through data-backed skill intelligence, enabling smart talent decisions globally.",
            },
            {
              img: "/images/aboutpage/mission.gif",
              title: "Our Mission",
              desc: "Transform hiring and upskilling through AI-powered, data-driven assessments across every industry.",
            },
            {
              img: "/images/aboutpage/purpose.gif",
              title: "Our Purpose",
              desc: "To create an ecosystem where integrity meets innovation — redefining how skills are measured and valued.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white/80 border border-blue-100 hover:bg-gradient-to-r from-blue-700 to-indigo-800 text-center transition-all duration-500 rounded-xl shadow-lg hover:shadow-2xl p-6 cursor-pointer"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={160}
                height={160}
                className="mx-auto mb-4 w-[120px] h-[120px] object-contain"
              />
              <h3 className="text-xl font-bold text-[#093fb4] mb-3 group-hover:text-yellow-300">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 group-hover:text-white opacity-90 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 👥 Who We Are */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-[#093fb4] mb-6">
              Who We Are
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We are innovators in skill assessment, helping organizations unlock
              potential through credible, AI-driven insights.
            </p>
            <blockquote className="text-sm text-gray-600 italic border-l-4 border-pink-400 pl-4">
              “At SkillKwiz, we build trust and transformation by connecting skills
              with opportunity.”
            </blockquote>
            <p className="mt-4 text-sm text-gray-700">
              <span className="font-semibold text-pink-600">— Venugopal B A</span>
              <br /> CEO, SkillKwiz
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center gap-4">
            {[0, 1, 2].map((i) => (
              <Image
                key={i}
                src={`/images/aboutpage/about_who_we_are-${i}.png`}
                alt="Our Team"
                width={180}
                height={220}
                className="rounded-xl object-cover shadow-md hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 👨‍💼 Leadership Section */}
      <section className="w-full bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="flex justify-center md:w-1/3">
            <div className="relative w-[250px] h-[250px] md:w-[320px] md:h-[320px]">
              <Image
                src="/images/aboutpage/Venugopal.png"
                alt="Venugopal B A - CEO"
                fill
                className="rounded-full object-cover border-[6px] border-pink-500 shadow-xl"
              />
            </div>
          </div>

          <div className="md:w-2/3 text-center md:text-left">
            <h3 className="text-3xl font-bold text-[#093fb4] mb-4">
              Leadership That Inspires
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              <span className="font-semibold text-pink-600">Venugopal B A</span>, a
              visionary with over 24 years in IT leadership, guides SkillKwiz
              toward global excellence in AI-driven talent evaluation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              His passion for innovation fuels a mission to redefine skill
              validation with trust, accuracy, and intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* 🎥 Video Section */}
      <section className="w-full bg-gradient-to-b from-indigo-50 via-blue-100 to-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#093fb4] mb-10">
            Learn More About SkillKwiz
          </h2>

          <div className="relative w-full md:w-3/4 mx-auto flex justify-center">
            <video
              ref={videoRef}
              className="w-full rounded-2xl shadow-xl border-2 border-blue-200"
              controls
              preload="none"
              poster="/images/aboutpage/about_video.png"
            >
              <source src="/images/aboutpage/about_video.mp4" type="video/mp4" />
            </video>

            {!isPlaying && (
              <button
                onClick={handlePlay}
                className="absolute flex items-center justify-center bg-gradient-to-r from-pink-500 to-yellow-400 p-6 rounded-full shadow-xl hover:scale-110 transition-transform top-[35%]"
              >
                <Play className="w-8 h-8 text-white" />
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
