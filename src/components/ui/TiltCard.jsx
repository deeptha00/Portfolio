import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function TiltCard({ children, className = '', ...props }) {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5
        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative w-full h-full flex flex-col group ${className}`}
            {...props}
        >
            {/* Gloss reflection overlay effect inside cards */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-50 rounded-[inherit] transition-opacity opacity-0 group-hover:opacity-100 mix-blend-overlay"
                style={{
                    background: "radial-gradient(circle at var(--mouseX) var(--mouseY), rgba(255,255,255,0.2) 0%, transparent 80%)"
                }}
                onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    e.currentTarget.style.setProperty("--mouseX", `${e.clientX - rect.left}px`)
                    e.currentTarget.style.setProperty("--mouseY", `${e.clientY - rect.top}px`)
                }}
            />
            {children}
        </motion.div>
    )
}
