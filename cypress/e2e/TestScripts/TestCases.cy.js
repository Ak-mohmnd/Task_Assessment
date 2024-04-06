/// <reference types="cypress" />
import Data from '../../fixtures/TestData'
import cookies from '../../fixtures/setCookies'
import TestAssessment from '../PageActions/QA_Test'


// Cookies Key 
    const CookiesKey = '_cfuvid'
    const CookiesValue = cookies.cookiesValue // Passing the browser cookies

    
    const {SearchingName, WatchName, UserEmail, UserPass, EmptySearch, InvalidEmail, InvalidPass} = Data

before(() => 
{
    cy.setCookie(CookiesKey, CookiesValue)
})

beforeEach(() => 
{
    cy.visit('https://www.harrods.com/')
    cy.wait(2000)
})



describe('QA TASK ASSESSMENT', () => 
{
    
    
    it.only('[TC01] This function will Search the Product Successfully',()=>
    {
        TestAssessment.TC01_ProductSearch(SearchingName)
    })

    it('[TC02] This function will Add a Product to Cart Successfully',()=>
    {
        TestAssessment.TC02_AddCart(WatchName)
    })

    it('[TC03] This function will Login User Successfully',()=>
    {
        TestAssessment.TC03_UserLogin(UserEmail, UserPass)
    })

    it('[TC04] This function will Search No Product',()=>
    {
        TestAssessment.TC04_EmptySearch(EmptySearch)
    })

    it('[TC05] This function will Never Login User Successfully with Invalid Credentials',()=>
    {
        TestAssessment.TC05_InvalidLogin(InvalidEmail, InvalidPass)
    })


    it('[TC06] This function will show that the product is out of stock',()=>
    {
        TestAssessment.TC06_OutStock(WatchName)
    })

    
})
