import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import TiltCard from '../ui/TiltCard'

const projects = [
    {
        title: "Healthcare Platform",
        category: "Full Stack / AI",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
        description: "Next-gen healthcare portal with AI diagnostic assistance and secure patient record management."
    },
    {
        title: "AI Chatbot",
        category: "AI / NLP",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        description: "Advanced conversational agent powered by LLMs for automated enterprise customer support."
    },
    {
        title: "Device Dashboard",
        category: "IoT / Cloud",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        description: "Real-time monitoring system for industrial mechatronic devices with data visualization."
    },
    {
        title: "Ride Companion App",
        category: "Mobile / iOS",
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800",
        description: "Smart ride-sharing assistant with real-time tracking and optimized routing."
    },
    {
        title: "Auth Portal",
        category: "Security / Web",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        description: "Multi-factor authentication system with biometric support and advanced encryption."
    },
    {
        title: "Monitoring Dashboard",
        category: "Cloud / DevOps",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        description: "Centralized cloud resource monitor with automated alerting and performance metrics."
    }
]

export default function Projects() {
    return (
        <section id="projects" className="py-32 px-4">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-right mb-20"
                >
                    <h2 className="text-purple-500 font-display font-medium tracking-widest uppercase mb-4">
                        Selected Works
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold">
                        Project Showcase
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <TiltCard
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-[#0e0e0e] rounded-[32px] overflow-hidden border border-white/5 hover:border-purple-500/50 transition-all duration-500 shadow-2xl"
                        >
                            {/* Project Image */}
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] to-transparent" />

                                {/* Project Links */}
                                <div className="absolute top-4 right-4 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <button className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white text-white hover:text-black transition-all">
                                        <Github size={18} />
                                    </button>
                                    <button className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white text-white hover:text-black transition-all">
                                        <ExternalLink size={18} />
                                    </button>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-8">
                                <span className="text-purple-500 text-sm font-bold tracking-widest uppercase block mb-2">
                                    {project.category}
                                </span>
                                <h4 className="text-2xl font-display font-bold mb-4 group-hover:text-purple-400 transition-colors">
                                    {project.title}
                                </h4>
                                <p className="text-white/50 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Glow Border Effect */}
                                <div className="absolute inset-0 border border-purple-500/0 group-hover:border-purple-500/20 rounded-[32px] pointer-events-none transition-all duration-500" />
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
