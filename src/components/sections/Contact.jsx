import React, { useState } from 'react'
import { ArrowUpRight, Check, Copy, Github, Globe, Linkedin, Mail, MapPin } from 'lucide-react'
import Reveal from '../Reveal'
import { profile } from '../../data'

export default function Contact() {
    const [copied, setCopied] = useState(false)
    const copy = e => {
        e.preventDefault()
        e.stopPropagation()
        navigator.clipboard?.writeText(profile.email).then(() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 1800)
        })
    }

    const channels = [
        {
            icon: Linkedin, label: 'LinkedIn', value: 'deeptha-a-b9891323a',
            href: profile.linkedin, external: true,
        },
        {
            icon: Mail, label: 'Email', value: profile.email,
            href: `mailto:${profile.email}`,
            action: (
                <button type="button" onClick={copy} aria-label="Copy email address"
                    className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider border border-line px-2.5 py-1.5 text-dim hover:border-accent hover:text-accent transition-colors">
                    {copied ? <Check size={13} /> : <Copy size={13} />}{copied ? 'Copied' : 'Copy'}
                </button>
            ),
        },
        {
            icon: Github, label: 'GitHub', value: 'deeptha00',
            href: profile.github, external: true,
        },
        {
            icon: Globe, label: `${profile.company} website`, value: profile.websiteLabel,
            href: profile.website, external: true,
        },
    ]

    return (
        <section id="contact" className="border-t border-line bg-surface/40">
            <div className="wrap py-24 md:py-32">
                <Reveal>
                    <p className="kicker">06 / Contact</p>
                </Reveal>

                <Reveal delay={0.08}>
                    <div className="relative mt-8 overflow-hidden border border-line bg-base">
                        <div className="grid-bg absolute inset-0 pointer-events-none" />
                        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-accent/[0.08] blur-[110px] pointer-events-none" />

                        <div className="relative grid lg:grid-cols-[1.1fr_1fr]">
                            {/* Primary action */}
                            <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-between gap-12 lg:border-r border-line">
                                <div>
                                    <h2 className="text-4xl md:text-6xl leading-[1.02] font-bold">
                                        Let's talk about what you're building.
                                    </h2>
                                    <p className="mt-6 max-w-md text-lg text-dim leading-relaxed">
                                        The best way to reach me is on LinkedIn. Send a connection request with a short note about your idea.
                                    </p>
                                </div>
                                <div>
                                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
                                        className="group inline-flex items-center gap-3 bg-accent text-base font-medium px-7 py-4 hover:brightness-110 transition">
                                        <Linkedin size={20} />
                                        Connect on LinkedIn
                                        <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </a>
                                    <p className="mt-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-dim">
                                        <MapPin size={13} className="text-accent" /> {profile.location} · IST
                                    </p>
                                </div>
                            </div>

                            {/* Channels */}
                            <div className="flex flex-col border-t lg:border-t-0 border-line divide-y divide-line">
                                <p className="px-8 md:px-12 lg:px-10 py-4 font-mono text-[11px] uppercase tracking-[0.14em] text-dim">
                                    Other ways to reach me
                                </p>
                                {channels.map(c => (
                                    <a key={c.label} href={c.href}
                                        {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                        className="group flex flex-1 items-center gap-5 px-8 md:px-12 lg:px-10 py-6 hover:bg-surface transition-colors">
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-line text-accent group-hover:border-accent transition-colors">
                                            <c.icon size={20} />
                                        </span>
                                        <span className="min-w-0 flex-1">
                                            <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-dim">{c.label}</span>
                                            <span className="mt-1 block truncate text-fg group-hover:text-accent transition-colors">{c.value}</span>
                                        </span>
                                        {c.action || <ArrowUpRight size={18} className="text-dim group-hover:text-accent transition-colors" />}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
