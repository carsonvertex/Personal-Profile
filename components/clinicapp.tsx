"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";

export function ClinicApp() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="w-full">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Clinic application for both clinic and patients to use{" "}
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Designed and developed a mobile-friendly web application using
            React.js. <br />
            Application for clinic to queue patients and record diagnosis
            activities
          </p>
        </div>
        <div>
          <img className="w-full mb-2" src="/images/projects/clinic1.png" />
          <img className="w-full" src="/images/projects/clinic2.png" />
          {/* <Image src="/images/projects/clinic2.png" alt="clinic" width={100} height="100"/>  */}
        </div>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Internal System for Clinic
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Record information of patients to create account, record the diagnosis
          history and the medicines needed to take.
          <br />
          Adding information of the medicine inventory for the clinic
        </p>
        <img className="w-full mb-2" src="/images/projects/clinic3.png" />
        <img className="w-full mb-2" src="/images/projects/clinic4.png" />
        <img className="w-full mb-2" src="/images/projects/clinic5.png" />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-full">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Patient Side of the Clinic App
          </h2>
          <p className="mt-4  text-left  text-base/6 text-neutral-200">
            Enables users to check their diagnosis record, care takers can log
            in multiple accounts. It sends notifications to remind users taking
            medicine on time. <br />
            Implemented a drug-taking reminder system that pushes notifications
            to users based on their medication schedules.
          </p>
          <div className="grid grid-cols-3 w-full gap-4 ">
            <img
              className=" col-span-3 md:col-span-1 rounded-2xl"
              src="/images/projects/clinic6.png"
            />
            <img
              className=" col-span-3 md:col-span-1 rounded-2xl"
              src="/images/projects/clinic7.png"
            />{" "}
            <img
              className=" col-span-3 md:col-span-1 rounded-2xl"
              src="/images/projects/clinic8.png"
            />{" "}
            <img
              className=" col-span-3 md:col-span-1 rounded-2xl"
              src="/images/projects/clinic9.png"
            />{" "}
            <img
              className=" col-span-3 md:col-span-1 rounded-2xl"
              src="/images/projects/clinic10.png"
            />{" "}
            <img
              className=" col-span-3 md:col-span-1 rounded-2xl"
              src="/images/projects/clinic11.png"
            />{" "}
           
          </div>
        </div>
        {/* <ClinicSystemDemos/> */}
      </WobbleCard>
    </div>
  );
}

// export function ClinicSystemDemos() {
//   const cards = data.map((card, index) => (
//     <Card key={card.src} card={card} index={index} />
//   ));

//   return (
//     <div className="w-full h-full py-20">
//       <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
//         Get to know your iSad.
//       </h2>
//       {/* <Carousel items={cards} /> */}
//     </div>
//   );
// }

// const DummyContent = () => {
//   return (
//     <>
//       {[...new Array(3).fill(1)].map((_, index) => {
//         return (
//           <div
//             key={"dummy-content" + index}
//             className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
//           >
//             <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
//               <span className="font-bold text-neutral-700 dark:text-neutral-200">
//                 The first rule of Apple club is that you boast about Apple club.
//               </span>{" "}
//               Keep a journal, quickly jot down a grocery list, and take amazing
//               class notes. Want to convert those notes to text? No problem.
//               Langotiya jeetu ka mara hua yaar is ready to capture every
//               thought.
//             </p>
//             <Image
//               src="https://assets.aceternity.com/macbook.png"
//               alt="Macbook mockup from Aceternity UI"
//               height="500"
//               width="500"
//               className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
//             />
//           </div>
//         );
//       })}
//     </>
//   );
// };

// const data = [
//   {
//     category: "Artificial Intelligence",
//     title: "You can do more with AI.",
//     src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "Productivity",
//     title: "Enhance your productivity.",
//     src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "Product",
//     title: "Launching the new Apple Vision Pro.",
//     src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },

//   {
//     category: "Product",
//     title: "Maps for your iPhone 15 Pro Max.",
//     src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "iOS",
//     title: "Photography just got better.",
//     src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "Hiring",
//     title: "Hiring for a Staff Software Engineer",
//     src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
// ];
