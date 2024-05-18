import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SiFacebook, SiGithub, SiLinkedin, SiX } from "react-icons/si";

export default function Navbar({ className }: { className?: string }) {
    const socials = [
        {
            link: "https://www.facebook.com/fuyadcodes",
            label: "Facebook",
            Icon: SiFacebook,
        },
        {
            link: "https://www.linkedin.com/in/fuyadhasanfahim/",
            label: "LinkedIn",
            Icon: SiLinkedin,
        },
        {
            link: "https://twitter.com/fuyadhasanfa",
            label: "X",
            Icon: SiX,
        },
        {
            link: "https://github.com/fuyadhasanfahim",
            label: "Github",
            Icon: SiGithub,
        },
    ];

    return (
        <nav
            className={cn(
                "py-10 flex justify-between items-center gap-5",
                className
            )}
        >
            <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
                👨🏽‍💻 Fuyad Hasan Fahim
            </h1>
            <div className="flex items-center gap-5">
                {socials.map((social) => {
                    const { link, label, Icon } = social || {};

                    return (
                        <Link href={link} key={label} aria-label={label}>
                            <Icon className="w-5 h-5 hover:scale-125 transition-all" />
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
