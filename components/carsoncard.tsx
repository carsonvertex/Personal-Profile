"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";

export function CarsonCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="grid grid-cols-3 gap-4 bg-gray-50 bg-opacity-90 relative group/card dark:bg-black dark:bg-opacity-20 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-96 sm:w-[40rem] h-auto rounded-xl p-6 border">
        {/* Image */}
        <CardItem translateZ="100" className="col-span-1">
          <img
            className="w-40 h-auto object-cover rounded-xl group-hover/card:shadow-xl"
            src="\images\profilepic.jpg"
          />
        </CardItem>
        {/* Name */}
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white flex col-span-2"
        >
          <div>
            <h1>Carson</h1>
            <p>Lee Lok Hin </p>
            <p>Front-End Developer</p>
          </div>
        </CardItem>

        {/* intro */}
        <CardItem
          translateZ="50"
          className="text-lg  text-neutral-600 dark:text-white flex col-span-3"
        >
          <div>
            <p>
              As a recent computer science graduate, I have developed strong
              programming skills. <br />I am proficient in languages like
              JavaScript and TypeScript, and I know how to use frameworks such
              as React.js. <br />
              Through my studies and internships, I have gained practical
              experience in areas like AI, web apps, and ecommerce.
              <br />
              While I'm a fresh graduate, I'm a quick learner and very motivated
              to apply my skills. I'm eager to join a company and contribute as
              a talented entry-level programmer.
            </p>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
