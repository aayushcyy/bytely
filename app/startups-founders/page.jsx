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
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Hiring from "../Component/Hiring";
import { ClipboardIcon, DocumentIcon } from "@heroicons/react/24/outline";

export default function page() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />

      {/* Section 1 - Hero */}
      <section className="w-full min-h-[90vh] px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 tablet:px-8 pt-20 flex flex-col sm:flex-row lg:flex-row tablet:flex-col gap-10 tablet:gap-6 items-center justify-center">
        <div className="flex flex-col justify-center w-full lg:w-[50%] tablet:w-[90%] gap-3 tablet:items-center tablet:text-center">
          <p className="text-4xl md:text-5xl tablet:text-4xl font-bold leading-snug">
            CRM for startup founders
          </p>
          <p className="text-base md:text-lg tablet:text-base font-medium">
            Manage your startup fundraising, close deals, and support new
            customers in Gmail. A true multi-tool for startup founders.
          </p>
          <div className="flex gap-3 mt-2 items-center">
            <p className="flex gap-1">
              <StarIcon className="size-5 text-yellow-500" />
              <StarIcon className="size-5 text-yellow-500" />
              <StarIcon className="size-5 text-yellow-500" />
              <StarIcon className="size-5 text-yellow-500" />
            </p>
            <p className="text-sm tablet:text-sm text-gray-400 pt-0.5">
              21,000+ positive reviews
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full lg:w-[50%] tablet:w-[80%]">
          <Image
            src="/founders.png"
            alt="Startup CRM Dashboard"
            width={600}
            height={600}
            className="w-full max-w-[30rem] tablet:max-w-[24rem] h-auto rounded-lg shadow"
            priority
          />
        </div>
      </section>

      {/* Section 2 - Fundraising */}
      <section className="w-full min-h-[80vh] px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 tablet:px-8 py-20 md:py-28 tablet:py-24 flex flex-col-reverse sm:flex-row-reverse lg:flex-row-reverse tablet:flex-col gap-10 tablet:gap-6 justify-center">
        <div className="flex flex-col justify-center w-full lg:w-[50%] tablet:w-[90%] gap-3 tablet:items-center tablet:text-center">
          <p className="text-3xl md:text-4xl tablet:text-3xl font-semibold">
            Startup fundraising
          </p>
          <p className="text-2xl md:text-3xl tablet:text-2xl">in your inbox</p>
          <p className="text-gray-500 text-sm lg:text-base">
            Many reputated startups uses UniByte lgmanagebasetartup fundraising
            for each batch, and so can you. Stay on top of conversations and
            follow up with investors to close a successful round.
          </p>
          <div className="mt-4 flex flex-col tablet:w-[90%]">
            <HoverCardDemo
              triggerText="Keep investor conversations organized"
              TriggerIcon={EnvelopeIcon}
              content="Track conversations with hundreds of investors through each step of your fundraising process. Find your notes, conversation histories, follow-up tasks, and more surfaced next to each investor email."
            />
            <HoverCardDemo
              triggerText="Set up failsafe systems to stay on top of follow-up"
              TriggerIcon={ClipboardIcon}
              content="Don't let conversations with investors go cold. Create pipeline filters to find who hasn't responded to your last email and use our dozens of Integrations and Automations to help set automatic tasks to follow up."
            />
            <HoverCardDemo
              triggerText="Start tracking important details with pipeline"
              TriggerIcon={ChartBarSquareIcon}
              content="Spend less time setting up your CRM and more time proving value to investors. The fundraising pipeline template lets you start tracking important details and next steps in just minutes."
            />
            <HoverCardDemo
              triggerText="Keep documents, contracts, and slide decks in one place"
              TriggerIcon={LightBulbIcon}
              content="Organize every email conversation and file in an auto-generated timeline for each potential investor. Add your own notes from calls and meetings and your to-do list for next steps."
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-full lg:w-[50%] tablet:w-[80%]">
          <Image
            src="/investorConversation.png"
            alt="Investor Conversation Management"
            width={600}
            height={600}
            className="w-full max-w-[30rem] tablet:max-w-[24rem] h-auto rounded-lg shadow"
          />
        </div>
      </section>

      {/* Section 3 - Hiring */}
      <section className="w-full min-h-[80vh] px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 tablet:px-8 py-20 md:py-28 tablet:py-24 flex flex-col sm:flex-row lg:flex-row tablet:flex-col gap-10 tablet:gap-6 justify-center">
        <div className="flex flex-col justify-center w-full lg:w-[50%] tablet:w-[90%] gap-3 tablet:items-center tablet:text-center">
          <p className="text-3xl md:text-4xl tablet:text-3xl font-semibold">
            Hire a successful team
          </p>
          <p className="text-2xl md:text-3xl tablet:text-2xl">
            to scale your startup
          </p>
          <p className="text-gray-500 text-sm lg:text-base">
            Don't let recruitment and hiring eat lgy at ybaser time. Track
            referrals, applications, and interviews right inside Gmail. Share
            notes from interviews and save time on bulk outreach.
          </p>
          <div className="mt-4 flex flex-col tablet:w-[90%]">
            <HoverCardDemo
              triggerText="Track candidates for multiple roles in one pipeline"
              TriggerIcon={ListBulletIcon}
              content="Customize a pre-built pipeline template in minutes to start tracking all of your candidates in once place. Use filters to see who has an interview this week or to find all of your applications for a certain role."
            />
            <HoverCardDemo
              triggerText="Follow up with candidates in bulk using mail merge"
              TriggerIcon={BellAlertIcon}
              content="Save time updating candidates or moving them to the next step. Get back to each candidate in a timely fashion with personalized, mass emails to each applicant."
            />
            <HoverCardDemo
              triggerText="Debrief on candidate interviews"
              TriggerIcon={CalendarDaysIcon}
              content="Share thoughts with your team and learn how each step of the process went. Record call logs, internal notes, and share emails directly in Gmail."
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-full lg:w-[50%] tablet:w-[80%]">
          <Image
            src="/hireTeam.png"
            alt="Team Hiring Pipeline"
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
              description: "Visualize your fundraising and investment data",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex gap-3 w-full sm:w-[45%] md:w-[45%] lg:w-[22%] tablet:w-[45%] min-w-[15rem]"
            >
              <CheckIcon className="size-5 text-[#69faf2] mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium tablet:text-sm">{item.title}</p>
                <p className="text-xs lg:text-sm text-gray-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5 - Insights */}
      <section className="w-full min-h-[80vh] px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 tablet:px-8 py-20 md:py-40 tablet:py-24 flex flex-col-reverse sm:flex-row-reverse lg:flex-row-reverse tablet:flex-col gap-10 tablet:gap-6 justify-center">
        <div className="flex flex-col justify-center w-full lg:w-[50%] tablet:w-[90%] gap-3 tablet:items-center tablet:text-center">
          <p className="text-3xl md:text-4xl tablet:text-3xl font-semibold">
            Gain insight
          </p>
          <p className="text-2xl md:text-3xl tablet:text-2xl">
            with customer interviews and market research
          </p>
          <p className="text-gray-500 text-sm lg:text-base">
            Work more efficiently in your inbox and reach buyers and sellers at
            the right time with targeted follow-up.
          </p>
          <div className="mt-4 flex flex-col tablet:w-[90%]">
            <HoverCardDemo
              triggerText="Upload customer lists with the importer tool"
              TriggerIcon={EyeIcon}
              content="Use Google Sheets or a cs to upload bulk lists of customers, email addresses, and other data. Create a full pipeline ready for interviews in minutes. We'll enrich your contacts with valuable data of our own."
            />
            <HoverCardDemo
              triggerText="Send personalized mass emails"
              TriggerIcon={DocumentIcon}
              content="Reach more people with mail merge in gmail. Send personalized messages in mass and schedule automatic follow-up to get more responses and conversations scheduled."
            />
            <HoverCardDemo
              triggerText="Record notes for each customer in Gmail"
              TriggerIcon={EnvelopeIcon}
              content="Keep track of important details from each conversation with notes in your pipelines. Better yet, add recordings of your calls to each box for easy access and future reference."
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-full lg:w-[50%] tablet:w-[80%]">
          <Image
            src="/gainInsights.png"
            alt="Customer Insights Dashboard"
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
