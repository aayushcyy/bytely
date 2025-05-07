import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { HoverCardDemo } from "../Component/HoverCard";
import {
  StarIcon,
  EnvelopeIcon,
  ChartBarSquareIcon,
  BellAlertIcon,
  UserCircleIcon,
  ListBulletIcon,
  ArrowsUpDownIcon,
  CheckIcon,
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  LightBulbIcon,
  EyeIcon,
  MagnifyingGlassIcon,
  DevicePhoneMobileIcon,
  CursorArrowRaysIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Hiring from "../Component/Hiring";
import {
  ClipboardIcon,
  DocumentIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export default function page() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />

      {/* Section 1 - Hero */}
      <section className="w-full min-h-[90vh] px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 tablet:px-8 pt-20 flex flex-col sm:flex-row lg:flex-row tablet:flex-col gap-10 tablet:gap-6 items-center justify-center">
        <div className="flex flex-col justify-center w-full lg:w-[50%] tablet:w-[90%] gap-3 tablet:items-center tablet:text-center">
          <p className="text-4xl md:text-5xl tablet:text-4xl font-bold leading-snug">
            CRM for Talent & Influencer Agencies
          </p>
          <p className="text-base md:text-lg tablet:text-base font-medium">
            Manage your talent roster and brand outreach campaigns directly in
            Gmail
          </p>
          <div className="flex gap-3 mt-2 items-center">
            <p className="flex gap-1">
              <StarIcon className="size-5 text-yellow-500" />
              <StarIcon className="size-5 text-yellow-500" />
              <StarIcon className="size-5 text-yellow-500" />
              <StarIcon className="size-5 text-yellow-500" />
            </p>
            <p className="text-sm tablet:text-sm text-gray-400 pt-0.5">
              32,000+ positive reviews
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full lg:w-[50%] tablet:w-[80%]">
          <Image
            src="/talent.png"
            alt="Talent & Influencer CRM Dashboard"
            width={600}
            height={600}
            className="w-full max-w-[30rem] tablet:max-w-[24rem] h-auto rounded-lg shadow"
            priority
          />
        </div>
      </section>

      {/* Section 2 - Creator Management */}
      <section className="w-full min-h-[80vh] px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 tablet:px-8 py-20 md:py-28 tablet:py-24 flex flex-col-reverse sm:flex-row-reverse lg:flex-row-reverse tablet:flex-col gap-10 tablet:gap-6 justify-center">
        <div className="flex flex-col justify-center w-full lg:w-[50%] tablet:w-[90%] gap-3 tablet:items-center tablet:text-center">
          <p className="text-3xl md:text-4xl tablet:text-3xl font-semibold">
            Manage your creators
          </p>
          <p className="text-2xl md:text-3xl tablet:text-2xl">
            and brand outreach campaigns
          </p>
          <p className="text-gray-500 text-sm lg:text-base">
            Manage talent and brand partnerships inside Gmail. UniByte replaces
            spreadsheets and scattered tools with a fast, flexible CRM built
            into Google Workspace.
          </p>
          <div className="mt-4 flex flex-col tablet:w-[90%]">
            <HoverCardDemo
              triggerText="Keep your talent roster organized in Gmail"
              TriggerIcon={UserCircleIcon}
              content="Import creators, brands, and partners with a few clicks. UniByte auto-enriches contacts and organizations key info and past threads so you have the full context on every relationship."
            />
            <HoverCardDemo
              triggerText="Pitch creators and manage brand deals"
              TriggerIcon={MagnifyingGlassIcon}
              content="Create mail merges to send partnership pitches, campaign updates, or availability checks. Include brand names, rates, and social handles to make every email feel personal. Track opens, clicks, and follow-ups-all from Gmail."
            />
            <HoverCardDemo
              triggerText="Centralize campaign briefs"
              TriggerIcon={UsersIcon}
              content="Manage every pitch, contract, and brand brief in one timeline. Attach rate cards, usage terms, content approvals, and feedback to keep your team and creators aligned."
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-full lg:w-[50%] tablet:w-[80%]">
          <Image
            src="/CustomTasks.png"
            alt="Creator Management Dashboard"
            width={600}
            height={600}
            className="w-full max-w-[30rem] tablet:max-w-[24rem] h-auto rounded-lg shadow"
          />
        </div>
      </section>

      {/* Section 3 - Campaign Organization */}
      <section className="w-full min-h-[80vh] px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 tablet:px-8 py-20 md:py-28 tablet:py-24 flex flex-col sm:flex-row lg:flex-row tablet:flex-col gap-10 tablet:gap-6 justify-center">
        <div className="flex flex-col justify-center w-full lg:w-[50%] tablet:w-[90%] gap-3 tablet:items-center tablet:text-center">
          <p className="text-3xl md:text-4xl tablet:text-3xl font-semibold">
            Organize your inbox
          </p>
          <p className="text-2xl md:text-3xl tablet:text-2xl">
            to run successful campaigns
          </p>
          <p className="text-gray-500 text-sm lg:text-base">
            Streamline agency operations and keep campaigns, creators, and brand
            deliverables on track—without leaving Gmail.
          </p>
          <div className="mt-4 flex flex-col tablet:w-[90%]">
            <HoverCardDemo
              triggerText="Stay aligned on brand and creator updates"
              TriggerIcon={ChartBarSquareIcon}
              content="Track campaign progress, contracts, deliverables, and past conversations in one shared timeline. See every update across your team-from brand briefs to media kits-directly in your inbox."
            />
            <HoverCardDemo
              triggerText="Multiple pipelines for different workflows"
              TriggerIcon={ClipboardIcon}
              content="Build custom pipelines for campaign execution, talent management, and brand outreach. Organize by stage, team, or client, and use fields and automations to keep things moving."
            />
            <HoverCardDemo
              triggerText="Assign tasks and track progress"
              TriggerIcon={LightBulbIcon}
              content="Assign teammates to next steps, set due dates, and track ownership-no more pinging around for status updates."
            />
            <HoverCardDemo
              triggerText="Know what's next without leaving your inbox"
              TriggerIcon={BellAlertIcon}
              content="Create filters to surface upcoming check-ins, pending brand approvals, or overdue deliverables so your team stays on top of priorities."
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-full lg:w-[50%] tablet:w-[80%]">
          <Image
            src="/colorPipeline.png"
            alt="Campaign Organization Dashboard"
            width={600}
            height={600}
            className="w-full max-w-[30rem] tablet:max-w-[24rem] h-auto rounded-lg shadow"
          />
        </div>
      </section>

      {/* Section 4 - Features */}
      <section className="w-full py-16 md:py-20 mt-10 md:mt-16 px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 tablet:px-8 flex flex-col items-center text-white bg-gradient-to-br from-[#074b48] to-[#095d59] gap-4 md:gap-6 tablet:gap-5">
        <p className="text-2xl md:text-3xl tablet:text-3xl font-semibold text-center">
          We scale with you
        </p>
        <p className="text-xl md:text-2xl tablet:text-xl text-center">
          And check all the boxes with our pro features
        </p>
        <div className="flex flex-wrap gap-6 tablet:gap-4 justify-center mt-8 md:mt-11 tablet:mt-8 w-full">
          {[
            {
              title: "Integrations + API",
              description:
                "Full integration with Gsuite and over 2,000 integrations via Zapier",
            },
            {
              title: "Importer tool",
              description:
                "Quickly bring in your contacts and data from another tool or spreadsheet",
            },
            {
              title: "Email tracking",
              description:
                "Gauge interest and send targeted follow-up based on views and clicks on links in your emails.",
            },
            {
              title: "Reporting tools",
              description:
                "Visualize your campaign and talent performance data",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex gap-3 w-full sm:w-[45%] md:w-[45%] lg:w-[22%] tablet:w-[45%] min-w-[15rem]"
            >
              <CheckIcon className="size-5 text-[#69faf2] mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium tablet:text-sm">{item.title}</p>
                <p className="text-xs tablet:text-xs text-gray-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 - Email Tools */}
      <section className="w-full min-h-[80vh] px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 tablet:px-8 py-20 md:py-40 tablet:py-24 flex flex-col-reverse sm:flex-row-reverse lg:flex-row-reverse tablet:flex-col gap-10 tablet:gap-6 justify-center bg-[#FAF6FC]">
        <div className="flex flex-col justify-center w-full lg:w-[50%] tablet:w-[90%] gap-3 tablet:items-center tablet:text-center">
          <p className="text-3xl md:text-4xl tablet:text-3xl font-semibold">
            Work smarter in Gmail
          </p>
          <p className="text-2xl md:text-3xl tablet:text-2xl">
            with email power tools
          </p>
          <p className="text-gray-500 text-sm lg:text-base">
            Work more efficiently in your inbox to make sure you're making the
            most of your limited time.
          </p>
          <div className="mt-4 flex flex-col tablet:w-[90%]">
            <HoverCardDemo
              triggerText="Track views on your sent emails"
              TriggerIcon={EyeIcon}
              content="Gauge interest with email view tracking. Follow up with engaged leads who opened your emails multiple times and clicked on links."
            />
            <HoverCardDemo
              triggerText="Email more efficiently with snippets"
              TriggerIcon={DocumentIcon}
              content="Streamline your process with saved replies and create email templates for the most common questions and requests."
            />
            <HoverCardDemo
              triggerText="Send mass, personalized emails"
              TriggerIcon={EnvelopeIcon}
              content="Create email sequences to regularly keep customers informed, schedule newsletters and create personalized outreach sequences. Schedule automatic follow-ups to get more responses and track email views and clicks to identify engaged leads."
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-full lg:w-[50%] tablet:w-[80%]">
          <Image
            src="/topSupport.png"
            alt="Email Productivity Tools"
            width={600}
            height={600}
            className="w-full max-w-[30rem] tablet:max-w-[24rem] h-auto rounded-lg"
          />
        </div>
      </section>

      <Hiring />
      <Footer />
    </div>
  );
}
