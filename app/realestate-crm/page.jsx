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
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Hiring from "../Component/Hiring";
import { ClipboardIcon } from "@heroicons/react/24/outline";

export default function page() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />

      {/* Section 1 - Hero */}
      <section className="w-full min-h-[90vh] px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 tablet:px-8 pt-20 flex flex-col sm:flex-row lg:flex-row tablet:flex-col gap-10 tablet:gap-6 items-center justify-center">
        <div className="flex flex-col justify-center w-full lg:w-[50%] tablet:w-[90%] gap-3 tablet:items-center tablet:text-center">
          <p className="text-4xl md:text-5xl tablet:text-4xl font-bold leading-snug">
            Real Estate CRM in Gmail
          </p>
          <p className="text-base md:text-lg tablet:text-base font-medium">
            Manage buyers, sellers, and transactions with pipelines in Gmail.
          </p>
          <div className="flex gap-3 mt-2 items-center">
            <p className="flex gap-1">
              <StarIcon className="size-5 text-yellow-500" />
              <StarIcon className="size-5 text-yellow-500" />
              <StarIcon className="size-5 text-yellow-500" />
            </p>
            <p className="text-sm tablet:text-sm text-gray-400 pt-0.5">
              17,000+ positive reviews
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full lg:w-[50%] tablet:w-[80%]">
          <Image
            src="/realestate.png"
            alt="Real Estate CRM Dashboard"
            width={600}
            height={600}
            className="w-full max-w-[30rem] tablet:max-w-[24rem] h-auto rounded-lg shadow"
            priority
          />
        </div>
      </section>

      {/* Section 2 - Transactions */}
      <section className="w-full min-h-[80vh] px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 tablet:px-8 py-20 md:py-28 tablet:py-24 flex flex-col-reverse sm:flex-row-reverse lg:flex-row-reverse tablet:flex-col gap-10 tablet:gap-6 justify-center">
        <div className="flex flex-col justify-center w-full lg:w-[50%] tablet:w-[90%] gap-3 tablet:items-center tablet:text-center">
          <p className="text-3xl md:text-4xl tablet:text-3xl font-semibold">
            Organize transactions
          </p>
          <p className="text-2xl md:text-3xl tablet:text-2xl">
            and documents in Gmail
          </p>
          <p className="text-gray-500 text-sm lg:text-base">
            Keep track of all the details and documents you need to close a deal
            in one place.
          </p>
          <div className="mt-4 flex flex-col tablet:w-[90%]">
            <HoverCardDemo
              triggerText="Real Estate data seamlessly integrated into Gmail"
              TriggerIcon={EnvelopeIcon}
              content="Create a database for your listings, buyers, and sellers. Keep track of each transaction with customizable pipeline templates."
            />
            <HoverCardDemo
              triggerText="All your documents in one place"
              TriggerIcon={ClipboardIcon}
              content="Organize and share contracts, disclosures, and receipts along with your emails in Gmail - where you're already working."
            />
            <HoverCardDemo
              triggerText="Customize your pipeline to match your way"
              TriggerIcon={ChartBarSquareIcon}
              content="Track what's important to you with custom data fields. Easily add and rename stages for each step of your process and create task lists to close your deals faster."
            />
            <HoverCardDemo
              triggerText="Calculate commission and gain insights"
              TriggerIcon={LightBulbIcon}
              content="Let your pipeline work for you. Calculate commissions automatically with formula columns, see real-time interaction data for your contacts, and gain insights to close more deals."
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-full lg:w-[50%] tablet:w-[80%]">
          <Image
            src="/realestate.png"
            alt="Transaction Organization"
            width={600}
            height={600}
            className="w-full max-w-[30rem] tablet:max-w-[24rem] h-auto rounded-lg shadow"
          />
        </div>
      </section>

      {/* Section 3 - Relationships */}
      <section className="w-full min-h-[80vh] px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 tablet:px-8 py-20 md:py-28 tablet:py-24 flex flex-col sm:flex-row lg:flex-row tablet:flex-col gap-10 tablet:gap-6 justify-center">
        <div className="flex flex-col justify-center w-full lg:w-[50%] tablet:w-[90%] gap-3 tablet:items-center tablet:text-center">
          <p className="text-3xl md:text-4xl tablet:text-3xl font-semibold">
            Build relationships
          </p>
          <p className="text-2xl md:text-3xl tablet:text-2xl">
            with buyers and sellers
          </p>
          <p className="text-gray-500 text-sm lg:text-base">
            Gain valuable insights about your clients, access their data when
            you need it, and always add a personal touch without ever leaving
            Gmail.
          </p>
          <div className="mt-4 flex flex-col tablet:w-[90%]">
            <HoverCardDemo
              triggerText="360° view of your contacts and their history"
              TriggerIcon={UserCircleIcon}
              content="See a timeline of each client's purchases, sales, and interactions to better understand their history - and where they're headed next."
            />
            <HoverCardDemo
              triggerText="Information about your deals at your fingertips"
              TriggerIcon={ChartBarSquareIcon}
              content="See information about each client and deal right next to your email conversations. Find and update contacts, notes, dates, and recent activity without leaving your inbox."
            />
            <HoverCardDemo
              triggerText="Develop meaningful connections with clients"
              TriggerIcon={ListBulletIcon}
              content="Take note of birthdays, anniversaries, and details like upcoming vacations. Surprise and delight in your next call or email by checking in on a personal level."
            />
            <HoverCardDemo
              triggerText="Make consistency the key to your lasting relationships"
              TriggerIcon={ArrowsUpDownIcon}
              content="Make a great impression with consistent outreach. Move deals forward and keep clients engaged with tasks and reminders to follow-up."
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-full lg:w-[50%] tablet:w-[80%]">
          <Image
            src="/360deg.png"
            alt="Client Relationship Management"
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
              description: "Visualize your real estate transaction data",
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

      {/*эх Section 5 - Tasks */}
      <section className="w-full min-h-[80vh] px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 tablet:px-8 py-20 md:py-40 tablet:py-24 flex flex-col-reverse sm:flex-row-reverse lg:flex-row-reverse tablet:flex-col gap-10 tablet:gap-6 justify-center bg-[#FAF6FC]">
        <div className="flex flex-col justify-center w-full lg:w-[50%] tablet:w-[90%] gap-3 tablet:items-center tablet:text-center">
          <p className="text-3xl md:text-4xl tablet:text-3xl font-semibold">
            Create tasks and follow up
          </p>
          <p className="text-2xl md:text-3xl tablet:text-2xl">
            for every step of your process
          </p>
          <p className="text-gray-500 text-sm lg:text-base">
            Quit relying on your memory or your scratch pad to get everything
            done. Make sure nothing slips through the cracks with tasks for
            every step of your process.
          </p>
          <div className="mt-4 flex flex-col tablet:w-[90%]">
            <HoverCardDemo
              triggerText="Custom task lists for each stage"
              TriggerIcon={ListBulletIcon}
              content="Create tasks for property showings, due diligence, and each step of your process to keep deals moving forward. Automate task list creation for a more streamlined workforce."
            />
            <HoverCardDemo
              triggerText="Know what needs to get done at a glance"
              TriggerIcon={BellAlertIcon}
              content="Create custom views of your buyer, seller, and other important tasks. Surface them right in your inbox so you know what needs to get done each day."
            />
            <HoverCardDemo
              triggerText="Sync tasks with Google Calendar"
              TriggerIcon={CalendarDaysIcon}
              content="See your tasks displayed in Google Calendar to help plan your day."
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-full lg:w-[50%] tablet:w-[80%]">
          <Image
            src="/customTasks.png"
            alt="Task Management"
            width={600}
            height={600}
            className="w-full max-w-[30rem] tablet:max-w-[24rem] h-auto rounded-lg border-[1px] border-[#3f807920]"
          />
        </div>
      </section>

      <Hiring />
      <Footer />
    </div>
  );
}
