import { cp, rm, mkdir, readdir, readFile, writeFile } from 'fs/promises'
import { existsSync } from 'fs'
import { join, dirname, extname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')
const uiDir = join(__dirname, '..', 'fivem', 'pearl-island-app', 'ui')

if (!existsSync(distDir)) {
    console.error('dist/ not found — run npm run build first')
    process.exit(1)
}

if (existsSync(uiDir)) {
    await rm(uiDir, { recursive: true })
}
await mkdir(uiDir, { recursive: true })

await cp(distDir, uiDir, { recursive: true })
console.log(`✓ Copied dist/ → fivem/pearl-island-app/ui/`)

async function fixAssetPaths(dir) {
    const entries = await readdir(dir, { withFileTypes: true })
    for (const entry of entries) {
        const full = join(dir, entry.name)
        if (entry.isDirectory()) {
            await fixAssetPaths(full)
            continue
        }
        const ext = extname(entry.name).toLowerCase()
        let content = await readFile(full, 'utf8')
        const original = content
        if (ext === '.html') {
            content = content.replace(/(href|src)="\/(?!\/)/g, '$1="./')
        } else if (ext === '.js') {
            content = content.replace(/(["`'])\/images\//g, '$1./images/')
            content = content.replace(/(["`'])\/videos\//g, '$1./videos/')
        }
        if (content !== original) {
            await writeFile(full, content, 'utf8')
            console.log(`  ✓ Fixed paths: ${entry.name}`)
        }
    }
}

await fixAssetPaths(uiDir)
console.log(`✓ FiveM asset paths fixed (absolute → relative)`)

await writeFile(join(uiDir, 'nui.html'), '<!DOCTYPE html><html><head></head><body></body></html>\n', 'utf8')
console.log(`✓ Created nui.html (blank NUI page)`)
