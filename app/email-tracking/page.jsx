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
      <section className="w-full xl:h-[90vh] lg:h-[75vh] xl:px-62 lg:px-36 flex pt-20 xl:gap-10 lg:gap-5 items-center justify-center">
        <div className="h-full flex flex-col justify-center xl:w-[45%] lg:w-[55%] gap-3">
          <p className="xl:text-5xl lg:text-4xl font-bold xl:leading-14 lg:leading-12">
            Know when your email is viewed
          </p>
          <p className="text-lg font-medium">
            Send your first tracked email <br /> in 30 seconds - right from
            Gmail
          </p>
          <div className="flex gap-3 mt-2">
            <p className="flex gap-1">
              <StarIcon className="size-5 text-yellow-500" />
              <StarIcon className="size-5 text-yellow-500" />
              <StarIcon className="size-5 text-yellow-500" />
              <StarIcon className="size-5 text-yellow-500" />
            </p>
            <p className="text-sm text-gray-400">50,000+ positive reviews</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/emailTracking.png"
            alt=""
            width={600}
            height={600}
            className="w-[30rem] h-auto rounded-lg shadow"
          />
        </div>
      </section>
      <section className="w-full xl:h-[90vh] lg:h-[65vh] xl:px-62 lg:px-36 flex flex-row-reverse border-t-[1px] border-gray-200 xl:gap-10 lg:gap-5 justify-center">
        <div className="h-full flex flex-col justify-center xl:w-[45%] lg:w-[55%] gap-3">
          <p className="text-4xl font-semibold">Get notified</p>
          <p className="text-3xl">when your email is opened</p>
          <p className="text-gray-500">
            Get immediately notified with a browser or email notification as
            soon as the recipient opens your email.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/emailTracking.png"
            alt=""
            width={600}
            height={600}
            className="w-[30rem] h-auto rounded-lg shadow"
          />
        </div>
      </section>
      <section className="w-full xl:h-[90vh] lg:h-[65vh] xl:px-62 lg:px-36 flex border-t-[1px] border-gray-200 xl:gap-10 lg:gap-5 justify-center">
        <div className="h-full flex flex-col justify-center w-[45%] gap-3">
          <p className="text-4xl font-semibold">Turn on or off</p>
          <p className="text-3xl">with a single-click</p>
          <p className="text-gray-500">
            Turn email tracking on or off with a simple toggle right in the
            Gmail compose window.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/turnOnOff.png"
            alt=""
            width={600}
            height={600}
            className="w-[30rem] h-auto rounded-lg shadow"
          />
        </div>
      </section>
      <section className="w-full xl:h-[90vh] lg:h-[65vh] xl:px-62 lg:px-36 flex flex-row-reverse border-t-[1px] border-gray-200 xl:gap-10 lg:gap-5 justify-center">
        <div className="h-full flex flex-col justify-center w-[50%] gap-3">
          <p className="text-4xl font-semibold">See all your tracked emails</p>
          <p className="text-3xl">in an organized list</p>
          <p className="text-gray-500">
            Know exactly who to follow up with next based on when they opened
            your last email. See all your tracked emails in chronological order.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/trackedEmails.png"
            alt=""
            width={600}
            height={600}
            className="w-[30rem] h-auto rounded-lg shadow"
          />
        </div>
      </section>
      <Hiring />
      <Footer />
    </div>
  );
}
