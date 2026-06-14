export interface SponsorCar {
  /** Display name, derived from the source video file name */
  name: string
  /** Video file path under /videos */
  src: string
}

/**
 * Sponsor car showcase list.
 * Each entry's `name` comes directly from its mp4 file name in /public/videos.
 */
export const sponsorCars: SponsorCar[] = [
  { name: 'Aston Martin Victor', src: '/videos/AstonMartinVictor.mp4' },
  { name: 'BMW Hommage', src: '/videos/BMW Hommage.mp4' },
  { name: 'Lamborghini STO', src: '/videos/Lamborghini STO.mp4' },
  { name: 'Lamborghini Urus 6', src: '/videos/Lamborghini Urus 6.mp4' },
  { name: 'Lexus LC500', src: '/videos/lexus lc500.mp4' },
  { name: 'Nissan Z Proto', src: '/videos/NISSAN Z PROTO.mp4' },
  { name: 'Pickup Truck', src: '/videos/Pickup Truck.mp4' },
  { name: 'R35LB Nissan', src: '/videos/R35LB Nissan.mp4' },
  { name: 'Raptor 2017', src: '/videos/Raptor 2017.mp4' },
  { name: 'Toyota FT-1', src: '/videos/Toyota FT-1.mp4' },
]
