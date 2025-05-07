"use client";

import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import {
  TagIcon,
  AdjustmentsHorizontalIcon,
  BriefcaseIcon,
  CurrencyDollarIcon,
  ChatBubbleLeftEllipsisIcon,
  IdentificationIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  UserIcon,
  ForwardIcon,
  CheckIcon,
} from "@heroicons/react/24/solid";
import { HoverCardDemo } from "../Component/HoverCard";
import Image from "next/image";
import Footer from "../Component/Footer";
import Hiring from "../Component/Hiring";

export default function page() {
  const [imageToShow, setImageToShow] = useState("f1");

  let features = [
    {
      heading: "Sales",
      subHead: "Keep track of leads and close deals",
      icon: TagIcon,
    },
    {
      heading: "Project management",
      subHead: "Track projects and tasks to feature completion",
      icon: AdjustmentsHorizontalIcon,
    },
    {
      heading: "Business dev",
      subHead: "Maintain your business relationships and partners",
      icon: BriefcaseIcon,
    },
    {
      heading: "Fundraising",
      subHead: "Raise money and close investment deals",
      icon: CurrencyDollarIcon,
    },
    {
      heading: "Support",
      subHead: "Prioritize and manage support tickets and bugs",
      icon: ChatBubbleLeftEllipsisIcon,
    },
    {
      heading: "Hiring",
      subHead: "Keep track of resumes and candidates",
      icon: IdentificationIcon,
    },
    {
      heading: "Real estate",
      subHead: "Manage Home buyers and sellers or recruit new agents",
      icon: HomeIcon,
    },
  ];
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      {/* Section 1 */}
      <section className="w-full xl:h-[70vh] lg:h-[55vh] py-3 xl:px-62 lg:px-36 sm:px-10 flex flex-col pt-20 relative">
        <p className="uppercase lg:text-base sm:text-xs">Use Cases</p>
        <p className="lg:text-3xl sm:text-xl sm:font-semibold lg:font-bold">
          Manage any workflow from your inbox
        </p>
        <div className="flex flex-wrap xl:gap-4 lg:gap-3 sm:gap-3 w-full xl:mt-12 lg:mt-5 sm:mt-3">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col border-[1px] border-gray-300 hover:border-[#055651] hover:bg-[#05565113] transition-all ease-in-out duration-300 rounded-sm cursor-pointer xl:px-4 xl:py-4 lg:px-2 lg:py-2 sm:px-2 sm:py-1 w-[23.5%] gap-2"
              >
                <div className="flex items-center font-medium justify-between lg:text-base sm:text-sm">
                  <p>{item.heading}</p>{" "}
                  <Icon
                    className="lg:size-6 sm:size-4 md:size-5"
                    color="#08514C"
                  />
                </div>
                <div className="text-xs text-gray-600">{item.subHead}</div>
              </div>
            );
          })}
          <div className="flex items-center justify-center rounded-sm cursor-pointer px-4 py-3 gap-1 w-[22%]">
            <div className="flex items-center text-gray-600 text-xs justify-between">
              <p className="">...or fully customize to you unique needs</p>
            </div>
          </div>
        </div>
      </section>
      {/* Section 2 */}
      <section className="border-t-[1px] border-gray-300 bg-[#FAFAFA] py-20 w-full xl:h-[91vh] lg:h-[60vh] flex xl:px-62 lg:px-36 sm:px-10 gap-10">
        <div className="xl:w-[42%] lg:w-[45%] sm:w-[40%] flex flex-col gap-2">
          <p className="xl:text-3xl lg:text-2xl sm:text-2xl font-bold">
            Track everything
          </p>
          <p className="xl:text-2xl lg:text-xl sm:text-lg">
            and always have context
          </p>
          <p className="lg:text-sm sm:text-xs text-gray-500 xl:mb-2 lg:mb-1">
            Information about your pipelines, contacts, and tasks directly in
            your inbox and pocket.
          </p>
          <div>
            <HoverCardDemo
              triggerText="Custom views of your pipeline"
              TriggerIcon={MagnifyingGlassIcon}
              onMouseEnter={() => setImageToShow("f1")}
              content="Search, filter, group, and sort your data in any configuration and
              save the results as a custom view. Share with the entire team or
              surface directly in your inbox."
            />
            <HoverCardDemo
              onMouseEnter={() => setImageToShow("f2")}
              triggerText="Share a time of emails, notes, and more"
              TriggerIcon={ChartBarIcon}
              content="Get the details you need no matter who worked on it last. Automatically track and share every interaction across your entire team, including emails, call logs, files, notes, tasks, and more."
            />
            <HoverCardDemo
              onMouseEnter={() => setImageToShow("f3")}
              triggerText="Understand who you are talking with"
              TriggerIcon={UserIcon}
              content="View details from your pipeline directly alongside emails. Automatically enrich your contacts with info such as name, company, and employee count."
            />
            <HoverCardDemo
              onMouseEnter={() => setImageToShow("f4")}
              triggerText="Know what to do next"
              TriggerIcon={ForwardIcon}
              content="See upcoming tasks across all your pipelines so you never forget to follow-up."
            />
          </div>
        </div>
        <div className="w-[50%] flex items-center xl:pb-28 lg:pb-5 justify-center">
          {imageToShow === "f2" && (
            <Image
              width={600}
              height={600}
              alt=""
              src="/feature1.png"
              className="lg:w-[25rem] sm:w-24 h-auto rounded-lg border-[1px] border-gray-100 shadow"
            />
          )}
          {imageToShow === "f4" && (
            <Image
              width={600}
              height={600}
              alt=""
              src="/feature2.png"
              className="w-[25rem] h-auto rounded-lg border-[1px] border-gray-100 shadow"
            />
          )}
          {imageToShow === "f3" && (
            <Image
              width={600}
              height={600}
              alt=""
              src="/feature3.png"
              className="w-[25rem] h-auto rounded-lg border-[1px] border-gray-100 shadow"
            />
          )}
          {imageToShow === "f1" && (
            <Image
              width={600}
              height={600}
              alt=""
              src="/feature4.png"
              className="w-[25rem] h-auto rounded-lg border-[1px] border-gray-100 shadow"
            />
          )}
        </div>
      </section>
      {/* Section 3 */}
      <section className="w-full py-20 xl:px-62 lg:px-36 sm:px-10 flex flex-col items-center text-white bg-gradient-to-br from-[#074b48] to-[#095d59] gap-1">
        <p className="xl:text-3xl lg:text-2xl sm:text-xl font-semibold">
          We scale with you
        </p>
        <p className="xl:text-2xl lg:text-xl sm:text-lg">
          And check all the boxes with our pro features
        </p>
        <div className="flex flex-wrap gap-10 mt-11">
          <div className="flex gap-2 w-[20%]">
            <div className="pt-0.5">
              <CheckIcon className="size-5 text-[#69faf2]" />
            </div>
            <div className="flex flex-col gap-1">
              <p>Multi-team support</p>
              <p className="text-xs text-gray-400">
                Because everyone should use a CRM, from sales to hiring to
                support
              </p>
            </div>
          </div>
          <div className="flex gap-2 w-[20%]">
            <div className="pt-0.5">
              <CheckIcon className="size-5 text-[#69faf2]" />
            </div>
            <div className="flex flex-col gap-1">
              <p>Custom permissions</p>
              <p className="text-xs text-gray-400">
                So you can control who has access to your information
              </p>
            </div>
          </div>
          <div className="flex gap-2 w-[20%]">
            <div className="pt-0.5">
              <CheckIcon className="size-5 text-[#69faf2]" />
            </div>
            <div className="flex flex-col gap-1">
              <p>Data validation</p>
              <p className="text-xs text-gray-400">
                To make sure your team is consistent and accurate
              </p>
            </div>
          </div>
          <div className="flex gap-2 w-[20%]">
            <div className="pt-0.5">
              <CheckIcon className="size-5 text-[#69faf2]" />
            </div>
            <div className="flex flex-col gap-1">
              <p>Reporting tools</p>
              <p className="text-xs text-gray-400">
                So you can visualize your teams progress
              </p>
            </div>
          </div>
        </div>
      </section>
      <Hiring />
      <Footer />
    </div>
  );
}
