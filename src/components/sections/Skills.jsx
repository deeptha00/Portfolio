import React from 'react'
import { motion } from 'framer-motion'

const skillCategories = [
    {
        name: "Frontend",
        skills: ["React", "HTML", "JavaScript", "TypeScript"]
    },
    {
        name: "Backend",
        skills: ["Node.js", "Python"]
    },
    {
        name: "Mobile",
        skills: ["SwiftUI", "Flutter", "Kotlin", "React Native"]
    },
    {
        name: "Cloud",
        skills: ["AWS", "Docker"]
    },
    {
        name: "AI",
        skills: ["AWS Bedrock", "LLM", "MCP (Model Context Protocol)", "AI Models"]
    },
    {
        name: "Security",
        skills: ["CEH Certified Ethical Hacker"]
    }
]

export default function Skills() {
    return (
        <section id="skills" className="py-32 px-4 bg-white/[0.02]">
            <div className="container mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mb-20"
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
                            hidden: { opacity: 0, y: 10 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="text-purple-500 font-display font-medium tracking-[0.3em] uppercase mb-4 text-sm"
                    >
                        Capabilities
                    </motion.h2>
                    <motion.h3
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        className="text-4xl sm:text-5xl md:text-6xl font-display font-bold"
                    >
                        Technical Arsenal
                    </motion.h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 rounded-3xl border-white/5"
                        >
                            <h4 className="text-xl font-display font-bold mb-6 text-purple-400">
                                {category.name}
                            </h4>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, sIdx) => (
                                    <motion.span
                                        key={sIdx}
                                        whileHover={{ scale: 1.1, backgroundColor: "rgba(139, 92, 246, 0.2)" }}
                                        className="px-4 py-2 bg-white/5 rounded-full text-sm font-medium border border-white/10 text-white/70 hover:text-white hover:border-purple-500/50 transition-all cursor-default glow-border"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
