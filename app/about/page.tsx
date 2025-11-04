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
      {/* 🟦 Hero Section */}
      <section className="relative w-full text-white overflow-hidden pt-24">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/homepage/banner_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            ELEVATE YOUR BUSINESS
          </h1>
          <p className="max-w-3xl mx-auto text-sm md:text-base mb-8 leading-relaxed text-gray-100">
            Skill Assessments Done With Utmost Knowledge, Integrity, Trust, and
            Security. Our Objective Is To Provide Accurate Insights Into The
            Skill Levels Of Your Current And Prospective Workforce.
          </p>
          <button className="bg-[#f73e5d] text-white px-8 py-3 rounded-md font-medium hover:bg-[#ff5878] transition-all">
            Sign Up
          </button>
        </div>

        {/* Globe Image (faded background) */}
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-25 hidden md:block">
          <Image
            src="/images/homepage/home_globe.gif"
            alt="SkillKwiz assessment platform"
            width={600}
            height={400}
            className="object-contain"
          />
        </div>
      </section>

      {/* 🔵 Vision / Mission / Purpose Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              img: "/images/aboutpage/eye.gif",
              title: "OUR VISION",
              desc: "We envision a future where skill assessments empower companies to grow confidently by hiring and developing talent based on data, not guesswork.",
            },
            {
              img: "/images/aboutpage/mission.gif",
              title: "OUR MISSION",
              desc: "To make hiring and upskilling more intelligent through trusted, data-driven skill evaluation across industries.",
            },
            {
              img: "/images/aboutpage/purpose.gif",
              title: "OUR PURPOSE",
              desc: "To redefine talent validation with integrity, innovation, and technology — making assessments more meaningful and measurable.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 hover:bg-[#093fb4] hover:shadow-2xl transition-all duration-500 rounded-lg md:p-4 p-2  flex flex-col items-center text-center cursor-pointer"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={200}
                height={200}
                className="md:w-auto md:h-auto md:max-h-32 object-contain mb-4 w-[100px] h-[100px]"
              />
              <h3 className="text-[#093fb4] font-bold text-lg mb-2 group-hover:text-white transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-[#272727] opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity duration-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 👥 Who We Are Section */}
      <section className="w-full bg-[#f9f9ff] py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#093fb4] mb-6">
              Who We Are
            </h2>
            <p className="text-[#272727] mb-4 leading-relaxed">
              We are your partners in skill assessment — committed to helping
              organizations measure and enhance the competencies of their people
              with precision and confidence.
            </p>
            <p className="text-sm text-[#272727] mb-4 italic">
              "SkillKwiz has a single purpose — to create stakeholder value by
              bridging the gap between skill potential and opportunity."
            </p>
            <p className="text-sm text-[#272727]">
              <span className="font-semibold text-[#f73e5d]">
                — Venugopal B A
              </span>
              <br />
              CEO, SkillKwiz
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center gap-4">
            {[
              "/images/aboutpage/about_who_we_are-0.png",
              "/images/aboutpage/about_who_we_are-1.png",
              "/images/aboutpage/about_who_we_are-2.png",
            ].map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="Team collaboration"
                width={150}
                height={200}
                className="rounded-lg object-cover shadow-md hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 👨‍💼 CEO Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          {/* CEO Image */}
          <div className="flex justify-center md:w-1/3 w-full">
            <div className="relative md:w-[320px] md:h-[320px] w-[250px] h-[250px]">
              <Image
                src="/images/aboutpage/Venugopal.png"
                alt="Venugopal B A - CEO"
                fill
                className="rounded-full object-cover border-[6px] border-[#f73e5d]"
              />
            </div>
          </div>

          {/* CEO Text */}
          <div className="md:w-2/3 w-full text-center md:text-left">
            <h3 className="text-2xl font-bold text-[#093fb4] mb-4">
              Leadership That Inspires
            </h3>
            <p className="text-[#272727] leading-relaxed mb-4">
              <span className="font-semibold text-[#f73e5d]">Venugopal B A</span>, a
              veteran leader in the IT industry with over 24 years of experience in
              senior leadership roles, leads SkillKwiz with a vision to transform
              the way talent is assessed and developed.
            </p>
            <p className="text-[#272727] leading-relaxed">
              With a rich background in technology and strategy, he envisions
              SkillKwiz as an AI-first company driving innovation and precision in
              skill evaluation globally.
            </p>
          </div>
        </div>
      </section>

      {/* 🎬 Video Section */}
      <section className="w-full bg-[#f9f9ff] py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-bold text-[#093fb4] mb-8">
            Learn More About SkillKwiz
          </h2>

          <div className="relative w-full md:w-1/2 flex justify-center items-center">
            {/* Video */}
            <video
              ref={videoRef}
              className="w-full rounded-lg shadow-lg"
              controls
              preload="none"
              poster="/images/aboutpage/about_video.png"
            >
              <source 
                src="/images/aboutpage/about_video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Play Button */}
            {!isPlaying && (
              <button
                onClick={handlePlay}
                className="absolute flex items-center justify-center bg-purple-950 transition-all rounded-full p-6 shadow-lg"
              >
                <Play className="w-8 h-8 text-white bg-purple-950" />
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
