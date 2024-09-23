"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";

export function CarsonCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[40rem] h-auto rounded-xl p-6 border">
        <div className="flex px-4 py-2 rounded-xl text-xs font-normal dark:text-white ">
          {/* IMage */}
          <CardItem translateZ="100" className="w-full ">
            <img
              className="w-32 h-auto object-cover rounded-xl group-hover/card:shadow-xl"
              src="\images\profilepic.jpg"
            />
          </CardItem>
          {/* Information */}
          <div className="w-full">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              <h1>Carson</h1>
              <p>Lee Lok Hin </p>
              <p>Full-Stack Developer</p>
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              The University of Hong Kong
              <br /> Information Management
            </CardItem>
          </div>
        </div>

        <div className="flex justify-between items-center ">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <h2>
              As a recent computer science graduate, I have developed strong
              programming skills. <br />I am proficient in languages like
              JavaScript and TypeScript, and I know how to use frameworks such
              as React.js. <br/>Through my studies and internships, I have gained
              practical experience in areas like AI, web apps, and ecommerce.
              <br />
              While I'm a fresh graduate, I'm a quick learner and very motivated
              to apply my skills. I'm eager to join a company and contribute as
              a talented entry-level programmer.
            </h2>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
