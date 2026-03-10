import React from 'react'
import { motion } from 'framer-motion'
import { ChevronUp, Github, Linkedin } from 'lucide-react'

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="py-20 px-4 border-t border-white/5 relative bg-black">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">

                    <div className="text-center md:text-left">
                        <h4 className="text-2xl font-display font-black mb-2 uppercase tracking-tighter">
                            Deeptha<span className="text-purple-500">.A</span>
                        </h4>
                        <p className="text-white/40 text-sm">
                            © {new Date().getFullYear()} All Rights Reserved.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <motion.a
                            href="https://github.com/deeptha00"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, color: "#8b5cf6" }}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 transition-colors hover:border-purple-500/50"
                        >
                            <Github size={20} />
                        </motion.a>
                        <motion.a
                            href="https://linkedin.com/in/deeptha-a-b9891323a"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, color: "#8b5cf6" }}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/60 transition-colors hover:border-purple-500/50"
                        >
                            <Linkedin size={20} />
                        </motion.a>
                    </div>

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/10 hover:bg-white text-white hover:text-black transition-all"
                    >
                        <ChevronUp size={24} />
                    </motion.button>

                </div>

                <div className="mt-20 text-center">
                    <span className="text-[10vw] font-display font-black text-white/[0.02] select-none uppercase tracking-tighter">
                        INNOVATION
                    </span>
                </div>
            </div>
        </footer>
    )
}
