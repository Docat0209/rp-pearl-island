import '@testing-library/jest-dom/vitest'

// jsdom does not implement media playback; stub it for components that call play()/pause()
Object.defineProperty(window.HTMLMediaElement.prototype, 'play', {
  configurable: true,
  value: () => Promise.resolve(),
})
Object.defineProperty(window.HTMLMediaElement.prototype, 'pause', {
  configurable: true,
  value: () => {},
})
