import React from "react";
import Navbar from "../Component/Navbar";
import { ButtonDemo } from "../Component/Button";
import { CheckIcon } from "@heroicons/react/24/outline";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "../Component/Footer";
import Link from "next/link";

export default function page() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <div className="flex flex-col gap-20">
        {/* hero */}
        <section className="flex flex-col pt-28 items-center gap-4">
          <p className="text-4xl font-semibold">We're hiring</p>
          <p className="text-2xl">It's the most important thing we do</p>
          <Link href="#hirings">
            <ButtonDemo
              text="view open positions"
              className="bg-[#08514D] px-4 py-3 text-white cursor-pointer text-base rounded-lg hover:bg-gradient-to-r from-teal-900 to-teal-600 mt-6"
            />
          </Link>
        </section>
        {/* our values */}
        <section className="w-full py-20 sm:py-10 lg:py-20 flex flex-col px-60 sm:px-10 lg:px-60 bg-gradient-to-r from-teal-900 to-teal-600 text-white text-center">
          <p className="text-3xl font-semibold">Our values</p>
          <p className="text-2xl mt-1">and commitment to you</p>
          <div className="flex flex-wrap gap-x-8 gap-y-7 text-start lg:mt-20 sm:mt-10">
            <div className="flex lg:w-[22%] sm:w-[20%] lg:gap-2 sm:gap-1">
              <div className="pt-0.5">
                <CheckIcon className="lg:size-5 sm:size-4" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="lg:text-lg sm:text-base font-medium">
                  Work smart, live well
                </p>
                <p className="text-xs text-gray-300">
                  Being effective & proud of your work is important. So is
                  having a fulfilling personal life.
                </p>
              </div>
            </div>
            <div className="flex lg:w-[22%] sm:w-[20%] lg:gap-2 sm:gap-1">
              <div className="pt-0.5">
                <CheckIcon className="lg:size-5 sm:size-4" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="lg:text-lg sm:text-base font-medium">
                  Growth opportunities
                </p>
                <p className="text-xs text-gray-300">
                  We learn and grow by taking people out of their comfort zones
                  by giving them responsibility and ownership.
                </p>
              </div>
            </div>
            <div className="flex lg:w-[22%] sm:w-[20%] lg:gap-2 sm:gap-1">
              <div className="pt-0.5">
                <CheckIcon className="lg:size-5 sm:size-4" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="lg:text-lg sm:text-base font-medium">
                  Pass the airplane test
                </p>
                <p className="text-xs text-gray-300">
                  We'd love to be stuck sitting next to anyone of our teammates
                  on an international flight.
                </p>
              </div>
            </div>
            <div className="flex lg:w-[22%] sm:w-[20%] lg:gap-2 sm:gap-1">
              <div className="pt-0.5">
                <CheckIcon className="lg:size-5 sm:size-4" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="lg:text-lg sm:text-base font-medium">
                  High collaboration, low meeting culture
                </p>
                <p className="text-xs text-gray-300">
                  We solve problems together but we don't think meetings are the
                  most effective (especially recurring ones!).
                </p>
              </div>
            </div>
            <div className="flex lg:w-[22%] sm:w-[20%] lg:gap-2 sm:gap-1">
              <div className="pt-0.5">
                <CheckIcon className="lg:size-5 sm:size-4" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="lg:text-lg sm:text-base font-medium">
                  Profitable and proud
                </p>
                <p className="text-xs text-gray-300">
                  We're a profitable company and sustainably growing. We focus
                  on building for the long term happiness of our users and
                  employees.
                </p>
              </div>
            </div>
            <div className="flex w-[22%] gap-2">
              <div className="pt-0.5">
                <CheckIcon className="size-5" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg font-medium">Goldilocks stage</p>
                <p className="text-xs text-gray-300">
                  We combine the metrics (and financial stability) of a larger
                  company with all of the benefits of a small team moving at a
                  fast pace.
                </p>
              </div>
            </div>
            <div className="flex w-[22%] gap-2">
              <div className="pt-0.5">
                <CheckIcon className="size-5" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg font-medium">Safe space</p>
                <p className="text-xs text-gray-300">
                  There are no questions you can't ask. Streak provides the
                  safety net so you can stretch and fail.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Hiring section */}
        <section id="hirings" className="flex flex-col lg:px-60 sm:px-10">
          <div className="flex flex-col gap-1">
            <p className="lg:text-3xl sm:text-2xl font-semibold">
              We value your time
            </p>
            <p className="lg:text-2xl sm:text-lg">
              We respond to every applicant, so you'll never be left in the dark
            </p>
          </div>
          <span className="h-[1px] bg-gray-300 w-full lg:my-10 sm:my-7" />
          <div className="flex flex-col lg:gap-10 sm:gap-7">
            {/* Engineering */}
            <div className="flex flex-col lg:gap-3 sm:gap-2">
              <p className="lg:text-lg sm:text-sm font-semibold">
                Engineering{" "}
                <span className="text-[#0B504B] lg:text-base sm:text-xs">
                  ( 1 )
                </span>
              </p>
              <div>
                <Accordion
                  type="single"
                  collapsible
                  className="lg:w-[45%] sm:w-[50%]"
                >
                  <AccordionItem
                    value="item-1"
                    className="rounded-sm bg-white shadow border-[1px] border-gray-200 lg:px-4 sm:px-3  hover:bg-gray-100"
                  >
                    <AccordionTrigger className="hover:no-underline cursor-pointer">
                      <div className="flex w-full justify-between">
                        <div>
                          <p className="font-medium">Staff UI Engineer</p>
                          <span className="text-gray-500 text-xs font-normal">
                            Ship user facing features
                          </span>
                        </div>
                        <p className="rounded-lg bg-[#006d662a] text-[#0e5954] text-[10px] uppercase font-normal px-1.5 h-[1.2rem] flex items-center">
                          Remote
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="border-t-[1px] border-gray-200 pt-4 gap-5 flex flex-col">
                        <div className="flex flex-col gap-1">
                          <p className="font-medium lg:text-base sm:text-sm pb-1">
                            Your skills
                          </p>
                          <p className="font-medium sm:text-xs lg:text-sm">
                            • Experience:{" "}
                            <span className="font-normal">
                              5+ years with React & TypeScript.
                            </span>
                          </p>
                          <p className="font-medium sm:text-xs lg:text-sm">
                            • Strong Communicator:{" "}
                            <span className="font-normal">
                              Excellent async/written skills (docs, Looms,
                              summaries) for remote-first teamwork.
                            </span>
                          </p>
                          <p className="font-medium sm:text-xs lg:text-sm">
                            • Collaborative & Pragmatic:{" "}
                            <span className="font-normal">
                              You review code, mentor peers, and balance new
                              features with technical debt.
                            </span>
                          </p>
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-medium lg:text-base sm:text-sm pb-1">
                            What You'll Work On
                          </p>
                          <p className="sm:text-xs lg:text-sm">
                            • High-performance real-time spreadsheets. <br />
                            • Deep Gmail UI integrations <br />
                            • Fast, local-first sync architecture <br />
                            • AI-powered CRM workflows <br />
                            • Reusable component systems <br />• Dev/build/test
                            tooling for browser extensions <br />
                            • Custom data visualizations & dashboards <br />•
                            Funnel optimization for user conversion
                          </p>
                        </div>

                        <Link
                          href="mailto:info@unibyte.in"
                          className="bg-[#08514D] text-center text-white text-xs cursor-pointer py-2 sm:py-1.5 font-medium rounded-lg"
                        >
                          Apply
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            {/* Sales */}
            <div className="flex flex-col gap-3">
              <p className="lg:text-lg sm:text-sm font-semibold">
                Sales <span className="text-[#0B504B] text-base"></span>
              </p>
            </div>
            {/* Sucess */}
            <div className="flex flex-col gap-3">
              <p className="lg:text-lg sm:text-sm font-semibold">
                Success{" "}
                <span className="text-[#0B504B] lg:text-base sm:text-xs">
                  ( 1 )
                </span>
              </p>
              <div>
                <Accordion
                  type="single"
                  collapsible
                  className="lg:w-[45%] sm:w-[50%]"
                >
                  <AccordionItem
                    value="item-1"
                    className="rounded-sm bg-white shadow border-[1px] border-gray-200 px-4 hover:bg-gray-100"
                  >
                    <AccordionTrigger className="hover:no-underline cursor-pointer">
                      <div className="flex w-full justify-between">
                        <div>
                          <p className="font-medium">
                            Customer Success Manager
                          </p>
                          <span className="text-gray-500 text-xs font-normal">
                            Tackle hard problems and delight our users
                          </span>
                        </div>
                        <p className="rounded-lg bg-[#006d662a] text-[#0e5954] text-[10px] uppercase font-normal px-1.5 h-[1.2rem] flex items-center">
                          Remote
                        </p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="border-t-[1px] border-gray-200 pt-4 gap-5 flex flex-col">
                        <div className="flex flex-col gap-1">
                          <p className="font-medium lg:text-base sm:text-sm pb-1">
                            What We're Looking For
                          </p>
                          <p className="font-medium lg:text-sm sm:text-xs">
                            • People-Loving & Curious:{" "}
                            <span className="font-normal">
                              You enjoy meeting users and learning how they
                              work.
                            </span>
                          </p>
                          <p className="font-medium lg:text-sm sm:text-xs">
                            • Clear Communicator:{" "}
                            <span className="font-normal">
                              You explain things simply—on calls or in writing.
                            </span>
                          </p>
                          <p className="font-medium lg:text-sm sm:text-xs">
                            • Resilient & Driven:{" "}
                            <span className="font-normal">
                              You stay motivated, push through challenges, and
                              take initiative.
                            </span>
                          </p>
                          <p className="font-medium lg:text-sm sm:text-xs">
                            • Product & Process Focused:{" "}
                            <span className="font-normal">
                              You improve both the product and how we support
                              users at scale.
                            </span>
                          </p>
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="font-medium lg:text-sm sm:text-sm pb-1">
                            About the Role
                          </p>
                          <p className="font-medium lg:text-sm sm:text-xs">
                            • Support SMB Teams:{" "}
                            <span className="font-normal">
                              Help SMBs post-onboarding, answer questions, and
                              promote relevant features.
                            </span>
                          </p>
                          <p className="font-medium lg:text-sm sm:text-xs">
                            • Scale Customer Success:{" "}
                            <span className="font-normal">
                              Run scalable programs like Streak Classes to reach
                              more users efficiently.
                            </span>
                          </p>
                          <p className="font-medium lg:text-sm sm:text-xs">
                            • Performance Bonus:{" "}
                            <span className="font-normal">
                              Part of your pay is tied to customer success and
                              engagement.
                            </span>
                          </p>
                        </div>
                        <Link
                          href="mailto:info@unibyte.in"
                          className="bg-[#08514D] text-center text-white text-xs cursor-pointer py-2 sm:py-1.5 font-medium rounded-lg"
                        >
                          Apply
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            {/* Product & Design */}
            <div className="flex flex-col gap-3">
              <p className="lg:text-lg sm:text-sm font-semibold">
                Product & Design{" "}
                <span className="text-[#0B504B] text-base"></span>
              </p>
            </div>
            {/* Operations */}
            <div className="flex flex-col gap-3">
              <p className="lg:text-lg sm:text-sm font-semibold">
                Operations <span className="text-[#0B504B] text-base"></span>
              </p>
            </div>
            <span className="h-[1px] bg-gray-300 w-full my-10" />
            <div className="w-full lg:pb-5 sm:pb-0 flex flex-col items-center gap-1">
              <p className="text-xl font-semibold">
                Don't see something that fits?
              </p>
              <p className="text-sm text-gray-500">
                Send us an email and let's have a conversation
              </p>
              <ButtonDemo
                mailTo="collegeassignment88@gmail.com"
                text="Mail Us"
                className="px-3 cursor-pointer mt-5 hover:bg-[#264a49] bg-[#0A504C] text-white uppercase text-xs font-semibold"
              />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
