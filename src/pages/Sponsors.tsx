import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { sponsorCars } from '../data/cars'
import { DISCORD_INVITE_URL } from '../data/discord'
import CarThumbnail from '../components/CarThumbnail'

const SITE_URL = 'https://rp-pearl-island.vercel.app'

const rewards = [
  { emoji: '🏎️', label: '幻彩流水車輛', desc: '頂級特效流水車輛任一輛' },
  { emoji: '🪙', label: '珍珠幣', desc: '島上硬通貨，輕鬆消費' },
  { emoji: '🛠️', label: '頂級改裝材料', desc: '打造專屬引擎的核心素材' },
  { emoji: '🛡️', label: '精良防彈衣', desc: '出任務的防身神器' },
  { emoji: '🔧', label: '便攜式修車包', desc: '讓愛車隨時保持最佳車況' },
  { emoji: '🐱', label: '萌寵夥伴', desc: '陪你兜風闖蕩的可愛寵物' },
]

export default function Sponsors() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeCar = sponsorCars[activeIndex]

  return (
    <>
      <Helmet>
        <title>流水超跑扭蛋 | 珍珠島 Pearl Island</title>
        <meta name="description" content="珍珠島限定流水超跑扭蛋登場。命運扭蛋試試手氣，或直接指定購買心儀座駕。詳情請加入 Discord 查詢。" />
        <meta property="og:title" content="流水超跑扭蛋 | 珍珠島 Pearl Island" />
        <meta property="og:description" content="珍珠島限定流水超跑扭蛋登場。命運扭蛋試試手氣，或直接指定購買心儀座駕。詳情請加入 Discord 查詢。" />
        <meta property="og:image" content={`${SITE_URL}/images/logo.png`} />
        <meta property="og:url" content={`${SITE_URL}/sponsors`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="bg-gradient-to-b from-pearl-cream via-white to-pearl-lavender/20">
      {/* Page header */}
      <section className="bg-gradient-to-r from-pearl-lavender via-pearl-pink to-pearl-sky py-14 text-center">
        <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-pearl-navy-deep/70">
          Vehicle Showcase
        </p>
        <h1 className="mt-2 font-display text-4xl font-black text-pearl-navy-deep md:text-5xl">
          流水超跑扭蛋
        </h1>
        <p className="mx-auto mt-3 max-w-2xl px-6 text-pearl-navy-deep/80">
          珍珠島最新引進頂級流水車輛扭蛋。試試命運，或直接帶走心儀座駕。點選下方車款欣賞展示影片。
        </p>
      </section>

      {/* Featured player */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="overflow-hidden rounded-3xl bg-pearl-navy-deep shadow-2xl shadow-pearl-lavender-deep/30">
          <div className="aspect-video w-full">
            <video
              key={activeCar.src}
              src={encodeURI(activeCar.src)}
              controls
              autoPlay
              preload="auto"
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
          <div className="bg-pearl-navy-deep px-6 py-5 text-pearl-cream">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-pearl-gold">
                  Featured Vehicle
                </p>
                <h2 className="font-display text-2xl font-black md:text-3xl">
                  {activeCar.name}
                </h2>
              </div>
              <a
                href={DISCORD_INVITE_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-pearl-gold px-6 py-2 font-bold text-pearl-navy-deep shadow-md transition-transform hover:scale-105"
              >
                了解更多詳情
              </a>
            </div>
            <div className="mt-4 flex flex-wrap gap-3 border-t border-white/10 pt-4">
              <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2">
                <span className="text-lg">🎰</span>
                <div>
                  <p className="text-xs text-pearl-cream/60">命運扭蛋</p>
                  <p className="font-bold text-pearl-gold">NT$ 350 / 顆</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2">
                <span className="text-lg">🔥</span>
                <div>
                  <p className="text-xs text-pearl-cream/60">尊爵直購（指定車款）</p>
                  <p className="font-bold text-pearl-gold">NT$ 2,500 / 輛</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-pearl-navy-deep/70">
          詳細方案與嘎拉幣保底兌換說明，請前往
          <a
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noreferrer"
            className="mx-1 font-bold text-pearl-pink-deep underline"
          >
            珍珠島 Discord
          </a>
          查看。
        </p>
      </section>

      {/* Reward pool */}
      <section className="mx-auto max-w-6xl px-6 pb-10">
        <h3 className="mb-4 font-display text-xl font-bold text-pearl-navy-deep">
          獎勵池一覽
        </h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {rewards.map((r) => (
            <div
              key={r.label}
              className="rounded-2xl border border-pearl-lavender/40 bg-white/70 p-4 text-center shadow-sm"
            >
              <div className="text-3xl">{r.emoji}</div>
              <p className="mt-2 text-sm font-bold text-pearl-navy-deep">{r.label}</p>
              <p className="mt-0.5 text-xs text-pearl-navy/60">{r.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-pearl-navy-deep/50">
          每次扭蛋必定附贈 1 顆嘎拉幣・集滿 10 顆可兌換指定流水車輛。詳情請見 Discord。
        </p>
      </section>

      {/* Car grid */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h3 className="mb-4 font-display text-xl font-bold text-pearl-navy-deep">
          全部車款 ({sponsorCars.length})
        </h3>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {sponsorCars.map((car, index) => (
            <CarThumbnail
              key={car.src}
              car={car}
              active={index === activeIndex}
              onSelect={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </section>
    </div>
    </>
  )
}
