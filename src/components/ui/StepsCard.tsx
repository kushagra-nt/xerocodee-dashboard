import Image, { StaticImageData } from "next/image";
import { ReactElement } from "react";

type Substep = {
  title: string;
  description: string;
  image: ReactElement;
};

type Step = {
  title: string;
  description: string;
  substeps: Substep[];
};

export default function StepsCard({
  step,
  stepNumber,
}: {
  step: Step;
  stepNumber: number;
}) {
  return (
    <div className="mx-auto flex flex-col gap-y-14">
      <h1 className="font-bold text-3xl">{stepNumber}</h1>
      <div className="flex flex-col gap-y-3">
        <h2 className="font-bold text-3xl text-[#332C5C]">{step.title}</h2>
        <h4 className="font-semibold text-[#8B869E]">{step.description}</h4>
      </div>
      <div className="flex flex-col gap-y-20 my-10">
        {step.substeps.map((substep, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 ? "md:flex-row-reverse" : "md:flex-row"
            } gap-x-16 max-w-[80%] mx-auto`}
          >
            {substep.image}
            <div className="flex flex-col justify-center items-start gap-y-5">
              <h3 className="font-bold tracking-wider text-xl text-[#332C5C]">
                {substep.title}
              </h3>
              <p className="text-left text-[#8B869E] font-semibold">
                {substep.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
