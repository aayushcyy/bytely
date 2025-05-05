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
      <section className="w-full h-[90vh] px-62 flex pt-20 gap-10 items-center justify-center">
        <div className="h-full flex flex-col justify-center w-[45%] gap-3">
          <p className="text-5xl font-bold leading-14">
            CRM for startup founders
          </p>
          <p className="text-lg font-medium">
            Manage your startup fundraising, close deals, and support new
            customers in Gmail. A true multi-tool for startup founders.
          </p>
          <div className="flex gap-3 mt-2">
            <p className="flex gap-1">
              <StarIcon className="size-5 text-yellow-500" />
              <StarIcon className="size-5 text-yellow-500" />
              <StarIcon className="size-5 text-yellow-500" />
              <StarIcon className="size-5 text-yellow-500" />
            </p>
            <p className="text-sm text-gray-400 pt-0.5">
              21,000+ positive reviews
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/founders.png"
            alt=""
            width={600}
            height={600}
            className="w-[30rem] h-auto rounded-lg shadow"
          />
        </div>
      </section>
      <section className="w-full h-[80vh] px-62 py-28 flex flex-row-reverse gap-10 justify-center">
        <div className="h-full flex flex-col justify-center w-[45%] gap-3">
          <p className="text-4xl font-semibold">Startup fundraising</p>
          <p className="text-3xl">in your inbox</p>
          <p className="text-gray-500">
            Many reputated starups uses UniByte to manage startup fundraising
            for each batch, and so can you. Stay on top of conversations and
            follow up with investors to close a successful round.
          </p>
          <div>
            {/* para 1 */}
            <HoverCardDemo
              triggerText="Keep investor conversations organized"
              TriggerIcon={EnvelopeIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Track conversations with hundreds of investors through each step of your fundraising process. Find your notes, conversation histories, follow-up tasks, and more surfaced next to each investor email."
            />
            <HoverCardDemo
              triggerText="Set up failsafe systems to stay on top of follow-up"
              TriggerIcon={ClipboardIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Don't let conversations with investors go cold. Create pipeline filters to find who hasn't responded to your last email and use our dozens of Integrations and Automations to help set automatic tasks to follow up."
            />
            <HoverCardDemo
              triggerText="Start tracking important details with pipeline"
              TriggerIcon={ChartBarSquareIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Spend less time setting up your CRM and more time proving value to investors. The fundraising pipeline template lets you start tracking important details and next steps in just minutes."
            />
            <HoverCardDemo
              triggerText="Keep documents, contracts, and slide decks in one place"
              TriggerIcon={LightBulbIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Organize every email conversation and file in an auto-generated timeline for each potential investor. Add your own notes from calls and meetings and your to-do list for next steps."
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/investorConversation.png"
            alt=""
            width={600}
            height={600}
            className="w-[30rem] h-auto rounded-lg shadow"
          />
        </div>
      </section>
      <section className="w-full h-[80vh] px-62 py-28 flex gap-10 justify-center">
        <div className="h-full flex flex-col justify-center w-[48%] gap-3">
          <p className="text-4xl font-semibold">Hire a successful team</p>
          <p className="text-3xl">to scale your startup</p>
          <p className="text-gray-500">
            Don't let recruitment and hiring eat away at your time. Track
            referrals, applications, and interviews right inside Gmail. Share
            notes from interviews and save time on bulk outreach.
          </p>
          <div>
            {/* para 1 */}
            <HoverCardDemo
              triggerText="Track candidates for multiple roles in one pipeline"
              TriggerIcon={ListBulletIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Customize a pre-built pipeline template in minutes to start tracking all of your candidates in once place. Use filters to see who has an interview this week or to find all of your applications for a certain role."
            />
            <HoverCardDemo
              triggerText="Follow up with candidates in bulk using mail merge"
              TriggerIcon={BellAlertIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Save time updating candidates or moving them to the next step. Get back to each candidate in a timely fashion with personalized, mass emails to each applicant."
            />
            <HoverCardDemo
              triggerText="Debrief on candidate interviews"
              TriggerIcon={CalendarDaysIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Share thoughts with your team and learn how each step of the process went. Record call logs, internal notes, and share emails directly in Gmail."
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/hireTeam.png"
            alt=""
            width={600}
            height={600}
            className="w-[30rem] h-auto rounded-lg shadow"
          />
        </div>
      </section>
      <section className="w-full py-20 mt-16 px-62 flex flex-col items-center text-white bg-gradient-to-br from-[#074b48] to-[#095d59] gap-1">
        <p className="text-3xl font-semibold">We scale with you</p>
        <p className="text-2xl">
          And check all the boxes with our pro features
        </p>
        <div className="flex flex-wrap gap-10 mt-11">
          <div className="flex gap-2 w-[20%]">
            <div className="pt-0.5">
              <CheckIcon className="size-5 text-[#69faf2]" />
            </div>
            <div className="flex flex-col gap-1">
              <p>Integrations + API</p>
              <p className="text-xs text-gray-400">
                Full integration with Gsuite and over 2,000 integrations via
                Zapier
              </p>
            </div>
          </div>
          <div className="flex gap-2 w-[20%]">
            <div className="pt-0.5">
              <CheckIcon className="size-5 text-[#69faf2]" />
            </div>
            <div className="flex flex-col gap-1">
              <p>Importer tool</p>
              <p className="text-xs text-gray-400">
                Quickly bring in your contacts and data from another tool or
                spreadsheet
              </p>
            </div>
          </div>
          <div className="flex gap-2 w-[20%]">
            <div className="pt-0.5">
              <CheckIcon className="size-5 text-[#69faf2]" />
            </div>
            <div className="flex flex-col gap-1">
              <p>Email tracking</p>
              <p className="text-xs text-gray-400">
                Gauge interest and send targeted follow-up based on views and
                clicks on links in your emails.
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
                Visualize your fundraising and investment data
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[80vh] px-62 py-40 flex flex-row-reverse gap-10 justify-center">
        <div className="h-full flex flex-col justify-center w-[45%] gap-3">
          <p className="text-4xl font-semibold">Gain insight</p>
          <p className="text-3xl">
            with customer interviews and market research
          </p>
          <p className="text-gray-500">
            Work more efficiently in your inbox and reach buyers and sellers at
            the right time with targeted follow-up.
          </p>
          <div>
            {/* para 1 */}
            <HoverCardDemo
              triggerText="Upload customer lists with the importer tool"
              TriggerIcon={EyeIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Use Google Sheets or a cs to upload bulk lists of customers, email addresses, and other data. Create a full pipeline ready for interviews in minutes. We'll enrich your contacts with valuable data of our own."
            />
            <HoverCardDemo
              triggerText="Send personalized mass emails"
              TriggerIcon={DocumentIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Reach more people with mail merge in gmail. Send personalized messages in mass and schedule automatic follow-up to get more responses and conversations scheduled."
            />
            <HoverCardDemo
              triggerText="Record notes for each customer in Gmail"
              TriggerIcon={EnvelopeIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Keep track of important details from each conversation with notes in your pipelines. Better yet, add recordings of your calls to each box for easy access and future reference."
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/gainInsights.png"
            alt=""
            width={600}
            height={600}
            className="w-[30rem] h-auto rounded-lg"
          />
        </div>
      </section>
      <Hiring />
      <Footer />
    </div>
  );
}
