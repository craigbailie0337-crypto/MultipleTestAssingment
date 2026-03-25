import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import MenuPage from '../pageobjects/menu.page.js'


describe('Testing Hamburger Menu', () => {
    it('Full test of Menu', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await MenuPage.openMenu()
        await MenuPage.testlinksHM()

    
        
    })
})