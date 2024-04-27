import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function page() {
    return (
        <div className="bg-black min-h-screen overflow-hidden">
            <div className=" dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative">
                <div className="max-w-7xl mx-auto p-5">
                    <Navbar />
                    <HeroSection />
                </div>
                <div className="h-10 xl:h32 bg-gradient-to-t from-black absolute -bottom-5 xl:bottom-0 left-0 w-full"></div>
            </div>
            <div className="max-w-7xl mx-auto p-5 mt-20">
                <Skill />
                <Projects />
                <Footer />
            </div>
        </div>
    );
}
