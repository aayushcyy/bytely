import React from "react";
import Navbar from "../Component/Navbar";
import { ButtonDemo } from "../Component/Button";
import {
  ComputerDesktopIcon,
  TagIcon,
  ChatBubbleLeftRightIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { AccordionDemo } from "../Component/Accordion";

export default function page() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <div className="flex flex-col gap-20">
        {/* hero */}
        <section className="flex flex-col pt-28 items-center gap-4">
          <p className="text-4xl font-semibold">We're hiring</p>
          <p className="text-2xl">It's the most important thing we do</p>
          <ButtonDemo
            text="view open positions"
            className="bg-[#08514D] px-4 py-3 text-white cursor-pointer text-base rounded-lg hover:bg-gradient-to-r from-teal-900 to-teal-600 mt-6"
          />
        </section>
        {/* our values */}
        <section className="w-full py-20 flex flex-col px-60 bg-gradient-to-r from-teal-900 to-teal-600 text-white text-center">
          <p className="text-3xl font-semibold">Our values</p>
          <p className="text-2xl mt-1">and commitment to you</p>
          <div className="flex flex-wrap gap-x-8 gap-y-7 text-start mt-20">
            <div className="flex w-[22%] gap-2">
              <div className="pt-0.5">
                <CheckIcon className="size-5" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg font-medium">Work smart, live well</p>
                <p className="text-xs text-gray-300">
                  Being effective & proud of your work is important. So is
                  having a fulfilling personal life.
                </p>
              </div>
            </div>
            <div className="flex w-[22%] gap-2">
              <div className="pt-0.5">
                <CheckIcon className="size-5" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg font-medium">Growth opportunities</p>
                <p className="text-xs text-gray-300">
                  We learn and grow by taking people out of their comfort zones
                  by giving them responsibility and ownership.
                </p>
              </div>
            </div>
            <div className="flex w-[22%] gap-2">
              <div className="pt-0.5">
                <CheckIcon className="size-5" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg font-medium">Pass the airplane test</p>
                <p className="text-xs text-gray-300">
                  We'd love to be stuck sitting next to anyone of our teammates
                  on an international flight.
                </p>
              </div>
            </div>
            <div className="flex w-[22%] gap-2">
              <div className="pt-0.5">
                <CheckIcon className="size-5" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg font-medium">
                  High collaboration, low meeting culture
                </p>
                <p className="text-xs text-gray-300">
                  We solve problems together but we don't think meetings are the
                  most effective (especially recurring ones!).
                </p>
              </div>
            </div>
            <div className="flex w-[22%] gap-2">
              <div className="pt-0.5">
                <CheckIcon className="size-5" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg font-medium">Profitable and proud</p>
                <p className="text-xs text-gray-300">
                  We're a profitable company and sustainably growing. We focus
                  on building for the long term happiness of our users and
                  employees.
                </p>
              </div>
            </div>
            <div className="flex w-[22%] gap-2">
              <div className="pt-0.5">
                <CheckIcon className="size-5" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg font-medium">Goldilocks stage</p>
                <p className="text-xs text-gray-300">
                  We combine the metrics (and financial stability) of a larger
                  company with all of the benefits of a small team moving at a
                  fast pace.
                </p>
              </div>
            </div>
            <div className="flex w-[22%] gap-2">
              <div className="pt-0.5">
                <CheckIcon className="size-5" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg font-medium">Safe space</p>
                <p className="text-xs text-gray-300">
                  There are no questions you can't ask. Streak provides the
                  safety net so you can stretch and fail.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Hiring section */}
        <section className="flex flex-col px-60">
          <div className="flex flex-col gap-1">
            <p className="text-3xl font-semibold">We value your time</p>
            <p className="text-2xl">
              We respond to every applicant, so you'll never be left in the dark
            </p>
          </div>
          <span className="h-[1px] bg-gray-300 w-full my-10" />
          {/* Engineering */}
          <div>
            <p className="text-lg font-semibold">
              Engineering{" "}
              <span className="text-[#0B504B] text-base">( 1 )</span>
            </p>
            <AccordionDemo outline="Staff UI Engineer" />
          </div>
        </section>
      </div>
    </div>
  );
}
