import { test } from '@fixtures/main.fixture'
import { PROMO_CODE } from '@data/promoCode'
import { DATE_PICKLIST } from '@data/datePicklist'

test.beforeEach(async ({ homePage }) => {
  await test.step('GIVEN: Navigate to home page', async () => {
    await homePage.goto()
  })
})

test('Verify a customer can search with a valid promotional code', async ({
  searchPage,
  searchResultPage
}) => {
  await test.step('WHEN: Select dates, input valid promotional code and search', async () => {
    await searchPage.search(
      DATE_PICKLIST.JUL_CURRENT_YEAR,
      DATE_PICKLIST.DEC_NEXT_TWO_YEAR,
      PROMO_CODE.valid30
    )
  })

  await test.step('THEN: Verify promotional code message is visible', async () => {
    await searchResultPage.verifySeatIsAvailable()
    await searchResultPage.verifyPromoCodeIsValid(PROMO_CODE.valid30, 30)
  })
})

test('Verify a customer can see an error message promotional code is invalid when using invalid code', async ({
  searchPage,
  searchResultPage
}) => {
  await test.step('WHEN: Select dates, input invalid promotional code and search', async () => {
    await searchPage.search(
      DATE_PICKLIST.JUL_CURRENT_YEAR,
      DATE_PICKLIST.DEC_NEXT_TWO_YEAR,
      PROMO_CODE.invalid
    )
  })

  await test.step('THEN: Verify promotional code error message is visible', async () => {
    await searchResultPage.verifySeatIsAvailable()
    await searchResultPage.verifyPromoCodeIsInvalid(PROMO_CODE.invalid)
  })
})
