"use client";

import { Button } from "@/components/ui/button";

export function ButtonDemo({ className, text = "Button" }) {
  return <Button className={className}>{text}</Button>;
}
