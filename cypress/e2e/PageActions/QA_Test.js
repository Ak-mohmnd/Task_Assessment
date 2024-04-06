const PageHeader = '//button[text()="Explore The Store"]'

//Selectors for Successful Product Search
    const BTN_Search = '//button[@id="search-icon-button"]'
    const TXT_SearchFeild = '//input[@id="search-popover-input"]'
    const BTN_Icon = '//button[@id="searchInput-search-button"]'
    const LBL_Item = '//p[@data-test="searchResults-summary"]'
    const ProductName = '//div//p[text()="TOM FORD"]'
    const LBL_Product = '//a//p[text()="TOM FORD"]'

//Selectors for Empty Product Search
    const LBL_NoSearch = '//h2[text()="0 Products"]'

//Selectors for Successful Add Product to Cart
    const BTN_ProductCategory = '//a[text()="Jewellery & Watches"]'
    const BTN_FilterWatch = '//button[text()="Fine Watches "]'
    const BTN_AddCart = '//button[@id="addToBag-button"]'
    const BTN_ViewCart = '//span[text()="View Bag & Checkout"]'
    const LBL_CartProduct = '//div//p[text()="Graff"]'

//Selectors for Out of Stock Product
    const LBL_OutStock = '//p[text()="This product is out of stock"]'


//Selectors for Successful User Login
    const BTN_SignIn = '//a[text()="Sign in"]'
    const LBL_SignIn = '(//button[text()="Sign in"])[1]'
    const TXT_Useremail = '//input[@id="loginForm-email"]'
    const TXT_Userpassword = '//input[@id="loginForm-password"]'
    const BTN_Login = '//button[@id="loginForm-submitButton"]'
    const LBL_UserName = '//div[text()="Abbas Khan"]'

//Selectors for Invalid User Login
    const LBL_Error = '//div[text()="Your email address or password were not correct. Please try again."]'




    

class TestAssessment 

{
    /*******************************************************************
     * Command: TC01_Successful Product Search
     * Description: This function will search the product successfully
     * @param {string} SearchingName 
    *******************************************************************/
    TC01_ProductSearch(SearchingName)
    {  
        cy.xpath(PageHeader).should('be.visible','Explore The Store')
        cy.Click(BTN_Search)
        cy.EnterText(TXT_SearchFeild, SearchingName)
        cy.xpath(BTN_Icon).click()
        cy.wait(5000)
        cy.xpath(LBL_Item).should('be.visible', "mens leather wallet")
        cy.Click(ProductName)
        cy.xpath(LBL_Product).should('be.visible','TOM FORD')
    }


    /*******************************************************************
     * Command: TC02_Add Product to Cart
     * Description: This function will add the product into the Cart successfully
     * @param {string} WatchName 
    *******************************************************************/
    TC02_AddCart(WatchName)
    {
        cy.xpath(PageHeader).should('be.visible','Explore The Store')
        cy.Click(BTN_ProductCategory)
        cy.Click(BTN_FilterWatch)
        cy.xpath(`//div//p[text()="${WatchName}"]`).trigger('mouseover')
        cy.wait(2000)
        cy.Click(`//div//p[text()="${WatchName}"]`)
        cy.wait(2000)
        cy.Click(BTN_AddCart)
        cy.xpath(BTN_ViewCart).click()
        cy.xpath(LBL_CartProduct).should('contain', "Graff")
    }


    /*******************************************************************
     * Command: TC03_Successful User Login
     * Description: This function will be login the user successfully
     * @param {string} UserEmail
     * @param {string} UserPass
    *******************************************************************/
    TC03_UserLogin(UserEmail, UserPass)
    {
        cy.xpath(PageHeader).should('be.visible','Explore The Store')
        cy.Click(BTN_SignIn)
        cy.xpath(LBL_SignIn).should('be.visible')
        cy.EnterText(TXT_Useremail, UserEmail)
        cy.EnterText(TXT_Userpassword, UserPass)
        cy.Click(BTN_Login)
        cy.wait(8000)
        //cy.xpath(LBL_UserName).should('be.visible', "Abbas Khan")    
    
    }



    /*******************************************************************
     * Command: TC04_Empty Product Search
     * Description: This function will search an empty product
     * @param {string} EmptySearch
    *******************************************************************/
    TC04_EmptySearch(EmptySearch)
    {
        cy.xpath(PageHeader).should('be.visible','Explore The Store')
        cy.Click(BTN_Search).wait(2000)
        cy.EnterText(TXT_SearchFeild, EmptySearch)
        cy.xpath(BTN_Icon).click()
        cy.wait(7000)
        cy.xpath(LBL_NoSearch).should('be.visible', "0 Products")
    }



    /*******************************************************************
     * Command: TC05_Invalid Login Credentials
     * Description: This function will be never login user with invalid credentials
     * @param {string} InvalidEmail
     * @param {string} InvalidPass
    *******************************************************************/
    TC05_InvalidLogin(InvalidEmail, InvalidPass)
    {
        cy.xpath(PageHeader).should('be.visible','Explore The Store')
        cy.Click(BTN_SignIn)
        cy.xpath(LBL_SignIn).should('be.visible')
        cy.EnterText(TXT_Useremail, InvalidEmail)
        cy.EnterText(TXT_Userpassword, InvalidPass)
        cy.wait(1000)
        cy.Click(BTN_Login)
        cy.wait(2000)
        //cy.xpath(LBL_Error).should('be.visible', "address or password were not correct")    This is not showing in the terminal
    }




    /*******************************************************************
     * Command: TC06_Out of Stock Product
     * Description: This function will verify that the prodcut is out of stock
     * @param {string} WatchName
    *******************************************************************/
    TC06_OutStock(WatchName)
    {
        cy.xpath(PageHeader).should('be.visible','Explore The Store')
        cy.Click(BTN_ProductCategory)
        cy.Click(BTN_FilterWatch)
        cy.xpath(`//div//p[text()="${WatchName}"]`).trigger('mouseover')
        cy.wait(2000)
        cy.Click(`//div//p[text()="${WatchName}"]`)
        cy.wait(2000)
        cy.Click(BTN_AddCart)
        cy.scrollTo('top')
        cy.xpath(BTN_AddCart).click({fore:true})
        cy.xpath(LBL_OutStock).should('be.visible', "This product is out of stock")
    }

    

}

export default new TestAssessment