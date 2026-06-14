# 珍珠島 Pearl Island - 官方網站

FiveM RP 伺服器「珍珠島 Pearl Island」的靜態行銷網站，部署於 Vercel。

## 技術棧

- Vite + React 19 + TypeScript
- React Router (首頁 `/`、贊助車輛展示 `/sponsors`)
- Tailwind CSS v4（色票定義於 `src/index.css` 的 `@theme`，取樣自 `public/images/logo.png`）
- Vitest + React Testing Library（單元測試）
- Playwright（E2E 測試）

## 常用指令

```bash
npm run dev        # 本地開發伺服器
npm run build      # 型別檢查 + production build
npm run preview    # 預覽 production build
npm run lint       # ESLint
npm run test       # Vitest 單元測試
npm run test:e2e   # Playwright E2E（會自動啟動 preview server）
```

## 目錄結構

- `src/pages/Home.tsx` - 首頁
- `src/pages/Sponsors.tsx` - 贊助車輛展示頁，主播放器 + 縮圖選擇
- `src/data/cars.ts` - 贊助車輛清單，`name` 對應 `public/videos/` 內的 mp4 檔名
- `public/videos/` - 贊助車輛展示影片
- `public/images/logo.png` - 伺服器主視覺/Logo

## Environments

- Production: https://rp-pearl-island.vercel.app
- Staging (dev branch preview): https://rp-pearl-island-git-dev-docat0209-7947s-projects.vercel.app

## 分支策略

- `main` ← `dev` ← feature branches
- CI（`.github/workflows/ci.yml`）於 push/PR 至 `main`、`dev` 時執行 lint、單元測試、build、E2E
