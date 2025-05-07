import React from "react";
import CarouselDemo from "./Carousel";
import { StarIcon } from "@heroicons/react/24/solid";

export default function FeedbackPage() {
  return (
    <div className="bg-gradient-to-tl from-teal-800 to-teal-900 w-full relative lg:h-[65vh] flex flex-col items-center justify-center gap-8 lg:gap-8 sm:gap-2 lg:pt-10 sm:pt-5">
      <div className="flex flex-col gap-2 lg:gap-3">
        <div className="lg:text-4xl sm:text-xl font-semibold text-white">
          50K+ happy users
        </div>
        <div className="flex justify-center">
          <StarIcon className="size-4.5 lg:size-5 stroke-2" color="#FBC02E" />
          <StarIcon className="size-4.5 stroke-2 lg:size-5" color="#FBC02E" />
          <StarIcon className="size-4.5 stroke-2 lg:size-5" color="#FBC02E" />
          <StarIcon className="size-4.5 stroke-2 lg:size-5" color="#FBC02E" />
        </div>
      </div>
      <CarouselDemo />
    </div>
  );
}
