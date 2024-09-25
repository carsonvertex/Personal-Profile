import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="w-screen text-center justify-center">{children}</div>
    </section>
  );
}
