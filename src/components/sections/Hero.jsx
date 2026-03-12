import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FileText, LayoutGrid, Mail } from 'lucide-react'
import Avatar3D from '../ui/Avatar3D'
import MagneticButton from '../ui/MagneticButton'

export default function Hero() {
    const containerRef = useRef(null)
    const imageRef = useRef(null)


    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 py-24 pb-32 md:py-0">

                {/* Left Content */}
                <motion.div
                    className="flex-1 text-left z-10"
                    animate={{
                        y: [-5, 5, -5],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.12,
                                    delayChildren: 0.2
                                }
                            }
                        }}
                    >
                        <motion.h2
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="text-purple-400 font-display font-medium tracking-[0.4em] uppercase mb-4 text-xs md:text-sm"
                        >
                            Welcome to the Future
                        </motion.h2>

                        <motion.h1
                            className="text-6xl sm:text-7xl md:text-[5.5rem] font-display font-bold mb-8 leading-[1.05]"
                        >
                            <motion.span
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                className="block text-white/90 text-4xl sm:text-5xl md:text-6xl mb-2"
                            >
                                Hi, I'm
                            </motion.span>
                            <span className="relative inline-block">
                                {"Deeptha A".split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                                            visible: { opacity: 1, y: 0, filter: "blur(0px)" }
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.5 + index * 0.05,
                                            ease: "easeOut"
                                        }}
                                        className="inline-block text-purple-500 hover:text-purple-400 transition-colors cursor-default"
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                                <motion.span
                                    className="absolute -bottom-2 left-0 h-[2px] bg-purple-500/50"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 1.5, duration: 1.2, ease: "circOut" }}
                                />
                            </span>
                        </motion.h1>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-center gap-3">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 1, type: "spring", stiffness: 200 }}
                                    className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]"
                                />
                                <motion.p
                                    variants={{
                                        hidden: { opacity: 0, x: -10 },
                                        visible: { opacity: 1, x: 0 }
                                    }}
                                    className="text-xl md:text-3xl text-white/90 font-sans font-light tracking-tight"
                                >
                                    Software Developer <span className="text-purple-500/50">&</span> AI Engineer
                                </motion.p>
                            </div>

                            <motion.p
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1 }
                                }}
                                transition={{ delay: 1.5 }}
                                className="text-lg md:text-xl text-white/40 italic font-sans pl-5 border-l border-white/10"
                            >
                                Building AI, Web, Mobile & Cloud Systems
                            </motion.p>
                        </div>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            className="flex flex-col sm:flex-row flex-wrap gap-5 w-full"
                        >
                            <MagneticButton href="#projects" className="px-8 py-4 bg-purple-600 rounded-full font-medium flex justify-center items-center gap-2 hover:bg-purple-500 transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] w-full sm:w-auto group relative overflow-hidden">
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                                />
                                <LayoutGrid size={20} className="relative z-10" />
                                <span className="relative z-10">View Projects</span>
                            </MagneticButton>

                            <MagneticButton href="#contact" className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-medium flex justify-center items-center gap-2 backdrop-blur-md hover:bg-white/10 transition-all w-full sm:w-auto">
                                <Mail size={20} />
                                Contact
                            </MagneticButton>

                            <MagneticButton
                                href={`${import.meta.env.BASE_URL}resume/resume.pdf`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-white/10 border border-white/20 rounded-full text-white font-medium flex justify-center items-center gap-2 transition-all hover:bg-white hover:text-black w-full sm:w-auto"
                            >
                                <FileText size={20} />
                                View Resume
                            </MagneticButton>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Right Visual (Image) */}
                <div className="flex-1 relative flex justify-center items-center">
                    {/* 3D Effects Group */}
                    <div className="relative w-72 h-72 md:w-96 md:h-96">

                        {/* Particle Aura */}
                        <div className="aura absolute inset-[-20%] border-2 border-purple-500/20 rounded-full blur-2xl" />

                        {/* Halo Rings */}
                        <div className="halo absolute inset-[-10%] border border-purple-500/30 rounded-full border-dashed animate-spin-slow" />
                        <div className="halo absolute inset-[-5%] border border-blue-500/20 rounded-full rotate-45" />

                        {/* Hologram Glow Array */}
                        <div className="absolute inset-[-40%] bg-blue-500/30 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
                        <div className="absolute inset-[-20%] bg-purple-500/40 blur-[80px] rounded-full mix-blend-screen pointer-events-none animate-pulse" />

                        {/* Main 3D Avatar Container */}
                        <Avatar3D />

                        {/* Glowing Shadow */}
                        <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-1/2 h-10 bg-purple-500/20 blur-3xl rounded-full" />
                    </div>
                </div>

            </div>

            {/* Decorative Blur */}
            <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full -z-10 mix-blend-screen" />
            <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full -z-10 mix-blend-screen" />
        </section>
    )
}
