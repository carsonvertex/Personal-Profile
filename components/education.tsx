"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function Education() {
    return (
        <>
            <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
                Education
            </h2>
            <div className="grid grid-cols-3 gap-10">
                <div className="col-span-3 sm:col-span-1  w-full flex items-center justify-center">
                    <PinContainer
                        title="/https://tecky.io/zh_Hant/"
                        href="https://tecky.io/zh_Hant/"
                    >
                        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                                Tecky Academy (2024)
                            </h3>
                            <div className="text-base !m-0 !p-0 font-normal">
                                <span className="text-slate-500">
                                    MicroMaster in A.I. and Programming
                                </span>
                            </div>
                            <div className="flex items-center content-center h-full">
                                <img className="flex w-full rounded-lg my-4 overflow-hidden" src="images/organizations/tecky.png" />
                            </div>
                        </div>
                    </PinContainer>
                </div>

                <div className="col-span-3 sm:col-span-1  w-full flex items-center justify-center">
                    <PinContainer
                        title="/https://www.hku.hk/c_index.html"
                        href="https://www.hku.hk/c_index.html"
                    >
                        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                                The University of Hong Kong (2022)
                            </h3>
                            <div className="text-base !m-0 !p-0 font-normal">
                                <span className="text-slate-500">
                                    (Bsc) Information Management
                                </span>
                            </div>
                            <div className="flex items-center content-center h-full">
                                <img className="flex w-full rounded-lg my-4 overflow-hidden" src="images/organizations/hku.png" />
                            </div>
                        </div>
                    </PinContainer>
                </div>

                <div className="col-span-3 sm:col-span-1  w-full flex items-center justify-center">
                    <PinContainer
                        title="/https://www.cityu.edu.hk/zh-hk"
                        href="https://www.cityu.edu.hk/zh-hk"
                    >
                        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                                Community College of City University (2019)
                            </h3>
                            <div className="text-base !m-0 !p-0 font-normal">
                                <span className="text-slate-500">
                                    (ABA) General Management
                                </span>
                            </div>
                            <div className="flex items-center content-center h-full">
                                <img className="flex w-full rounded-lg my-4 overflow-hidden" src="images/organizations/cityu.png" />
                            </div>
                        </div>
                    </PinContainer>
                </div>
            </div>
        </>

    );
}
