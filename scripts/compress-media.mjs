import { execSync } from 'child_process'
import { mkdir, readdir, copyFile } from 'fs/promises'
import { existsSync } from 'fs'
import { join, extname, dirname } from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const VIDEOS_DIR = join(root, 'public', 'videos')
const IMAGES_DIR = join(root, 'public', 'images', 'properties')

async function backupFiles(dir, files) {
    const origDir = join(dir, 'originals')
    if (!existsSync(origDir)) await mkdir(origDir)
    for (const file of files) {
        const dest = join(origDir, file)
        if (!existsSync(dest)) {
            await copyFile(join(dir, file), dest)
            console.log(`  backup: ${file}`)
        }
    }
}

async function compressVideos() {
    console.log('Videos: compressing to 1280x720 H.264 CRF28 30fps...')
    const files = (await readdir(VIDEOS_DIR)).filter(f => extname(f).toLowerCase() === '.mp4')
    if (files.length === 0) { console.log('  no mp4 files found'); return }
    await backupFiles(VIDEOS_DIR, files)
    for (const file of files) {
        const src = join(VIDEOS_DIR, 'originals', file)
        const out = join(VIDEOS_DIR, file)
        execSync(
            `ffmpeg -y -loglevel error -i "${src}" -r 30 -vf "scale=1280:720:force_original_aspect_ratio=decrease,scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 128k "${out}"`,
            { stdio: 'inherit' }
        )
        console.log(`  ok: ${file}`)
    }
    console.log(`  ${files.length} videos done`)
}

async function compressImages() {
    console.log('Images: resizing to fit 1280x720 PNG...')
    const files = (await readdir(IMAGES_DIR)).filter(
        f => extname(f).toLowerCase() === '.png' && !f.startsWith('.')
    )
    if (files.length === 0) { console.log('  no png files found'); return }
    await backupFiles(IMAGES_DIR, files)
    await Promise.all(
        files.map(async file => {
            const src = join(IMAGES_DIR, 'originals', file)
            const out = join(IMAGES_DIR, file)
            await sharp(src)
                .resize({ width: 1280, height: 720, fit: 'inside', withoutEnlargement: true })
                .png({ compressionLevel: 6 })
                .toFile(out)
            console.log(`  ok: ${file}`)
        })
    )
    console.log(`  ${files.length} images done`)
}

await compressVideos()
await compressImages()
console.log('\nDone. Run: npm run build  (to regenerate WebP thumbnails)')
