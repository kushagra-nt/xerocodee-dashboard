import Link from "next/link";

export type LinkSection = {
  heading: string;
  links: {
    label: string;
    href: string;
  }[];
};

export default function CareerLinks({ section }: { section: LinkSection }) {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-xl mb-4 text-[#332C5C] text-center">
        {section.heading}
      </h1>
      <div className="flex flex-col gap-y-2">
        {section.links.map((link) => (
          <Link
            className="hover:text-blue-600 text-[#74708E] text-center"
            key={link.label}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
