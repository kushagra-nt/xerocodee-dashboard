import Image from "next/image";
import DashboardImage from "../../public/dashboard-4.png";
import WithXerocodeImage from "../../public/with.png";
import withoutXerocodeImage from "../../public/without.png";
import FeatureCard from "./ui/FeatureCard";
import InfrastructureImage from "../../public/infrastructure-feature.png";
import SecurityFeatureImage from "../../public/security-feature.png";
import NetworkFeatureImage from "../../public/network-feature.png";
import ApplicationsFeatureImage from "../../public/applications-feature.png";
import FeaturesImage from "../../public/features.png";

const Features = [
  {
    title: "Infrastructure",
    description: "Automated Cloud  Infrastructure Workflow",
    image: InfrastructureImage,
  },
  {
    title: "security",
    description: "Modern Secure Infrastructure Approach",
    image: SecurityFeatureImage,
  },
  {
    title: "Networking",
    description: "Flexible Secure Application Connectivity",
    image: NetworkFeatureImage,
  },
  {
    title: "Applications",
    description: "Automate Application Deployment for Agility",
    image: ApplicationsFeatureImage,
  },
];

export default function FeaturesPage() {
  return (
    <div className="flex flex-col mx-auto align-middle text-center gap-y-10 md:gap-y-16">
      <h1 className="text-blue-700 mx-auto px-6 py-3 font-bold rounded-3xl bg-blue-300">
        Features
      </h1>

      <section>
        <h1 className="text-2xl font-bold">
          <span className="text-blue-600 mr-2">save 1000's</span>
          of expensive coder hours
        </h1>

        <p className="mt-3">
          With cloud technologies, we assist in modernising infrastructure and
          applications for resilience and scalability.
        </p>
      </section>

      <Image
        src={DashboardImage}
        width={2000}
        alt="dashboard image"
        className="w-full sm:w-[90%] mx-auto"
      />

      <section className="flex flex-col md:flex-row gap-y-16 md:gap-x-8 mx-auto justify-evenly mt-10 sm:mt-16 md:mt-24">
        <div>
          <h3 className="font-semibold mb-8">Without Xerocode</h3>
          <Image
            src={withoutXerocodeImage}
            alt="without xerocode sample image"
            width={500}
            className="h-[300px] w-auto mx-auto"
          />
        </div>
        <div>
          <h3 className="font-semibold mb-8">With Xerocode</h3>
          <Image
            src={WithXerocodeImage}
            alt="without xerocode sample image"
            width={500}
            className="h-[300px] w-auto mx-auto"
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold">
          Self serve infrastructure platform for{" "}
          <span className="text-blue-600">scaling teams</span>
        </h2>
      </section>

      <section className="flex flex-col gap-y-10 sm:flex-row sm:gap-x-10 lg:gap-x-20 mx-auto">
        <div className="flex flex-col gap-y-10">
          {Features.map(
            (feature, i) =>
              i < Features.length / 2 && (
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  image={feature.image}
                />
              )
          )}
        </div>
        <div className="flex flex-col gap-y-10">
          {Features.map(
            (feature, i) =>
              i >= Features.length / 2 && (
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  image={feature.image}
                />
              )
          )}
        </div>
      </section>

      <Image
        src={FeaturesImage}
        alt="features image"
        width={2000}
        className="mx-auto w-full sm:w-[95%] lg:w-[80%] mt-20 h-auto"
      />
    </div>
  );
}
