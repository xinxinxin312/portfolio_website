"use client";

import memojiImage from "@/assets/images/memoji.jpg";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import LinkedInIcon from "@/assets/images/linkedin.png";

export const HeroSection = () => {
  const handleExploreMyWork = () => {
    const projectsSection = document.getElementById("projects-section");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home-section" className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
     

      <div className="container">
        <div className="flex flex-col items-center">
          {/* <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
          /> */}
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">
              Available for full-time opportunities
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto text-center sticky top-0 bg-gray-900 py-4 z-10">
          <h1 className="font-serif text-3xl md:text-5xl tracking-wide">
            Hey there! I&apos;m{" "}
            <span className="text-emerald-300">Xin Jiang</span>
          </h1>
          <p className="mt-4 text-white/60 md:text-lg">
            This website is still under construction...
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button
            onClick={handleExploreMyWork}
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl"
          >
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <a
            href="https://www.linkedin.com/in/xin-jiang-13a439252"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl"
          >
            <span className="font-semibold">Let&apos;s connect</span>
            <Image
              src={LinkedInIcon}
              width={24}
              height={24}
              alt="LinkedIn Icon"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
