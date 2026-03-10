import React, { useRef, useState } from 'react'
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion'

export default function MagneticButton({ children, className = '', ...props }) {
    const ref = useRef(null)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    // Add spring physics for smooth return
    const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 })
    const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 })

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e
        const { height, width, left, top } = ref.current.getBoundingClientRect()
        // Calculate distance from center of button
        const middleX = clientX - (left + width / 2)
        const middleY = clientY - (top + height / 2)
        // Create subtle magnetic pull
        x.set(middleX * 0.2)
        y.set(middleY * 0.2)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    const MotionComponent = props.href ? motion.a : motion.button

    return (
        <MotionComponent
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className={`relative overflow-hidden group ${className}`}
            {...props}
        >
            {/* Glow Hover Layer */}
            <motion.div
                className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay"
            />
            {/* Ripple Effect base */}
            <span className="relative z-10 flex items-center justify-center gap-2">
                {children}
            </span>
            {/* Gradient Border Glow */}
            <div className="absolute inset-0 border border-white/20 rounded-inherit opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(139,92,246,0.6)]" />
        </MotionComponent>
    )
}
