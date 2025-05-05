import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { HoverCardDemo } from "../Component/HoverCard";
import {
  StarIcon,
  EnvelopeIcon,
  ChartBarSquareIcon,
  MagnifyingGlassIcon,
  PaperClipIcon,
  UserCircleIcon,
  ListBulletIcon,
  ArrowsUpDownIcon,
  CheckIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Hiring from "../Component/Hiring";

export default function page() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <section className="w-full h-[90vh] px-62 flex pt-20 gap-10 items-center justify-center">
        <div className="h-full flex flex-col justify-center w-[45%] gap-3">
          <p className="text-5xl font-bold leading-14">
            Venture Capital CRM in Gmail
          </p>
          <p className="text-lg font-medium">
            Manage deal flow, LPs, and portfolio companies with pipelines in
            Gmail.
          </p>
          <div className="flex gap-3 mt-2">
            <p className="flex gap-1">
              <StarIcon className="size-5 text-yellow-500" />
              <StarIcon className="size-5 text-yellow-500" />
              <StarIcon className="size-5 text-yellow-500" />
            </p>
            <p className="text-sm text-gray-400 pt-0.5">
              20,000+ positive reviews
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/fundraising.png"
            alt=""
            width={600}
            height={600}
            className="w-[30rem] h-auto rounded-lg shadow"
          />
        </div>
      </section>
      <section className="w-full h-[80vh] px-62 py-28 flex flex-row-reverse gap-10 justify-center">
        <div className="h-full flex flex-col justify-center w-[45%] gap-3">
          <p className="text-4xl font-semibold">Track deal flow in Gmail</p>
          <p className="text-3xl">and prioritize companies</p>
          <p className="text-gray-500">
            Never miss out on a deal. Identify high-quality companies and push
            your deals forward with pipelines in Gmail.
          </p>
          <div>
            {/* para 1 */}
            <HoverCardDemo
              triggerText="Investment Data seamlessly integrated into Gmail"
              TriggerIcon={EnvelopeIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Update your pipeline data right from your inbox. Create
                  contact, tasks, and notes from your email conversations
                  without switching tabs or tools."
            />
            <HoverCardDemo
              triggerText="Prioritize investments with real-time insights"
              TriggerIcon={ChartBarSquareIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Never let a hot deal slip through the cracks. Filter and sort
                  your pipelines to identify high quality investment
                  opportunities and move them through your pipeline."
            />
            <HoverCardDemo
              triggerText="Track copanies quickly with pipeline templates"
              TriggerIcon={MagnifyingGlassIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Get set up in minutes. Customize a beutiful pipeline templates
                  to track conversations and details about each company in your
                  inbox. Add contacts and companies from your inbox in just one
                  click."
            />
            <HoverCardDemo
              triggerText="Keep documents and pitch decks organized"
              TriggerIcon={PaperClipIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Attached documents are automatically extracted from your
                  emails and organizes in your pipelines. Access pitch decks and
                  documents without sifting through piles of data."
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/emailTracking.png"
            alt=""
            width={600}
            height={600}
            className="w-[30rem] h-auto rounded-lg shadow"
          />
        </div>
      </section>
      <section className="w-full h-[80vh] px-62 py-28 flex gap-10 justify-center">
        <div className="h-full flex flex-col justify-center w-[48%] gap-3">
          <p className="text-4xl font-semibold">Manage your capital raise</p>
          <p className="text-3xl">and LP relationships</p>
          <p className="text-gray-500">
            See a complete timeline of your interactions with each LP. Keep
            track of their interests and personal details all in one place.
          </p>
          <div>
            {/* para 1 */}
            <HoverCardDemo
              triggerText="Investment history for each contact"
              TriggerIcon={UserCircleIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Search, filter, group, and sort your data in any configuration and save the results as a custom view. Share with the entire team or surface directly in your inbox."
            />
            <HoverCardDemo
              triggerText="Track each capital raise"
              TriggerIcon={ChartBarSquareIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Keep track of LPs throughout each stage of conversation and closing. See where you are in the process with data and insights right in Gmail."
            />
            <HoverCardDemo
              triggerText="Quick access to the information you need"
              TriggerIcon={ListBulletIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Automatically scrape attachments and documents from emails and add them to your pipelines. Quickly access pitch decks, financial documents, and partner updates without getting bogged down by data you don't need."
            />
            <HoverCardDemo
              triggerText="Avoid crossing wires with your email outreach"
              TriggerIcon={ArrowsUpDownIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="No email faux-pax here. Get a heads up if you're about to email a contact who's already been in touch with someone on your team."
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/capitalRaise.png"
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
          <p className="text-4xl font-semibold">Stay on top of support</p>
          <p className="text-3xl">for your portfolio companies</p>
          <p className="text-gray-500">
            Coordinate support and stay in touch with each company in your
            portfolio.
          </p>
          <div>
            {/* para 1 */}
            <HoverCardDemo
              triggerText="Create tasks to help your portfolio companies succeed"
              TriggerIcon={ShieldCheckIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Organize tasks, keep track of support for your portfolio companies, and see what's already been done in each stage."
            />
            <HoverCardDemo
              triggerText="Communicate efficiently with your portfolio companies"
              TriggerIcon={EnvelopeIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Send and schedule mail merges with automatic follow-up to stay in touch with your portfolio companies. Share updates in newsletters, request information, and track engagement in Gmail."
            />
            <HoverCardDemo
              triggerText="Diligently follow up on calls and meetings"
              TriggerIcon={ChatBubbleLeftRightIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Make sure nothing slips through the cracks when your day is stacked with calls. Take notes and create follow-up tasks while you're on a call or in a meeting."
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/topSupport.png"
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
