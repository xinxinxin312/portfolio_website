"use client";
import Image from "next/image";
import LinkedInIcon from "@/assets/images/linkedin.png";

export const Header = () => {
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-center items-center fixed top-0 left-0 right-0 z-50 bg-pink-900 py-4">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#home"
          className="nav-item"
          onClick={() => handleScrollToSection("home-section")}
        >
          Home
        </a>
        <a
          href="#projects"
          className="nav-item"
          onClick={() => handleScrollToSection("projects-section")}
        >
          Projects
        </a>
        <a
          href="#about"
          className="nav-item"
          onClick={() => handleScrollToSection("about-section")}
        >
          About Me
        </a>
        <a
          href="https://www.linkedin.com/in/xin-jiang-13a439252"
          className="nav-item bg-white"
        >
          <Image
            src={LinkedInIcon}
            width={24}
            height={24}
            alt="LinkedIn Icon"
          />
        </a>
      </nav>
    
    </div>
  );
};
