import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { DISCORD_INVITE_URL } from '../data/discord'

const SITE_URL = 'https://rp-pearl-island.vercel.app'

const features = [
  {
    title: '多元角色發展',
    desc: '警察、醫護守護城市秩序；修車廠、餐飲業者、計程車司機各有完整玩法。城市中設有車商、教堂、新聞局等特殊身份，讓你的故事更豐富。',
    emoji: '🏙️',
  },
  {
    title: '細節豐富的 RP 體驗',
    desc: '醫護根據傷勢處理、修車廠透過調校恢復車況，搭配實體證件、結婚系統、休閒遊戲，每個行動都更貼近角色生活。',
    emoji: '✨',
  },
  {
    title: '完整的地下世界',
    desc: '自由組建幫派、參與領地爭奪，毒品製作與大型搶劫事件完整設計，自研槍擊通報系統讓城市對突發事件產生更自然的反應。',
    emoji: '🔥',
  },
]

const upcoming = [
  { label: '自研大型 NPC 任務', emoji: '🌟' },
  { label: '租房系統', emoji: '🏠' },
  { label: '每月新增販售車輛', emoji: '🚘' },
  { label: '大型賽車比賽', emoji: '🚗' },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>珍珠島 Pearl Island | FiveM 半RP 伺服器・7/17 啟航</title>
        <meta name="description" content="珍珠島 RP 打造一座適合長期生活的 GTA RP 城市。多元角色發展、細節豐富的 RP 體驗，7/17 正式啟航。" />
        <meta property="og:title" content="珍珠島 Pearl Island | FiveM 半RP 伺服器・7/17 啟航" />
        <meta property="og:description" content="珍珠島 RP 打造一座適合長期生活的 GTA RP 城市。多元角色發展、細節豐富的 RP 體驗，7/17 正式啟航。" />
        <meta property="og:image" content={`${SITE_URL}/images/logo.png`} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-pearl-sky via-pearl-pink to-pearl-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-20 text-center md:py-28">
          <img
            src="/images/logo.png"
            alt="珍珠島 Pearl Island"
            className="h-48 w-48 rounded-3xl object-cover shadow-2xl shadow-pearl-lavender-deep/40 ring-4 ring-white/60 md:h-64 md:w-64"
          />
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-pearl-pink-deep/10 px-4 py-1.5 text-sm font-bold text-pearl-pink-deep ring-1 ring-pearl-pink-deep/30">
              <span>🌴</span>
              <span>半RP・7/17 正式啟航</span>
            </div>
            <h1 className="font-display text-4xl font-black tracking-wide text-pearl-navy-deep drop-shadow-sm md:text-6xl">
              珍珠島 Pearl Island
            </h1>
            <p className="mt-4 text-lg text-pearl-navy-deep/80 md:text-xl">
              開啟你的第二人生。
            </p>
            <p className="mx-auto mt-2 max-w-xl text-base text-pearl-navy-deep/60">
              無論你是第一次接觸 RP，或正在尋找新的城市體驗，都能在這裡找到屬於自己的生活方式。
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-pearl-pink-deep px-8 py-3 font-bold text-white shadow-lg shadow-pearl-pink-deep/40 transition-transform hover:scale-105"
            >
              加入 Discord
            </a>
            <Link
              to="/sponsors"
              className="rounded-full border-2 border-pearl-lavender-deep bg-white/70 px-8 py-3 font-bold text-pearl-navy-deep shadow-md transition-transform hover:scale-105 hover:bg-white"
            >
              流水超跑展示 →
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center font-display text-3xl font-bold text-pearl-navy-deep">
          為什麼選擇珍珠島？
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-pearl-lavender/40 bg-white/70 p-6 text-center shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="text-4xl">{f.emoji}</div>
              <h3 className="mt-4 font-display text-xl font-bold text-pearl-navy-deep">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-pearl-navy/70">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming features */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-r from-pearl-lavender/40 via-pearl-pink/30 to-pearl-sky/40 px-8 py-10 text-center">
          <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-pearl-navy-deep/60">
            Coming Soon
          </p>
          <h2 className="mt-1 font-display text-2xl font-bold text-pearl-navy-deep">
            持續成長的城市
          </h2>
          <p className="mt-2 text-sm text-pearl-navy-deep/60">開服後陸續推出，讓每位市民都能留下更多故事</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {upcoming.map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-2 rounded-full border border-pearl-lavender-deep/30 bg-white/70 px-4 py-2 text-sm font-bold text-pearl-navy-deep shadow-sm"
              >
                <span>{item.emoji}</span>
                <span>{item.label}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gacha CTA */}
      <section className="bg-gradient-to-r from-pearl-lavender via-pearl-pink to-pearl-sky">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center">
          <h2 className="font-display text-3xl font-bold text-pearl-navy-deep">
            🎰 流水超跑扭蛋，正式登場
          </h2>
          <p className="max-w-2xl text-pearl-navy-deep/80">
            試試命運扭蛋，或直接指定購買心儀的流水座駕。每台車輛皆配備獨特流水特效，盡情展示你的尊榮品味。
          </p>
          <Link
            to="/sponsors"
            className="rounded-full bg-pearl-navy-deep px-10 py-3 font-bold text-pearl-cream shadow-lg transition-transform hover:scale-105"
          >
            查看車輛展示
          </Link>
        </div>
      </section>
    </div>
    </>
  )
}
