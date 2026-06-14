import { useState } from 'react'
import type { SponsorCar } from '../data/cars'

interface CarThumbnailProps {
  car: SponsorCar
  active: boolean
  onSelect: () => void
}

export default function CarThumbnail({ car, active, onSelect }: CarThumbnailProps) {
  const [previewSrc, setPreviewSrc] = useState<string | null>(null)

  return (
    <button
      type="button"
      onClick={onSelect}
      onMouseEnter={() => setPreviewSrc(encodeURI(car.src))}
      onMouseLeave={() => setPreviewSrc(null)}
      className={`group relative aspect-video overflow-hidden rounded-xl border-2 text-left transition-all ${
        active
          ? 'border-pearl-pink-deep shadow-lg shadow-pearl-pink-deep/30'
          : 'border-transparent hover:border-pearl-lavender-deep'
      }`}
    >
      {previewSrc ? (
        <video
          src={previewSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="h-full w-full bg-pearl-navy-deep/70" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-pearl-navy-deep/80 via-pearl-navy-deep/0 to-transparent" />
      <span className="absolute bottom-2 left-3 right-3 truncate font-display text-sm font-bold text-white drop-shadow">
        {car.name}
      </span>
    </button>
  )
}
