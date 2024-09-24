"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function FaceRecognition() {
  const words = [
    {
      text: "Profile",
    },
    {
      text: "Verified",
    },
    {
      text: "Chatroom",
    },

    {
      text: "Powered",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "by",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "AI",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Face",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Recognition",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[40rem]  ">
        <TypewriterEffectSmooth words={words} />

        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
          • Developed a profile verification system using advanced facial
          recognition technology.
          <br />
          • Implemented deep learning algorithms to accurately identify and
          verify user profiles based on facial features. <br />
          • Ensured a secure and streamlined user authentication process for
          various applications. <br />
        </p>
      </div>

      {/* demo */}
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Log in to your Account <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Verified Chatroom
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/images/projects/chat1.png`}
            alt="hero"
            height={870}
            width={1900}
            className="mx-auto rounded-2xl object-cover h-full flex items-center justify-center"
            draggable={false}
          />
        </ContainerScroll>
      </div>
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Upload your photos <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Create Profile
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/images/projects/chat2.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full flex items-center justify-center"
            draggable={false}
          />
        </ContainerScroll>
      </div>

      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Capture a Photo <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Verify Your Identity
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/images/projects/chat3.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full flex items-center justify-center"
            draggable={false}
          />
        </ContainerScroll>
      </div>

      <div className="flex flex-col overflow-auto">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Chatrooms for Users <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Secured Chatroom
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/images/projects/chat4.png`}
            alt="hero"
            height={870}
            width={1900}
            className="mx-auto rounded-2xl object-cover h-full flex items-center justify-center"
            draggable={true}
          />
        </ContainerScroll>
      </div>
    </>
  );
}
