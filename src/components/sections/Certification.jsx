import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

export default function Certification() {
    return (
        <section className="py-24 px-4 bg-purple-600/[0.03]">
            <div className="container mx-auto flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        duration: 0.8
                    }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Glowing Aura for Badge */}
                    <div className="absolute inset-0 bg-purple-500/20 blur-[60px] rounded-full animate-pulse" />

                    <div className="relative glass-card w-40 h-40 md:w-56 md:h-56 rounded-full flex items-center justify-center border-2 border-purple-500/30 p-8 shadow-[0_0_50px_rgba(139,92,246,0.3)] group hover:scale-110 transition-transform duration-500">
                        <ShieldCheck size={80} className="text-purple-500 group-hover:text-purple-400 transition-colors drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-12"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                        CEH Certified
                    </h2>
                    <p className="text-xl text-white/50 tracking-[0.2em] font-medium uppercase">
                        Certified Ethical Hacker
                    </p>
                    <div className="mt-8 flex gap-2 justify-center">
                        {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="w-2 h-2 rounded-full bg-purple-500" />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
