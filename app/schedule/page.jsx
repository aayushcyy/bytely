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
          <p className="text-5xl font-semibold">Send Later</p>
          <p className="text-3xl mt-5">
            Schedule an email to be sent at a specific time!
          </p>
        </section>
        <section className="flex justify-center items-center w-full gap-10">
          <div className="flex flex-col gap-5 w-[35%]">
            <p className="text-3xl font-semibold">
              Easily Schedule an Email to Send Later
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">
                  Send Later Integrated into Gmail
                </p>
                <p className="text-sm text-gray-500 w-[70%]">
                  Streak adds the Send Later feature directly into your Gmail
                  toolbar.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">Use Plain English</p>
                <p className="text-sm text-gray-500 w-[70%]">
                  Want to write an email now but schedule to send it 'next
                  monday 8am'? No problem!
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/schedule.png"
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
              Saved Securely in Your Gmail Drafts
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">Send Later, Worry Never</p>
                <p className="text-sm text-gray-500 w-[90%]">
                  UniByte doesn't host your email 'Send later' messages remain
                  safely at home in your drafts. Not only is this extra secure,
                  but you can edit your message at any time before it is sent.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/savedMail.png"
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
              How to use this to Get Things Done?
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">
                  Send Sales Follow Ups at the Appropriate Time
                </p>
                <p className="text-sm text-gray-500 w-[70%]">
                  Use 'send later' to arrive in the inbox of a potential
                  customer at the perfect moment.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">Post Demo Follow Up</p>
                <p className="text-sm text-gray-500 w-[70%]">
                  Write a follow up based on the demo you just completed.
                  Include context and answer questions while you're in the
                  moment. Follow up on the demo without having to remember.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">
                  Wish Your Best Customers Happy Birthday!
                </p>
                <p className="text-sm text-gray-500 w-[70%]">
                  Are you creating a personal touch with your best customers on
                  their Birthday? Schedule your best wishes in advance and never
                  miss another chance to build relationships.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/happyBday.png"
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
