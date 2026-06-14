import { Link } from 'react-router-dom'
import { DISCORD_INVITE_URL } from '../data/discord'

const features = [
  {
    title: '沉浸式角色扮演',
    desc: '從日常生活到犯罪、商業與政府陣營，打造屬於你的珍珠島故事。',
    emoji: '🏝️',
  },
  {
    title: '自訂地圖與場景',
    desc: '專屬美術風格的地圖擴建，海灘、港口、市區一應俱全。',
    emoji: '🌅',
  },
  {
    title: '活躍友善的社群',
    desc: '完善的新手引導與管理團隊，隨時為玩家提供協助。',
    emoji: '🐚',
  },
]

export default function Home() {
  return (
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
            <h1 className="font-display text-4xl font-black tracking-wide text-pearl-navy-deep drop-shadow-sm md:text-6xl">
              珍珠島 Pearl Island
            </h1>
            <p className="mt-4 text-lg text-pearl-navy-deep/80 md:text-xl">
              一座漂浮在粉色夕陽中的 FiveM RP 城市，等待你的角色登場。
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
              瀏覽贊助車輛 →
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

      {/* Sponsor CTA */}
      <section className="bg-gradient-to-r from-pearl-lavender via-pearl-pink to-pearl-sky">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center">
          <h2 className="font-display text-3xl font-bold text-pearl-navy-deep">
            成為贊助車主，駕馭專屬奢華座駕
          </h2>
          <p className="max-w-2xl text-pearl-navy-deep/80">
            贊助珍珠島伺服器，即可獲得限量奢華車輛，於遊戲中盡情展示你的座駕。
          </p>
          <Link
            to="/sponsors"
            className="rounded-full bg-pearl-navy-deep px-10 py-3 font-bold text-pearl-cream shadow-lg transition-transform hover:scale-105"
          >
            查看贊助車輛展示
          </Link>
        </div>
      </section>
    </div>
  )
}
