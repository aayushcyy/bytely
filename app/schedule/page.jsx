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
      <div className="flex flex-col gap-16 sm:gap-24 w-full items-center">
        {/* Hero Section */}
        <section className="pt-32 flex flex-col items-center gap-1 px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 tablet:px-8">
          <p className="lg:text-4xl sm:text-3xl font-semibold text-center">
            Send Later
          </p>
          <p className="lg:text-3xl sm:text-2xl mt-5 text-center">
            Schedule an email to be sent at a specific time!
          </p>
        </section>

        {/* Section 1 */}
        <section className="min-h-[40vh] flex flex-col sm:flex-row lg:flex-row justify-center items-center w-full gap-10 tablet:gap-6 px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 lg:py-20 sm:py-0">
          <div className="flex flex-col gap-5 w-full lg:w-[50%] tablet:w-[90%] tablet:items-center tablet:text-center">
            <p className="lg:text-3xl sm:text-2xl font-semibold">
              Easily Schedule an Email to Send Later
            </p>
            <div className="flex flex-col gap-3 tablet:w-[90%]">
              <div className="flex flex-col gap-1">
                <p className="lg:text-xl sm:text-lg font-semibold">
                  Send Later Integrated into Gmail
                </p>
                <p className="text-sm tablet:text-sm text-gray-500">
                  Streak adds the Send Later feature directly into your Gmail
                  toolbar.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="lg:text-xl sm:text-lg font-semibold">
                  Use Plain English
                </p>
                <p className="text-sm tablet:text-sm text-gray-500">
                  Want to write an email now but schedule to send it 'next
                  monday 8am'? No problem!
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full lg:w-[50%] tablet:w-[80%]">
            <Image
              src="/schedule.png"
              alt="Email Scheduling Interface"
              height={600}
              width={600}
              className="w-full max-w-[30rem] tablet:max-w-[24rem] h-auto shadow rounded-lg"
            />
          </div>
        </section>

        {/* Section 2 */}
        <section className="min-h-[40vh] flex flex-col-reverse sm:flex-row-reverse lg:flex-row-reverse tablet:flex-col justify-center items-center w-full gap-10 tablet:gap-6 px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 tablet:px-8 lg:py-20 py-0 ">
          <div className="flex flex-col gap-5 w-full lg:w-[50%] tablet:w-[90%] tablet:items-center tablet:text-center">
            <p className="lg:text-3xl sm:text-2xl font-semibold">
              Saved Securely in Your Gmail Drafts
            </p>
            <div className="flex flex-col gap-3 tablet:w-[90%]">
              <div className="flex flex-col gap-1">
                <p className="lg:text-xl sm:text-lg font-semibold">
                  Send Later, Worry Never
                </p>
                <p className="text-sm tablet:text-sm text-gray-500">
                  UniByte doesn't host your email. 'Send later' messages remain
                  safely at home in your drafts. Not only is this extra secure,
                  but you can edit your message at any time before it is sent.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full lg:w-[50%] tablet:w-[80%]">
            <Image
              src="/savedMail.png"
              alt="Gmail Drafts with Scheduled Email"
              height={600}
              width={600}
              className="w-full max-w-[30rem] tablet:max-w-[24rem] h-auto shadow rounded-lg"
            />
          </div>
        </section>

        {/* Section 3 */}
        <section className="min-h-[40vh] flex flex-col sm:flex-row lg:flex-row tablet:flex-col justify-center items-center w-full gap-10 tablet:gap-6 px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 tablet:px-8 lg:py-20 py-0">
          <div className="flex flex-col gap-5 w-full lg:w-[50%] tablet:w-[90%] tablet:items-center tablet:text-center">
            <p className="lg:text-3xl sm:text-2xl font-semibold">
              How to use this to Get Things Done?
            </p>
            <div className="flex flex-col gap-3 tablet:w-[90%]">
              <div className="flex flex-col gap-1">
                <p className="lg:text-xl sm:text-lg font-semibold">
                  Send Sales Follow Ups at the Appropriate Time
                </p>
                <p className="text-sm tablet:text-sm text-gray-500">
                  Use 'send later' to arrive in the inbox of a potential
                  customer at the perfect moment.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="lg:text-xl sm:text-lg font-semibold">
                  Post Demo Follow Up
                </p>
                <p className="text-sm tablet:text-sm text-gray-500">
                  Write a follow-up based on the demo you just completed.
                  Include context and answer questions while you're in the
                  moment.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="lg:text-xl sm:text-lg font-semibold">
                  Wish Your Best Customers Happy Birthday!
                </p>
                <p className="text-sm tablet:text-sm text-gray-500">
                  Create a personal touch with your best customers on their
                  birthday. Schedule your best wishes in advance and never miss
                  another opportunity.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full lg:w-[50%] tablet:w-[80%]">
            <Image
              src="/happyBday.png"
              alt="Scheduled Birthday Email"
              height={600}
              width={600}
              className="w-full max-w-[30rem] tablet:max-w-[24rem] h-auto shadow rounded-lg"
            />
          </div>
        </section>

        {/* Divider */}
        <span className="h-[1px] bg-gray-200 w-[30%]"></span>

        {/* CTA Section */}
        <section className="flex flex-col justify-center items-center w-full gap-10 pb-36 px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 tablet:px-8 text-center">
          <p className="lg:text-4xl sm:text-3xl font-semibold">
            Still not sure?
          </p>
          <p className="lg:text-xl sm:text-base font-medium text-gray-600 leading-10">
            Try UniByte free for 14 days. <br />
            And because you already know how to use Gmail, you'll master UniByte
            in minutes.
          </p>
          <ButtonDemo
            text="Contact us to get access"
            className="bg-[#08514D] px-3 py-0 text-white cursor-pointer lg:text-base sm:text-sm rounded-xl hover:bg-gradient-to-r from-teal-900 to-teal-600"
          />
        </section>
      </div>
      <Hiring />
      <Footer />
    </div>
  );
}
