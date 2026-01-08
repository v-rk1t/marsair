import { type Page } from '@playwright/test'

export const HomeLocators = (page: Page) => {
  return {
    logo: page.getByRole('link', { name: /MarsAir/ })
  }
}
