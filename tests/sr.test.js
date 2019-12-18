const https = require('https')

const puppeteer = require("puppeteer")

const BASE_URL = 'https://songriffer.com'

const newPage = (url = "/", options = {}) => {
   return new Promise(async resolve => {
       const browser = await puppeteer.launch({
           // headless: false,
           defaultViewport: {
               width: 1000,
               height: 1000,
           },
           ...options,
       })

       const page = await browser.newPage()
       await page.goto(`${BASE_URL}${url}`)

       resolve({ browser, page })
   })
}

const getStatusCode = url => {
  return new Promise(resolve => {
    https.get(url, res => {
      resolve(res.statusCode)
    })
  })
}

describe('Functional Tests', () => {
    let browser
    let page

    beforeAll(async () => {
        const { browser: b, page: p } = await newPage()

        browser = b
        page = p
    }, 10000)

    afterAll(() => {
        browser.close()
    })

    describe('Homepage', () => {
        test('page load', async () => {
            await page.waitForSelector("#version")
        })

        test('valid mac download url', async () => {
          const button = await page.$('#download-mac')
          const url = await page.evaluate(el => el.getAttribute('href'), button)

          const status = await getStatusCode(url)
          expect(status).not.toEqual(404)
        })

        test('valid windows download url', async () => {
          const button = await page.$('#download-windows')
          const url = await page.evaluate(el => el.getAttribute('href'), button)

          const status = await getStatusCode(url)
          expect(status).not.toEqual(404)
        })
    })

    describe('Transfer', () => {
        test('form switching', async () => {
            await page.goto(`${BASE_URL}/transfer`)
            const button = '.form-type-switch'
            const pwdInput = 'input[type=password]'
            await page.waitForSelector(button)

            const loginInputs = await page.$$(pwdInput)

            expect(loginInputs.length).toEqual(1)

            await page.click(button)

            const signUpInputs = await page.$$(pwdInput)

            expect(signUpInputs.length).toEqual(2)
        }, 5000)
    })
})
