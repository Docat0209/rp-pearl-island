import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { DISCORD_INVITE_URL } from '../data/discord'

const links = [
  { to: '/', label: '首頁' },
  { to: '/sponsors', label: '贊助車輛' },
]

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
    isActive
      ? 'bg-pearl-pink-deep text-white shadow-sm'
      : 'text-pearl-navy-deep hover:bg-pearl-pink/60'
  }`

const discordLinkClass =
  'rounded-full bg-pearl-pink-deep px-4 py-2 text-sm font-bold text-white shadow-sm transition-transform hover:scale-105'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-pearl-lavender/40 bg-pearl-cream/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <NavLink to="/" className="flex items-center gap-3" onClick={closeMenu}>
          <img
            src="/images/logo.png"
            alt="珍珠島"
            className="h-12 w-12 rounded-full object-cover shadow-md shadow-pearl-lavender-deep/30"
          />
          <span className="font-display text-xl font-bold text-pearl-navy-deep">
            珍珠島
            <span className="ml-1 text-sm font-normal text-pearl-lavender-deep">
              Pearl Island
            </span>
          </span>
        </NavLink>

        <div className="hidden items-center gap-2 sm:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
          <a href={DISCORD_INVITE_URL} target="_blank" rel="noreferrer" className={discordLinkClass}>
            加入 Discord
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? '關閉選單' : '開啟選單'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-pearl-navy-deep transition-colors hover:bg-pearl-pink/60 sm:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="flex flex-col gap-1 border-t border-pearl-lavender/40 px-6 py-3 sm:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `rounded-full px-4 py-3 text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-pearl-pink-deep text-white shadow-sm'
                    : 'text-pearl-navy-deep hover:bg-pearl-pink/60'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className="rounded-full bg-pearl-pink-deep px-4 py-3 text-center text-base font-bold text-white shadow-sm"
          >
            加入 Discord
          </a>
        </div>
      )}
    </header>
  )
}
