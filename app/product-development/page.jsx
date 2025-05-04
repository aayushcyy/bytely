import React from "react";
import Navbar from "../Component/Navbar";
import Image from "next/image";
import Footer from "../Component/Footer";
import { ButtonDemo } from "../Component/Button";

export default function page() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <div className="flex flex-col gap-32 w-full items-center">
        <section className="pt-36 flex flex-col items-center gap-1">
          <p className="text-5xl font-semibold">CRM for Product Development</p>
          <p className="text-3xl mt-5">
            Channel Discussion into Product Development
          </p>
        </section>
        <section className="flex justify-center items-center w-full gap-10">
          <div className="flex flex-col gap-5 w-[35%]">
            <p className="text-3xl font-semibold">
              Turn Conversations Into Action
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">Gmail as Your Workspace</p>
                <p className="text-sm text-gray-500 w-[70%]">
                  Build on the platform your team already uses turn product talk
                  in Gmail into structured execution.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">
                  Effortless Collaboration
                </p>
                <p className="text-sm text-gray-500 w-[70%]">
                  Familiar spreadsheet-style views let everyone jump in without
                  a learning curve.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/conversationIntoAction.png"
              alt=""
              height={600}
              width={600}
              className="w-[32rem] h-auto shadow rounded-lg"
            />
          </div>
        </section>
        <section className="flex flex-row-reverse justify-center items-center w-full gap-10">
          <div className="flex flex-col gap-5 w-[35%]">
            <p className="text-3xl font-semibold">
              Centralize Projects & Teams
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">Everything in One Hub</p>
                <p className="text-sm text-gray-500 w-[70%]">
                  Store files, designs, and proposals tied to any project —
                  right inside your inbox.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">
                  Seamless Cross-Team Sharing
                </p>
                <p className="text-sm text-gray-500 w-[70%]">
                  Share updates with engineers, clients, or teammates using
                  controlled permissions.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/hub.png"
              alt=""
              height={600}
              width={600}
              className="w-[32rem] h-auto shadow rounded-lg"
            />
          </div>
        </section>
        <section className="flex justify-center items-center w-full gap-10">
          <div className="flex flex-col gap-5 w-[35%]">
            <p className="text-3xl font-semibold">
              Track Progress with Smart Insights
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">Visualize Your Workflow</p>
                <p className="text-sm text-gray-500 w-[70%]">
                  Instantly spot delays and bottlenecks from idea to launch with
                  built-in reporting.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">Automated Metrics</p>
                <p className="text-sm text-gray-500 w-[70%]">
                  Use formulas to calculate things like time-to-market and
                  release accuracy — without extra tools.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/visualizeDevelopment.png"
              alt=""
              height={600}
              width={600}
              className="w-[32rem] h-auto shadow rounded-lg"
            />
          </div>
        </section>
        <section className="flex flex-row-reverse justify-center items-center w-full gap-10">
          <div className="flex flex-col gap-5 w-[35%]">
            <p className="text-3xl font-semibold">
              Stay Agile & Always On Schedule
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">Deadline Reminders</p>
                <p className="text-sm text-gray-500 w-[70%]">
                  Set milestones and reminders for your team to stay aligned and
                  on pace.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">Flexible & Fast Setup</p>
                <p className="text-sm text-gray-500 w-[70%]">
                  Start in under a minute with a ready made dev pipeline. Import
                  data easily and adapt as you go.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/deadline.png"
              alt=""
              height={600}
              width={600}
              className="w-[32rem] h-auto shadow rounded-lg"
            />
          </div>
        </section>
        <span className="h-[1px] bg-gray-200 w-[30%]"></span>
        <section className="flex flex-col justify-center items-center w-full gap-10 pb-36">
          <p className="text-4xl font-semibold">Still not sure?</p>
          <p className="text-xl font-medium text-gray-600 text-center leading-10">
            Try UniByte free for 14 days. And because you <br /> already know
            how to use Gmail, you'll master UniByte in minutes.
          </p>
          <ButtonDemo
            text="Contact us to get access"
            className="bg-[#08514D] px-4 py-5 text-white cursor-pointer text-base rounded-xl hover:bg-gradient-to-r from-teal-900 to-teal-600"
          />
        </section>
      </div>
      <Footer />
    </div>
  );
}
