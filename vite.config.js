import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

const BASE = '/Portfolio/'

// Mirror GitHub Pages locally: unknown pages get public/404.html (with a 404 status)
// instead of Vite's default fallback to the main app.
function notFoundPage() {
    const handler = (req, res, next) => {
        const url = (req.url || '').split('?')[0].split('#')[0]
        if (!url.startsWith(BASE)) return next()

        const rel = url.slice(BASE.length)
        const isRoot = rel === '' || rel === 'index.html'
        const isInternal = /^(@|src\/|node_modules\/|__vite)/.test(rel)
        const isFile = rel.includes('.') // assets, 404.html itself, etc.
        if (isRoot || isInternal || isFile) return next()

        const page = path.resolve(__dirname, 'public/404.html')
        if (!fs.existsSync(page)) return next()
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(fs.readFileSync(page))
    }

    return {
        name: 'not-found-page',
        configureServer(server) { server.middlewares.use(handler) },
        configurePreviewServer(server) { server.middlewares.use(handler) },
    }
}

// https://vitejs.dev/config/
export default defineConfig({
    base: BASE,
    plugins: [react(), notFoundPage()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
})
