"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { ButtonDemo } from "./Button";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white w-full text-black py-3 lg:px-[13vw] sm:px-10 px-[16%] flex flex-row justify-between items-center fixed z-50 ">
      <Link href="/">
        <Image
          src={"/logo.png"}
          height={600}
          width={600}
          alt=""
          className="w-24 lg:w-24 h-auto sm:w-[4.5rem]"
        />
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="lg:gap-8">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="cursor-pointer sm:text-xs lg:text-base">
              Product
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white sm:py-0 sm:px-0">
              <NavigationMenuLink
                href="/feature"
                className="xl:w-40 lg:w-32 sm:w-[7rem] sm:py-0 sm:text-xs lg:text-base sm:pt-2"
              >
                CRM
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/email-tracking"
                className="sm:text-xs lg:text-base sm:pb-2"
              >
                Email Tracking
              </NavigationMenuLink>
              {/* <NavigationMenuLink href="#">Streak Share</NavigationMenuLink> */}
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="cursor-pointer sm:text-xs lg:text-base">
              Workflows
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white sm:py-0 sm:px-0">
              <NavigationMenuLink
                href="/hiring-ats"
                className="w-48 xl:w-40 lg:w-32 sm:w-[7rem] sm:py-0 sm:text-xs lg:text-base sm:pt-2"
              >
                Hiring
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/support-crm"
                className="xl:w-40 lg:w-32 sm:w-[7rem] sm:py-0 sm:text-xs lg:text-base sm:pt-2"
              >
                Support
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/product-development"
                className="lg:w-52 sm:w-[10rem] sm:text-xs lg:text-base sm:py-2"
              >
                Product Development
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/about"
              className="font-medium sm:text-xs lg:text-base"
            >
              About Us
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Link href="mailto:info@unibyte.in">
        <p className="text-xs lg:text-sm font-medium cursor-pointer bg-gradient-to-tl from-teal-800 to-teal-900 text-white rounded-lg px-3 py-1.5">
          Join us
        </p>
      </Link>
    </nav>
  );
}
