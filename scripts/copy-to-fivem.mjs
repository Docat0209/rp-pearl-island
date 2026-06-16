import { cp, rm, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')
const uiDir = join(__dirname, '..', 'fivem', 'pearl-island-app', 'ui')

if (!existsSync(distDir)) {
    console.error('dist/ not found — run npm run build first')
    process.exit(1)
}

// 清空目標目錄（保留 .gitkeep）
if (existsSync(uiDir)) {
    await rm(uiDir, { recursive: true })
}
await mkdir(uiDir, { recursive: true })

await cp(distDir, uiDir, { recursive: true })

console.log(`✓ Copied dist/ → fivem/pearl-island-app/ui/`)
