import { useState } from 'react'
import { sponsorCars } from '../data/cars'
import { DISCORD_INVITE_URL } from '../data/discord'
import CarThumbnail from '../components/CarThumbnail'

const SPONSOR_PRICE = 'NT$ 2,000'

export default function Sponsors() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeCar = sponsorCars[activeIndex]

  return (
    <div className="bg-gradient-to-b from-pearl-cream via-white to-pearl-lavender/20">
      {/* Page header */}
      <section className="bg-gradient-to-r from-pearl-lavender via-pearl-pink to-pearl-sky py-14 text-center">
        <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-pearl-navy-deep/70">
          Sponsor Showcase
        </p>
        <h1 className="mt-2 font-display text-4xl font-black text-pearl-navy-deep md:text-5xl">
          贊助車輛展示
        </h1>
        <p className="mx-auto mt-3 max-w-2xl px-6 text-pearl-navy-deep/80">
          每一台贊助車輛，皆專屬於珍珠島的頂級玩家。點選下方車款，欣賞專屬展示影片。
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
          <div className="flex flex-col items-start justify-between gap-4 bg-pearl-navy-deep px-6 py-5 text-pearl-cream md:flex-row md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-pearl-gold">
                Featured Vehicle
              </p>
              <h2 className="font-display text-2xl font-black md:text-3xl">
                {activeCar.name}
              </h2>
              <p className="mt-1 text-sm font-bold text-pearl-gold">
                贊助價格：{SPONSOR_PRICE} / 台
              </p>
            </div>
            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-pearl-gold px-6 py-2 font-bold text-pearl-navy-deep shadow-md transition-transform hover:scale-105"
            >
              贊助這台車
            </a>
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-pearl-navy-deep/70">
          想贊助這台車嗎？前往
          <a
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noreferrer"
            className="mx-1 font-bold text-pearl-pink-deep underline"
          >
            珍珠島 Discord
          </a>
          ，在「🏷️｜客服中心」頻道建立票口，將有專人為您服務。
        </p>
      </section>

      {/* Car grid */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h3 className="mb-4 font-display text-xl font-bold text-pearl-navy-deep">
          全部贊助車款 ({sponsorCars.length})
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
  )
}
