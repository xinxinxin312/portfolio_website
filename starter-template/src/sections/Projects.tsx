import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";

const portfolioProjects = [
  {
    company: "Lim Geomatics",
    year: "Jan 2024 - Jul 2024",
    title: "OpTracker Mobile App",
    keywords: [
      "Cross-platform (Android, Ios, Windows)",
      "Mobile Development",
      "Bluetooth",
      "Embedded Device",
      "Geospatial Data",
      "Satellite Wifi",
    ],
    description:
      "We started from scratch, and almost finish it at the end of my Co-op.",
    results: [
      {
        title: "The OpTracker App was previously developed in C# Xamarin",
      },
      {
        title:
          "It is a tool designed for the forestry people, combining navigation and geospatial data displaying on a single screen",
      },
      {
        title:
          "It's paired with embedded devices to provide accurate GPS and satellite Wifi",
      },
      {
        title:
          "We rebuilt it in a team of 4-5 and finished it in about a year, started with 0 knowledge of Flutter",
      },
      {
        title: "My manager made me lead the team twice when he was on trips",
      },
      {
        title:
          "There were only twice that I was free of tasks for a few hours, throught the year. Busy, busy, busy",
      },
      {
        title:
          "Usually, I had one huge task or several small ones for a bi-week sprint, and most of the time I completed on time",
      },
    ],
  },
  {
    company: "Lim Geomatics",
    year: "Sep 2023 - Jan 2024",
    title: "Configuration Tool for Embedded Application",
    keywords: ["Java", "Embedded Device", "Serial Communication"],
    description: "",
    results: [
      {
        title:
          "This was my first task, and later my manager told me they were expecting me to do this for my whole Co-op term. But I finished the most of it within a month",
      },
      {
        title:
          "This was my first time developing an industry level software. I started from scratch and there was no similar code to learn from. I did all the coding by myself, with some help from my manager, and UI/UX design from our designer",
      },
      {
        title:
          "We hold a tutorial teaching our colleagues how to use it, it was fun",
      },
    ],
  },
  {
    company: "Lim Geomatics",
    year: "Oct 2023 - Dec 2023",
    title: "Real-time Location Sharing Feature",
    keywords: [
      "Cross-platform C#",
      "Mobile Development",
      "Android Studio",
      "Embedded Device",
      "Satellite Wifi",
    ],
    description: "",
    results: [
      {
        title:
          "Again, started with 0 knowledge with mobile development, or satellite, or C#",
      },
      {
        title:
          "We completed the task in 2 weeks, including debugged together with another company's CTO",
      },
      {
        title:
          "We drove to the Britannia beach several times for testing",
      },
    ],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects-section" className="pb-10 lg:py-24">
      <div className="container">
        <SectionHeader
          title="Co-op Work Projects"
          eyebrow="Real-world Results"
          description="Projects that I have worked on during my 3 Co-op terms at Lim Geomatics in Ottawa, ON"
        />

        <div className="flex flex-col mt-10 md:mt-10 gap-10">
          {portfolioProjects.map((project) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb=0 md:pt-8 md:px-8 lg:pt-16 lg:px-20 "
            >
              <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase traking-widest text-sm text-transparent bg-clip-text gap-2">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                  {project.title}
                </h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-lg"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-3 py-1 text-sm text-gray-700 rounded-lg"></span>
                  </div>
                </div>

                <ul className="flex flex-col gap-4 mt-4">
                  <span className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase traking-widest text-sm text-transparent bg-clip-text gap-2">
                    Fun Facts
                  </span>
                  {project.results.map((result) => (
                    <li
                      key={result.title}
                      className="flex gap-2 text-sm md:text-base text-white/50 items-center"
                    >
                      {/* <CheckCircleIcon className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" /> */}
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
