import React from "react";
import { ButtonDemo } from "./Button";

export default function Hiring() {
  return (
    <div className="w-full flex justify-center gap-5 bg-gradient-to-r from-teal-900 to-teal-700 text-white py-5 items-center relative">
      <p className="font-semibold text-lg z-20">We're hiring</p>
      <p className="z-20">Come build something great with us.</p>
      <ButtonDemo
        className="text-white border-white border-[2px] rounded-3xl uppercase cursor-pointer z-20 hover:scale-105 transition-all ease-in duration-200"
        mailTo="hr@unibyte.in"
        text="view positions"
      />
    </div>
  );
}
