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
      <section className="w-full min-h-[80vh] px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 tablet:px-8 pt-20 flex flex-col sm:flex-row lg:flex-row tablet:flex-col gap-10 tablet:gap-6 items-center justify-center">
        <div className="flex flex-col justify-center w-full lg:w-[50%] tablet:w-[90%] gap-3 tablet:items-center tablet:text-center">
          <p className="text-4xl md:text-5xl tablet:text-4xl font-bold leading-snug">
            CRM for small businesses
          </p>
          <p className="text-base md:text-lg tablet:text-base font-medium">
            Manage sales, orders, projects, and partnerships in Gmail. A true
            multi-tool for any small business owner.
          </p>
          <div className="flex gap-3 mt-2 items-center">
            <p className="flex gap-1">
              <StarIcon className="size-5 sm:size-4 text-yellow-500" />
              <StarIcon className="size-5 sm:size-4 text-yellow-500" />
              <StarIcon className="size-5 sm:size-4 text-yellow-500" />
              <StarIcon className="size-5 sm:size-4 text-yellow-500" />
              <StarIcon className="size-5 sm:size-4 text-yellow-500" />
            </p>
            <p className="text-sm sm:text-xs tablet:text-sm text-gray-400 pt-0.5">
              59,000+ positive reviews
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full lg:w-[50%] tablet:w-[80%]">
          <Image
            src="/salesPipeline.png"
            alt="Small Business CRM Dashboard"
            width={600}
            height={600}
            className="w-full max-w-[30rem] tablet:max-w-[24rem] h-auto rounded-lg shadow"
            priority
          />
        </div>
      </section>

      {/* Section 2 - Sales Pipeline */}
      <section className="w-full min-h-[70vh] px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 tablet:px-8 py-20 md:py-28 tablet:py-24 flex flex-col-reverse sm:flex-row-reverse lg:flex-row-reverse tablet:flex-col gap-10 tablet:gap-6 justify-center">
        <div className="flex flex-col justify-center w-full lg:w-[50%] tablet:w-[90%] gap-3 tablet:items-center tablet:text-center">
          <p className="text-3xl md:text-4xl tablet:text-3xl font-semibold">
            Close more deals
          </p>
          <p className="text-2xl md:text-3xl tablet:text-2xl">
            with a healthy sales pipeline
          </p>
          <p className="text-gray-500 text-sm tablet:text-sm">
            Prioritize important deals and always know where to focus your
            energy within your sales or orders pipeline.
          </p>
          <div className="mt-4 flex flex-col gap-3 tablet:w-[90%]">
            <HoverCardDemo
              triggerText="Start moving leads through your pipeline"
              TriggerIcon={UserCircleIcon}
              content="Create a pipeline with your emails organized into a deal for each lead in minutes. See who's engaged with email tracking and interaction metadata. Track orders all the way through your process."
            />
            <HoverCardDemo
              triggerText="Focus only on most important opportunities"
              TriggerIcon={MagnifyingGlassIcon}
              content="Surface your highest priority deals in your inbox with pipeline filters. See which leads are closing soon or need more information so you can reach out to keep the deal moving forward."
            />
            <HoverCardDemo
              triggerText="Record notes and share conversations"
              TriggerIcon={UsersIcon}
              content="Keep track of your sales calls with call logs. Share conversations with co-founders in your pipelines. Add to your to-do list during the call so you never miss the next step needed to close a deal."
            />
            <HoverCardDemo
              triggerText="Integrate directly with tools you're using"
              TriggerIcon={LightBulbIcon}
              content="With our integrations & automations you can integrate with tools like Calendly, Slack, Typeform and Google Forms to automate processes you're manually doing currently. Spend more time selling and less time with data entry."
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-full lg:w-[50%] tablet:w-[80%]">
          <Image
            src="/priority.png"
            alt="Sales Pipeline Management"
            width={600}
            height={600}
            className="w-full max-w-[30rem] tablet:max-w-[24rem] h-auto rounded-lg shadow"
          />
        </div>
      </section>

      {/* Section 3 - Partnerships */}
      <section className="w-full min-h-[80vh] px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 tablet:px-8 py-20 md:py-28 tablet:py-24 flex flex-col sm:flex-row lg:flex-row tablet:flex-col gap-10 tablet:gap-6 justify-center">
        <div className="flex flex-col justify-center w-full lg:w-[50%] tablet:w-[90%] gap-3 tablet:items-center tablet:text-center">
          <p className="text-3xl md:text-4xl tablet:text-3xl font-semibold">
            Build lasting partnerships
          </p>
          <p className="text-2xl md:text-3xl tablet:text-2xl">
            and expand your network
          </p>
          <p className="text-gray-500 text-sm tablet:text-sm">
            With completely customizable pipelines, you can keep track of your
            contacts across numerous deals and projects. From your desktop Gmail
            app and on the go.
          </p>
          <div className="mt-4 flex flex-col gap-3 tablet:w-[90%]">
            <HoverCardDemo
              triggerText="Expand your network and fill your pipeline"
              TriggerIcon={DevicePhoneMobileIcon}
              content="Import a list of potential partners from a spreadsheet or add them from your inbox with one click. Then, keep track of your relationships on the go with our iOS and Android apps."
            />
            <HoverCardDemo
              triggerText="Keep important documents organized"
              TriggerIcon={CursorArrowRaysIcon}
              content="Automatically scrape file attachments from emails and keep them organized for each potential partner. Customize pipeline fields to continually add data of your own."
            />
            <HoverCardDemo
              triggerText="Learn more about your contacts "
              TriggerIcon={ChatBubbleBottomCenterTextIcon}
              content="Add a Streak contact that's automatically enriched with company logos, profile pictures, social media links, and other publicly available data."
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-full lg:w-[50%] tablet:w-[80%]">
          <Image
            src="/mobile.png"
            alt="Mobile CRM Experience"
            width={600}
            height={600}
            className="w-full max-w-[30rem] tablet:max-w-[24rem] h-auto rounded-lg"
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
              description: "Visualize your sales and customer data",
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
          <p className="text-gray-500 text-sm tablet:text-sm">
            Work more efficiently in your inbox to make sure you're making the
            most of your limited time.
          </p>
          <div className="mt-4 flex flex-col gap-3 tablet:w-[90%]">
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
