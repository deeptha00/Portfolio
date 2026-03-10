import React from 'react'
import { motion } from 'framer-motion'
import { BrainCircuit, Cloud, Code2, Rocket } from 'lucide-react'
import TiltCard from '../ui/TiltCard'

const stats = [
    { label: "Experience", value: "3+", suffix: "Years", icon: Rocket },
    { label: "Projects completed", value: "10+", suffix: "Projects", icon: Code2 },
    { label: "Specialization", value: "Full Stack", suffix: "Developer", icon: BrainCircuit },
    { label: "Expertise", value: "AI & Cloud", suffix: "Engineer", icon: Cloud },
]

export default function About() {
    return (
        <section id="about" className="py-32 px-4 relative">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-purple-500 font-display font-medium tracking-widest uppercase mb-4">
                        The Journey
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold">
                        Innovative mindset. <br /> Full stack precision.
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <TiltCard
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 rounded-3xl flex flex-col items-center text-center group"
                        >
                            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 text-purple-500 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                                <stat.icon size={32} />
                            </div>
                            <h4 className="text-4xl font-display font-bold mb-2 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                                {stat.value}
                            </h4>
                            <p className="text-white/40 uppercase tracking-widest text-xs font-bold">
                                {stat.label}
                            </p>
                            <p className="text-white/60 mt-2 italic">
                                {stat.suffix}
                            </p>
                        </TiltCard>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-20 max-w-4xl mx-auto glass-card p-10 rounded-[40px] border-white/5"
                >
                    <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-sans">
                        I'm a <span className="text-white font-bold">passionate software developer</span> based in Bengaluru, India.
                        With over <span className="text-purple-500 font-bold">3 years</span> of professional experience, I specialize in crafting high-performance
                        web and mobile applications integrated with <span className="text-blue-500 font-bold">AI and Cloud</span> technologies.
                        My approach blends clean code with premium aesthetics, ensuring every project is not just functional, but an experience.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
