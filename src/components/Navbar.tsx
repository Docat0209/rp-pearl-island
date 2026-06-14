import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: '首頁' },
  { to: '/sponsors', label: '贊助車輛' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-pearl-lavender/40 bg-pearl-cream/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <NavLink to="/" className="flex items-center gap-3">
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
        <div className="flex gap-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-pearl-pink-deep text-white shadow-sm'
                    : 'text-pearl-navy-deep hover:bg-pearl-pink/60'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
