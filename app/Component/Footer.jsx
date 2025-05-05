"use client";

import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import React from "react";
import Image from "next/image";
import { SonnerDemo } from "./Sonner.jsx";

export default function Footer() {
  return (
    <div className="w-full h-[50vh] flex flex-col justify-between border-t-[2px] border-gray-300 pt-10">
      <div className="flex justify-between px-60">
        <div className="flex flex-col gap-2">
          <Link href="/">
            <Image
              src={"/logo.png"}
              height={600}
              width={600}
              alt=""
              className="w-32 h-auto"
            />
          </Link>
          <p className="text-sm flex items-center gap-1">
            <span>
              <EnvelopeIcon className="size-4 stroke-1.5" />
            </span>
            <Link
              href="mailto:info@unibyte.in"
              className="text-[#005854] font-medium"
            >
              info@unibyte.in
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="uppercase text-gray-700 font-medium">Company</div>
          <div className="flex flex-col text-sm text-gray-500 font-medium gap-1">
            <Link href={"/about"} className="hover:text-[#005854]">
              About us
            </Link>
            <Link href={"/careers"} className="hover:text-[#005854]">
              Careers
            </Link>
            <Link href={"/"} className="hover:text-[#005854]">
              Terms
            </Link>
            <SonnerDemo />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="uppercase text-gray-700 font-medium">Resources</div>
          <div className="flex flex-col text-sm text-gray-500 font-medium gap-1">
            <Link href={"/"} className="hover:text-[#005854]">
              Help
            </Link>
            <Link href={"/"} className="hover:text-[#005854]">
              Referral program
            </Link>
            <Link href={"/"} className="hover:text-[#005854]">
              Advanced
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="uppercase text-gray-700 font-medium">Industry</div>
          <div className="flex flex-col text-sm text-gray-500 font-medium gap-1">
            <Link href={"/"} className="hover:text-[#005854]">
              Venture Capital
            </Link>
            <Link href={"/"} className="hover:text-[#005854]">
              Real Estate
            </Link>
            <Link href={"/"} className="hover:text-[#005854]">
              Startups
            </Link>
            <Link href={"/"} className="hover:text-[#005854]">
              Small Businesses
            </Link>
            <Link href={"/"} className="hover:text-[#005854]">
              Travel Agencies
            </Link>
            <Link href={"/"} className="hover:text-[#005854]">
              Influencer Agencies
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="uppercase text-gray-700 font-medium">Feature</div>
          <div className="flex flex-col text-sm text-gray-500 font-medium gap-1">
            <Link href={"/"} className="hover:text-[#005854]">
              CRM
            </Link>
            <Link href={"/"} className="hover:text-[#005854]">
              Email tracking
            </Link>
            <Link href={"/"} className="hover:text-[#005854]">
              Mail merge
            </Link>
            <Link href={"/"} className="hover:text-[#005854]">
              Send later
            </Link>
            <Link href={"/"} className="hover:text-[#005854]">
              Snippets
            </Link>
            <Link href={"/"} className="hover:text-[#005854]">
              Email sharing
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
