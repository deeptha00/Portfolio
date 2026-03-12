import React from 'react'
import { motion } from 'framer-motion'
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
        category: "AI / MCP",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        description: "Advanced conversational agent powered by LLMs for automated enterprise customer support."
    },
    {
        title: "Device Dashboard",
        category: "Full Stack / Cloud",
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
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-right mb-24"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                >
                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        className="text-purple-500 font-display font-medium tracking-[0.3em] uppercase mb-4 text-sm"
                    >
                        Selected Works
                    </motion.h2>
                    <motion.h3
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="text-4xl sm:text-5xl md:text-6xl font-display font-bold"
                    >
                        Project Showcase
                    </motion.h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <TiltCard
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-[#0e0e0e] rounded-[32px] overflow-hidden border border-white/5 hover:border-purple-500/50 transition-all duration-500 shadow-2xl"
                        >
                            {/* Project Image */}
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-50 group-hover:opacity-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/50 to-transparent" />
                            </div>

                            {/* Project Info */}
                            <div className="p-8">
                                <span className="text-purple-500/70 text-xs font-bold tracking-[0.2em] uppercase block mb-3">
                                    {project.category}
                                </span>
                                <h4 className="text-2xl font-display font-bold mb-4 group-hover:text-purple-400 transition-colors">
                                    {project.title}
                                </h4>
                                <p className="text-white/40 leading-relaxed font-sans font-light">
                                    {project.description}
                                </p>

                                {/* Bottom Accent */}
                                <div className="mt-8 pt-6 border-t border-white/5 flex justify-end">
                                    <span className="text-[10px] text-white/20 uppercase tracking-widest font-display">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </div>

                                <div className="absolute inset-0 border border-purple-500/0 group-hover:border-purple-500/20 rounded-[32px] pointer-events-none transition-all duration-500" />
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
