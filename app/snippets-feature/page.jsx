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
      <div className="flex flex-col gap-32 w-full items-center">
        <section className="pt-32 flex flex-col items-center gap-1">
          <p className="text-5xl font-semibold">Snippets</p>
          <p className="text-3xl mt-5">
            Stop typing the same email. Use Snippets to Save Time and Sanity.
          </p>
        </section>
        <section className="flex justify-center items-center w-full gap-10">
          <div className="flex flex-col gap-5 w-[35%]">
            <p className="text-3xl font-semibold">
              Create a Palette of Frequently Written Emails
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">
                  Instantly Complete Email
                </p>
                <p className="text-sm text-gray-500 w-[70%]">
                  We all have an email we're sick of writing. Fill out saved
                  text (a Snippet) with one key command.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">Set to Any Shortcut</p>
                <p className="text-sm text-gray-500 w-[70%]">
                  Create the shortcut that makes most sense for you. Snippets
                  can be called using hashtags, dollar signs, or even natural
                  language.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">Includes Subjects</p>
                <p className="text-sm text-gray-500 w-[70%]">
                  Email needs subjects, so we baked them into Snippets too.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/snippets.png"
              alt=""
              height={600}
              width={600}
              className="w-[32rem] h-auto shadow rounded-lg"
            />
          </div>
        </section>
        <section className="flex flex-row-reverse justify-center items-center w-full gap-10">
          <div className="flex flex-col gap-5 w-[35%]">
            <p className="text-3xl font-semibold">Tight Gmail Integration</p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">Built Into Toolbar</p>
                <p className="text-sm text-gray-500 w-[90%]">
                  Working with Snippets is easy because we've worked them
                  directly into Gmail. Managing or selecting snippets is always
                  one click away.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">Compose or Reply</p>
                <p className="text-sm text-gray-500 w-[90%]">
                  Save time with Snippets whether you are responding to an email
                  or composing a new message.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/savedMail.png"
              alt=""
              height={600}
              width={600}
              className="w-[32rem] h-auto shadow rounded-lg"
            />
          </div>
        </section>
        <section className="flex justify-center items-center w-full gap-10">
          <div className="flex flex-col gap-5 w-[35%]">
            <p className="text-3xl font-semibold">Simple Customization</p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">Share With as a Team</p>
                <p className="text-sm text-gray-500 w-[70%]">
                  Chances are time saving snippets can also help others on your
                  team. Snippets are shareable between all Streak collaborators.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">Process Specific</p>
                <p className="text-sm text-gray-500 w-[70%]">
                  Snippets can be associated to different teams or functions, so
                  there's no need to share all Snippets.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/happyBday.png"
              alt=""
              height={600}
              width={600}
              className="w-[32rem] h-auto shadow rounded-lg"
            />
          </div>
        </section>
        <span className="h-[1px] bg-gray-200 w-[30%]"></span>
        <section className="flex flex-col justify-center items-center w-full gap-10 pb-36">
          <p className="text-4xl font-semibold">Still not sure?</p>
          <p className="text-xl font-medium text-gray-600 text-center leading-10">
            Try UniByte free for 14 days. And because you <br /> already know
            how to use Gmail, you'll master UniByte in minutes.
          </p>
          <ButtonDemo
            text="Contact us to get access"
            className="bg-[#08514D] px-4 py-5 text-white cursor-pointer text-base rounded-xl hover:bg-gradient-to-r from-teal-900 to-teal-600"
          />
        </section>
      </div>
      <Hiring />
      <Footer />
    </div>
  );
}
