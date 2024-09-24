"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, MenuItem, HoveredLink, ProductItem } from "./ui/navbar-menu";
import Link from "next/link";

export function NavMenu() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white"></p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link
          href={"/"}
          className={cn(
            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
          )}
        >
          <span className="block sm:hidden">About Me</span>
          <span className="hidden sm:block text-sm">About Me</span>
        </Link>
       
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/projects/clinicapp">Clinic Care App</HoveredLink>
            <HoveredLink href="/projects/facerecognition">Face Recognition Chatroom</HoveredLink>
            <HoveredLink href="/projects/onlineshop">Online Shop</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
