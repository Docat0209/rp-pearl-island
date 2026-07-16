import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import Sponsors from '../Sponsors'
import { sponsorCars } from '../../data/cars'
import { DISCORD_INVITE_URL } from '../../data/discord'

describe('Sponsors page', () => {
  it('shows the first car as featured by default', () => {
    render(
      <BrowserRouter>
        <Sponsors />
      </BrowserRouter>,
    )

    expect(
      screen.getByRole('heading', { name: sponsorCars[0].name }),
    ).toBeInTheDocument()
  })

  it('switches the featured car when a thumbnail is selected', async () => {
    render(
      <BrowserRouter>
        <Sponsors />
      </BrowserRouter>,
    )

    const target = sponsorCars[2]
    await userEvent.click(screen.getByRole('button', { name: target.name }))

    expect(screen.getByRole('heading', { name: target.name })).toBeInTheDocument()
  })

  it('lists every sponsor car as a thumbnail', () => {
    render(
      <BrowserRouter>
        <Sponsors />
      </BrowserRouter>,
    )

    for (const car of sponsorCars) {
      expect(screen.getByRole('button', { name: car.name })).toBeInTheDocument()
    }
  })

  it('shows gacha and direct purchase pricing', () => {
    render(
      <BrowserRouter>
        <Sponsors />
      </BrowserRouter>,
    )

    expect(screen.getByText(/NT\$ 350/)).toBeInTheDocument()
    expect(screen.getByText(/NT\$ 2,500/)).toBeInTheDocument()
  })

  it('directs users to Discord for details', () => {
    render(
      <BrowserRouter>
        <Sponsors />
      </BrowserRouter>,
    )

    expect(screen.getAllByText(/嘎拉幣/).length).toBeGreaterThan(0)
    const discordLinks = screen.getAllByRole('link', { name: /了解更多詳情|Discord/ })
    expect(discordLinks.length).toBeGreaterThan(0)
    for (const link of discordLinks) {
      expect(link).toHaveAttribute('href', DISCORD_INVITE_URL)
    }
  })
})
