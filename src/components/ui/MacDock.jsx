import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { User, Code2, Folder, Mail, FileText, Briefcase } from 'lucide-react'

const icons = [
    { name: 'About', icon: User, href: '#about' },
    { name: 'Experience', icon: Briefcase, href: '#experience' },
    { name: 'Skills', icon: Code2, href: '#skills' },
    { name: 'Projects', icon: Folder, href: '#projects' },
    { name: 'Contact', icon: Mail, href: '#contact' },
    { name: 'Resume', icon: FileText, href: '/resume/resume.pdf', target: '_blank', rel: 'noopener noreferrer' },
]

export default function MacDock() {
    const mouseX = useMotionValue(Infinity)

    return (
        <div
            className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center p-2 rounded-2xl glass-card border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.1)] gap-2 md:gap-4 px-4 md:px-6 scale-[0.7] sm:scale-90 md:scale-100 origin-bottom whitespace-nowrap w-max max-w-[95vw]"
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
        >
            {icons.map((item, idx) => (
                <DockIcon key={idx} mouseX={mouseX} item={item} />
            ))}
        </div>
    )
}

function DockIcon({ mouseX, item }) {
    const ref = useRef(null)

    // Calculate distance from mouse to center of icon
    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
        return val - bounds.x - bounds.width / 2
    })

    // Width synced to distance
    const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40])

    // Spring to smooth out width change
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

    const [hovered, setHovered] = useState(false)

    const IconComponent = item.icon

    return (
        <div className="relative">
            <motion.a
                ref={ref}
                href={item.href}
                download={item.download ? item.download : undefined}
                target={item.target ? item.target : undefined}
                rel={item.rel ? item.rel : undefined}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{ width, height: width }}
                className="flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-colors shadow-2xl backdrop-blur-md glow-hover group relative"
            >
                <motion.div style={{ scale: useTransform(width, [40, 80], [1, 1.5]) }}>
                    <IconComponent size={20} className="text-white/70 group-hover:text-purple-400 drop-shadow-[0_0_10px_rgba(139,92,246,0.5)] transition-colors" />
                </motion.div>
            </motion.a>

            {/* Tooltip */}
            {hovered && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-12 left-1/2 -translate-x-1/2 text-xs font-bold tracking-widest px-3 py-1 bg-black/80 border border-white/10 rounded backdrop-blur-xl text-white whitespace-nowrap"
                >
                    {item.name}
                </motion.div>
            )}
        </div>
    )
}
