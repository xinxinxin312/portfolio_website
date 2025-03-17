import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { TechIcon } from "@/components/TechIcon";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/square-react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { CardHeader } from "@/components/CardHeader";

const tools = [
  {
    title: "Problem Solving",
    iconType: GithubIcon,
  },
  {
    title: "Time Management",
    iconType: GithubIcon,
  },
  {
    title: "Python",
    iconType: GithubIcon,
  },
  {
    title: "Java",
    iconType: GithubIcon,
  },
  {
    title: "C++",
    iconType: GithubIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const interests = [
  {
    title: "Algorithm",
    emoji: "📜",
  },
  {
    title: "Data Structure",
    emoji: "⛰️",
  },
  {
    title: "AI",
    emoji: "🧠",
  },
  {
    title: "Embedded Systems",
    emoji: "📟",
  },
  {
    title: "System Architecture",
    emoji: "🏗️",
  },
  {
    title: "Robotics",
    emoji: "🤖",
  },
];

const hobbies = [
  {
    title: "Board Games",
    emoji: "♟️",
  },
  {
    title: "Suduko",
    emoji: "🔢",
  },
  {
    title: "Detective Stories",
    emoji: "🕵️‍♂️",
  },
  {
    title: "Chinese Food",
    emoji: "🍜",
  },
  {
    title: "Badminton",
    emoji: "🏸",
  },
  {
    title: "Table Tennis",
    emoji: "🏓",
  },
  {
    title: "Swimming",
    emoji: "🏊",
  },
  {
    title: "Anime",
    emoji: "👾",
  },
  {
    title: "Ukelele",
    emoji: "🎸",
  },
  {
    title: "Crafting",
    emoji: "🧶",
  },
];

const expectations = [
  {
    title: "Good Pay",
    emoji: "💰",
  },
  {
    title: "Cafeteria",
    emoji: "🍛",
  },
  {
    title: "Flexibility",
    emoji: "🕰️",
  },
  {
    title: "Learning Support",
    emoji: "📚",
  },
  {
    title: "Always New Challenges",
    emoji: "🎯",
  },
  {
    title: "Carryover Vacations",
    emoji: "🏖️",
  },
  {
    title: "Good Management",
    emoji: "🤝",
  },
];

const softSkills = [
  {
    title: "Problem Solving",
    description: "It's just fun! I need some new challenges to feel alive.",
  },
  {
    title: "Time and Task Management",
    description:
      "I always have a few tasks each week, and I always finish them on time.",
  },
  {
    title: "Team Collaboration",
    description: "I love Overcooked!",
  },
  {
    title: "Team Leadership",
    description: "I dedicate to make success as easy as possible for my team.",
  },
  {
    title: "Project Management",
    description:
      "Probably not the role of a junior developer, but I'm good at breaking down a project and assigning tasks.",
  },
];

const languagesRank = [
  {
    title: "Python",
    emoji: "",
  },
  {
    title: "Dart",
    emoji: "",
  },
  {
    title: "Java",
    emoji: "",
  },
  {
    title: "C++",
    emoji: "",
  },
  {
    title: "C#",
    emoji: "",
  },
  {
    title: "C",
    emoji: "",
  },
];

export const AboutSection = () => {
  return (
    <section id="about-section" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="About Me"
          eyebrow="Who I Am"
          description="I'm a perfectionist who pays attention to the smallest details; a team player who is always ready to help others; a fast learner who is always looking to improve."
        />
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-auto">
            <CardHeader title="My Hometown" description="" />
            <div className="w-full mx-auto mt-8">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/YcuIyhJHv14?si=dGLUt7hfXV4qNHlP"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </Card>

          <Card className="h-auto">
            <CardHeader title="Fun Robot Project" description="" />

            <div className="w-full mx-auto mt-4">
              <span className="block mb-4">
                <p>
                  The robot will pick up all the green subjects in the left up
                  corner and drop them on the goals in the right bottom corner.
                </p>
                <p>
                  The requirement is to find the shortest path and avoid walls
                  but boxes are fine.
                </p>
              </span>
              <iframe
                width="100%"
                height="420"
                src="https://www.youtube.com/embed/orJY1JCV-iY"
                title="zone 3 Xin Jiang"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </Card>

          <Card>
            <CardHeader title="My Soft Skills" description="" />
            <div className="mt-4">
              {softSkills.map((skill) => (
                <div key={skill.title} className="mt-4">
                  <span className="font-semibold">{skill.title}</span>
                  <span>: {skill.description}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <CardHeader title="My Field of Interests" description="" />
            <div className="mt-4">
              {interests.map((interest) => (
                <div key={interest.title} className="flex items-center gap-2">
                  <span>{interest.emoji}</span>
                  <span>{interest.title}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <CardHeader title="My Hobbies" description="" />
            <div className="mt-4">
              {hobbies.map((hobby) => (
                <div key={hobby.title} className="flex items-center gap-2">
                  <span>{hobby.emoji}</span>
                  <span>{hobby.title}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <CardHeader title="My Dream Job" description="" />
            <div className="mt-4">
              {expectations.map((expectations) => (
                <div
                  key={expectations.title}
                  className="flex items-center gap-2"
                >
                  <span>{expectations.emoji}</span>
                  <span>{expectations.title}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
