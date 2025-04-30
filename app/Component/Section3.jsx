import React from "react";
import Automation from "../../public/automation.svg";
import Team from "../../public/team.svg";
import Tool from "../../public/tools.svg";
import Image from "next/image";

export default function Section3() {
  return (
    <div className="w-full h-screen relative px-60">
      <div className="flex flex-unwrap gap-8">
        <div className="flex flex-col">
          <div className="flex justify-center h-40">
            <Image src={Automation} className="w-40 h-auto" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold">Your pipeline on autopilot</p>
            <p className="text-sm text-[#626262]">
              Automatically capture data from your contacts and emails. Get
              notified as things progress through your pipeline by never
              forgetting a follow-up with tasks and reminders.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center h-40">
            <Image src={Tool} className="w-58 h-auto" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold">
              Built into the tools you use
            </p>
            <p className="text-sm text-[#626262]">
              Work where youre comfortable — inside your inbox! Built directly
              inside of Gmail for desktop and mobile, with G Suite integrations
              (Sheets, Chat, Drive, and more) to help you access and gather your
              data quickly.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center h-40">
            <Image src={Team} className="w-52 h-auto" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold">A hive-mind for your team</p>
            <p className="text-sm text-[#626262]">
              Automatically share emails, notes, and call logs with your team so
              you can pick up where they left off. Access pipeline data
              alongside your emails and from your pocket so you always have the
              context you need.
            </p>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
