"use client";

import dynamic from "next/dynamic";

const SmoothCursor = dynamic(
  () => import("@/components/ui/smooth-cursor").then((m) => ({ default: m.SmoothCursor })),
  { ssr: false }
);
const CircularText = dynamic(() => import("@/components/CircularText"), { ssr: false });
const ScrollToTop = dynamic(() => import("@/components/ui/scroll-to-top"), { ssr: false });

export function ClientOnly() {
  return (
    <>
      <CircularText
        text="CANERELMAS"
        spinDuration={12}
        size={100}
        fontSizeClass="text-lg"
        density={1}
        className="fixed bottom-6 right-6 z-40"
      />
      <SmoothCursor />
      <ScrollToTop className="fixed bottom-13 right-12.5 z-40" />
    </>
  );
}
