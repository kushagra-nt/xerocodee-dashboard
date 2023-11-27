import Image, { ImageProps, StaticImageData } from "next/image";
import CloudImage from "../../public/cloud.png";
import PipelineImage from "../../public/pipeline.png";
import DeployImage from "../../public/deploy.png";
import ToolsImage from "../../public/tools.png";
import CostImage from "../../public/cost.png";
import PreviewImage from "../../public/preview.png";
import ObservabilityImage from "../../public/observability.png";
import StepsCard from "./ui/StepsCard";
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

const Steps: Step[] = [
  {
    title: "Self Serve Infrastructure",
    description:
      "Accelerate by self-serving production-ready infrastructure and customize as you scale.",
    substeps: [
      {
        title: "In your cloud",
        description:
          "your infrastructure runs on AWS or GCP account. Never get locked in. infinitely scalable(Azure support coming soon.",
        image: (
          <Image
            src={CloudImage}
            alt="In your cloud"
            width={1000}
            className="w-[300px] m-auto mb-10 md:mb-0 lg:w-[500px]"
          />
        ),
      },
    ],
  },
  {
    title: "Deploy applications, fast!",
    description:
      "Set up automated deployments of your application in 5 minutes and get abck to build stuff that matters.",
    substeps: [
      {
        title: "Configure Build and Deploy Pipelines",
        description:
          "Portable builds powered by Dragger and continuous deployments powered by AgroCD - you gain more control of your pipelines with composable custom, build, and deploy stages.",
        image: (
          <Image
            src={PipelineImage}
            alt="In your cloud"
            width={1000}
            className="w-[200px] h-[100px] mb-10 md:mb-0 m-auto lg:h-[150px] lg:w-[400px]"
          />
        ),
      },
      {
        title: "Push To Deploy",
        description:
          "Just connect your repo with one click and push. Argonaut's deep integration with GitHub Actions and GitLab pipelines build and deploy your code on every push.",
        image: (
          <Image
            src={DeployImage}
            alt="In your cloud"
            width={1000}
            className="md:h-[300px] md:w-[500px] m-auto mb-10 md:mb-0"
          />
        ),
      },
      {
        title: "Multiple Runtimes",
        description:
          "Quickly deploy apps to containerized or serverless runtimes on your cloud and customize architectures to cost and performance constraints. Deploy on Kubernetes using dockerfiles or buildpacks, AWS Lambda, or GCP Cloud Functions.",
        image: (
          <Image
            src={ToolsImage}
            alt="In your cloud"
            width={1000}
            className="m-auto mb-10 md:mb-0"
          />
        ),
      },
      {
        title: "Scale Infinitely",
        description:
          "Every deployment is a zero-downtime deployment without you needing to choose custom configurations. You can easily configure auto-scaling, resource limits, and health-check URL to further optimize application uptime.",
        image: (
          <Image
            src={ToolsImage}
            alt="In your cloud"
            width={1000}
            className="m-auto mb-10 md:mb-0"
          />
        ),
      },
    ],
  },
  {
    title: "Visibility into Costs and Metrics",
    description:
      "Automatically track resource costs, across costs, across clouds, on every change. Visualize k8s pod metrics - CPU, Network, and Memory.",
    substeps: [
      {
        title: "Customizable Cost Dashboards And Reports",
        description:
          "Stay on top of your cloud spending with custom cost dashboards and reports — sort, filter, and group by your various accounts, resources, and cloud regions.",
        image: (
          <Image
            src={CostImage}
            alt="In your cloud"
            width={1000}
            className="w-[300px] h-[200px] m-auto mb-10 md:mb-0"
          />
        ),
      },
      {
        title: "Preview infra costs",
        description:
          "See the cost of a specific resource while choosing it (before provisioning).It saves you the hassle of searching through the complex pricing pages of your cloud provider or tools.",
        image: (
          <Image
            src={PreviewImage}
            alt="In your cloud"
            width={1000}
            className="h-[300px] w-[400px] m-auto mb-10 md:mb-0"
          />
        ),
      },
      {
        title: "Observability from day one",
        description:
          "Comes with built-in Kubernetes pod metrics. Easily plug in monitoring and observability tools of your choice, such as Grafana/Loki, DataDog, Prometheus, and more. Stay on top of your application metrics from day 1.",
        image: (
          <Image
            src={ObservabilityImage}
            alt="In your cloud"
            width={1000}
            className="m-auto mb-10 md:mb-0"
          />
        ),
      },
    ],
  },
];

export default function StepsPage() {
  return (
    <div className="mx-auto flex flex-col justify-center text-center my-20">
      <section>
        <h2 className="font-bold text-4xl mb-16">The Xerocodee way 🚀</h2>

        <section className="flex flex-col gap-y-20">
          {Steps.map((step, index) => (
            <StepsCard key={index} step={step} stepNumber={index + 1} />
          ))}
        </section>
      </section>
    </div>
  );
}
