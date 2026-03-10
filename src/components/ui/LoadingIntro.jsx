import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function LoadingIntro({ onComplete }) {
    const containerRef = useRef(null)
    const logoRef = useRef(null)
    const lineRef = useRef(null)
    const nameRef = useRef(null)
    const titleRef = useRef(null)

    useEffect(() => {
        // Lock scroll during intro
        document.body.style.overflow = 'hidden'

        const tl = gsap.timeline({
            onComplete: () => {
                document.body.style.overflow = ''
                onComplete()
            }
        })

        // Initial state
        gsap.set([logoRef.current, lineRef.current, nameRef.current, titleRef.current], {
            opacity: 0
        })
        gsap.set(lineRef.current, { scaleX: 0, transformOrigin: 'left center' })

        // Animation sequence
        tl.to(logoRef.current, { opacity: 1, duration: 0.8, ease: "power2.out" })
            .to(lineRef.current, { opacity: 1, scaleX: 1, duration: 0.8, ease: "power4.inOut" }, "-=0.2")
            .to(nameRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.2")
            .to(titleRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
            .to([logoRef.current, lineRef.current, nameRef.current, titleRef.current], {
                opacity: 0,
                y: -20,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.inOut",
                delay: 0.5
            })
            .to(containerRef.current, {
                yPercent: -100,
                duration: 1,
                ease: "expo.inOut"
            })

        return () => {
            tl.kill()
            document.body.style.overflow = ''
        }
    }, [onComplete])

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-3xl text-white"
        >
            <div className="flex flex-col items-center text-center">
                <div
                    ref={logoRef}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(139,92,246,0.5)]"
                >
                    <span className="text-2xl font-display font-black">D</span>
                </div>

                <div className="flex items-center gap-4 mb-4">
                    <div ref={lineRef} className="w-12 h-[2px] bg-purple-500 glow-border" />
                    <h1
                        ref={nameRef}
                        className="text-4xl md:text-5xl font-display font-black tracking-[0.2em] transform translate-y-4 shadow-purple-500/20 drop-shadow-2xl"
                    >
                        DEEPTHA
                    </h1>
                    <div className="w-12 h-[2px] bg-blue-500 glow-border" style={{ transform: 'scaleX(0)' }} id="line2" />
                </div>

                <h2
                    ref={titleRef}
                    className="text-xl md:text-2xl text-white/50 font-sans tracking-[0.3em] uppercase transform translate-y-4"
                >
                    Software Developer
                </h2>
            </div>
        </div>
    )
}
