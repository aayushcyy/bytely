"use client";
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
      <div className="flex flex-col gap-24 lg:gap-32 w-full items-center px-4 lg:px-0">
        {/* Hero Section */}
        <section className="pt-24 lg:pt-32 text-center">
          <p className="text-3xl lg:text-5xl font-semibold">CRM for Support</p>
          <p className="text-xl lg:text-3xl mt-5">
            Transform your Email Into a Support Queue
          </p>
        </section>

        {/* Section 1 */}
        <section className="flex flex-col-reverse lg:flex-row justify-center items-center w-full gap-10 px-4 lg:px-0">
          <div className="flex flex-col gap-5 lg:w-[35%] w-full">
            <p className="text-2xl lg:text-3xl font-semibold">
              Provide Support Right from Gmail
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-lg lg:text-xl font-semibold">
                  Built Into Your Inbox
                </p>
                <p className="text-sm text-gray-500 lg:w-[70%]">
                  No need to switch platforms — manage all support conversations
                  within Gmail using familiar tools.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg lg:text-xl font-semibold">
                  Zero Learning Curve
                </p>
                <p className="text-sm text-gray-500 lg:w-[70%]">
                  Works just like Gmail, so your team stays productive without
                  needing extra training.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-auto">
            <Image
              src="/supportEmail.png"
              alt="Support Email"
              height={600}
              width={600}
              className="w-full max-w-[32rem] h-auto shadow rounded-lg"
            />
          </div>
        </section>

        {/* Section 2 */}
        <section className="flex flex-col lg:flex-row-reverse justify-center items-center w-full gap-10 px-4 lg:px-0">
          <div className="flex flex-col gap-5 lg:w-[35%] w-full">
            <p className="text-2xl lg:text-3xl font-semibold">
              Automate & Standardize Replies
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-lg lg:text-xl font-semibold">
                  Answer Faster With Snippets
                </p>
                <p className="text-sm text-gray-500 lg:w-[70%]">
                  Use shortcut commands to insert full replies to common
                  questions instantly.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg lg:text-xl font-semibold">
                  Shareable Team Library
                </p>
                <p className="text-sm text-gray-500 lg:w-[70%]">
                  Keep your support voice consistent with editable, shared
                  templates.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-auto">
            <Image
              src="/automateResponse.png"
              alt="Automate Responses"
              height={600}
              width={600}
              className="w-full max-w-[32rem] h-auto shadow rounded-lg"
            />
          </div>
        </section>

        {/* Section 3 */}
        <section className="flex flex-col-reverse lg:flex-row justify-center items-center w-full gap-10 px-4 lg:px-0">
          <div className="flex flex-col gap-5 lg:w-[35%] w-full">
            <p className="text-2xl lg:text-3xl font-semibold">
              Know Every Customer's Story
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-lg lg:text-xl font-semibold">
                  Complete History at a Glance
                </p>
                <p className="text-sm text-gray-500 lg:w-[70%]">
                  Access every past interaction, so you know exactly who you're
                  helping and how.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg lg:text-xl font-semibold">
                  Cross-Team Visibility
                </p>
                <p className="text-sm text-gray-500 lg:w-[70%]">
                  View files and conversations from other departments — even if
                  you're not on the thread.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-auto">
            <Image
              src="/customersStory.png"
              alt="Customer History"
              height={600}
              width={600}
              className="w-full max-w-[32rem] h-auto shadow rounded-lg"
            />
          </div>
        </section>

        {/* Section 4 */}
        <section className="flex flex-col lg:flex-row-reverse justify-center items-center w-full gap-10 px-4 lg:px-0">
          <div className="flex flex-col gap-5 lg:w-[35%] w-full">
            <p className="text-2xl lg:text-3xl font-semibold">
              Stay on Top & Improve Over Time
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-lg lg:text-xl font-semibold">
                  Real-Time Visibility
                </p>
                <p className="text-sm text-gray-500 lg:w-[70%]">
                  Pin priority issues, track key clients, and get alerts when it
                  matters most.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg lg:text-xl font-semibold">
                  Insights That Matter
                </p>
                <p className="text-sm text-gray-500 lg:w-[70%]">
                  Analyze trends, monitor performance, and continuously improve
                  your support pipeline.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-auto">
            <Image
              src="/stayOnTop.png"
              alt="Insights"
              height={600}
              width={600}
              className="w-full max-w-[32rem] h-auto shadow rounded-lg"
            />
          </div>
        </section>

        {/* Divider */}
        <span className="h-[1px] bg-gray-200 w-[50%] lg:w-[30%]"></span>

        {/* Final CTA Section */}
        <section className="flex flex-col justify-center items-center w-full gap-6 lg:gap-10 pb-24 px-4 lg:px-0">
          <p className="text-3xl lg:text-4xl font-semibold">Still not sure?</p>
          <p className="text-base lg:text-xl font-medium text-gray-600 text-center leading-7 lg:leading-10">
            Try UniByte free for 14 days. <br /> And because you already know
            Gmail, <br />
            you'll master UniByte in minutes.
          </p>
          <ButtonDemo
            text="Contact us to get access"
            className="bg-[#08514D] px-6 py-4 text-white cursor-pointer text-base rounded-xl hover:bg-gradient-to-r from-teal-900 to-teal-600"
          />
        </section>
      </div>
      <Hiring />
      <Footer />
    </div>
  );
}
