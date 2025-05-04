import React from "react";
import Navbar from "../Component/Navbar";
import Image from "next/image";
import Footer from "../Component/Footer";
import { ButtonDemo } from "../Component/Button";
import Hiring from "../Component/Hiring";

export default function page() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <div className="flex flex-col gap-32 w-full items-center">
        <section className="pt-32 flex flex-col items-center gap-1">
          <p className="text-5xl font-semibold">CRM for Support</p>
          <p className="text-3xl mt-5">
            Transform your Email Into a Support Queue
          </p>
        </section>
        <section className="flex justify-center items-center w-full gap-10">
          <div className="flex flex-col gap-5 w-[35%]">
            <p className="text-3xl font-semibold">
              Provide Support Right from Gmail
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">Built Into Your Inbox</p>
                <p className="text-sm text-gray-500 w-[70%]">
                  No need to switch platforms manage all support conversations
                  within Gmail using familiar tools.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">Zero Learning Curve</p>
                <p className="text-sm text-gray-500 w-[70%]">
                  Works just like Gmail, so your team stays productive without
                  needing extra training.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/supportEmail.png"
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
              Automate & Standardize Replies
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">
                  Answer Faster With Snippets
                </p>
                <p className="text-sm text-gray-500 w-[70%]">
                  Use shortcut commands to insert full replies to common
                  questions instantly.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">Shareable Team Library</p>
                <p className="text-sm text-gray-500 w-[70%]">
                  Keep your support voice consistent with editable, shared
                  templates.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/automateResponse.png"
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
              Know Every Customer's Story
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">
                  Complete History at a Glance
                </p>
                <p className="text-sm text-gray-500 w-[70%]">
                  Access every past interaction, so you know exactly who you're
                  helping and how.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">Cross-Team Visibility</p>
                <p className="text-sm text-gray-500 w-[70%]">
                  View files and conversations from other departments — even if
                  you're not on the thread.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/customersStory.png"
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
              Stay on Top & Improve Over Time
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">Real-Time Visibility</p>
                <p className="text-sm text-gray-500 w-[70%]">
                  Pin priority issues, track key clients, and get alerts when it
                  matters most.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">Insights That Matter</p>
                <p className="text-sm text-gray-500 w-[70%]">
                  Analyze trends, monitor performance, and continuously improve
                  your support pipeline.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/stayOnTop.png"
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
      <Hiring />
      <Footer />
    </div>
  );
}
