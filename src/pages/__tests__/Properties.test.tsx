import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'
import Properties from '../Properties'

const mockProperties = vi.hoisted(() => [
  {
    id: 1,
    image: 'build_1.png',
    name: '翡翠山頂莊園',
    type: '山頂豪宅',
    price: 12000000,
    coordinates: 'X: -1648, Y: 452',
    area: '好萊塢山',
    description: '測試描述一',
    features: ['🏊 無邊際泳池', '🌿 多層景觀露台'],
    sold: false,
  },
  {
    id: 2,
    image: 'build_2.png',
    name: '峭壁玻璃居',
    type: '懸崖別墅',
    price: 7500000,
    coordinates: 'X: -1720, Y: 318',
    area: '峭壁海岸',
    description: '測試描述二',
    features: ['🏊 懸空泳池'],
    sold: true,
  },
])

vi.mock('../../data/properties.json', () => ({ default: mockProperties }))

function renderProperties() {
  return render(
    <BrowserRouter>
      <Properties />
    </BrowserRouter>,
  )
}

describe('Properties', () => {
  it('renders all property cards', () => {
    renderProperties()
    expect(screen.getAllByRole('img')).toHaveLength(mockProperties.length)
  })

  it('shows property name as card title', () => {
    renderProperties()
    expect(screen.getByText('翡翠山頂莊園')).toBeInTheDocument()
    expect(screen.getByText('峭壁玻璃居')).toBeInTheDocument()
  })

  it('shows concise type badge on each card', () => {
    renderProperties()
    expect(screen.getByText('山頂豪宅')).toBeInTheDocument()
    expect(screen.getByText('懸崖別墅')).toBeInTheDocument()
  })

  it('displays available status badge for unsold properties', () => {
    renderProperties()
    const badges = screen.getAllByText('出售中')
    expect(badges.length).toBeGreaterThan(0)
  })

  it('shows 洽詢購買 button only for available properties', () => {
    renderProperties()
    const ctaButtons = screen.getAllByRole('link', { name: '洽詢購買' })
    expect(ctaButtons).toHaveLength(1)
  })

  it('shows 已售出 overlay and badge for sold properties', () => {
    renderProperties()
    const soldLabels = screen.getAllByText('已售出')
    expect(soldLabels.length).toBeGreaterThanOrEqual(2)
  })

  it('formats price with dollar sign and thousand separators', () => {
    renderProperties()
    expect(screen.getByText('$12,000,000')).toBeInTheDocument()
    expect(screen.getByText('$7,500,000')).toBeInTheDocument()
  })

  it('renders JSON-driven feature tags on each card', () => {
    renderProperties()
    expect(screen.getAllByText('🏊 無邊際泳池')).toHaveLength(1)
    expect(screen.getAllByText('🌿 多層景觀露台')).toHaveLength(1)
    expect(screen.getAllByText('🏊 懸空泳池')).toHaveLength(1)
  })

  it('renders property area for each card', () => {
    renderProperties()
    expect(screen.getByText('好萊塢山')).toBeInTheDocument()
    expect(screen.getByText('峭壁海岸')).toBeInTheDocument()
  })

  it('renders Discord CTA banner', () => {
    renderProperties()
    expect(screen.getByText('想入手你的夢想豪宅？')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '前往 Discord 洽詢' })).toBeInTheDocument()
  })
})
