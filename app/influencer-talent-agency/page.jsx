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
      <section className="w-full h-[90vh] px-62 flex pt-20 gap-10 items-center justify-center">
        <div className="h-full flex flex-col justify-center w-[45%] gap-3">
          <p className="text-5xl font-bold leading-14">
            CRM for Talent & Influencer Agencies
          </p>
          <p className="text-lg font-medium">
            Manage your talent roster and brand outreach campaigns directly in
            Gmail
          </p>
          <div className="flex gap-3 mt-2">
            <p className="flex gap-1">
              <StarIcon className="size-5 text-yellow-500" />
              <StarIcon className="size-5 text-yellow-500" />
              <StarIcon className="size-5 text-yellow-500" />
              <StarIcon className="size-5 text-yellow-500" />
            </p>
            <p className="text-sm text-gray-400 pt-0.5">
              32,000+ positive reviews
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/talent.png"
            alt=""
            width={600}
            height={600}
            className="w-[30rem] h-auto rounded-lg shadow"
          />
        </div>
      </section>
      <section className="w-full h-[80vh] px-62 py-28 flex flex-row-reverse gap-10 justify-center">
        <div className="h-full flex flex-col justify-center w-[45%] gap-3">
          <p className="text-4xl font-semibold">Manage your creators</p>
          <p className="text-3xl">and brand outreach campaigns</p>
          <p className="text-gray-500">
            Manage talent and brand partnerships inside Gmail. UniByte replaces
            spreadsheets and scattered tools with a fast, flexible CRM built
            into Google Workspace.
          </p>
          <div>
            {/* para 1 */}
            <HoverCardDemo
              triggerText="Keep your talent roster organized in Gmail"
              TriggerIcon={UserCircleIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Import creators, brands, and partners with a few clicks. UniByte auto-enriches contacts and organizations key info and past threads so you have the full context on every relationship."
            />
            <HoverCardDemo
              triggerText="Pitch creators and manage brand deals at scale"
              TriggerIcon={MagnifyingGlassIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Create mail merges to send partnership pitches, campaign updates, or availability checks. Include brand names, rates, and social handles to make every email feel personal. Track opens, clicks, and follow-ups-all from Gmail."
            />
            <HoverCardDemo
              triggerText="Centralize campaign briefs and conversations"
              TriggerIcon={UsersIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Manage every pitch, contract, and brand brief in one timeline. Attach rate cards, usage terms, content approvals, and feedback to keep your team and creators aligned."
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/CustomTasks.png"
            alt=""
            width={600}
            height={600}
            className="w-[30rem] h-auto rounded-lg shadow"
          />
        </div>
      </section>
      <section className="w-full h-[80vh] px-62 py-28 flex gap-10 justify-center">
        <div className="h-full flex flex-col justify-center w-[48%] gap-3">
          <p className="text-4xl font-semibold">Organize your inbox</p>
          <p className="text-3xl">to run successful campaigns</p>
          <p className="text-gray-500">
            Streamline agency operations and keep campaigns, creators, and brand
            deliverables on track—without leaving Gmail.
          </p>
          <div>
            {/* para 1 */}
            <HoverCardDemo
              triggerText="Stay aligned on brand and creator updates"
              TriggerIcon={ChartBarSquareIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Track campaign progress, contracts, deliverables, and past conversations in one shared timeline. See every update across your team-from brand briefs to media kits-directly in your inbox."
            />
            <HoverCardDemo
              triggerText="Multiple pipelines for different workflows"
              TriggerIcon={ClipboardIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Build custom pipelines for campaign execution, talent management, and brand outreach. Organize by stage, team, or client, and use fields and automations to keep things moving."
            />
            <HoverCardDemo
              triggerText="Assign tasks and track progress"
              TriggerIcon={LightBulbIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Assign teammates to next steps, set due dates, and track ownership-no more pinging around for status updates."
            />
            <HoverCardDemo
              triggerText="Know what's next without leaving your inbox"
              TriggerIcon={BellAlertIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Create filters to surface upcoming check-ins, pending brand approvals, or overdue deliverables so your team stays on top of priorities."
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/colorPipeline.png"
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
          <p className="text-4xl font-semibold">Work smarter in Gmail</p>
          <p className="text-3xl">with email power tools</p>
          <p className="text-gray-500">
            Work more efficiently in your inbox to make sure you're making the
            most of your limited time.
          </p>
          <div>
            {/* para 1 */}
            <HoverCardDemo
              triggerText="Track views on your sent emails"
              TriggerIcon={EyeIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Gauge interest with email view tracking. Follow up with engaged leads who opened your emails multiple times and clicked on links."
            />
            <HoverCardDemo
              triggerText="Email more efficiently with snippets"
              TriggerIcon={DocumentIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Streamline your process with saved replies and create email templates for the most common questions and requests."
            />
            <HoverCardDemo
              triggerText="Send mass, personalized emails from your inbox"
              TriggerIcon={EnvelopeIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Create email sequences to regularly keep customers informed, schedule newsletters and create personalized outreach sequences. Schedule automatic follow-ups to get more responses and track email views and clicks to identify engaged leads."
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
