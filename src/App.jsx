import React from 'react'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Profile from './components/sections/Profile'
import Nexlifie from './components/sections/Nexlifie'
import Architecture from './components/sections/Architecture'
import Craft from './components/sections/Craft'
import Domains from './components/sections/Domains'
import Contact from './components/sections/Contact'

export default function App() {
    return (
        <>
            <Nav />
            <main>
                <Hero />
                <Profile />
                <Architecture />
                <Nexlifie />
                <Craft />
                <Domains />
                <Contact />
            </main>
            <Footer />
        </>
    )
}
