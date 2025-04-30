import Image from "next/image";
import React from "react";
import gmail from "../../public/gmail.png";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function HeroSection2() {
  return (
    <div className="w-full h-screen relative">
      <div className="w-full bg-gradient-to-br from-teal-700 to-teal-900 h-[80%] polygon absolute z-0"></div>
      <div className="flex z-20 w-full px-60 gap-12 justify-center">
        <Image
          src={gmail}
          width={600}
          height={600}
          alt=""
          className="w-[55%] h-auto z-20 rounded-lg"
          placeholder="empty"
        />
        <div className="z-20 gap-3 flex flex-col justify-center text-white text-sm">
          <div className="uppercase text-base -mb-2">CRM Built into gmail</div>
          <div className="text-4xl font-semibold">
            Keep your pipeline moving
          </div>
          <div className="">
            Set up and customize a perfect process for your team no matter the
            use case or how you work
          </div>
          <div className="pl-2 flex flex-col gap-1">
            <div className="flex gap-3">
              <p className="text-[5px] pt-2">⚪</p>
              <p>
                As simple as a spreadsheet — adding, editing, and collaborating
                is a breeze
              </p>
            </div>
            <div className="flex gap-3">
              <p className="text-[5px] pt-2">⚪</p>
              <p>
                Easily filter, sort, and group your data in any configuration to
                quickly identify bottlenecks
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <p className="text-[5px]">⚪</p>
              <p>See upcoming tasks across all your pipelines</p>
            </div>
          </div>
          <Link
            href={"/"}
            className="uppercase flex items-center text-xs font-semibold gap-1 mt-3"
          >
            View all features{" "}
            <ArrowRightIcon className="size-5 stroke-2 text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}
