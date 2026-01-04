"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award } from "lucide-react";

const allCerts = [
    {
        name: "5-Day AI Agents Intensive Course with Google",
        org: "Kaggle",
        year: "December 2025",
        desc: "Hands-on training in AI agents with practical projects.",
        tags: ["Certification", "AI"],
        link: "https://www.kaggle.com/certification/badges/surajsingh9696/105",
    },
    {
        name: "Python Coder Certification",
        org: "Kaggle",
        year: "November 2025",
        desc: "Verified certification demonstrating proficiency in Python programming.",
        tags: ["Certification" , "Python"],
        link: "https://www.kaggle.com/certification/badges/surajsingh9696/30",
    },
    {
        name: "CS50x Certification by Harvard University",
        org: "Harvard University",
        year: "November 2024",
        desc: "Comprehensive introduction to computer science and programming.",
        tags: ["Certification", "Harvard"],
        link: "https://certificates.cs50.io/20f51df4-c9fd-45fa-b70a-39d4a0f8bbe9.pdf?size=letter",
    },
    {
        name: "CS50P: Introduction to Programming with Python",
        org: "Harvard University",
        year: "December 2024",
        desc: "Introduction to programming with Python.",
        tags: ["Certification", "Harvard" , "Python"],
        link: "https://certificates.cs50.io/35cd9cb6-1deb-445b-b06d-a19b75ea9a1b.pdf?size=letter",
    },
    {
        name: "ByteBattle 2024",
        org: "College",
        year: "September 2024",
        desc: "DSA Competition",
        tags: ["Competition", "College" , "DSA"],
        link: "https://drive.google.com/file/d/1PBD6rJwjj77yo1P3Z_6g2uxb6232vwAa/view?usp=drive_link",
    },
    {
        name: "DataChat Workshop on RAG",
        org: "GDG on Campus",
        year: "September 2024",
        desc: "RAG Workshop",
        tags: ["Workshop", "College" , "RAG"],
        link: "https://drive.google.com/file/d/18njch1JbiS2Q2lvJlLzhpZ1w0PQM_yIx/view?usp=drive_link",
    },
    {
        name: "Excel: From Beginner to Expert Certification",
        org: "Analytics Vidhya",
        year: "December 2025",
        desc: "Comprehensive Excel training from beginner to expert level.",
        tags: ["Certification", "Excel"],
        link: "https://courses.analyticsvidhya.com/certificates/a18v9mptkg",
    },
    {
        name: "GenAI for Everyone Certification",
        org: "Analytics Vidhya",
        year: "December 2025",
        desc: "Comprehensive course on Generative AI technologies and applications.",
        tags: ["Certification", "GenAI"],
        link: "https://courses.analyticsvidhya.com/certificates/zhqbigmrni",
    },
    {
        name: "NotebookLM Essentials to Pro Certification",
        org: "Analytics Vidhya",
        year: "December 2025",
        desc: "In-depth training on NotebookLM from basics to advanced practical applications.",
        tags: ["Certification", "NotebookLM"],
        link: "https://courses.analyticsvidhya.com/certificates/qjuct1hmtk",
    },
    {
        name: "Gemini 3: The AI That Thinks, Sees and Creates Certification",
        org: "Analytics Vidhya",
        year: "December 2025",
        desc: "Comprehensive course on Google's Gemini 3 AI model and its capabilities.",
        tags: ["Certification", "Gemini 3"],
        link: "https://courses.analyticsvidhya.com/certificates/rxwqff9j1f",
    },
];

const Certifications = () => {
    const [activeTab, setActiveTab] = useState("All");

    // Extract unique categories from tags
    const allCategories = ["All", ...new Set(allCerts.flatMap(cert => cert.tags))];
    const tabs = allCategories;

    const filtered = allCerts.filter(
        (c) => activeTab === "All" || c.tags.includes(activeTab)
    );

    return (
        <div id="certifications" className="py-20 px-6 md:px-20 text-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent inline-block mb-3">
                        Milestones & Badges
                    </h2>
                    <p className="text-gray-400 text-lg">Verified accomplishments and specializations.</p>
                </div>

                {/* 🏷️ Filter Chips */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-5 py-2 rounded-lg text-sm transition-colors border ${activeTab === tab
                                ? "bg-purple-500/20 border-purple-500 text-purple-400"
                                : "bg-[#1a1a2d] border-gray-800 text-gray-500 hover:text-gray-300"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* 📜 Cert Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((cert, index) => (
                            <motion.div
                                key={cert.name + index}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="bg-[#111122] border border-gray-800/50 p-6 rounded-2xl flex flex-col items-start hover:border-purple-500/30 transition-all group relative"
                            >
                                <h4 className="text-xl font-bold mb-1 leading-tight">{cert.name}</h4>
                                <p className="text-purple-400/80 text-sm font-semibold mb-2">{cert.org}</p>
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">{cert.desc}</p>
                                <div className="flex items-center justify-between w-full mt-auto pt-4 border-t border-gray-800/50">
                                    <div className="flex flex-wrap gap-1">
                                        {cert.tags.map((tag) => (
                                            <span key={tag} className="text-[10px] text-gray-400 bg-gray-900 px-2 py-1 rounded-full uppercase font-bold tracking-tighter">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="text-[10px] text-gray-500 italic font-medium">{cert.year}</span>
                                </div>
                                {cert.link && (
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 w-full text-center bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 py-2 px-4 rounded-lg text-sm font-semibold transition-colors border border-purple-500/30 hover:border-purple-500/50"
                                    >
                                        View Certificate
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Certifications;
