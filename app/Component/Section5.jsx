import React from "react";
import {
  GlobeAltIcon,
  ShieldCheckIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/solid";

export default function Section5() {
  return (
    <div className="w-full flex flex-col gap-14 justify-center h-[50vh] px-60">
      <div className="flex flex-col gap-1">
        <p className="uppercase text-sm text-gray-500">
          Checking all the boxes
        </p>
        <p className="text-3xl font-semibold">We've got you covered</p>
      </div>
      <div className="flex gap-6">
        <div className="flex gap-2">
          <div className="pt-0.5">
            <GlobeAltIcon className="size-5 text-[#005B56]" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium">Web and mobile support</p>
            <p className="text-sm text-gray-600">
              Native Android and iOS apps and directly built into Gmail on web
              and mobile
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="pt-0.5">
            <PuzzlePieceIcon className="size-5 text-[#005B56]" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium">Web and mobile support</p>
            <p className="text-sm text-gray-600">
              Native Android and iOS apps and directly built into Gmail on web
              and mobile
            </p>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="pt-0.5">
            <ShieldCheckIcon className="size-5 text-[#005B56]" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium">Web and mobile support</p>
            <p className="text-sm text-gray-600">
              Native Android and iOS apps and directly built into Gmail on web
              and mobile
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
