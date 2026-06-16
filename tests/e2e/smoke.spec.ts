import { expect, test } from '@playwright/test'
import { DISCORD_INVITE_URL } from '../../src/data/discord'

test('navbar Discord button links to the official invite', async ({ page }) => {
  await page.goto('/')

  const discordLink = page.getByRole('link', { name: '加入 Discord' }).first()
  await expect(discordLink).toHaveAttribute('href', DISCORD_INVITE_URL)
  await expect(discordLink).toHaveAttribute('target', '_blank')
})

test('home page loads and links to sponsor showcase', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { name: '珍珠島 Pearl Island' })).toBeVisible()

  await page.getByRole('link', { name: '瀏覽贊助車輛 →' }).click()
  await expect(page).toHaveURL(/\/sponsors$/)
})

test('sponsor page plays a featured vehicle video and switches cars', async ({ page }) => {
  await page.goto('/sponsors')

  await expect(page.getByRole('heading', { name: 'Aston Martin Victor' })).toBeVisible()
  await expect(page.locator('video').first()).toBeVisible()
  await expect(page.getByText('NT$ 2,000')).toBeVisible()

  await page.getByRole('button', { name: 'BMW Hommage' }).click()
  await expect(page.getByRole('heading', { name: 'BMW Hommage' })).toBeVisible()
})

test('properties page shows listing grid and sold status', async ({ page }) => {
  await page.goto('/properties')

  await expect(page.getByRole('heading', { name: '豪宅贊助' })).toBeVisible()
  await expect(page.getByText('想入手你的夢想豪宅？')).toBeVisible()
  await expect(page.getByRole('link', { name: '前往 Discord 洽詢' })).toBeVisible()
  await expect(page.getByText('🔑 房屋鑰匙').first()).toBeVisible()
})

test('navbar links to properties page', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('link', { name: '豪宅贊助' }).click()
  await expect(page).toHaveURL(/\/properties$/)
  await expect(page.getByRole('heading', { name: '豪宅贊助' })).toBeVisible()
})
