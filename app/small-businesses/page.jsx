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
            CRM for small businesses
          </p>
          <p className="text-lg font-medium">
            Manage sales, orders, projects, and partnerships in Gmail. A true
            multi-tool for any small business owner.
          </p>
          <div className="flex gap-3 mt-2">
            <p className="flex gap-1">
              <StarIcon className="size-5 text-yellow-500" />
              <StarIcon className="size-5 text-yellow-500" />
              <StarIcon className="size-5 text-yellow-500" />
              <StarIcon className="size-5 text-yellow-500" />
              <StarIcon className="size-5 text-yellow-500" />
            </p>
            <p className="text-sm text-gray-400 pt-0.5">
              59,000+ positive reviews
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/salesPipeline.png"
            alt=""
            width={600}
            height={600}
            className="w-[30rem] h-auto rounded-lg shadow"
          />
        </div>
      </section>
      <section className="w-full h-[80vh] px-62 py-28 flex flex-row-reverse gap-10 justify-center">
        <div className="h-full flex flex-col justify-center w-[45%] gap-3">
          <p className="text-4xl font-semibold">Close more deals</p>
          <p className="text-3xl">with a healthy sales pipeline</p>
          <p className="text-gray-500">
            Prioritize important deals and always know where to focus your
            energy within your sales or orders pipeline.
          </p>
          <div>
            {/* para 1 */}
            <HoverCardDemo
              triggerText="Start moving leads through your pipeline in minutes"
              TriggerIcon={UserCircleIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Create a pipeline with your emails organized into a deal for each lead in minutes. See who's engaged with email tracking and interaction metadata. Track orders all the way through your process."
            />
            <HoverCardDemo
              triggerText="Focus your energy on the most important opportunities"
              TriggerIcon={MagnifyingGlassIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Surface your highest priority deals in your inbox with pipeline filters. See which leads are closing soon or need more information so you can reach out to keep the deal moving forward."
            />
            <HoverCardDemo
              triggerText="Record notes and share conversations with co-founders"
              TriggerIcon={UsersIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Keep track of your sales calls with call logs. Share conversations with co-founders in your pipelines. Add to your to-do list during the call so you never miss the next step needed to close a deal."
            />
            <HoverCardDemo
              triggerText="Integrate directly with tools you're already using"
              TriggerIcon={LightBulbIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="With our integrations & automations you can integrate with tools like Calendly, Slack, Typeform and Google Forms to automate processes you're manually doing currently. Spend more time selling and less time with data entry."
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/priority.png"
            alt=""
            width={600}
            height={600}
            className="w-[30rem] h-auto rounded-lg shadow"
          />
        </div>
      </section>
      <section className="w-full h-[80vh] px-62 py-28 flex gap-10 justify-center">
        <div className="h-full flex flex-col justify-center w-[48%] gap-3">
          <p className="text-4xl font-semibold">Build lasting partnerships</p>
          <p className="text-3xl">and expand your network</p>
          <p className="text-gray-500">
            With completely customizable pipelines, you can keep track of your
            contacts across numerous deals and projects. From your desktop Gmail
            app and on the go.
          </p>
          <div>
            {/* para 1 */}
            <HoverCardDemo
              triggerText="Expand your network and quickly fill your pipeline"
              TriggerIcon={DevicePhoneMobileIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Import a list of potential partners from a spreadsheet or add them from your inbox with one click. Then, keep track of your relationships on the go with our iOS and Android apps."
            />
            <HoverCardDemo
              triggerText="Keep important details and documents in one place"
              TriggerIcon={CursorArrowRaysIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Automatically scrape file attachments from emails and keep them organized for each potential partner. Customize pipeline fields to continually add data of your own."
            />
            <HoverCardDemo
              triggerText="Learn more about your contacts with auto-enrichment"
              TriggerIcon={ChatBubbleBottomCenterTextIcon}
              //   onMouseEnter={() => setImageToShow("f1")}
              content="Add a Streak contact that's automatically enriched with company logos, profile pictures, social media links, and other publicly available data."
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/mobile.png"
            alt=""
            width={600}
            height={600}
            className="w-[30rem] h-auto rounded-lg"
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
