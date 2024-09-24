"use client";

import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className="mt-72 text-center justify-center">{children}</div>
        </section>
      </motion.h1>
    </LampContainer>
  );
}
