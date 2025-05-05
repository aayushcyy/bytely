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
            Real Estate CRM in Gmail
          </p>
          <p className="text-lg font-medium">
            Manage buyers, sellers, and transactions with pipelines in Gmail.
          </p>
          <div className="flex gap-3 mt-2">
            <p className="flex gap-1">
              <StarIcon className="size-5 text-yellow-500" />
              <StarIcon className="size-5 text-yellow-500" />
              <StarIcon className="size-5 text-yellow-500" />
            </p>
            <p className="text-sm text-gray-400 pt-0.5">
              17,000+ positive reviews
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/realestate.png"
            alt=""
            width={600}
            height={600}
            className="w-[30rem] h-auto rounded-lg shadow"
          />
        </div>
      </section>
      <section className="w-full h-[80vh] px-62 py-28 flex flex-row-reverse gap-10 justify-center">
        <div className="h-full flex flex-col justify-center w-[45%] gap-3">
          <p className="text-4xl font-semibold">Organize transactions</p>
          <p className="text-3xl">and documents in Gmail</p>
          <p className="text-gray-500">
            Keep track of all the details and documents you need to close a deal
            in one place.
          </p>
          <div>
            {/* para 1 */}
            <HoverCardDemo
              triggerText="Real Estate data seamlessly integrated into Gmall"
              TriggerIcon={EnvelopeIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Create a database for your listings, buyers, and sellers. Keep track of each transaction with customizable pipeline templates."
            />
            <HoverCardDemo
              triggerText="All your documents in one place"
              TriggerIcon={ClipboardIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Organize and share contracts, disclosures, and receipts along with your emails in Gmail - where you're already working."
            />
            <HoverCardDemo
              triggerText="Customize your pipeline to match your way"
              TriggerIcon={ChartBarSquareIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Track what's important to you with custom data fields. Easily add and rename stages for each step of your process and create task lists to close your deals faster."
            />
            <HoverCardDemo
              triggerText="Calculate commission and gain insights"
              TriggerIcon={LightBulbIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Let your pipeline work for you. Calculate commissions automatically with formula columns, see real-time interaction data for your contacts, and gain insights to close more deals."
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/realestate.png"
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
