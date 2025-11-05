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
        <div className="text-center py-20">
          <h1 className="text-4xl font-bold mb-4">Welcome to Webild</h1>
          <p className="text-lg text-foreground/80">Your theme has been applied successfully.</p>
        </div>
      </div>
    </ThemeProvider>
  );
}