import React from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import MagneticButton from '../ui/MagneticButton'

export default function Contact() {
    return (
        <section id="contact" className="py-32 px-4 relative overflow-hidden">
            <div className="container mx-auto max-w-5xl">
                <div className="flex flex-col lg:flex-row gap-20">

                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-purple-500 font-display font-medium tracking-widest uppercase mb-4">
                                Get In Touch
                            </h2>
                            <h3 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-8">
                                Let's build <br /> something <span className="text-purple-500">epic.</span>
                            </h3>
                            <p className="text-xl text-white/50 leading-relaxed mb-12">
                                Have a project in mind or just want to say hi?
                                I'm always open to discussing new opportunities and innovation.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-purple-500">
                                        <Send size={20} />
                                    </div>
                                    <span className="text-xl font-medium">deepthaa23@gmail.com</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="flex-1">
                        <motion.form
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="glass-card p-6 md:p-10 rounded-[2rem] md:rounded-[40px] border-white/5 space-y-6 md:space-y-8"
                            action="https://formsubmit.co/deepthaa23@gmail.com"
                            method="POST"
                        >
                            <div className="space-y-2">
                                <label className="text-sm font-bold tracking-[0.2em] uppercase text-white/40 ml-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="John Doe"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 md:px-6 md:py-4 outline-none focus:border-purple-500/50 transition-all text-white placeholder:text-white/20"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold tracking-[0.2em] uppercase text-white/40 ml-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="john@example.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 md:px-6 md:py-4 outline-none focus:border-purple-500/50 transition-all text-white placeholder:text-white/20"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold tracking-[0.2em] uppercase text-white/40 ml-1">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    placeholder="Your vision..."
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 md:px-6 md:py-4 outline-none focus:border-purple-500/50 transition-all text-white placeholder:text-white/20 resize-none"
                                />
                            </div>

                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="box" />

                            <MagneticButton type="submit" className="w-full py-5 bg-purple-600 rounded-2xl font-bold text-lg hover:bg-purple-500 transition-all glow-hover flex items-center justify-center gap-3">
                                Send Brief
                                <Send size={20} />
                            </MagneticButton>
                        </motion.form>
                    </div>

                </div>
            </div>

            {/* Background Orbs */}
            <div className="absolute top-1/2 -right-40 w-80 h-80 bg-purple-600/10 blur-[100px] rounded-full -z-10" />
        </section>
    )
}
