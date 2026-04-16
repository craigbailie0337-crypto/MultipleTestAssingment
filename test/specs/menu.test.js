// import { expect } from '@wdio/globals'
// import LoginPage from '../pageobjects/login.page.js'
// import MenuPage from '../pageobjects/menu.page.js'


// describe('Testing Hamburger Menu', () => {
//     it('Should open menu and verify all links exist', async () => {
//         await LoginPage.open();
//         await LoginPage.login('standard_user', 'secret_sauce');
//         await MenuPage.openMenu();
//         await MenuPage.checkMenuLinks();
    
//     });
//     it('Should close the menu when the X button is clicked', async () => {
//         await MenuPage.closeMenu();

//         await expect(MenuPage.closeBtn).not.toBeDisplayed();

//     });


// });

// describe('Negative testing login', () => {
//     it('Should try and login with fake PW and valid username', async () => {
//         await LoginPage.open();
//         await LoginPage.login('standard_user', 'wrong_password');
//         await expect(LoginPage.errorMessage).toBeDisplayed();
//         await expect(LoginPage.errorMessage).toHaveText(expect.stringContaining('Username and password do not match'))
//     })
// })