import React from 'react'
import Reveal from '../Reveal'
import { domains } from '../../data'

export default function Domains() {
    return (
        <section id="domains" className="border-t border-line">
            <div className="wrap py-24 md:py-32">
                <div className="grid md:grid-cols-[0.3fr_1fr] gap-10 md:gap-16">
                    <Reveal><p className="kicker">05 / Domains</p></Reveal>
                    <Reveal delay={0.1}>
                        <h2 className="text-4xl md:text-6xl leading-[1.02] font-bold">Industries I build for</h2>
                        <p className="mt-6 max-w-2xl text-lg text-dim leading-relaxed">
                            The same engineering approach applied across different domains, from consumer commerce to healthcare and industrial systems.
                        </p>
                    </Reveal>
                </div>

                <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 border-l border-t border-line">
                    {domains.map((d, i) => (
                        <Reveal key={d.title} delay={0.04 * i}>
                            <article className="group h-full border-r border-b border-line p-7 md:p-8 hover:bg-surface transition-colors">
                                <span className="font-mono text-xs text-dim">0{i + 1}</span>
                                <h3 className="mt-10 text-2xl font-semibold group-hover:text-accent transition-colors">{d.title}</h3>
                                <p className="mt-3 text-dim leading-relaxed">{d.text}</p>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
