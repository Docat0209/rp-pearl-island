import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

  it('hides the mobile menu by default', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    )

    expect(screen.getByRole('button', { name: '開啟選單' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('opens the mobile menu when the toggle is clicked', async () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    )

    await userEvent.click(screen.getByRole('button', { name: '開啟選單' }))

    expect(screen.getByRole('button', { name: '關閉選單' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getAllByRole('link', { name: /首頁/ })).toHaveLength(2)
  })

  it('closes the mobile menu after selecting a link', async () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    )

    await userEvent.click(screen.getByRole('button', { name: '開啟選單' }))
    await userEvent.click(screen.getAllByRole('link', { name: /贊助車輛/ })[1])

    expect(screen.getByRole('button', { name: '開啟選單' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
