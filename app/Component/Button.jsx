"use client";

import { Button } from "@/components/ui/button";

export function ButtonDemo({ className, text = "Button", mailTo }) {
  const handleClick = () => {
    if (mailTo) {
      window.location.href = `mailto:${mailTo}`;
    }
  };
  return (
    <Button onClick={handleClick} className={className}>
      {text}
    </Button>
  );
}
