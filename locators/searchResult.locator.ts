import { type Page } from '@playwright/test'

export const SearchResultLocators = (page: Page) => {
  return {
    heading: page.getByRole('heading', { name: /Search Results/ }),
    seatAvailableText: page.getByText(/Seats available!/),
    callMarsAirText: page.getByText(/Call now on 0800 MARSAIR to book!/),
    noSeatAvailableText: page.getByText(
      /Sorry, there are no more seats available./
    ),
    invalidSeatText: page.getByText(
      /Unfortunately, this schedule is not possible. Please try again./
    ),
    promoText: page.locator('.promo_code'),
    backTextLink: page.getByRole('link', { name: /Back/ })
  }
}
