// Copyright (c) 2020 Gonzalo Müller Bravo.
import { $, browser, ExpectedConditions } from 'protractor'

describe('Main test', () => {
  it('should have a home', async () => {
    await browser.get('', 2000)
      .catch(() => fail('Unable to reach the host'))

    await browser.wait(ExpectedConditions.presenceOf($('#home')), 5000)

    expect(await $('#home').isPresent()).toEqual(true)
  })

  it('should got info from rest api', async () => {
    await browser.get('', 2000)
      .catch(() => fail('Unable to reach the host'))

    await browser.wait(ExpectedConditions.presenceOf($('a[href="/rest"]')), 5000)

    $('a[href="/rest"]').click()
    $('input[name="@from"]').sendKeys('abc123')
    $('button[data-x="rest-echo-button"]').click()

    await browser.sleep(100)

    expect(await $('div[data-x="rest-echo-result"]').getText()).toEqual(jasmine.stringMatching(/.*321cba.*/))
  })
})
