import React from 'react'
import { motion } from 'framer-motion'
import { journey, profile } from '../../data'

export default function Nexlifie() {
    return (
        <section id="nexlifie" className="border-t border-line">
            <div className="wrap py-24 md:py-32">
                <div className="grid md:grid-cols-[0.3fr_1fr] gap-10 md:gap-16">
                    <p className="kicker">03 / {profile.company}</p>
                    <div>
                        <h2 className="text-4xl md:text-6xl leading-[1.02] font-bold">Where ideas go live.</h2>
                        <p className="mt-6 max-w-xl text-lg text-dim leading-relaxed">
                            Innovate. Build. Grow. As CTO, I own the delivery pipeline end to end: from the first idea to what runs in production, and everything learned after.
                        </p>
                        <a href={profile.website} target="_blank" rel="noopener noreferrer"
                            className="btn mt-8 border border-accent text-accent hover:bg-accent hover:text-base gap-2">
                            Visit {profile.websiteLabel} <span aria-hidden="true">↗</span>
                        </a>
                    </div>
                </div>

                <div className="mt-16">
                    <ol className="grid md:grid-cols-5 gap-3 md:gap-0">
                        {journey.map((j, i) => (
                            <motion.li key={j.title}
                                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.6, delay: 0.2 * i }}
                                className="relative flex">
                                <div className="flex-1 border border-line bg-surface p-5 hover:border-accent/60 transition-colors">
                                    <div className="flex items-center justify-between font-mono text-[11px] text-dim">
                                        <span>STAGE {String(i + 1).padStart(2, '0')}</span>
                                        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                                            transition={{ delay: 0.2 * i + 0.5 }} className="text-accent">✓ done</motion.span>
                                    </div>
                                    <h3 className="mt-6 text-2xl font-semibold">{j.title}</h3>
                                    <p className="mt-3 text-sm text-dim leading-relaxed">{j.text}</p>
                                </div>
                                {i < journey.length - 1 && (
                                    <span aria-hidden="true" className="hidden md:flex w-6 self-center justify-center text-accent -mx-px z-10 bg-base">→</span>
                                )}
                            </motion.li>
                        ))}
                    </ol>
                    <div className="hidden md:block mx-[10%] h-9 border-x border-b border-line relative">
                        <span className="absolute left-1/2 -translate-x-1/2 -bottom-2.5 bg-base px-3 font-mono text-[11px] tracking-wide text-accent">
                            ↺ CONTINUOUS IMPROVEMENT
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}
