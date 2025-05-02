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
} from "@heroicons/react/24/solid";
import { HoverCardDemo } from "../Component/HoverCard";
import Image from "next/image";

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
      <section className="w-full h-[70vh] py-3 px-62 flex flex-col pt-20 relative">
        <p className="uppercase">Use Cases</p>
        <p className="text-3xl font-bold">
          Manage any workflow from your inbox
        </p>
        <div className="flex flex-wrap gap-4 w-full mt-12">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col border-[1px] border-gray-300 hover:border-[#055651] hover:bg-[#05565113] transition-all ease-in-out duration-300 rounded-sm cursor-pointer px-4 py-4 w-[23.5%] gap-2"
              >
                <div className="flex items-center font-medium justify-between">
                  <p>{item.heading}</p>{" "}
                  <Icon className="size-6" color="#08514C" />
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
      <section className="border-t-[1px] border-gray-300 bg-[#FAFAFA] py-20 w-full h-[91vh] flex px-62 gap-10">
        <div className="w-[42%] flex flex-col gap-2">
          <p className="text-3xl font-bold">Track everything</p>
          <p className="text-2xl">and always have context</p>
          <p className="text-sm text-gray-500 mb-2">
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
        <div className="w-[50%] flex items-center pb-28 justify-center">
          {imageToShow === "f2" && (
            <Image
              width={600}
              height={600}
              alt=""
              src="/feature1.png"
              className="w-[25rem] h-auto rounded-lg border-[1px] border-gray-100 shadow"
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
    </div>
  );
}
