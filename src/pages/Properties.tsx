import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import propertiesData from '../data/properties.json'
import { DISCORD_INVITE_URL } from '../data/discord'

const SITE_URL = 'https://rp-pearl-island.vercel.app'

interface Property {
  id: number
  image: string
  name: string
  type: string
  price: number
  coordinates: string
  area: string
  description: string
  features: string[]
  sold: boolean
}

const properties: Property[] = propertiesData

function formatPrice(price: number) {
  return `$${price.toLocaleString()}`
}

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="關閉圖片"
        className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/40"
        onClick={onClose}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <img
        src={src}
        alt={alt}
        className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}

function PropertyCard({
  property,
  onImageClick,
}: {
  property: Property
  onImageClick: (src: string, alt: string) => void
}) {
  return (
    <div className={`relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg shadow-pearl-lavender/30 transition-transform ${property.sold ? 'opacity-75' : 'hover:-translate-y-1 hover:shadow-xl'}`}>
      {/* Photo */}
      <div
        className={`relative aspect-[4/3] overflow-hidden ${!property.sold ? 'cursor-zoom-in' : ''}`}
        onClick={() => !property.sold && onImageClick(`/images/properties/${property.image}`, property.name)}
      >
        <img
          src={`/images/properties/${property.image}`}
          alt={property.name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-pearl-navy-deep/80 px-3 py-1 text-xs font-bold text-pearl-cream backdrop-blur-sm">
          {property.type}
        </span>
        {!property.sold && (
          <span className="absolute bottom-3 right-3 rounded-full bg-black/40 px-2 py-1 text-xs text-white backdrop-blur-sm">
            🔍 點擊放大
          </span>
        )}
        {property.sold && (
          <div className="absolute inset-0 flex items-center justify-center bg-pearl-navy-deep/60 backdrop-blur-[2px]">
            <span className="rotate-[-12deg] rounded-lg border-4 border-red-400 px-4 py-2 font-display text-2xl font-black text-red-400">
              已售出
            </span>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-pearl-lavender-deep">
              {property.area}
            </p>
            <p className="mt-0.5 font-display text-lg font-bold text-pearl-navy-deep">
              {property.name}
            </p>
          </div>
          <span className={`mt-0.5 shrink-0 rounded-full px-2.5 py-0.5 text-xs font-bold ${property.sold ? 'bg-gray-200 text-gray-500' : 'bg-green-100 text-green-700'}`}>
            {property.sold ? '已售出' : '出售中'}
          </span>
        </div>

        <p className="text-xs text-pearl-navy/60">
          📍 {property.coordinates}
        </p>

        <p className="flex-1 text-sm leading-relaxed text-pearl-navy-deep/75">
          {property.description}
        </p>

        {/* Custom feature tags */}
        {property.features.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {property.features.map((f) => (
              <span
                key={f}
                className="rounded-full bg-pearl-lavender/40 px-2.5 py-0.5 text-xs font-medium text-pearl-navy-deep"
              >
                {f}
              </span>
            ))}
          </div>
        )}

        {/* Price + CTA */}
        <div className="mt-auto flex items-center justify-between border-t border-pearl-lavender/30 pt-3">
          <div>
            <p className="text-xs text-pearl-navy/50">售價</p>
            <p className="font-display text-xl font-black text-pearl-pink-deep">
              {formatPrice(property.price)}
            </p>
          </div>
          {!property.sold && (
            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-pearl-pink-deep px-4 py-2 text-sm font-bold text-white shadow-sm transition-transform hover:scale-105"
            >
              洽詢購買
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Properties() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  return (
    <>
      <Helmet>
        <title>豪宅贊助 | 珍珠島 Pearl Island</title>
        <meta name="description" content="珍珠島精選頂級房產，共 13 間豪宅任君選擇。購買後取得房屋鑰匙、私人車庫、私人倉庫與私人更衣間，入住屬於你的夢想豪宅。" />
        <meta property="og:title" content="豪宅贊助 | 珍珠島 Pearl Island" />
        <meta property="og:description" content="珍珠島精選頂級房產，共 13 間豪宅任君選擇。購買後取得房屋鑰匙、私人車庫、私人倉庫與私人更衣間，入住屬於你的夢想豪宅。" />
        <meta property="og:image" content={`${SITE_URL}/images/properties/build_1.png`} />
        <meta property="og:url" content={`${SITE_URL}/properties`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="bg-gradient-to-b from-pearl-cream via-white to-pearl-lavender/20">
        {/* Page header */}
        <section className="bg-gradient-to-r from-pearl-lavender via-pearl-pink to-pearl-sky py-14 text-center">
          <p className="font-display text-sm font-bold uppercase tracking-[0.3em] text-pearl-navy-deep/70">
            Luxury Real Estate
          </p>
          <h1 className="mt-2 font-display text-4xl font-black text-pearl-navy-deep md:text-5xl">
            豪宅贊助
          </h1>
          <p className="mx-auto mt-3 max-w-2xl px-6 text-pearl-navy-deep/80">
            珍珠島精選頂級房產，每一棟都是玩家身份的象徵。
            購買後標配 <strong>🔑 房屋鑰匙、🚗 私人車庫、📦 私人倉庫、👔 私人更衣間</strong>，
            另附各房產專屬設施，入住屬於你的夢想豪宅。
          </p>
        </section>

        {/* Property grid */}
        <section className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onImageClick={(src, alt) => setLightbox({ src, alt })}
              />
            ))}
          </div>
        </section>

        {/* CTA banner */}
        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl bg-pearl-navy-deep px-8 py-10 text-center text-pearl-cream">
            <h2 className="font-display text-2xl font-black md:text-3xl">
              想入手你的夢想豪宅？
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-pearl-cream/70">
              前往珍珠島 Discord，在「🏷️｜客服中心」頻道建立票口，將有專人為您安排看房與購買流程。
            </p>
            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-full bg-pearl-gold px-8 py-3 font-bold text-pearl-navy-deep shadow-md transition-transform hover:scale-105"
            >
              前往 Discord 洽詢
            </a>
          </div>
        </section>
      </div>

      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  )
}
