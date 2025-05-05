import React from "react";
import Navbar from "../Component/Navbar";
import Image from "next/image";
import Footer from "../Component/Footer";
import { ButtonDemo } from "../Component/Button";
import Hiring from "../Component/Hiring";

export default function Page() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <div className="flex flex-col gap-32 w-full items-center px-4 lg:px-0">
        {/* HERO SECTION */}
        <section className="pt-36 flex flex-col items-center gap-1 text-center">
          <p className="text-4xl font-semibold">CRM for Product Development</p>
          <p className="text-2xl mt-5">
            Channel Discussion into Product Development
          </p>
        </section>

        {/* SECTION 1 */}
        <section className="flex flex-col lg:flex-row justify-center items-center w-full gap-10 max-w-7xl">
          <div className="flex flex-col gap-5 w-full lg:w-[35%]">
            <p className="text-2xl lg:text-3xl font-semibold">
              Turn Conversations Into Action
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-lg lg:text-xl font-semibold">
                  Gmail as Your Workspace
                </p>
                <p className="text-sm text-gray-500">
                  Build on the platform your team already uses — turn product
                  talk in Gmail into structured execution.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg lg:text-xl font-semibold">
                  Effortless Collaboration
                </p>
                <p className="text-sm text-gray-500">
                  Familiar spreadsheet-style views let everyone jump in without
                  a learning curve.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-auto">
            <Image
              src="/conversationIntoAction.png"
              alt=""
              height={600}
              width={600}
              className="w-full max-w-[32rem] h-auto shadow rounded-lg"
            />
          </div>
        </section>

        {/* SECTION 2 */}
        <section className="flex flex-col-reverse lg:flex-row-reverse justify-center items-center w-full gap-10 max-w-7xl">
          <div className="flex flex-col gap-5 w-full lg:w-[35%]">
            <p className="text-2xl lg:text-3xl font-semibold">
              Centralize Projects & Teams
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-lg lg:text-xl font-semibold">
                  Everything in One Hub
                </p>
                <p className="text-sm text-gray-500">
                  Store files, designs, and proposals tied to any project —
                  right inside your inbox.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg lg:text-xl font-semibold">
                  Seamless Cross-Team Sharing
                </p>
                <p className="text-sm text-gray-500">
                  Share updates with engineers, clients, or teammates using
                  controlled permissions.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-auto">
            <Image
              src="/hub.png"
              alt=""
              height={600}
              width={600}
              className="w-full max-w-[32rem] h-auto shadow rounded-lg"
            />
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="flex flex-col lg:flex-row justify-center items-center w-full gap-10 max-w-7xl">
          <div className="flex flex-col gap-5 w-full lg:w-[35%]">
            <p className="text-2xl lg:text-3xl font-semibold">
              Track Progress with Smart Insights
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-lg lg:text-xl font-semibold">
                  Visualize Your Workflow
                </p>
                <p className="text-sm text-gray-500">
                  Instantly spot delays and bottlenecks from idea to launch with
                  built-in reporting.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg lg:text-xl font-semibold">
                  Automated Metrics
                </p>
                <p className="text-sm text-gray-500">
                  Use formulas to calculate things like time-to-market and
                  release accuracy — without extra tools.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-auto">
            <Image
              src="/visualizeDevelopment.png"
              alt=""
              height={600}
              width={600}
              className="w-full max-w-[32rem] h-auto shadow rounded-lg"
            />
          </div>
        </section>

        {/* SECTION 4 */}
        <section className="flex flex-col-reverse lg:flex-row-reverse justify-center items-center w-full gap-10 max-w-7xl">
          <div className="flex flex-col gap-5 w-full lg:w-[35%]">
            <p className="text-2xl lg:text-3xl font-semibold">
              Stay Agile & Always On Schedule
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-lg lg:text-xl font-semibold">
                  Deadline Reminders
                </p>
                <p className="text-sm text-gray-500">
                  Set milestones and reminders for your team to stay aligned and
                  on pace.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg lg:text-xl font-semibold">
                  Flexible & Fast Setup
                </p>
                <p className="text-sm text-gray-500">
                  Start in under a minute with a ready made dev pipeline. Import
                  data easily and adapt as you go.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-auto">
            <Image
              src="/deadline.png"
              alt=""
              height={600}
              width={600}
              className="w-full max-w-[32rem] h-auto shadow rounded-lg"
            />
          </div>
        </section>

        {/* DIVIDER */}
        <span className="h-[1px] bg-gray-200 w-[80%] lg:w-[30%]"></span>

        {/* CTA SECTION */}
        <section className="flex flex-col justify-center items-center w-full gap-10 xl:pb-36 lg:pb-32 text-center px-2 max-w-4xl">
          <p className="text-3xl lg:text-4xl font-semibold">Still not sure?</p>
          <p className="text-base lg:text-xl font-medium text-gray-600 leading-8">
            Try UniByte free for 14 days. And because you{" "}
            <br className="hidden lg:block" />
            already know how to use Gmail, you'll master UniByte in minutes.
          </p>
          <ButtonDemo
            text="Contact us to get access"
            className="bg-[#08514D] px-4 py-5 text-white cursor-pointer text-base rounded-xl hover:bg-gradient-to-r from-teal-900 to-teal-600"
          />
        </section>
      </div>
      <Hiring />
      <Footer />
    </div>
  );
}
