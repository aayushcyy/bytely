import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function HeroSection2() {
  return (
    <div className="w-full xl:h-screen sm:h-[80vh] lg:h-[65vh] relative sm:flex sm:items-center">
      <div className="w-full bg-gradient-to-br from-teal-700 to-teal-900 sm:h-[65%] xl:h-[80%] lg:h-[75%] polygon absolute z-0"></div>
      <div className="flex z-20 w-full sm:px-10 xl:px-60 lg:px-[14vw] xl:gap-12 sm:gap-5 lg:gap-8 justify-center">
        <Image
          src={"/gmail.png"}
          width={600}
          height={600}
          alt=""
          className="xl:w-[55%] lg:w-[50%] h-auto z-20 rounded-lg sm:w-[45%]"
          placeholder="empty"
        />
        <div className="z-20 gap-3 flex flex-col justify-center text-white text-sm sm:text-xs">
          <div className="uppercase text-base sm:text-xs lg:text-base xl:-mb-2">
            CRM Built into gmail
          </div>
          <div className="xl:text-4xl lg:text-3xl font-semibold">
            Keep your pipeline moving
          </div>
          <div className="lg:text-base">
            Set up and customize a perfect process for your team no matter the
            use case or how you work
          </div>
          <div className="pl-2 flex flex-col gap-1 lg:gap-2">
            <div className="flex gap-3">
              <p className="text-[5px] pt-2">⚪</p>
              <p className="lg:text-sm">
                As simple as a spreadsheet — adding, editing, and collaborating
                is a breeze
              </p>
            </div>
            <div className="flex gap-3">
              <p className="text-[5px] pt-2">⚪</p>
              <p className="lg:text-sm">
                Easily filter, sort, and group your data in any configuration to
                quickly identify bottlenecks
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <p className="text-[5px]">⚪</p>
              <p className="lg:text-sm">
                See upcoming tasks across all your pipelines
              </p>
            </div>
          </div>
          <Link
            href={"/feature"}
            className="uppercase flex items-center text-xs lg:text-sm hover:underline font-semibold sm:font-medium gap-1 mt-3"
          >
            View all features{" "}
            <ArrowRightIcon className="lg:size-5 sm:size-4 stroke-2 text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}
