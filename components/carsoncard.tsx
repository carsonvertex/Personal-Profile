"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";

export function CarsonCard() {
  return (
    <CardContainer className="">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  sm:w-[30rem] h-auto w-max rounded-xl p-6 border  ">
        <div className="flex w-full">
          {/* Profile Pic */}
          <CardItem translateZ="100" className="w-full m-4">
            <img
              className="h-full w-60 object-cover rounded-xl group-hover/card:shadow-xl"
              src="\images\profilepic.jpg"
            />
          </CardItem>
          {/* Information */}
          <CardItem translateZ="100" className="w-full m-4">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              <h1>Carson</h1>
              <p>Lee Lok Hin </p>
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Front-End Developer
              <br />The University of Hong Kong
              <br/> Information Management
            </CardItem>
          </CardItem>
        </div>
        {/* Self Introduction */}
        <div className="flex justify-between items-center ">
          <CardItem
            translateZ="100"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <h2>
              As a recent computer science graduate, I have developed strong
              programming skills. <br />I am proficient in languages like
              JavaScript and TypeScript, and I know how to use frameworks such
              as React.js. Through my studies and internships, I have gained
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
