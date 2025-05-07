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
      <div className="flex flex-col gap-16 sm:gap-24 w-full items-center">
        <section className="pt-32 flex flex-col items-center gap-4 text-center px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 tablet:px-8">
          <p className="lg:text-4xl sm:text-4xl font-semibold">Snippets</p>
          <p className="lg:text-3xl sm:text-2xl mt-4">
            Stop typing the same email. Use Snippets to Save Time and Sanity.
          </p>
        </section>

        {/* Section 1 */}
        <section className="min-h-[40vh] flex flex-col sm:flex-row lg:flex-row justify-center items-center w-full gap-10 tablet:gap-6 px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 tablet:px-8 lg:py-20 py-0">
          <div className="w-full lg:w-[50%] flex flex-col gap-5 tablet:items-center tablet:text-center">
            <p className="lg:text-3xl sm:text-2xl font-semibold">
              Create a Palette of Frequently Written Emails
            </p>
            <div className="flex flex-col gap-3 tablet:w-[90%]">
              <div>
                <p className="lg:text-xl sm:text-lg font-semibold">
                  Instantly Complete Email
                </p>
                <p className="text-sm tablet:text-sm text-gray-500 mt-1">
                  We all have an email we're sick of writing. Fill out saved
                  text (a Snippet) with one key command.
                </p>
              </div>
              <div>
                <p className="lg:text-xl sm:text-lg font-semibold">
                  Set to Any Shortcut
                </p>
                <p className="text-sm tablet:text-sm text-gray-500 mt-1">
                  Create the shortcut that makes most sense for you. Snippets
                  can be called using hashtags, dollar signs, or even natural
                  language.
                </p>
              </div>
              <div>
                <p className="lg:text-xl sm:text-lg font-semibold">
                  Includes Subjects
                </p>
                <p className="text-sm tablet:text-sm text-gray-500 mt-1">
                  Email needs subjects, so we baked them into Snippets too.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%] flex justify-center tablet:w-[80%]">
            <Image
              src="/snippets.png"
              alt="Snippets Screenshot"
              height={600}
              width={600}
              className="w-full max-w-[30rem] tablet:max-w-[24rem] h-auto rounded-lg shadow"
            />
          </div>
        </section>

        {/* Section 2 */}
        <section className="min-h-[40vh] flex flex-col-reverse sm:flex-row-reverse lg:flex-row-reverse tablet:flex-col justify-center items-center w-full gap-10 tablet:gap-6 px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 tablet:px-8 lg:py-20 py-0">
          <div className="w-full lg:w-[50%] flex flex-col gap-5 tablet:items-center tablet:text-center">
            <p className="lg:text-3xl sm:text-2xl font-semibold">
              Tight Gmail Integration
            </p>
            <div className="flex flex-col gap-3 tablet:w-[90%]">
              <div>
                <p className="lg:text-xl sm:text-lg font-semibold">
                  Built Into Toolbar
                </p>
                <p className="text-sm tablet:text-sm text-gray-500 mt-1">
                  Working with Snippets is easy because we've worked them
                  directly into Gmail. Managing or selecting snippets is always
                  one click away.
                </p>
              </div>
              <div>
                <p className="lg:text-xl sm:text-lg font-semibold">
                  Compose or Reply
                </p>
                <p className="text-sm tablet:text-sm text-gray-500 mt-1">
                  Save time with Snippets whether you are responding to an email
                  or composing a new message.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%] flex justify-center tablet:w-[80%]">
            <Image
              src="/savedMail.png"
              alt="Gmail Integration with Snippets"
              height={600}
              width={600}
              className="w-full max-w-[30rem] tablet:max-w-[24rem] h-auto rounded-lg shadow"
            />
          </div>
        </section>

        {/* Section 3 */}
        <section className="min-h-[40vh] flex flex-col sm:flex-row lg:flex-row tablet:flex-col justify-center items-center w-full gap-10 tablet:gap-6 px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 tablet:px-8 lg:py-20 py-0">
          <div className="w-full lg:w-[50%] flex flex-col gap-5 tablet:items-center tablet:text-center">
            <p className="lg:text-3xl sm:text-2xl font-semibold">
              Simple Customization
            </p>
            <div className="flex flex-col gap-3 tablet:w-[90%]">
              <div>
                <p className="lg:text-xl sm:text-lg font-semibold">
                  Share With as a Team
                </p>
                <p className="text-sm tablet:text-sm text-gray-500 mt-1">
                  Chances are time-saving snippets can also help others on your
                  team. Snippets are shareable between all Streak collaborators.
                </p>
              </div>
              <div>
                <p className="lg:text-xl sm:text-lg font-semibold">
                  Process Specific
                </p>
                <p className="text-sm tablet:text-sm text-gray-500 mt-1">
                  Snippets can be associated to different teams or functions, so
                  there's no need to share all Snippets.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%] flex justify-center tablet:w-[80%]">
            <Image
              src="/happyBday.png"
              alt="Customized Snippets Example"
              height={600}
              width={600}
              className="w-full max-w-[30rem] tablet:max-w-[24rem] h-auto rounded-lg shadow"
            />
          </div>
        </section>

        <span className="h-[1px] bg-gray-200 w-[30%]"></span>

        <section className="flex flex-col justify-center items-center w-full gap-10 pb-36 px-6 sm:px-12 md:px-20 lg:px-32 xl:px-48 tablet:px-8 text-center">
          <p className="lg:text-4xl sm:text-3xl font-semibold">
            Still not sure?
          </p>
          <p className="lg:text-xl sm:text-base font-medium text-gray-600 leading-10">
            Try UniByte free for 14 days. <br />
            And because you already know how to use Gmail, you'll master UniByte
            in minutes.
          </p>
          <ButtonDemo
            text="Contact us to get access"
            className="bg-[#08514D] px-4  text-white cursor-pointer lg:text-base sm:text-sm rounded-xl hover:bg-gradient-to-r from-teal-900 to-teal-600"
          />
        </section>
      </div>
      <Hiring />
      <Footer />
    </div>
  );
}
