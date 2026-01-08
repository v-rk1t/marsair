import { type Page } from '@playwright/test'

export const SearchLocators = (page: Page) => {
  return {
    welcomeText: page.getByRole('heading', { name: /Welcome to MarsAir!/ }),
    departDropdown: page.locator('#departing'),
    returnDropdown: page.locator('#returning'),
    promoCodeField: page.locator('#promotional_code'),
    searchButton: page.getByRole('button', { name: /Search/ })
  }
}
