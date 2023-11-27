import Image from "next/image";
import { Button } from "./ui/button";
import heroImg from "../../public/hero.png";

export default function LandingPage() {
  return (
    <div className="py-20 mx-auto text-center flex flex-col items-center gap-y-6">
      <div>
        <h1 className="text-4xl max-w-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Build your audience and grow your brand
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          no more, no less. Deploy from our single pane of glass, manage them
          with ease and scale up as fast as your workload grows.
        </p>
      </div>

      <Button variant="default">Get Started Now</Button>

      <Image
        src={heroImg}
        alt="hero image"
        width={"1000"}
        className="w-[100vw] h-[300px] xs sm:h-[400px] md:h-[500px]"
      />
    </div>
  );
}
