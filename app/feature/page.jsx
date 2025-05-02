import React from "react";
import Navbar from "../Component/Navbar";
import {
  TagIcon,
  AdjustmentsHorizontalIcon,
  BriefcaseIcon,
  CurrencyDollarIcon,
  ChatBubbleLeftEllipsisIcon,
  IdentificationIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";

export default function page() {
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
      <section className="w-full h-[90vh] py-3 px-62 flex flex-col pt-20 relative">
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
                className="flex flex-col border-[1px] border-gray-300 hover:border-[#055651] hover:bg-[#05565113] rounded-sm cursor-pointer px-4 py-4 w-[23.5%] gap-2"
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
    </div>
  );
}
