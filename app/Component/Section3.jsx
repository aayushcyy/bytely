import React from "react";
import Image from "next/image";
import {
  EyeIcon,
  EnvelopeIcon,
  ClockIcon,
  DocumentIcon,
  ArrowsUpDownIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ButtonDemo } from "./Button";
import Link from "next/link";

export default function Section3() {
  return (
    <div className="w-full xl:h-screen relative xl:px-60 sm:px-10 lg:px-[14vw] flex flex-col gap-16 lg:pb-20 xl:pb-0 lg:py-10 lg:mb-10">
      <div className="flex flex-unwrap gap-8">
        <div className="flex flex-col">
          <div className="flex justify-center h-40">
            <Image
              alt=""
              width={600}
              height={600}
              src={"/automation.svg"}
              className="lg:w-40 sm:w-36 h-auto"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="lg:text-lg sm:text-base font-semibold">
              Your pipeline on autopilot
            </p>
            <p className="lg:text-sm sm:text-xs text-[#626262]">
              Automatically capture data from your contacts and emails. Get
              notified as things progress through your pipeline by never
              forgetting a follow-up with tasks and reminders.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center h-40">
            <Image
              alt=""
              height={600}
              width={600}
              src={"/tools.svg"}
              className="lg:w-58 sm:w-44 h-auto"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="lg:text-lg sm:text-base font-semibold">
              Built into the tools you use
            </p>
            <p className="lg:text-sm sm:text-xs text-[#626262]">
              Work where youre comfortable — inside your inbox! Built directly
              inside of Gmail for desktop and mobile, with G Suite integrations
              (Sheets, Chat, Drive, and more) to help you access and gather your
              data quickly.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center h-40">
            <Image
              alt=""
              height={600}
              width={600}
              src={"/team.svg"}
              className="lg:w-52 sm:w-40 h-auto"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="lg:text-lg sm:text-base font-semibold">
              A hive-mind for your team
            </p>
            <p className="lg:text-sm sm:text-xs text-[#626262]">
              Automatically share emails, notes, and call logs with your team so
              you can pick up where they left off. Access pipeline data
              alongside your emails and from your pocket so you always have the
              context you need.
            </p>
          </div>
        </div>
      </div>
      {/* features */}
      <div className="flex flex-col xl:gap-3 sm:gap-5 lg:gap-5">
        <div>
          <p className="lg:text-lg sm:text-base font-semibold">
            Supercharge your inbox
          </p>
        </div>
        <div className="gap-x-8 gap-y-5 flex flex-wrap w-full text-sm sm:text-xs">
          <div className="flex w-[27%] xl:gap-1 lg:gap-2 gap-2">
            <div className="sm:pt-0.5">
              <EyeIcon className="lg:size-5 sm:size-4" color="#176164" />
            </div>
            <div className="flex flex-col font-medium gap-1.5">
              <p className="sm:text-sm lg:text-base">View tracking</p>
              <p className="font-normal">
                Know instantly when people see your message
              </p>
            </div>
          </div>
          <div className="flex w-[33.5%] xl:gap-1 lg:gap-2 gap-2">
            <div className="sm:pt-0.5">
              <EnvelopeIcon className="lg:size-5 sm:size-4" color="#176164" />
            </div>
            <div className="flex flex-col font-medium gap-1.5">
              <p className="sm:text-sm lg:text-base">Mail merge</p>
              <p className="font-normal">
                Send personalized emails to contact groups from your pipelines
              </p>
            </div>
          </div>
          <div className="flex w-[27%] xl:gap-1 lg:gap-2 gap-2">
            <div className="sm:pt-0.5">
              <ClockIcon className="lg:size-5 sm:size-4" color="#176164" />
            </div>
            <div className="flex flex-col font-medium gap-1.5">
              <p className="sm:text-sm lg:text-base">Send later</p>
              <p className="font-normal">
                Schedule emails to be sent at just the right time
              </p>
            </div>
          </div>
          <div className="flex w-[27%] xl:gap-1 lg:gap-2 gap-2">
            <div className="sm:pt-0.5">
              <DocumentIcon className="lg:size-5 sm:size-4" color="#176164" />
            </div>
            <div className="flex flex-col font-medium gap-1.5">
              <p className="sm:text-sm lg:text-base">Snippets</p>
              <p className="font-normal">
                Use a library of frequently written emails shared across your
                team
              </p>
            </div>
          </div>
          <div className="flex w-[33.5%] xl:gap-1 lg:gap-2 gap-2">
            <div className="sm:pt-0.5">
              <ArrowsUpDownIcon
                className="lg:size-5 sm:size-4"
                color="#176164"
              />
            </div>
            <div className="flex flex-col font-medium gap-1.5">
              <p className="sm:text-sm lg:text-base">Thread splitter</p>
              <p className="font-normal">
                Split conversations into separate email threads when topics
                start to branch
              </p>
            </div>
          </div>
          <div>
            <Link
              href={"/feature"}
              className="flex pl-6 text-[#176164] lg:text-sm font-semibold gap-2"
            >
              Learn More{" "}
              <ArrowRightIcon className="lg:size-5 sm:size-4" color="#176164" />
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-center mt-7 sm:mb-20 ">
          <Link href="/feature">
            <ButtonDemo
              className="px-3 py-1 bg-gradient-to-tl from-teal-800 to-teal-900 text-white rounded-xl cursor-pointer hover:bg-[#000000e4] ease-in-out duration-300"
              text="Get Started"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
