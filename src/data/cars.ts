export interface SponsorCar {
  /** Display name, derived from the source video file name */
  name: string
  /** Video file path under /videos */
  src: string
  /** Static poster image path under /images/cars, shown in the thumbnail grid */
  poster: string
}

/**
 * Sponsor car showcase list.
 * Each entry's `name` comes directly from its mp4 file name in /public/videos.
 */
export const sponsorCars: SponsorCar[] = [
  { name: 'Aston Martin Victor', src: '/videos/AstonMartinVictor.mp4', poster: '/images/cars/aston-martin-victor.jpg' },
  { name: 'BMW Hommage', src: '/videos/BMW Hommage.mp4', poster: '/images/cars/bmw-hommage.jpg' },
  { name: 'Lamborghini STO', src: '/videos/Lamborghini STO.mp4', poster: '/images/cars/lamborghini-sto.jpg' },
  { name: 'Lamborghini Urus 6', src: '/videos/Lamborghini Urus 6.mp4', poster: '/images/cars/lamborghini-urus-6.jpg' },
  { name: 'Lexus LC500', src: '/videos/lexus lc500.mp4', poster: '/images/cars/lexus-lc500.jpg' },
  { name: 'Nissan Z Proto', src: '/videos/NISSAN Z PROTO.mp4', poster: '/images/cars/nissan-z-proto.jpg' },
  { name: 'Pickup Truck', src: '/videos/Pickup Truck.mp4', poster: '/images/cars/pickup-truck.jpg' },
  { name: 'R35LB Nissan', src: '/videos/R35LB Nissan.mp4', poster: '/images/cars/r35lb-nissan.jpg' },
  { name: 'Raptor 2017', src: '/videos/Raptor 2017.mp4', poster: '/images/cars/raptor-2017.jpg' },
  { name: 'Toyota FT-1', src: '/videos/Toyota FT-1.mp4', poster: '/images/cars/toyota-ft-1.jpg' },
]
