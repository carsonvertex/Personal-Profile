import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function WorkExperience() {
    const data = [
        {
            title: "I-Control Limited",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-lg font-normal ">
                        Sales and Solution Coordinator
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Sep2023 - Mar 2024

                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        • Site visiting for Audio Visual Equipments projects (LED walls, Professional Speakers etc.)<br />
                        • Providing solutions for clients based on the needs and venue restriction<br />
                        • Sourcing equipments for government tenders
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img className="rounded-lg object-cover h-50 md:h-50 lg:h-50 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                            src="images\organizations/i-control1.png" />
                        <img className="rounded-lg object-cover h-50 md:h-50 lg:h-50 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                            src="images\organizations/i-control2.png" />
                    </div>
                </div>
            ),
        },
        {
            title: "Global Call Limited",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-lg font-normal ">
                        Management Trainee                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Apr 2023 - Aug 2023
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        • Personal Assistant of Chairman<br />
                        • Sales & Marketing Executive<br />
                        • Global Call website and logo design
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img className="rounded-lg object-cover h-50 md:h-50 lg:h-50 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                            src="images\organizations/globalcall1.png" />
                        <img className="rounded-lg object-cover h-50 md:h-50 lg:h-50 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                            src="images\organizations/globalcall2.png" />
                    </div>
                </div>
            ),
        },
        {
            title: "Mi-Expert Hong Kong",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-lg md:text-lg font-normal ">
                        Marketing Specialist
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Jun 2022 - Mar 2023

                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        • Marketing Campaign content creation<br />
                        • Hosting online webinars<br />
                        • UI/UX designing
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                            <img className="rounded-lg object-cover h-50 md:h-50 lg:h-50 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                                src="images\organizations/mi-expert1.png" />
                            <img className="rounded-lg object-cover h-50 md:h-50 lg:h-50 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                                src="images\organizations/mi-expert2.png" />
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
