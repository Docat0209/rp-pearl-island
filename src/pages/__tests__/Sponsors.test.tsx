import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import Sponsors from '../Sponsors'
import { sponsorCars } from '../../data/cars'

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
})
