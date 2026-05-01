import sharp from 'sharp'
import { readdir, stat, rename, unlink } from 'fs/promises'
import { join, extname } from 'path'

const MAX_WIDTH = 1920
const JPEG_QUALITY = 82
const PNG_QUALITY = 80
const MIN_SIZE_KB = 200

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = await Promise.all(entries.map(e =>
    e.isDirectory() ? getFiles(join(dir, e.name)) : join(dir, e.name)
  ))
  return files.flat()
}

const publicDir = new URL('./public', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1')
const files = await getFiles(publicDir)
const images = files.filter(f => /\.(jpe?g|png)$/i.test(extname(f)))

let saved = 0
for (const file of images) {
  const { size } = await stat(file)
  if (size < MIN_SIZE_KB * 1024) continue

  const ext = extname(file).toLowerCase()
  const img = sharp(file)
  const meta = await img.metadata()

  const needsResize = meta.width > MAX_WIDTH

  try {
    let pipeline = needsResize ? img.resize(MAX_WIDTH, null, { withoutEnlargement: true }) : img

    let buf
    if (ext === '.png') {
      buf = await pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9 }).toBuffer()
    } else {
      buf = await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer()
    }

    if (buf.length < size) {
      const tmp = file + '.tmp'
      await sharp(buf).toFile(tmp)
      try { await unlink(file) } catch {}
      await rename(tmp, file)
      const reduction = ((size - buf.length) / size * 100).toFixed(1)
      saved += (size - buf.length)
      console.log(`✓ ${file.split('public')[1]} ${(size/1024/1024).toFixed(1)}MB → ${(buf.length/1024/1024).toFixed(1)}MB (-${reduction}%)`)
    } else {
      console.log(`— skipped ${file.split('public')[1]} (already optimal)`)
    }
  } catch (e) {
    console.error(`✗ ${file}: ${e.message}`)
  }
}

console.log(`\nTotal saved: ${(saved/1024/1024).toFixed(1)} MB`)
