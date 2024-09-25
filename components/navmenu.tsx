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
      className={cn("fixed max-w-2xl mx-2 z-50 top-2", className)}
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

        <Link
          href={"/skills"}
          className={cn(
            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
          )}
        >
          <span className="block sm:hidden">Skills</span>
          <span className="hidden sm:block text-sm">Skills</span>
        </Link>
       
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/projects/clinicapp">Clinic Care App</HoveredLink>
            <HoveredLink href="/projects/facerecognition">Face Recognition Chatroom</HoveredLink>
            {/* <HoveredLink href="/projects/onlineshop">Online Shop</HoveredLink> */}
          </div>
        </MenuItem>

        <Link
          href={"/contact"}
          className={cn(
            "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
          )}
        >
          <span className="block sm:hidden">Contact Me</span>
          <span className="hidden sm:block text-sm">Contact Me</span>
        </Link>
        
      </Menu>
    </div>
  );
}
