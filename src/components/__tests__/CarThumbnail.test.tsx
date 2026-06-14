import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import CarThumbnail from '../CarThumbnail'

const car = {
  name: 'Aston Martin Victor',
  src: '/videos/AstonMartinVictor.mp4',
  poster: '/images/cars/aston-martin-victor.jpg',
}

describe('CarThumbnail', () => {
  it('renders a poster image with lazy loading', () => {
    render(<CarThumbnail car={car} active={false} onSelect={() => {}} />)

    const img = document.querySelector('img')
    expect(img).toHaveAttribute('src', encodeURI(car.poster))
    expect(img).toHaveAttribute('loading', 'lazy')
  })

  it('does not render a video element', () => {
    render(<CarThumbnail car={car} active={false} onSelect={() => {}} />)

    expect(document.querySelector('video')).not.toBeInTheDocument()
  })

  it('calls onSelect when clicked', async () => {
    let selected = false
    render(<CarThumbnail car={car} active={false} onSelect={() => (selected = true)} />)

    await userEvent.click(screen.getByRole('button', { name: car.name }))

    expect(selected).toBe(true)
  })
})
