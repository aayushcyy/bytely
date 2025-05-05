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
          <p className="text-4xl font-semibold">Build relationships</p>
          <p className="text-3xl">with buyer and sellers</p>
          <p className="text-gray-500">
            Gain valuable insights about your clients, access their data when
            you need it, and always add a personal touch without ever leaving
            Gmail.
          </p>
          <div>
            {/* para 1 */}
            <HoverCardDemo
              triggerText="360° view of your contacts and their history"
              TriggerIcon={UserCircleIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="See a timeline of each client's purchases, sales, and interactions to better understand their history - and where they're headed next."
            />
            <HoverCardDemo
              triggerText="Information about your deals at your fingertips"
              TriggerIcon={ChartBarSquareIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="See information about each client and deal right next to your email conversations. Find and update contacts, notes, dates, and recent activity without leaving your inbox."
            />
            <HoverCardDemo
              triggerText="Develop meaningful connections with clients"
              TriggerIcon={ListBulletIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Take note of birthdays, anniversaries, and details like upcoming vacations. Surprise and delight in your next call or email by checking in on a personal level."
            />
            <HoverCardDemo
              triggerText="Make consistency the key to your lasting relationships"
              TriggerIcon={ArrowsUpDownIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Make a great impression with consistent outreach. Move deals forward and keep clients engaged with tasks and reminders to follow-up."
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/360deg.png"
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
      <section className="w-full h-[80vh] px-62 py-40 flex flex-row-reverse gap-10 justify-center bg-[#FAF6FC]">
        <div className="h-full flex flex-col justify-center w-[45%] gap-3">
          <p className="text-4xl font-semibold">Create tasks and follow up</p>
          <p className="text-3xl">for every step of your process</p>
          <p className="text-gray-500">
            Quit relying on your memory or your scratch pad to get everything
            done. Make sure nothing slips through the cracks with tasks for
            every step of your process.
          </p>
          <div>
            {/* para 1 */}
            <HoverCardDemo
              triggerText="Custom task lists for each stage"
              TriggerIcon={ListBulletIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Create tasks for property showings, due diligence, and each step of your process to keep deals moving forward. Automate task list creation for a more streamlined workforce."
            />
            <HoverCardDemo
              triggerText="Know what needs to get done at a glance"
              TriggerIcon={BellAlertIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Create custom views of your buyer, seller, and other important tasks. Surface them right in your inbox so you know what needs to get done each day."
            />
            <HoverCardDemo
              triggerText="Sync tasks with Google Calendar"
              TriggerIcon={CalendarDaysIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="See your tasks displayed in Google Calendar to help plan your day."
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/customTasks.png"
            alt=""
            width={600}
            height={600}
            className="w-[30rem] h-auto rounded-lg border-[1px] border-[#3f807920]"
          />
        </div>
      </section>
      <Hiring />
      <Footer />
    </div>
  );
}
