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
    <nav className="bg-white w-full text-black py-3 px-60 flex flex-row justify-between items-center fixed z-50">
      <Link href="/">
        <Image
          src={"/logo.png"}
          height={600}
          width={600}
          alt=""
          className="w-24 h-auto"
        />
      </Link>
      <NavigationMenu className="">
        <NavigationMenuList className="">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="cursor-pointer">
              Product
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white">
              <NavigationMenuLink href="/feature" className="w-40">
                CRM
              </NavigationMenuLink>
              <NavigationMenuLink href="/email-tracking">
                Email Tracking
              </NavigationMenuLink>
              {/* <NavigationMenuLink href="#">Streak Share</NavigationMenuLink> */}
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="cursor-pointer">
              Workflows
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white">
              <NavigationMenuLink href="/hiring-ats" className="w-48">
                Hiring
              </NavigationMenuLink>
              <NavigationMenuLink href="/support-crm">
                Support
              </NavigationMenuLink>
              <NavigationMenuLink href="/product-development">
                Product Development
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#" className="font-medium">
              About Us
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ButtonDemo
        className="flex cursor-pointer bg-gradient-to-tl from-teal-800 to-teal-900 text-white rounded-xl"
        text="View Use Cases"
      />
    </nav>
  );
}
