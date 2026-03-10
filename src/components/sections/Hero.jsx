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
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

                {/* Left Content */}
                <div className="flex-1 text-left z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-purple-500 font-display font-medium tracking-widest uppercase mb-4">
                            Welcome to the Future
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
                            Hi, I'm <span className="text-purple-500">Deeptha A</span>
                        </h1>

                        <div className="h-20 mb-8">
                            <motion.p
                                className="text-xl md:text-2xl text-white/70 font-sans max-w-2xl leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 1 }}
                            >
                                Software Developer & AI Engineer
                                <br />
                                <span className="text-white/40 italic">Building AI, Web, Mobile & Cloud Systems</span>
                            </motion.p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <MagneticButton href="#projects" className="px-8 py-4 bg-purple-600 rounded-full font-medium flex items-center gap-2 hover:bg-purple-500 transition-all glow-hover">
                                <LayoutGrid size={20} />
                                View Projects
                            </MagneticButton>

                            <MagneticButton href="#contact" className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-medium flex items-center gap-2 backdrop-blur-md hover:bg-white/10 transition-all">
                                <Mail size={20} />
                                Contact
                            </MagneticButton>

                            <MagneticButton
                                href="/resume/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-white border border-white rounded-full text-black font-medium flex items-center gap-2 transition-all hover:bg-white/90"
                            >
                                <FileText size={20} />
                                View Resume
                            </MagneticButton>
                        </div>
                    </motion.div>
                </div>

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
