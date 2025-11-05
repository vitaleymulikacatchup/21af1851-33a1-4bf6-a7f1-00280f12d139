"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
    >
      <div className="min-h-screen">
        {/* Empty page - no sections selected in plan */}
      </div>
    </ThemeProvider>
  );
}