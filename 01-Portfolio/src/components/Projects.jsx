"use client";

import React, { useState } from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Layers } from "lucide-react";

const allProjects = [
    {
        name: "Campus Lost and Found Portal",
        desc: "React with JWT authentication for secure user access. Node.js and Express backend with MongoDB for data storage. Features include item reporting and searching",
        tags: ["React.js", "MongoDB", "JWT", "Node.js", "Express", "TailwindCSS"],
        link: "https://campus-lost-and-found-app.onrender.com",
        github: "https://github.com/SurajSingh9696/Campus_Lost_And_Found",
        image: "/projects/campuslostandfound.png"
    },
    {
        name: "MailPilot.AI - AI Email Generator",
        desc: "An AI-powered email generator that crafts professional emails based on user prompts. Built with React for the frontend and Node.js for backend processing, integrating OpenAI's GPT-4 API for content generation.",
        tags: ["React.js", "Node.js", "Express", "API"],
        link: "https://mailpilot-ai.onrender.com",
        github: "https://github.com/SurajSingh9696/MailPilot.AI",
        image: "/projects/mailpilot.png"
    },
    {
        name: "QuickQR - QR Code Generator",
        desc: "A user-friendly QR code generator that allows users to create and customize QR codes for Images, URLs, and text. Developed using React for the frontend and Node.js for backend services.",
        tags: ["React.js", "Node.js", "Express"],
        link: "https://quickqr-image2qr.onrender.com",
        github: "https://github.com/SurajSingh9696/QuickQR",
        image: "/projects/quickqr.png"
    },
    {
        name: "CityData.Org - Urban Data Explorer",
        desc: "An interactive platform for exploring urban data, including demographics, infrastructure, and public services. Built with React for a dynamic user interface and Node.js for backend data management.",
        tags: ["React.js", "Node.js", "Express", "TailwindCSS", "API"],
        link: "https://citydata-org.onrender.com",
        github: "https://github.com/SurajSingh9696/CityData.Org",
        image: "/projects/citydata.png"
    },
    {
        name: "CloudShare - Cloud-based File Sharing Platform",
        desc: "A secure file sharing platform that enables users to upload, share, and manage files in the cloud. Utilizes React for the frontend and Node.js with Express for backend services, ensuring efficient file handling and user authentication.",
        tags: ["React.js", "Node.js", "Express", "MongoDB"],
        link: "https://cloudshare.onrender.com",
        github: "https://github.com/SurajSingh9696/CloudShare",
        image: "/projects/cloudshare.png"
    },
    {
        name: "Compress2Pdf - File Compression to PDF Converter",
        desc: "A web application that allows users to compress various file types into PDF format. Built with React for the frontend and Node.js for backend processing, ensuring efficient file conversion and compression.",
        tags: ["React.js", "Node.js", "Express"],
        link: "https://compress2pdf.onrender.com",
        github: "https://github.com/SurajSingh9696/Compress2Pdf",
        image: "/projects/compress2pdf.png"
    },
    {
        name: "EcoTrack - Eco-Activity Tracker",
        desc: "A web app that helps users track their eco-friendly activities and carbon footprint. Built with React for the frontend and Node.js for backend data management.",
        tags: ["React.js", "Node.js", "Express", "MongoDB", "JWT"],
        link: "https://ecotrack-ecoactivitytrackingsite.onrender.com",
        github: "https://github.com/SurajSingh9696/EcoTrack",
        image: "/projects/ecotrack.png"
    },
    {
        name: "Imagination.AI - AI Image Generator",
        desc: "An AI-powered image generator that creates stunning visuals based on user prompts using Puter.ai API. Built with React for the frontend and Node.js for backend processing.",
        tags: ["React.js", "Node.js", "Express", "API"],
        link: "https://imagination-ai-tool.onrender.com",
        github: "https://github.com/SurajSingh9696/Imagination.AI",
        image: "/projects/imagination.png"
    },
    {
        name: "Xynth.AI - An AI Image+Text Generator",
        desc: "An AI-powered platform that generates both images and text based on user prompts using Puter.ai and OpenAI's GPT-4 APIs. Built with React for the frontend and Node.js for backend processing.",
        tags: ["React.js", "Node.js", "Express", "API"],
        link: "https://xynth-ai-tool.onrender.com",
        github: "https://github.com/SurajSingh9696/Xynth.AI",
        image: "/projects/Xynth.png"
    },
    {
        name: "My Personal Portfolio site",
        desc: "A personal portfolio website to showcase my projects and skills. Built with React and TailwindCSS for a modern and responsive design.",
        tags: ["React.js", "TailwindCSS" , "Three.js" , "Portfolio"],
        link: "https://surajsingh9696.github.io/Portfolio",
        github: "https://github.com/SurajSingh9696/MyPortfolio",
        image: "/projects/portfolio.png"
    },
];

// Extract unique tags for filtering
const allTags = ["All", ...new Set(allProjects.flatMap(project => project.tags))];

const Projects = () => {
    const [filter, setFilter] = useState("All");

    const filtered = allProjects.filter(
        (p) => filter === "All" || p.tags.includes(filter)
    );

    return (
        <div id="projects" className="py-20 px-6 md:px-20 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent inline-block mb-3">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400 text-lg">
                        A comprehensive showcase of my recent work.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {allTags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setFilter(tag)}
                            className={`px-6 py-2 rounded-full text-xs font-bold uppercase transition-all duration-300 border ${filter === tag
                                ? "bg-purple-600 border-purple-400 text-white shadow-lg shadow-purple-500/40"
                                : "bg-[#1a1a2d] border-purple-900/40 text-gray-500 hover:text-white"
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((proj, index) => (
                            <motion.div
                                key={proj.name + index}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="h-full"
                            >
                                <Tilt
                                    glareEnable={true}
                                    glareMaxOpacity={0.1}
                                    className="bg-[#111122] rounded-2xl overflow-hidden border border-purple-900/20 group h-full flex flex-col hover:border-purple-400/30 transition-all duration-300"
                                    perspective={1200}
                                >
                                    <div className="h-44 bg-gray-800 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                        <Image
                                            src={proj.image}
                                            alt={proj.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 1024px) 50vw, 33vw"
                                        />
                                        <div className="absolute top-4 right-4 z-20 flex gap-2">
                                            <a href={proj.github} target="_blank" rel="noreferrer" className="p-2 bg-black/60 rounded-full hover:bg-purple-600 transition-colors backdrop-blur-sm">
                                                <Github size={16} />
                                            </a>
                                            {proj.link && (
                                                <a href={proj.link} target="_blank" rel="noreferrer" className="p-2 bg-black/60 rounded-full hover:bg-cyan-600 transition-colors backdrop-blur-sm">
                                                    <ExternalLink size={16} />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <div className="p-5 flex flex-col flex-grow">
                                        <h3 className="text-lg font-bold mb-2 group-hover:text-purple-300 transition-colors">{proj.name}</h3>
                                        <p className="text-xs text-gray-400 mb-4 leading-relaxed line-clamp-2">
                                            {proj.desc}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5 mt-auto">
                                            {proj.tags.map(tag => (
                                                <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md bg-purple-900/20 border border-purple-800/20 text-purple-300">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Tilt>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Projects;



