import { type Page, expect } from '@playwright/test'
import { SearchResultLocators } from '@locators/searchResult.locator'

export class SearchResultPage {
  readonly page: Page
  readonly locator: ReturnType<typeof SearchResultLocators>

  constructor(page: Page) {
    this.page = page
    this.locator = SearchResultLocators(this.page)
  }

  // act

  async clickBack() {
    await this.locator.backTextLink.click()
  }

  // assert

  async verifyPageLoad() {
    await expect(this.locator.heading).toBeVisible()
  }

  async verifySeatIsAvailable() {
    await expect(this.locator.seatAvailableText).toBeVisible()
    await expect(this.locator.callMarsAirText).toBeVisible()
  }

  async verifyNoSeatIsAvailable() {
    await expect(this.locator.noSeatAvailableText).toBeVisible()
  }

  async verifySeatIsInvalid() {
    await expect(this.locator.invalidSeatText).toBeVisible()
  }

  async verifyPromoCodeIsInvalid(promoCode: string) {
    await expect(this.locator.promoText).toBeVisible()
    await expect(this.locator.promoText).toHaveText(
      `Sorry, code ${promoCode} is not valid`
    )
  }

  async verifyPromoCodeIsValid(promoCode: string, discountPercent: number) {
    await expect(this.locator.promoText).toBeVisible()
    await expect(this.locator.promoText).toHaveText(
      `Promotional code ${promoCode} used: ${discountPercent}% discount!`
    )
  }
}
