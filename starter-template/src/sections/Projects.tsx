import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Lim Geomatics",
    year: "Jan 2024 - Jul 2024",
    title: "Flutter Mobile App",
    results: [
      {
        title:
          "Developed a Flutter application in a team of 3-4, providing navigation and safety features for forestry workers, including geo-data visualization.",
      },
      {
        title:
          "Built a sample application enabling communication with embedded devices via Bluetooth.",
      },
      {
        title:
          "Designed and implemented a library for OAuth2 authentication to ArcGIS through a REST API.",
      },
      {
        title:
          "Created a library to query data from ArcGIS and display JSON geo-data in map layers. .",
      },
      {
        title:
          "Engineered a solution to integrate and display various mainstream map tile formats within the app.",
      },
      {
        title:
          "Designed a library for satellite communication with embedded devices.",
      },
      {
        title:
          "Led a team of 4 in the absence of our manager for about two weeks, including pr review and task management.",
      },
      {
        title:
          "Collaborated with the UI/UX designer and QA to enhance user experience.",
      },
    ],
  },
  {
    company: "Lim Geomatics",
    year: "Sep 2023 - Jan 2024",
    title: "Configuration Tool for Embedded Application",
    results: [
      {
        title:
          "Independently developed a Java-based configuration tool for Windows, enabling communication with embedded devices via the Kermit protocol over serial communication. ",
      },
      {
        title:
          "Added new functionalities and fixed bugs in the embedded application such as motion detection. ",
      },
      {
        title:
          "Collaborated with our UI/UX designer for a better GUI experience.",
      },
    ],
  },
  {
    company: "Lim Geomatics",
    year: "Oct 2023 - Dec 2023",
    title: "Real-time Location Sharing and Tracking",
    results: [
      {
        title:
          "Developed a real-time location-sharing feature for a cross-platform C# application utilizing satellite communication and ArcGIS.",
      },
      {
        title:
          "Developed mechanisms to upload and download location data based on satellite signal strength and update locations dynamically on the map.",
      },
      {
        title:
          "Collaborated with my supervisor to meet the tight deadline of two weeks without any previous experience with C# and later enhanced the feature by implementing a tracking display for a more user-friendly experience.",
      },
      {
        title:
          "Added a 'walking mode' feature to switch GPS data sources between the embedded device and the tablet.",
      },
    ],
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-10 lg:py-24">
      <div className="container">
        <SectionHeader
          title="Co-op Work Projects"
          eyebrow="Real-world Results"
          description="Projects that I have worked on during my 3 co-op terms at Lim Geomatics."
        />

        <div className="flex flex-col mt-10 md:mt-20 gap-10">
          {portfolioProjects.map((project) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb=0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 "
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
                  <ul className="flex flex-col gap-4 mt-4">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>

                  {/* {project.link && (
                    <a href={project.link}>
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        <span>View Live Site</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                  )} */}
                </div>
                {/* {project.image && (
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    />
                  </div>
                )} */}
              {/* </div> */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
