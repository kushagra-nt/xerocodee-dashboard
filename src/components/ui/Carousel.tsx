"use client";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReactElement, useState } from "react";

export default function Carousel({
  children: slides,
  className,
}: {
  children: ReactElement[];
  className?: string;
}) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((curr: number) =>
      curr === 0 ? slides.length - 1 : curr - 1
    );
  };
  const goToNextSlide = () => {
    setCurrentSlide((curr: number) =>
      curr === slides.length - 1 ? 0 : curr + 1
    );
  };

  return (
    <div className={cn("relative", className)}>
      <div className={`overflow-hidden`}>
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides}
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={goToPreviousSlide}
          className="p-2 absolute left-[-50px] rounded-full shadow bg-blue-800 text-white"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={goToNextSlide}
          className="p-2 absolute right-[-50px] rounded-full shadow bg-blue-800 text-white"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
