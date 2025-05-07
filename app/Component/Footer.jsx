"use client";

import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import React from "react";
import Image from "next/image";
import { SonnerDemo } from "./Sonner.jsx";

export default function Footer() {
  return (
    <div className="w-full xl:h-[50vh] lg:h-[35vh] flex flex-col justify-between border-t-[2px] border-gray-300 pt-10 sm:pt-7 sm:gap-7">
      <div className="flex justify-between xl:px-60 lg:px-40 sm:px-10">
        <div className="flex flex-col gap-2">
          <Link href="/">
            <Image
              src={"/logo.png"}
              height={600}
              width={600}
              alt=""
              className="w-32 h-auto sm:w-20"
            />
          </Link>
          <p className="text-sm sm:text-xs flex items-center gap-1">
            <span>
              <EnvelopeIcon className="size-4 sm:size-3.5 stroke-1.5" />
            </span>
            <Link
              href="mailto:info@unibyte.in"
              className="text-[#005854] font-medium"
            >
              info@unibyte.in
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:gap-2">
          <div className="uppercase text-gray-700 font-medium sm:text-sm">
            Company
          </div>
          <div className="flex flex-col text-sm sm:text-xs text-gray-500 font-medium gap-1">
            <Link href={"/about"} className="hover:text-[#005854]">
              About us
            </Link>
            <Link href={"/careers"} className="hover:text-[#005854]">
              Careers
            </Link>
            <Link href={"/terms"} className="hover:text-[#005854]">
              Terms
            </Link>
            <SonnerDemo />
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:gap-2">
          <div className="uppercase text-gray-700 font-medium sm:text-sm">
            Industry
          </div>
          <div className="flex flex-col text-sm sm:text-xs text-gray-500 font-medium gap-1">
            <Link href={"/venture-capital"} className="hover:text-[#005854]">
              Venture Capital
            </Link>
            <Link href={"/realestate-crm"} className="hover:text-[#005854]">
              Real Estate
            </Link>
            <Link href={"/startups-founders"} className="hover:text-[#005854]">
              Startups
            </Link>
            <Link href={"/small-businesses"} className="hover:text-[#005854]">
              Small Businesses
            </Link>
            <Link
              href={"/influencer-talent-agency"}
              className="hover:text-[#005854]"
            >
              Influencer Agencies
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:gap-2">
          <div className="uppercase text-gray-700 font-medium sm:text-sm">
            Feature
          </div>
          <div className="flex flex-col text-sm sm:text-xs text-gray-500 font-medium gap-1">
            <Link href={"/feature"} className="hover:text-[#005854]">
              CRM
            </Link>
            <Link href={"/email-tracking"} className="hover:text-[#005854]">
              Email tracking
            </Link>
            <Link href={"/schedule"} className="hover:text-[#005854]">
              Send later
            </Link>
            <Link href={"/snippets-feature"} className="hover:text-[#005854]">
              Snippets
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full text-center text-xs flex flex-col gap-1.5 py-1 bg-[#005753] text-white">
        <p>© 2016-2025 UniByte Pvt Ltd. - Privacy | Terms of Service</p>
      </div>
    </div>
  );
}
