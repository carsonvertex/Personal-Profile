"use client"

import { AuroraBackground } from "@/components/ui/aurora-background";
import { WavyBackground } from "@/components/ui/wavy-background";
import { motion } from "framer-motion";

export default function FaceRecognitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
    
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="h-screen mt-20 py-5  text-center justify-center">
          {/* Fixed WavyBackground */}
          {children}
        </div>
      </section>
     
  );
}
