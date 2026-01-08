import { test } from '@fixtures/main.fixture'
import { DATE_PICKLIST } from '@data/datePicklist'

test.beforeEach(async ({ homePage }) => {
  await test.step('GIVEN: Navigate to home page', async () => {
    await homePage.goto()
  })
})

test('Verify a customer can see seat is available text when search for an available seat', async ({
  searchPage,
  searchResultPage
}) => {
  await test.step('WHEN: Search with valid departing and returning date', async () => {
    await searchPage.search(
      DATE_PICKLIST.JUL_CURRENT_YEAR,
      DATE_PICKLIST.DEC_NEXT_TWO_YEAR
    )
  })

  await test.step('THEN: Verify seat is available text is visible', async () => {
    await searchResultPage.verifySeatIsAvailable()
  })
})

test('Verify a customer can see no seat is available text when search for no more seats available', async ({
  searchPage,
  searchResultPage
}) => {
  await test.step('WHEN: Search with no available seat on departing and returning date', async () => {
    await searchPage.search(
      DATE_PICKLIST.JUL_CURRENT_YEAR,
      DATE_PICKLIST.JUL_NEXT_YEAR
    )
  })

  await test.step('THEN: Verify no more seats available text is visible', async () => {
    await searchResultPage.verifyNoSeatIsAvailable()
  })
})

test('Verify a customer see invalid seat when search for an invalid seat', async ({
  searchPage,
  searchResultPage
}) => {
  await test.step('WHEN: Search for invalid on departing and returning date', async () => {
    await searchPage.search(
      DATE_PICKLIST.DEC_NEXT_YEAR,
      DATE_PICKLIST.JUL_NEXT_TWO_YEAR
    )
  })

  await test.step('THEN: Verify invalid seat text is visible', async () => {
    await searchResultPage.verifySeatIsInvalid()
  })
})
