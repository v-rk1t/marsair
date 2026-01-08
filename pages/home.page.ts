import { type Page, expect } from '@playwright/test'
import { HomeLocators } from '@locators/home.locator'

export class HomePage {
  readonly page: Page
  readonly locator: ReturnType<typeof HomeLocators>
  readonly url: string

  constructor(page: Page) {
    this.page = page
    this.locator = HomeLocators(this.page)
    this.url = '/VeerakitC'
  }

  // act

  async goto() {
    await this.page.goto(this.url)
  }

  async clickLogo() {
    await this.locator.logo.click()
  }

  // assert

  async verifyPageLoad() {
    await expect(this.locator.logo).toBeVisible()
  }

  async verifyLogoIsVisible() {
    await expect(this.locator.logo).toBeVisible()
  }
}
