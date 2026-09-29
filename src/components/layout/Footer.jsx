import React from 'react'
import { profile } from '../../data'

export default function Footer() {
    return (
        <footer className="border-t border-line">
            <div className="wrap py-8 flex flex-col sm:flex-row justify-between gap-3 font-mono text-xs text-dim">
                <span>© {new Date().getFullYear()} {profile.name}</span>
                <span>{profile.title} · {profile.company} · {profile.location}</span>
            </div>
        </footer>
    )
}
