import React from "react";
import Navbar from "../Component/Navbar";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import Footer from "../Component/Footer";
import Hiring from "../Component/Hiring";

export default function page() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      {/* Section 1 - Hero */}
      <section className="w-full min-h-[80vh] px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 tablet:px-8 pt-20 flex flex-col sm:flex-row lg:flex-row tablet:flex-col gap-10 tablet:gap-6 items-center justify-center">
        <div className="flex flex-col justify-center w-full lg:w-[50%] tablet:w-[90%] gap-3 tablet:items-center tablet:text-center">
          <p className="sm:text-3xl md:text-4xl tablet:text-4xl font-bold leading-snug tablet:leading-snug">
            Know when your email is viewed
          </p>
          <p className="text-base md:text-lg tablet:text-base font-medium">
            Send your first tracked email <br /> in 30 seconds - right from
            Gmail
          </p>
          <div className="flex gap-3 mt-2 items-center">
            <p className="flex gap-1">
              <StarIcon className="size-5 text-yellow-500" />
              <StarIcon className="size-5 text-yellow-500" />
              <StarIcon className="size-5 text-yellow-500" />
              <StarIcon className="size-5 text-yellow-500" />
            </p>
            <p className="text-sm lg:text-base text-gray-400">
              50,000+ positive reviews
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full lg:w-[50%] tablet:w-[80%]">
          <Image
            src="/emailTracking.png"
            alt="Email Tracking Dashboard"
            width={600}
            height={600}
            className="w-full max-w-[30rem] tablet:max-w-[24rem] h-auto rounded-lg shadow"
          />
        </div>
      </section>
      {/* Section 2 - Get Notified */}
      <section className="w-full min-h-[70vh] px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 tablet:px-8 py-20 md:py-28 tablet:py-24 flex flex-col-reverse sm:flex-row-reverse lg:flex-row-reverse tablet:flex-col gap-10 tablet:gap-6 justify-center border-t-[1px] border-gray-200">
        <div className="flex flex-col justify-center w-full lg:w-[50%] tablet:w-[90%] gap-3 tablet:items-center tablet:text-center">
          <p className="text-3xl md:text-4xl tablet:text-3xl font-semibold">
            Get notified
          </p>
          <p className="text-2xl md:text-3xl tablet:text-2xl">
            when your email is opened
          </p>
          <p className="text-gray-500 text-sm lg:text-base">
            Get immediately notified with a browser or email notification as
            soon as the recipient opens your email.
          </p>
        </div>
        <div className="flex justify-center items-center w-full lg:w-[50%] tablet:w-[80%]">
          <Image
            src="/emailTracking.png"
            alt="Email Notification"
            width={600}
            height={600}
            className="w-full max-w-[30rem] tablet:max-w-[24rem] h-auto rounded-lg shadow"
          />
        </div>
      </section>
      {/* Section 3 - Turn On/Off */}
      <section className="w-full min-h-[70vh] px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 tablet:px-8 py-20 md:py-28 tablet:py-24 flex flex-col sm:flex-row lg:flex-row tablet:flex-col gap-10 tablet:gap-6 justify-center border-t-[1px] border-gray-200">
        <div className="flex flex-col justify-center w-full lg:w-[50%] tablet:w-[90%] gap-3 tablet:items-center tablet:text-center">
          <p className="text-3xl md:text-4xl tablet:text-3xl font-semibold">
            Turn on or off
          </p>
          <p className="text-2xl md:text-3xl tablet:text-2xl">
            with a single-click
          </p>
          <p className="text-gray-500 text-sm lg:text-base">
            Turn email tracking on or off with a simple toggle right in the
            Gmail compose window.
          </p>
        </div>
        <div className="flex justify-center items-center w-full lg:w-[50%] tablet:w-[80%]">
          <Image
            src="/turnOnOff.png"
            alt="Email Tracking Toggle"
            width={600}
            height={600}
            className="w-full max-w-[30rem] tablet:max-w-[24rem] h-auto rounded-lg shadow"
          />
        </div>
      </section>
      {/* Section 4 - Tracked Emails */}
      <section className="w-full min-h-[70vh] px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 tablet:px-8 py-20 md:py-28 tablet:py-24 flex flex-col-reverse sm:flex-row-reverse lg:flex-row-reverse tablet:flex-col gap-10 tablet:gap-6 justify-center border-t-[1px] border-gray-200">
        <div className="flex flex-col justify-center w-full lg:w-[50%] tablet:w-[90%] gap-3 tablet:items-center tablet:text-center">
          <p className="text-3xl md:text-4xl tablet:text-3xl font-semibold">
            See all your tracked emails
          </p>
          <p className="text-2xl md:text-3xl tablet:text-2xl">
            in an organized list
          </p>
          <p className="text-gray-500 text-sm lg:text-base">
            Know exactly who to follow up with next based on when they opened
            your last email. See all your tracked emails in chronological order.
          </p>
        </div>
        <div className="flex justify-center items-center w-full lg:w-[50%] tablet:w-[80%]">
          <Image
            src="/trackedEmails.png"
            alt="Tracked Emails List"
            width={600}
            height={600}
            className="w-full max-w-[30rem] tablet:max-w-[24rem] h-auto rounded-lg shadow"
          />
        </div>
      </section>
      <Hiring />
      <Footer />
    </div>
  );
}
