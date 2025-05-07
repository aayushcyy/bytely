import React from "react";
import Link from "next/link";
import { ButtonDemo } from "./Button";

export default function Hiring() {
  return (
    <div className="w-full flex justify-center gap-5 lg:gap-10 bg-gradient-to-r from-teal-900 to-teal-700 text-white py-5 items-center relative">
      <p className="font-semibold lg:text-xl sm:text-sm z-20">We're hiring</p>
      <p className="z-20 sm:text-sm lg:text-lg">
        Come build something great with us.
      </p>
      <Link
        className="text-white border-white border-[2px] rounded-3xl uppercase cursor-pointer z-20 hover:scale-105 transition-all ease-in duration-200 sm:text-xs lg:text-sm px-3 py-2"
        href="mailto:info@unibyte.in"
      >
        View positions
      </Link>
    </div>
  );
}
