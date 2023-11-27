import Image, { StaticImageData } from "next/image";

export default function FeatureCard({
  image,
  title,
  description,
}: {
  image: StaticImageData;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-row text-left gap-x-3 items-center">
      <div>
        <Image
          src={image}
          alt={`${title} image`}
          width={100}
          className=" h-full"
        />
      </div>
      <div>
        <h2 className="font-bold text-xl">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
