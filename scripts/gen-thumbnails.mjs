import sharp from 'sharp'
import { readdir, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import { join, extname } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const srcDir = join(__dirname, '..', 'public', 'images', 'properties')
const thumbDir = join(srcDir, 'thumbs')

if (!existsSync(thumbDir)) {
  await mkdir(thumbDir, { recursive: true })
}

const files = (await readdir(srcDir)).filter(
  (f) => extname(f).toLowerCase() === '.png' && !f.startsWith('.')
)

await Promise.all(
  files.map(async (file) => {
    const src = join(srcDir, file)
    const dest = join(thumbDir, file.replace(/\.png$/i, '.webp'))
    await sharp(src).resize({ width: 600, withoutEnlargement: true }).webp({ quality: 80 }).toFile(dest)
    console.log(`✓ ${file} → thumbs/${file.replace(/\.png$/i, '.webp')}`)
  })
)

console.log(`Generated ${files.length} thumbnails in ${thumbDir}`)
