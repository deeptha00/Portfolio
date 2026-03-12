import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
    {
        company: "FortunesoftIT Innovations",
        role: "Software Developer",
        period: "October 2025 - Present",
        description: "Developing scalable full-stack solutions and integrating advanced AI models into enterprise applications."
    },
    {
        company: "Narrow Labs",
        role: "Full Stack Developer",
        period: "March 2025 - October 2025",
        description: "Focused on building modern web applications with React and Node.js, delivering high-performance UI/UX."
    },
    {
        company: "Aptener Mechatronics",
        role: "Software Engineer",
        period: "June 2023 - January 2025",
        description: "Worked on IoT integrations and dashboard systems for mechatronic devices."
    },
    {
        company: "Kovenantz Technologies",
        role: "Programmer Trainee",
        period: "November 2022 - May 2023",
        description: "Gained foundational experience in mobile app development and cloud infrastructure."
    }
]

export default function Experience() {
    return (
        <section id="experience" className="py-32 px-4">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-left mb-20"
                >
                    <h2 className="text-purple-500 font-display font-medium tracking-widest uppercase mb-4">
                        Professional Path
                    </h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold">
                        Experience Timeline
                    </h3>
                </motion.div>

                <div className="relative border-l border-white/10 ml-4 md:ml-20 pl-8 md:pl-16 space-y-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="relative"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[41px] md:-left-[73px] top-0 w-4 h-4 rounded-full bg-purple-600 shadow-[0_0_15px_rgba(139,92,246,0.6)] z-10" />

                            <div className="glass-card p-8 rounded-3xl border-white/5 relative group overflow-hidden">
                                <div className="absolute top-0 right-0 p-8 text-white/5 font-display font-black text-6xl group-hover:text-purple-500/10 transition-colors">
                                    0{index + 1}
                                </div>

                                <span className="text-purple-500 font-medium mb-2 block">{exp.period}</span>
                                <h4 className="text-2xl font-display font-bold mb-1">{exp.company}</h4>
                                <p className="text-white/40 mb-4">{exp.role}</p>
                                <p className="text-white/60 leading-relaxed max-w-2xl">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
