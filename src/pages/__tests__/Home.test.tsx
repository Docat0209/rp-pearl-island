import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import Home from '../Home'

describe('Home page', () => {
  it('renders the server title and a link to the sponsor page', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    )

    expect(screen.getByRole('heading', { name: /珍珠島 Pearl Island/i })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /贊助車輛/ }).length).toBeGreaterThan(0)
  })
})
