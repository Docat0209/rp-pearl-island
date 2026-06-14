import { expect, test } from '@playwright/test'

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

  await page.getByRole('button', { name: 'BMW Hommage' }).click()
  await expect(page.getByRole('heading', { name: 'BMW Hommage' })).toBeVisible()
})
