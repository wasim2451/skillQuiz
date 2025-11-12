"use client";
import Image from "next/image";
import { useState } from "react";

export default function BlogPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const indicatorClasses = (index: number) =>
    `h-2 rounded-full transition-all duration-300 ${
      hoveredIndex === index ? "w-20 bg-blue-700" : "w-10 bg-blue-200"
    }`;

  const blogPosts = [
    {
      img: "/images/blogpage/1.png",
      title: "The Importance of Upskilling in Today's Job Market",
      subtitle: "Why Upskilling Matters in 2025",
    },
    {
      img: "/images/blogpage/2.png",
      title: "How Gamified Learning Enhances Skill Retention",
      subtitle: "The Psychology Behind Gamification",
    },
    {
      img: "/images/blogpage/3.png",
      title: "Soft Skills vs. Hard Skills: What Matters More?",
      subtitle: "The Difference Between Soft and Hard Skills",
    },
  ];

  return (
    <section className="relative w-full py-20 mt-[100px] bg-gradient-to-b from-blue-50 via-white to-blue-100 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/bg-pattern.svg')] bg-cover bg-center opacity-10 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-4">
            Mastering Knowledge & Growth
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            In a world of constant change, continuous learning is the key to success.
            Explore curated insights that help you upskill, grow, and stay ahead.
          </p>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mb-10">
          {blogPosts.map((_, index) => (
            <div key={index} className={indicatorClasses(index)} />
          ))}
        </div>

        {/* Featured Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group bg-white/70 backdrop-blur-lg rounded-2xl shadow-sm hover:shadow-lg border border-blue-100 transition-all duration-500 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={post.img}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#0b1a3c] group-hover:text-blue-600 transition">
                  <a href="" download="dummy/dummy.pdf">{post.title}</a>
                </h3>
                <p className="text-sm text-gray-600">{post.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {[{
            img: "/images/blogpage/4.png",
            title: "Top 10 Tech Skills That Can Land You a High-Paying Job",
            subtitle: "Why Tech Skills Are Essential in 2025",
            color: "from-yellow-400 to-orange-500"
          }, {
            img: "/images/blogpage/5.png",
            title: "How to Stay Motivated While Learning New Skills",
            subtitle: "Why Motivation Is Key to Skill Development",
            color: "from-pink-400 to-red-500"
          }].map((post, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500"
            >
              <Image
                src={post.img}
                alt={post.title}
                width={580}
                height={240}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition">
                  <a href="" download="dummy/dummy.pdf">{post.title}</a>
                </h3>
                <p className="text-sm text-gray-500">{post.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Knowledge Articles */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
            Knowledge Hub
          </h2>
          <p className="max-w-4xl text-gray-600 mb-12">
            Knowledge is the foundation of growth. Sharpen your skills, stay inspired,
            and explore ideas that empower your personal and professional journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { img: "/images/blogpage/6.png", title: "The Future of Online Learning" },
              { img: "/images/blogpage/7.png", title: "5 Essential Skills to Boost Your Career in 2025" },
              { img: "/images/blogpage/8.png", title: "How Gamification Enhances Learning & Engagement" },
              { img: "/images/blogpage/4.png", title: "The Power of Microlearning" },
              { img: "/images/blogpage/2.png", title: "Revolutionizing the Way We Learn" },
              { img: "/images/blogpage/1.png", title: "Upskilling in the Modern World" },
            ].map((article, i) => (
              <div
                key={i}
                className="flex gap-4 items-center p-3 rounded-xl bg-white/70 border border-gray-100 hover:shadow-md hover:bg-blue-50 transition-all duration-300 cursor-pointer"
              >
                <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={article.img}
                    alt={article.title}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs text-blue-500 font-semibold uppercase mb-1">
                    Trends to Watch in 2025
                  </p>
                  <h3 className="text-lg font-bold text-gray-800 leading-snug hover:text-indigo-600 transition">
                    <a href="" download="dummy/dummy.pdf">{article.title}</a>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
