import React, { useState, useEffect } from 'react'
import ThreeBackground from './components/background/ThreeBackground'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Certification from './components/sections/Certification'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import LoadingIntro from './components/ui/LoadingIntro'
import MacDock from './components/ui/MacDock'

function App() {
    const [loading, setLoading] = useState(true)

    return (
        <div className="relative text-white selection:bg-purple-500/30">
            {/* Loading Intro Animation */}
            {loading && <LoadingIntro onComplete={() => setLoading(false)} />}

            {/* Premium Noise Overlay */}
            <div className="noise-overlay" />

            {/* Animated 3D Background */}
            <ThreeBackground />

            {!loading && (
                <>
                    <main>
                        <Hero />
                        <About />
                        <Experience />
                        <Skills />
                        <Projects />
                        <Certification />
                        <Contact />
                    </main>

                    <Footer />
                    <MacDock />
                </>
            )}

            {/* Mouse Follow Glow Effect */}
            <div className="mouse-glow fixed inset-0 pointer-events-none z-[100] opacity-30 mix-blend-screen"
                style={{
                    background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(139, 92, 246, 0.4), transparent 80%)'
                }}
            />
        </div>
    )
}

// Add mouse follow logic
if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', (e) => {
        document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
        document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
    })
}

export default App
