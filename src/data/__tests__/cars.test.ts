import { describe, expect, it } from 'vitest'
import { sponsorCars } from '../cars'

describe('sponsorCars', () => {
  it('has at least one car', () => {
    expect(sponsorCars.length).toBeGreaterThan(0)
  })

  it('every car has a non-empty name and a video path under /videos', () => {
    for (const car of sponsorCars) {
      expect(car.name.length).toBeGreaterThan(0)
      expect(car.src).toMatch(/^\/videos\/.+\.mp4$/)
    }
  })
})
