"use client";

import React, { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

type ScrollToTopProps = {
  className?: string;
  threshold?: number; // pixels to scroll before showing; defaults to ~80% of viewport height
  label?: string;
};

export default function ScrollToTop({
  className,
  threshold,
  label = "Back to top",
}: ScrollToTopProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const computeThreshold = () =>
      typeof threshold === "number" && threshold >= 0
        ? threshold
        : Math.round(window.innerHeight * 0.8);

    let currentThreshold = 0;

    const onScroll = () => {
      if (currentThreshold === 0) currentThreshold = computeThreshold();
      setVisible(window.scrollY > currentThreshold);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
      currentThreshold = 0; // recompute on next scroll
      onScroll();
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [threshold]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      aria-label={label}
      onClick={handleClick}
      className={cn(
        "rounded-full p-3 md:p-3.5 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
        className,
      )}
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}


