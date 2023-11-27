import { Github, Linkedin, Mail } from "lucide-react";
import CareerLinks, { LinkSection } from "./ui/CareerLinks";

const sections: LinkSection[] = [
  {
    heading: "Our Links",
    links: [
      {
        label: "Home",
        href: "",
      },
      {
        label: "About us",
        href: "",
      },
      {
        label: "Integrations",
        href: "",
      },
      {
        label: "Team",
        href: "",
      },
      {
        label: "Blog",
        href: "",
      },
    ],
  },
  {
    heading: "Our Services",
    links: [
      {
        label: "Infrastructure provisioning",
        href: "",
      },
      {
        label: "Network infrastructure automation",
        href: "",
      },
      {
        label: "cost optimization",
        href: "",
      },
      {
        label: "cloud migration",
        href: "",
      },
      {
        label: "kubernetes at scale",
        href: "",
      },
    ],
  },
  {
    heading: "Other Links",
    links: [
      {
        label: "FAQ",
        href: "",
      },
      {
        label: "Careers",
        href: "",
      },
      {
        label: "Privacy Policy",
        href: "",
      },
      {
        label: "Terms & Condition",
        href: "",
      },
      {
        label: "Support",
        href: "",
      },
    ],
  },
];

export default function Footer() {
  return (
    <div className="mb-10">
      <div className="flex flex-col lg:flex-row justify-center gap-x-10 items-center">
        <div className="max-w-[500px]">
          <p className="text-[#74708E] text-center">
            You get just what you need to run your cloud workloads--no more, no
            less. Deploy from our single pane of glass, manage them with ease
            and scale up as fast as your workload grows
          </p>
          <div className="flex mt-5 gap-x-4 text-center justify-center">
            <Github
              className="text-black bg-slate-200 cursor-pointer"
              size={20}
            />
            <Linkedin
              className="text-black bg-slate-200 cursor-pointer"
              size={20}
            />
            <Mail
              className="text-black bg-slate-200 shadow cursor-pointer"
              size={20}
            />
          </div>
        </div>
        <div className="flex gap-x-10 gap-y-10 flex-col sm:flex-row mt-10">
          {sections.map((section) => (
            <CareerLinks section={section} />
          ))}
        </div>
      </div>
      <div className="mt-10 flex justify-evenly flex-col lg:flex-row text-center gap-y-4 text-[#74708E]">
        <p>Terms & Conditions | Privacy Policy</p>
        <p>
          Copyright © 2023{" "}
          <span className="font-bold">EXOCODE TECHNOLOGIES</span> | All rights
          reserved
        </p>
      </div>
    </div>
  );
}
