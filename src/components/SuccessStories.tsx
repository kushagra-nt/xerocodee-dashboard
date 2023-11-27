import Image from "next/image";
import Carousel from "./ui/Carousel";
import Photo from "../../public/photo.jpg";
import { Quote } from "lucide-react";

const Stories = [
  {
    content:
      "There are many variations of passages of Lorem Ipsum available but the majority have sufferg alteration in some form, by injected humour, orrandomised words which don't look even slightly believable. If you are going touse a passage.",
    author: "asklfgkafb akd",
    authorDesignation: "Frontend Engineer",
    image: "",
  },
  {
    content:
      "There are many variations of passages of Lorem Ipsum available but the majority have sufferg alteration in some form, by injected humour, orrandomised words which don't look even slightly believable. If you are going touse a passage.",
    author: "asklfgkafb akd",
    authorDesignation: "Frontend Engineer",
    image: "",
  },
  {
    content:
      "There are many variations of passages of Lorem Ipsum available but the majority have sufferg alteration in some form, by injected humour, orrandomised words which don't look even slightly believable. If you are going touse a passage.",
    author: "asklfgkafb akd",
    authorDesignation: "Frontend Engineer",
    image: "",
  },
  {
    content:
      "There are many variations of passages of Lorem Ipsum available but the majority have sufferg alteration in some form, by injected humour, orrandomised words which don't look even slightly believable. If you are going touse a passage.",
    author: "asklfgkafb akd",
    authorDesignation: "Frontend Engineer",
    image: "",
  },
];

export default function SuccessStories() {
  return (
    <div>
      <Carousel className="m-auto max-w-[300px]  sm:max-w-[500px] lg:max-w-[850px] xl:max-w-[1000px]">
        {Stories.map((story) => (
          <div className="flex flex-col-reverse lg:flex-row rounded-lg gap-x-10 min-w-[300px] sm:min-w-[500px] lg:min-w-[850px] xl:min-w-[1000px] items-center lg:rounded-[3rem] overflow-hidden">
            <div className="hidden lg:flex items-center h-full w-[10%] lg:w-[30%] bg-blue-600">
              <Quote className="hidden lg:flex m-auto text-white" size={60} />
            </div>
            <div className="flex flex-col gap-y-4">
              <p>{story.content}</p>
              <div>
                <h2 className="text-center lg:text-right font-semibold">{`- ${story.author}`}</h2>
                <h2 className="text-center lg:text-right">
                  {story.authorDesignation}
                </h2>
              </div>
            </div>
            <div className="h-full w-[40%] flex items-center">
              <Image
                src={Photo}
                alt="photo"
                className="rounded-full m-auto w-[120px] h-[120px] border-blue-600 border-4"
              />
            </div>
          </div>
        ))}
      </Carousel>

      <div className="h-64"></div>
    </div>
  );
}
