import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselDemo() {
  let feedback = [
    {
      name: "Ramona Jar",
      position: "Medical Marketing Manager | The Medically",
      says: "I've used it for 2 years now. One of the very few extensions I use on Chrome and probably the most useful one",
    },
    {
      name: "Becky Schroeder",
      position: "Owner | KBS Network Builders",
      says: "Streak is great! It keeps me organized, reminds me when to follow up, and puts all the historical information I need for my client and prospect interactions in one place",
    },
    {
      name: "Reza Shirazi",
      position: "Senior Product Manager | AffiniPay",
      says: "Streak was so easy to get started with. I was up and going in about 30 minutes with my pipeline. I love that it is right in my gmail",
    },
    {
      name: "Shelby Black",
      position: "Freelance Journalist",
      says: "I use Streak primarily for my hiring. It allows me to manage people in every stage of the hiring process, continually stay in touch, and keep notes on each person. I could not live without it.",
    },
    {
      name: "Steven Liano",
      position: "Consultant | Liano Media LLC",
      says: "Streak is amazing. It helps me manage my leads and follow through which each one. It brings me up to speed with all my clients and helps me stay organized. Love it!",
    },
  ];

  return (
    <Carousel className="w-full max-w-xl text-white">
      <CarouselContent className="w-full">
        {feedback.map((feed, index) => (
          <CarouselItem key={index} className="">
            <div className="p-1">
              <Card className="w-full max-w-xl flex flex-col sm:gap-0 text-center border-none border-[#176164] shadow-none">
                <CardHeader>
                  <CardTitle className="lg:text-2xl lg:font-medium sm:text-sm sm:mb-5 ">
                    "{feed.says}"
                  </CardTitle>
                </CardHeader>
                <p className="lg:text-sm sm:text-xs font-semibold lg:font-medium lg:mb-1">
                  {feed.name}
                </p>
                <p className="lg:text-xs text-[#ffffff94]">{feed.position}</p>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
