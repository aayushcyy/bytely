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

export default function Navbar() {
  return (
    <nav className="bg-white w-full text-black py-3 px-60 flex flex-row justify-between items-center fixed z-50">
      <Link href={"/"} className="text-2xl font-semibold">
        UniByte
      </Link>
      <NavigationMenu className="">
        <NavigationMenuList className="">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="cursor-pointer">
              Product
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white">
              <NavigationMenuLink href="#" className="w-40">
                CRM
              </NavigationMenuLink>
              <NavigationMenuLink href="#">Email Tracking</NavigationMenuLink>
              <NavigationMenuLink href="#">Streak Share</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="cursor-pointer">
              Workflows
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white">
              <NavigationMenuLink href="#" className="w-48">
                Hiring
              </NavigationMenuLink>
              <NavigationMenuLink href="#">Support</NavigationMenuLink>
              <NavigationMenuLink href="#">
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
        className="flex cursor-pointer bg-black text-white rounded-xl"
        text="View Use Cases"
      />
    </nav>
  );
}
