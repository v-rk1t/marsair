import { test } from '@fixtures/main.fixture'
import { DATE_PICKLIST } from '@data/datePicklist'
import { PROMO_CODE } from '@data/promoCode'

test.afterEach(async ({ searchPage }) => {
  await test.step('THEN: User should be redirected to Home page', async () => {
    await searchPage.verifyPageLoad()
  })
})

test('Verify clicking at MarsAir logo redirects user back to Home page', async ({
  homePage,
  searchPage,
  searchResultPage
}) => {
  await test.step('GIVEN: User navigated to Search result page', async () => {
    await homePage.goto()
    await searchPage.search(
      DATE_PICKLIST.DEC_NEXT_YEAR,
      DATE_PICKLIST.DEC_NEXT_TWO_YEAR
    )
    await searchResultPage.verifyPageLoad()
  })

  await test.step('WHEN: User click at MarsAir logo', async () => {
    await homePage.clickLogo()
  })
})

test('Verify clicking at back text link redirects user back to Home page', async ({
  homePage,
  searchPage,
  searchResultPage
}) => {
  await test.step('GIVEN: User navigated to Search result page', async () => {
    await homePage.goto()
    await searchPage.search(
      DATE_PICKLIST.JUL_CURRENT_YEAR,
      DATE_PICKLIST.DEC_NEXT_TWO_YEAR,
      PROMO_CODE.invalid
    )
    await searchResultPage.verifyPageLoad()
  })

  await test.step('WHEN: User click at back text link', async () => {
    await searchResultPage.clickBack()
  })
})
