import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import Navbar from '../Navbar'

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
})
