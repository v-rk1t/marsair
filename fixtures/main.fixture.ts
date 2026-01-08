import { test as base } from '@playwright/test'
import { HomePage } from '@pages/home.page'
import { SearchPage } from '@pages/search.page'
import { SearchResultPage } from '@pages/searchResult.page'

type MarsAirFixtures = {
  homePage: HomePage
  searchPage: SearchPage
  searchResultPage: SearchResultPage
}

export const test = base.extend<MarsAirFixtures>({
  homePage: async ({ page }, use) => await use(new HomePage(page)),
  searchPage: async ({ page }, use) => await use(new SearchPage(page)),
  searchResultPage: async ({ page }, use) =>
    await use(new SearchResultPage(page))
})
