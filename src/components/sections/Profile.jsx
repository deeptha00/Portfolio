import React from 'react'
import Reveal from '../Reveal'

export default function Profile() {
    return (
        <section id="profile" className="border-t border-line">
            <div className="wrap py-24 md:py-32 grid md:grid-cols-[0.3fr_1fr] gap-10 md:gap-16">
                <Reveal><p className="kicker">01 / Profile</p></Reveal>
                <Reveal delay={0.1}>
                    <p className="text-2xl md:text-4xl leading-[1.25] font-medium tracking-tight text-fg">
                        I'm a Software Developer and CTO &amp; Co-Founder at Nexlifie, where I work on turning ideas into real digital products.
                    </p>
                    <p className="mt-8 max-w-2xl text-lg text-dim leading-relaxed">
                        From software and web applications to mobile apps, AI solutions and gaming experiences, I enjoy building technology that solves problems,
                        creates experiences and brings ideas to life. At Nexlifie I'm involved across the whole journey: from idea and architecture to development,
                        deployment and continuous improvement.
                    </p>
                </Reveal>
            </div>
        </section>
    )
}
