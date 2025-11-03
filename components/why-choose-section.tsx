import Link from "next/link";
import { motion } from "framer-motion";
export default function WhyChooseSection() {
    

    const cards = [
        {
            title: "Skill Library",
            text: "Access our extensive library of skill assessments covering technical, professional, and soft skills for comprehensive candidate evaluation.",
            img: "/images/homepage/books.gif",
            alt: "Skill Library",
            pos: "md:left-[calc(50%-380px)] md:top-4 md:-rotate-[25deg]",
        },
        {
            title: "Secure Testing",
            text: "Our testing is done in secure, content-aware environments. Candidates are authenticated through multiple identification layers including biometric verification.",
            img: "/images/homepage/guard.gif",
            alt: "Secure Testing",
            pos: "md:left-[calc(50%-200px)] md:rotate-[0deg]",
        },
        {
            title: "Flexible Pricing",
            text: "Our pricing model is designed to scale with your needs. Pay only for what you use with our credit-based system. Larger organizations can benefit from our Enterprise plan.",
            img: "/images/homepage/dollar.gif",
            alt: "Flexible Pricing",
            pos: "md:right-[calc(50%-350px)] md:top-4 md:rotate-[25deg]",
        },
    ];
    return (
        <section className="py-20 text-center relative overflow-hidden">
            {/* 🎥 Video Background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
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

                {/* Optional: subtle overlay for readability */}
                <div className="absolute inset-0 bg-black/60 z-0"></div>
            </div>

            {/* Content wrapper (on top of video) */}
            <div className="relative z-10 text-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        Why Choose{" "}
                        <span className="text-[#f7d03e]">
                            Skill<span className="text-[#ffffff]">Kwiz</span>
                        </span>
                        ?
                    </h2>
                    <p className="text-gray-200 max-w-3xl mx-auto mb-16 text-[15px] md:text-base">
                        Discover our unique value propositions designed to enhance your
                        recruitment strategy. Experience the difference SkillKwiz can make in
                        your organization.
                    </p>

                    {/* Stacked Cards */}
                    <div className="relative flex flex-col md:flex-row justify-center items-center gap-8 mb-10 h-auto md:h-[420px]">
                        {cards.map((card, i) => (
                            <div key={i} className="bg-slate-100 p-5 rounded-xl w-[300px] md:w-[400px] shadow-lg z-10 md:h-[350px] h-auto flex flex-col items-center">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 bg-[#c3dfff] rounded-full flex items-center justify-center overflow-hidden">
                                        <img
                                            src={card.img}
                                            alt={card.alt}
                                            className="w-20 h-20 object-cover"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-[#00418d] text-xl font-bold mb-3">{card.title}</h3>
                                <p className="text-gray-700 text-[15px]">{card.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* CTA Section (below video background) */}
                <div className="text-center mt-16 md:mt-20 px-6 relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#ffff]">
                        Join the Talent <span className="text-[#f7d03e]">Revolution</span>
                    </h3>
                    <p className="max-w-2xl mx-auto mb-8 text-gray-300 text-[15px] md:text-base">
                        Take the first step towards transforming your hiring process. Empower
                        your organization with SkillKwiz today.
                    </p>
                    <Link
                        href="/services"
                        className="inline-flex items-center justify-center bg-[#f7d03e] text-black px-8 py-3 rounded-md font-medium hover:bg-[#fbe46b] transition-all"
                    >
                        Get Started
                    </Link>
                </div>
            </div>


        </section>
    );
}
