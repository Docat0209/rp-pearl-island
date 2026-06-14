import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import CarThumbnail from '../CarThumbnail'

const car = { name: 'Aston Martin Victor', src: '/videos/AstonMartinVictor.mp4' }

describe('CarThumbnail', () => {
  it('does not render a video until hovered', () => {
    render(<CarThumbnail car={car} active={false} onSelect={() => {}} />)

    expect(screen.getByRole('button', { name: car.name })).toBeInTheDocument()
    expect(document.querySelector('video')).not.toBeInTheDocument()
  })

  it('loads the preview video on hover', async () => {
    render(<CarThumbnail car={car} active={false} onSelect={() => {}} />)

    await userEvent.hover(screen.getByRole('button', { name: car.name }))

    const video = document.querySelector('video')
    expect(video).toHaveAttribute('src', encodeURI(car.src))
    expect(video).toHaveAttribute('preload', 'none')
  })

  it('removes the preview video when the mouse leaves', async () => {
    render(<CarThumbnail car={car} active={false} onSelect={() => {}} />)

    const button = screen.getByRole('button', { name: car.name })
    await userEvent.hover(button)
    await userEvent.unhover(button)

    expect(document.querySelector('video')).not.toBeInTheDocument()
  })

  it('calls onSelect when clicked', async () => {
    let selected = false
    render(<CarThumbnail car={car} active={false} onSelect={() => (selected = true)} />)

    await userEvent.click(screen.getByRole('button', { name: car.name }))

    expect(selected).toBe(true)
  })
})
