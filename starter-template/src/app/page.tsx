import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import Image from "next/image";
import jolyneImage from "@/assets/images/jolyne.png";
import asirpaImage from "@/assets/images/asirpa.png";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Asirpa Character Background - Left Side */}
      <div className="fixed left-0 top-0 bottom-0 opacity-15 md:opacity-10 z-[-1] pointer-events-none">
        <Image
          src={asirpaImage}
          alt="Asirpa from Golden Kamuy"
          style={{
            objectFit: "contain",
            height: "100vh",
            width: "auto",
            maxWidth: "350px",
          }}
          width={350}
          height={1000}
          priority
        />
      </div>

      {/* Jolyne Character Background - Right Side */}
      <div className="fixed right-0 top-0 bottom-0 opacity-15 md:opacity-10 z-[-1] pointer-events-none">
        <Image
          src={jolyneImage}
          alt="Jolyne from JoJo's Bizarre Adventure"
          style={{
            objectFit: "contain",
            height: "100vh",
            width: "auto",
            maxWidth: "400px",
          }}
          width={400}
          height={1000}
          priority
        />
      </div>

      <Header />
      <HeroSection />
      <TestimonialsSection />
      <ProjectsSection />
      <AboutSection />
    </div>
  );
}
