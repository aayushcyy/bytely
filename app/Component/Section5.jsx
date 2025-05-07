import React from "react";
import {
  GlobeAltIcon,
  ShieldCheckIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/solid";

export default function Section5() {
  return (
    <div className="w-full flex flex-col gap-14 sm:gap-8 justify-center h-[50vh] sm:px-10 xl:px-60 lg:px-36">
      <div className="flex flex-col gap-1">
        <p className="uppercase text-sm sm:text-xs text-gray-500">
          Checking all the boxes
        </p>
        <p className="text-3xl sm:text-2xl font-semibold">
          We've got you covered
        </p>
      </div>
      <div className="flex gap-6">
        <div className="flex gap-2">
          <div className="pt-0.5">
            <GlobeAltIcon className="size-5 sm:size-4 text-[#005B56]" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium sm:text-sm">Web and mobile support</p>
            <p className="text-sm sm:text-xs text-gray-600">
              Native Android and iOS apps and directly built into Gmail on web
              and mobile
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="pt-0.5">
            <PuzzlePieceIcon className="size-5 sm:size-4 text-[#005B56]" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium sm:text-sm">Web and mobile support</p>
            <p className="text-sm sm:text-xs text-gray-600">
              Native Android and iOS apps and directly built into Gmail on web
              and mobile
            </p>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="pt-0.5">
            <ShieldCheckIcon className="size-5 sm:size-4 text-[#005B56]" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium sm:text-sm">Web and mobile support</p>
            <p className="text-sm sm:text-xs text-gray-600">
              Native Android and iOS apps and directly built into Gmail on web
              and mobile
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
