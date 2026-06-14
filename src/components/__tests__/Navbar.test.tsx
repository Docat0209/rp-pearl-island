import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import Navbar from '../Navbar'
import { DISCORD_INVITE_URL } from '../../data/discord'

describe('Navbar', () => {
  it('renders the brand and navigation links', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    )

    expect(screen.getByRole('link', { name: /首頁/ })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: /贊助車輛/ })).toHaveAttribute(
      'href',
      '/sponsors',
    )
  })

  it('links to the Discord invite in a new tab', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    )

    const discordLink = screen.getByRole('link', { name: /加入 Discord/ })
    expect(discordLink).toHaveAttribute('href', DISCORD_INVITE_URL)
    expect(discordLink).toHaveAttribute('target', '_blank')
  })
})
