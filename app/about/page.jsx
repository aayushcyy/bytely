import React from "react";
import Navbar from "../Component/Navbar";
import { ButtonDemo } from "../Component/Button";
import Footer from "../Component/Footer";
import Hiring from "../Component/Hiring";

export default function page() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <section className="flex flex-col pt-32 items-center px-72 sm:px-10 gap-3 pb-40">
        <p className="text-4xl font-semibold">About us</p>
        <p className="text-2xl mb-8">Great people make great products</p>
        <p className="text-center text-gray-600 w-[85%] lg:w-[60%]">
          UniByte was born out of the frustration of constantly switching
          between our inbox (where we do our work) and external systems. Our
          goal is to make it simple to manage your everyday processes so you can
          close more deals, resolve more support tickets, and get things done.
        </p>
        <ButtonDemo
          text="Join us"
          className="bg-[#08514D] px-4 py-4 text-white cursor-pointer text-base rounded-lg hover:bg-gradient-to-r from-teal-900 to-teal-600 mt-10"
        />
      </section>
      <Hiring />
      <Footer />
    </div>
  );
}
