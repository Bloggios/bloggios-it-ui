"use client";

import React from 'react';
import {Spotlight} from "@/components/animation/Spotlight";
import {Button} from "@nextui-org/react";
import {BiRightArrow, BiSolidRightArrow} from "react-icons/bi";

const HeroSection = () => {
    return (

    <div
        className="w-full rounded-md flex flex-col md:items-center md:justify-center bg-transparent antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="purple"
        />
        <div className="my-10 md:mt-20 md:mb-10 p-4 mx-auto relative z-10 w-full">
            <h1
                className={"scroll-m-20 text-2xl md:text-4xl lg:text-5xl text-center tracking-wide font-light lg:leading-extra-loose leading-relaxed"}>
                Building Tomorrow’s Solutions Today<br/>as <span
                className={"text-indigo-600 dark:text-indigo-400 lg:leading-extra-loose leading-relaxed"}>Your IT Success Partner</span>
            </h1>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-2xl text-center mx-auto">
                Transform your business with Bloggios’ expert IT consulting services. We provide innovative solutions that streamline technology needs, ensuring seamless integration and efficiency for lasting success
            </p>
        </div>

        <div className={"flex gap-4 items-center justify-center"}>
            <Button className={"bg-indigo-600 text-white"}>
                Schedule Call <BiSolidRightArrow />
            </Button>

            <Button color={"primary"}>
                Services
            </Button>
        </div>
    </div>
    );
};

export default HeroSection;