"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";

export function Skills() {
  const tabs = [
    {
      title: "Programming Skills",
      value: "programming",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gray-900 ">
          <p>Programming</p>
          <ProgrammingSkills />
        </div>
      ),
    },
    {
      title: "Design Software Skills",
      value: "design",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gray-900 ">
          <p>Design Software</p>
          <DesignSkills />
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

const ProgrammingSkills = () => {
  return <p>hi</p>;
};

const DesignSkills = () => {
  return <p>hi</p>;
};
