"use client"
import { title } from "@/components/primitives";
import { ProgrammingSkills } from "@/components/skills";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";


export default function ContactPage() {
  return (
  
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

    </div>
   
  );
}
