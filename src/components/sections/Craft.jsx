import React from 'react'
import Reveal from '../Reveal'
import { disciplines } from '../../data'

export default function Craft() {
    return (
        <section id="craft" className="border-t border-line bg-surface/40">
            <div className="wrap py-24 md:py-32 grid md:grid-cols-[0.3fr_1fr] gap-10 md:gap-16">
                <Reveal><p className="kicker">04 / What I build</p></Reveal>
                <div className="border border-line divide-y divide-line bg-base">
                    {disciplines.map((d, i) => (
                        <Reveal key={d.title} delay={0.04 * i}>
                            <div className="group grid md:grid-cols-[3rem_1.1fr_1fr] gap-2 md:gap-8 p-6 md:p-7 hover:bg-surface transition-colors">
                                <span className="font-mono text-xs text-dim pt-1.5">0{i + 1}</span>
                                <h3 className="text-xl md:text-2xl font-semibold group-hover:text-accent transition-colors">{d.title}</h3>
                                <p className="text-dim leading-relaxed">{d.text}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
