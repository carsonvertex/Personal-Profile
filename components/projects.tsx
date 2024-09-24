"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import { ClinicApp } from "./clinicapp";

export function Projects() {
  const tabs = [
    {
      title: "Clinic Care Application",
      value: "clinic",
      content: (
        <div className="w-full  relative  rounded-2xl p-10 text-md md:text-md font-bold text-white bg-gray-900 ">
          <p>Clinic Care Application</p>
          <ClinicApp/>
        </div>
      ),
    },
    {
      title: "Face Recognition Chatroom",
      value: "facerecognition",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-md md:text-md font-bold text-white bg-gray-900 ">
          <p>Face Recognition Chatroom</p>
        </div>
      ),
    },
    {
      title: "E-Commerece Online Shop",
      value: "onlineshop",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-md md:text-md font-bold text-white bg-gray-900 ">
          <p>E-Commerece Online Shop</p>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}
