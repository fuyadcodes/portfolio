import Link from "next/link";
import React from "react";
import { MovingBorderBtn } from "../../../components/ui/moving-border";
import Title from "./Title";

export default function HeroSection() {
    return (
        <div className="min-h-[60vh] flex flex-col-reverse lg:flex-row gap-20 lg:gap-0 items-center justify-between my-10 md:my-0 animate-move-up">
            <div className="space-y-10 text-center lg:text-left">
                <h1 className="text-4xl lg:text-7xl font-bold">
                    Hi, nice to meet you 👋 <br />
                    <span className="underline underline-offset-8 decoration-green-500">
                        {"I'm Fuyad."}
                    </span>
                </h1>
                <p className="md:w-96 text-lg text-gary-300">
                    {
                        "I'm a Fullstack Web Developer, passionate about building a modern web application that users love."
                    }
                </p>
                <Link
                    href={"mailto:fuyad.dev@gmail.com"}
                    className="inline-block group"
                >
                    <Title text="Contact Me 📫" />
                </Link>
            </div>

            <div className="relative">
                <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
                    <div className="flex gap-3 translate-x-8">
                        <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
                        <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
                    </div>
                    <div className="flex gap-3 -translate-x-8">
                        <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
                        <div className="w-32 h-32 rounded-full bg-green-500"></div>
                    </div>
                    <div className="glow absolute top-1/2 right-1/2 -z-10"></div>
                </div>
                <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
                    <MovingBorderBtn
                        borderRadius="0.5rem"
                        className="p-3 font-semibold"
                    >
                        <p>💼 Available for Work</p>
                    </MovingBorderBtn>
                </div>
            </div>
        </div>
    );
}
