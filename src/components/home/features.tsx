import Image from "next/image";
import React from "react";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

const FeatureSections = ({ className }: { className?: string }) => {
  const sections = [
    {
      id: "home",
      title: "Upgrade Your Studies with",
      highlight: "Essential Tools",
      description:
        "From test updates to original study resources, our platform provides everything you need to excel.",
      bullets: [
        "Get academy news, event updates, and plans with the calendar.",
        "Discover courses by subject for a structured learning path.",
        "Access test reports to track your achievements.",
        "Download notes and resources to support your studies.",
      ],
      image: "/assets/png/home.png", // Replace with your actual image path
    },
    {
      id: "defendertrack",
      title: "Empower Your Learning with",
      highlight: "NDI",
      description:
        "Built for National Defense aspirants, our platform provides the tools to succeed: study materials, manage your study plan, and track progress.",
      bullets: [
        "Real-Time Updates: Stay informed with the latest academy news, events, and test updates from one place.",
        "Study Resource Hub: Access a centralized repository of materials, past papers, and reference documents.",
      ],
      image: "/assets/png/recent-videos-gradient.png",
    },
    {
      id: "study-life",
      title: "Streamline Your Study",
      highlight: "Routine with Ease",
      description:
        "Our platform is crafted to seamlessly fit your study life, helping you focus on what matters.",
      bullets: [
        "Get notifications for new updates and assignments.",
        "Access your resources with just one click.",
        "Track your progress with intuitive dashboards and analytics.",
      ],
      image: "/assets/png/progress-gradient.png",
    },
  ];

  return (
    <div id="features" className={cn([className,"items-center flex flex-col"])}>
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={`grid grid-cols-1 sm:grid-cols-2 items-center mb-10 gap-5`}
        >
          <div className={`w-full order-1 sm:order-${index % 2 === 0 ? '1' : '2'}`}>
            <Badge variant={"outline"} className="bg-white mb-4">
              <Image alt="" src={"/assets/svg/union.svg"} height={20} width={20} /> &nbsp; {section.id.toUpperCase()}
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {section.title}{" "}
              <span className="text-blue-600">{section.highlight}</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">{section.description}</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              {section.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>

          <div className={`w-full order-2 mt-5 sm:tm-0 sm:order-${index % 2 === 0 ? '2' : '1'}`}>
            <Image
              src={section.image}
              alt={section.title}
              width={600}
              height={400}
              className="rounded-lg object-contain"
            />
          </div>
        </section>
      ))}
    </div>
  );
};

export default FeatureSections;
