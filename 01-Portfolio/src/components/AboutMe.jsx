"use client";

import React from "react";
import Image from "next/image";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MapPin } from "lucide-react";

const education = [
    {
        title: "B.Tech in Computer Science",
        institution: "Shri Ramswaroop Memorial College of Engineering and Management, Lucknow",
        date: "2024 - 2028",
        location: "Lucknow, India",
        icon: "/logos/srmcem.webp",
    },
    {
        title: "Intermediate, PCM, ISC",
        institution: "New Public College, Nilmatha",
        date: "2024",
        location: "Lucknow, India",
        icon: "/logos/npc.webp",
    },
    {
        title: "Matriculation, ICSE",
        institution: "New Public College, Nilmatha",
        date: "2022",
        location: "Lucknow, India",
        icon: "/logos/npc.webp",
    },
];

const AboutMe = () => {
    return (
        <div id="about" className="py-20 px-6 md:px-20 text-white bg-transparent">
            <div className="max-w-6xl mx-auto">
                {/* 🏔️ Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent inline-block mb-3">
                        About My Journey
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Web developer building modern, interactive, and efficient applications—powered by clean code and a growing passion for AI-driven solutions.
                    </p>
                </div>

                {/* ⏳ Vertical Timeline */}
                <section className="mb-20">
                    <h3 className="text-2xl font-semibold text-center mb-10 text-cyan-400">
                        Education
                    </h3>
                    <VerticalTimeline animate={true} lineColor="#312e81">
                        {education.map((item, idx) => (
                            <VerticalTimelineElement
                                key={idx}
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                    background: "rgba(255, 255, 255, 0.05)",
                                    color: "#fff",
                                    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
                                    border: "1px solid rgba(139, 92, 246, 0.3)",
                                    backdropFilter: "blur(10px)",
                                }}
                                contentArrowStyle={{ borderRight: "7px solid  rgba(139, 92, 246, 0.3)" }}
                                date={item.date}
                                iconStyle={{ background: "#fff", color: "#fff", display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}
                                icon={
                                    <Image src={item.icon} alt={item.institution} width={56} height={56} className="p-1 object-contain" />
                                }
                            >
                                <h4 className="vertical-timeline-element-title text-xl font-bold">
                                    {item.title}
                                </h4>
                                <h5 className="vertical-timeline-element-subtitle text-purple-300 font-medium">
                                    {item.institution}
                                </h5>
                                <p className="flex items-center gap-1 text-sm text-gray-400 mt-2">
                                    <MapPin size={14} /> {item.location}
                                </p>
                                <p className="text-gray-300 mt-4 leading-relaxed">
                                    {item.description}
                                </p>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </section>
            </div>
        </div>
    );
};

export default AboutMe;
