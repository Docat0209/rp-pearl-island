import { readFile, writeFile, mkdir } from 'fs/promises'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '..', 'dist')
const SITE_URL = 'https://rp-pearl-island.vercel.app'

const routes = [
  {
    path: '',
    outFile: 'index.html',
    title: '珍珠島 Pearl Island | FiveM RP 伺服器',
    description: '一座漂浮在粉色夕陽中的 FiveM RP 城市，等待你的角色登場。加入珍珠島，體驗沉浸式角色扮演、自訂地圖與活躍友善的社群。',
    image: `${SITE_URL}/images/logo.png`,
    url: SITE_URL,
  },
  {
    path: 'sponsors',
    outFile: 'sponsors/index.html',
    title: '贊助車輛展示 | 珍珠島 Pearl Island',
    description: '珍珠島贊助車輛展示，多台頂級超跑任君選擇。每台車皆專屬於珍珠島頂級玩家，加入 Discord 洽詢贊助。',
    image: `${SITE_URL}/images/logo.png`,
    url: `${SITE_URL}/sponsors`,
  },
  {
    path: 'properties',
    outFile: 'properties/index.html',
    title: '豪宅贊助 | 珍珠島 Pearl Island',
    description: '珍珠島精選頂級房產，多棟豪宅任君選擇。購買後取得房屋鑰匙、私人車庫、私人倉庫與私人更衣間，入住屬於你的夢想豪宅。',
    image: `${SITE_URL}/images/properties/build_1.png`,
    url: `${SITE_URL}/properties`,
  },
]

const template = await readFile(join(distDir, 'index.html'), 'utf8')

for (const route of routes) {
  const ogTags = `
    <title>${route.title}</title>
    <meta name="description" content="${route.description}" />
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:image" content="${route.image}" />
    <meta property="og:url" content="${route.url}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />`

  const html = template
    .replace(/<title>.*?<\/title>/, '')
    .replace('<meta\n      name="description"\n      content="珍珠島 Pearl Island - FiveM RP 伺服器官方網站，加入我們的角色扮演世界。"\n    />', '')
    .replace('</head>', `${ogTags}\n  </head>`)

  const outPath = join(distDir, route.outFile)
  await mkdir(dirname(outPath), { recursive: true })
  await writeFile(outPath, html, 'utf8')
  console.log(`✓ /${route.path || ''} → dist/${route.outFile}`)
}

console.log('OG tags injected for all routes')
