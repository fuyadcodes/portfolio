"use client";

import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
    SiFirebase,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiTailwindcss,
    SiVite,
} from "react-icons/si";

export default function Skill() {
    const skills = [
        {
            text: "React",
            icon: SiReact,
        },
        {
            text: "Next.js",
            icon: SiNextdotjs,
        },
        {
            text: "TawilwindCss",
            icon: SiTailwindcss,
        },
        {
            text: "Node.js",
            icon: SiNodedotjs,
        },
        {
            text: "HTML",
            icon: SiHtml5,
        },
        {
            text: "JavaScript",
            icon: SiJavascript,
        },
        {
            text: "MongoDB",
            icon: SiMongodb,
        },
        {
            text: "Firebase",
            icon: SiFirebase,
        },
        {
            text: "Vite",
            icon: SiVite,
        },
    ];

    return (
        <div className="mx-w-5xl mx-auto px-8">
            <Title
                text="Skills 🔪"
                className="flex flex-col items-center justify-center -rotate-6"
            />

            <HoverEffect items={skills} />
        </div>
    );
}
