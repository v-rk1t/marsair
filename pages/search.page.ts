import { type Page, expect } from '@playwright/test'
import { type DATE_PICKLIST } from '@data/datePicklist'
import { SearchLocators } from '@locators/search.locator'

export class SearchPage {
  readonly page: Page
  readonly locator: ReturnType<typeof SearchLocators>

  constructor(page: Page) {
    this.page = page
    this.locator = SearchLocators(this.page)
  }

  // act

  async selectDepartDate(date: DATE_PICKLIST) {
    await this.locator.departDropdown.selectOption({ value: `${date}` })
  }

  async selectReturnDate(date: DATE_PICKLIST) {
    await this.locator.returnDropdown.selectOption({ value: `${date}` })
  }

  async inputPromoCode(promoCode: string) {
    await this.locator.promoCodeField.fill(promoCode)
  }

  async clickSearch() {
    await this.locator.searchButton.click()
  }

  async search(
    departDate: DATE_PICKLIST,
    returnDate: DATE_PICKLIST,
    promo_code?: string
  ) {
    await this.selectDepartDate(departDate)
    await this.selectReturnDate(returnDate)
    if (promo_code) {
      await this.inputPromoCode(promo_code)
    }
    await this.clickSearch()
  }

  // assert

  async verifyPageLoad() {
    await expect(this.locator.welcomeText).toBeVisible()
  }
}
