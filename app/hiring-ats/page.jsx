import React from "react";
import Navbar from "../Component/Navbar";
import Image from "next/image";
import Footer from "../Component/Footer";
import { ButtonDemo } from "../Component/Button";

export default function page() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <div className="flex flex-col gap-32 w-full items-center">
        <section className="pt-32 flex flex-col items-center gap-1">
          <p className="text-2xl font-semibold">All in One</p>
          <p className="text-5xl font-semibold">CRM for Hiring</p>
          <p className="text-lg mt-3 font-medium">
            Manage the entire recruiting journey from first contact to final
            hire all within your inbox.
          </p>
        </section>
        <section className="flex justify-center items-center w-full gap-10">
          <div className="flex flex-col gap-5 w-[35%]">
            <p className="text-3xl font-semibold">
              Track Hiring Right Inside Email
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">
                  Recruit Without Leaving Your Inbox
                </p>
                <p className="text-sm text-gray-500 w-[70%]">
                  Manage candidates directly in Email no switching to external
                  tools or platforms.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">Intuitive and Familiar</p>
                <p className="text-sm text-gray-500 w-[70%]">
                  Built into the Gmail UI for a seamless experience and zero
                  learning curve.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/hiringCrm.png"
              alt=""
              height={600}
              width={600}
              className="w-[32rem] h-auto shadow rounded-lg"
            />
          </div>
        </section>
        <section className="flex flex-row-reverse justify-center items-center w-full gap-10">
          <div className="flex flex-col gap-5 w-[35%]">
            <p className="text-3xl font-semibold">
              Seamless Collaboration & Smart Organization
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">Effortless Sharing</p>
                <p className="text-sm text-gray-500 w-[70%]">
                  Share emails, resumes, and notes with teammates even if they
                  weren't on the thread.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">Organize Automatically</p>
                <p className="text-sm text-gray-500 w-[70%]">
                  Let the system auto-sort emails into the right applicant files
                  using smart rules.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/sharingResumes.png"
              alt=""
              height={600}
              width={600}
              className="w-[32rem] h-auto shadow rounded-lg"
            />
          </div>
        </section>
        <section className="flex justify-center items-center w-full gap-10">
          <div className="flex flex-col gap-5 w-[35%]">
            <p className="text-3xl font-semibold">
              Automate & Personalize Your Workflow
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">
                  Personalized Mass Outreach
                </p>
                <p className="text-sm text-gray-500 w-[70%]">
                  Send tailored emails at scale using templates and mail merge
                  directly in Gmail.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">Time-Saving Snippets</p>
                <p className="text-sm text-gray-500 w-[70%]">
                  Insert common replies instantly to speed up scheduling and
                  follow-ups.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/automateTheFlowHiring.png"
              alt=""
              height={600}
              width={600}
              className="w-[32rem] h-auto shadow rounded-lg"
            />
          </div>
        </section>
        <section className="flex flex-row-reverse justify-center items-center w-full gap-10">
          <div className="flex flex-col gap-5 w-[35%]">
            <p className="text-3xl font-semibold">
              Visualize & Optimize Your Hiring Pipeline
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">Clear, Custom Pipelines</p>
                <p className="text-sm text-gray-500 w-[70%]">
                  See every hiring stage with visual pipelines you can tailor as
                  needed.
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xl font-semibold">Real-Time Insights</p>
                <p className="text-sm text-gray-500 w-[70%]">
                  Know when emails are opened and which prospects need follow-up
                  instantly.
                </p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/visualizeHiring.png"
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
      <Footer />
    </div>
  );
}
