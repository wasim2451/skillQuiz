"use client";
import Image from "next/image";
import { useState } from "react";

export default function BlogPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const indicatorClasses = (index: number) =>
    `h-1.5 rounded-full transition-all duration-300 ${
      hoveredIndex === index ? "w-20 bg-[#093fb4]" : "w-10 bg-[#c3dfff]"
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
    <section className="w-full bg-white py-16 mt-[100px]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#093fb4]">
            Mastering Knowledge & Growth
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-8 text-gray-600">
            In a world of constant change, continuous learning is the key to
            success. Explore our curated insights designed to help you upskill,
            grow, and stay ahead.
          </p>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mb-10">
            {blogPosts.map((_, index) => (
              <div key={index} className={indicatorClasses(index)} />
            ))}
          </div>

          {/* Featured Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="flex flex-col bg-[#f9faff] rounded-lg hover:shadow-md transition-all duration-300 overflow-hidden group border border-[hsl(221,90%,95%)]"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.img}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2 text-[#011937] hover:text-blue-500">
                    <a href="" download="dummy/dummy.pdf">{post.title}</a>
                  </h3>
                  <p className="text-sm text-[#000102] opacity-80">
                    {post.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Secondary Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="flex flex-col bg-[#f9f9ff] rounded-lg hover:shadow-lg transition-all duration-300 overflow-hidden border border-[hsl(221,90%,95%)]">
            <Image
              src="/images/blogpage/4.png"
              alt="Tech skills"
              width={580}
              height={240}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#0d0f12] mb-2 hover:text-red-400">
                <a href="" download="dummy/dummy.pdf">Top 10 Tech Skills That Can Land You a High-Paying Job</a>
              </h3>
              <p className="text-sm text-gray-600">
                Why Tech Skills Are Essential in 2025
              </p>
            </div>
          </div>

          <div className="flex flex-col bg-[#f9f9ff] rounded-lg hover:shadow-lg transition-all duration-300 overflow-hidden border border-[hsl(221,90%,95%)]">
            <Image
              src="/images/blogpage/5.png"
              alt="Learning motivation"
              width={580}
              height={240}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#001d3f] mb-2 hover:text-red-400">
                <a href="" download="dummy/dummy.pdf" >How to Stay Motivated While Learning New Skills</a>
              </h3>
              <p className="text-sm text-gray-600">
                Why Motivation Is Key to Skill Development
              </p>
            </div>
          </div>
        </div>

        {/* Knowledge Articles */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-6 text-[#093fb4]">
            Knowledge Hub
          </h2>
          <p className="max-w-4xl mb-12 text-gray-600">
            Knowledge is the foundation of growth. Embrace new ideas, sharpen
            your skills, and stay inspired with insights that empower you to
            achieve more in your personal and professional journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                img: "/images/blogpage/6.png",
                title: "The Future of Online Learning",
              },
              {
                img: "/images/blogpage/7.png",
                title: "5 Essential Skills to Boost Your Career in 2025",
              },
              {
                img: "/images/blogpage/8.png",
                title: "How Gamification Enhances Learning & Engagement",
              },
              {
                img: "/images/blogpage/4.png",
                title: "The Power of Microlearning",
              },
              {
                img: "/images/blogpage/2.png",
                title: "Revolutionizing the Way We Learn",
              },
              {
                img: "/images/blogpage/1.png",
                title: "Upskilling in the Modern World",
              },
            ].map((article, i) => (
              <div
                key={i}
                className="flex gap-4 items-center p-2 rounded-lg hover:bg-[hsl(58,95%,90%)] transition-all cursor-pointer"
              >
                <div className="w-24 h-24 flex-shrink-0">
                  <Image
                    src={article.img}
                    alt={article.title}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div>
                  <p className="text-xs text-[#f73e5d] font-semibold uppercase mb-1">
                    Trends to Watch in 2025
                  </p>
                  <h3 className="text-lg font-bold text-[#00418d] leading-snug hover:text-blue-600">
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
