// import { expect } from '@wdio/globals'
// import LoginPage from '../pageobjects/login.page.js'
// import SecurePage from '../pageobjects/secure.page.js'

// // Standard user Test**
// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open()

//         await LoginPage.login('standard_user', 'secret_sauce')
//         await expect(SecurePage.inventory).toBeExisting()
//         await expect(SecurePage.inventory).toHaveText(
//             expect.stringContaining('Products'))
//     })
// })
// //Standard_user Negative test**
// describe('My Login application', () => {
//     it('should not login with standard user wrong password', async () => {
//         await LoginPage.open()

//         await LoginPage.login('standard_user', 'wrong_password')
//         await expect(SecurePage.inventory).not.toBeExisting()
       
//     })
// })



// // locked out user test Negative**
// describe('My Login application', () => {
//     it('should not login with locked out user', async () => {
//         await LoginPage.open()

//         await LoginPage.login('locked_out_user', 'secret_sauce')
//         await expect(SecurePage.inventory).not.toBeExisting()
       
//     })
// })

// //Positive Test for problem_user**
// describe('My Login application', () => {
//     it('should login with problem user', async () => {
//         await LoginPage.open()

//         await LoginPage.login('problem_user', 'secret_sauce')
//         await expect(SecurePage.inventory).toBeExisting()
    
//     })
// })

// //Negative Test problem_user **
// describe('My Login application', () => {
//     it('should not login with problem user wrong password', async () => {
//         await LoginPage.open()

//         await LoginPage.login('problem_user', 'wrong_password')
//         await expect(SecurePage.inventory).not.toBeExisting()
        
//     })
// })

// //Positive Test Perfomance User **
// describe('My Login application', () => {
//     it('should login with performance glitch user', async () => {
//         await LoginPage.open()

//         await LoginPage.login('performance_glitch_user', 'secret_sauce')
//         await expect(SecurePage.inventory).toBeExisting()
        
//     })
// })

// //Negative Test Performance User**
// describe('My Login application', () => {
//     it('should not login with performance glitch user wrong password', async () => {
//         await LoginPage.open()

//         await LoginPage.login('performance_glitch_user', 'wrong_password')
//         await expect(SecurePage.inventory).not.toBeExisting()
       
//     })
// })

// //Positive Test for error_user**
// describe('My Login application', () => {
//     it('should login with error user', async () => {
//         await LoginPage.open()

//         await LoginPage.login('error_user', 'secret_sauce')
//         await expect(SecurePage.inventory).toBeExisting()
        
//     })
// })

// // Negative Test for error_user **
// describe('My Login application', () => {
//     it('should not login with error user wrong password', async () => {
//         await LoginPage.open()

//         await LoginPage.login('error_user', 'wrong_password')
//         await expect(SecurePage.inventory).not.toBeExisting()
        
//     })
// })

// // Positive Test visual_user **
// describe('My Login application', () => {
//     it('should login with visual user', async () => {
//         await LoginPage.open()

//         await LoginPage.login('visual_user', 'secret_sauce')
//         await expect(SecurePage.inventory).toBeExisting()
        
//     })
// })

// //Negative Test visual_user **
// describe('My Login application', () => {
//     it('should not login with visual user wrong password', async () => {
//         await LoginPage.open()

//         await LoginPage.login('visual_user', 'wrong_password')
//         await expect(SecurePage.inventory).not.toBeExisting()
        
//     })
// })


// describe('Sauce demo login w/Sam', () => {
//     it('Looping', async () => {
//         await LoginPage.open()

//         await LoginPage.loopLogin()

    
        
//     })
// })