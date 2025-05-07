import React from "react";
import { ButtonDemo } from "./Button";
import { SonnerDemo } from "./Sonner";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="w-full h-[90vh] sm:h-[75vh] sm:px-10 py-3 px-72 lg:px-[6vw] flex flex-col items-center gap-5 justify-center pt-20 text-center">
      <p className="text-[#176164] uppercase text-sm font-semibold">
        Manage everything from Gmail
      </p>
      <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center w-[80%]">
        Welcome back to the <br /> Manager you signed up for
      </p>
      <p className="text-[#626262] font-medium text-center sm:text-sm md:text-sm lg:text-lg">
        Focus on your people with Core HR, Payroll, <br /> Recruiting and more -
        all in one intelligent platform.
      </p>
      <Link href="/feature">
        <ButtonDemo
          className="text-white text-sm sm:text-sm md:text-base bg-gradient-to-r from-teal-700 to-teal-900 rounded-xl cursor-pointer mt-5"
          text="View use cases"
        />
      </Link>
    </div>
  );
}
