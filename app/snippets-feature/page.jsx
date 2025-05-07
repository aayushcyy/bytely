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
      <div className="flex flex-col gap-32 w-full items-center px-4 md:px-12 lg:px-28">
        <section className="pt-32 flex flex-col items-center gap-4 text-center">
          <p className="text-4xl lg:text-5xl font-semibold">Snippets</p>
          <p className="text-2xl lg:text-3xl mt-4">
            Stop typing the same email. Use Snippets to Save Time and Sanity.
          </p>
        </section>

        {/* Section 1 */}
        <section className="flex flex-col lg:flex-row justify-between items-center w-full gap-16">
          <div className="w-full lg:w-[40%] flex flex-col gap-6">
            <p className="text-2xl lg:text-3xl font-semibold">
              Create a Palette of Frequently Written Emails
            </p>
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-lg font-semibold">
                  Instantly Complete Email
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  We all have an email we're sick of writing. Fill out saved
                  text (a Snippet) with one key command.
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold">Set to Any Shortcut</p>
                <p className="text-sm text-gray-500 mt-1">
                  Create the shortcut that makes most sense for you. Snippets
                  can be called using hashtags, dollar signs, or even natural
                  language.
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold">Includes Subjects</p>
                <p className="text-sm text-gray-500 mt-1">
                  Email needs subjects, so we baked them into Snippets too.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <Image
              src="/snippets.png"
              alt="Snippets Screenshot"
              height={600}
              width={600}
              className="w-full h-auto rounded-xl shadow"
            />
          </div>
        </section>

        {/* Section 2 */}
        <section className="flex flex-col lg:flex-row-reverse justify-between items-center w-full gap-16">
          <div className="w-full lg:w-[40%] flex flex-col gap-6">
            <p className="text-2xl lg:text-3xl font-semibold">
              Tight Gmail Integration
            </p>
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-lg font-semibold">Built Into Toolbar</p>
                <p className="text-sm text-gray-500 mt-1">
                  Working with Snippets is easy because we've worked them
                  directly into Gmail. Managing or selecting snippets is always
                  one click away.
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold">Compose or Reply</p>
                <p className="text-sm text-gray-500 mt-1">
                  Save time with Snippets whether you are responding to an email
                  or composing a new message.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <Image
              src="/savedMail.png"
              alt="Saved Mail"
              height={600}
              width={600}
              className="w-full h-auto rounded-xl shadow"
            />
          </div>
        </section>

        {/* Section 3 */}
        <section className="flex flex-col lg:flex-row justify-between items-center w-full gap-16">
          <div className="w-full lg:w-[40%] flex flex-col gap-6">
            <p className="text-2xl lg:text-3xl font-semibold">
              Simple Customization
            </p>
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-lg font-semibold">Share With as a Team</p>
                <p className="text-sm text-gray-500 mt-1">
                  Chances are time-saving snippets can also help others on your
                  team. Snippets are shareable between all Streak collaborators.
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold">Process Specific</p>
                <p className="text-sm text-gray-500 mt-1">
                  Snippets can be associated to different teams or functions, so
                  there's no need to share all Snippets.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <Image
              src="/happyBday.png"
              alt="Customization Example"
              height={600}
              width={600}
              className="w-full h-auto rounded-xl shadow"
            />
          </div>
        </section>

        <span className="h-[1px] bg-gray-200 w-[30%]"></span>

        {/* CTA */}
        <section className="flex flex-col items-center justify-center text-center w-full gap-8 pb-36">
          <p className="text-3xl lg:text-4xl font-semibold">Still not sure?</p>
          <p className="text-base lg:text-xl font-medium text-gray-600 leading-relaxed">
            Try UniByte free for 14 days. And because you <br /> already know
            how to use Gmail, you'll master UniByte in minutes.
          </p>
          <ButtonDemo
            text="Contact us to get access"
            className="bg-[#08514D] px-6 py-4 text-white text-base rounded-xl hover:bg-gradient-to-r from-teal-900 to-teal-600"
          />
        </section>
      </div>
      <Hiring />
      <Footer />
    </div>
  );
}
