const Page = require('./page')
class LoginPage extends Page{
    get bussenessEmailInput(){return $('.eSxLXo input')}
    get passwordInput(){return $('.flxMbT input');}
    get submitBtn(){return $('.LoginForm__LoginButton-fhXOmx');}
    get signUpLink(){return $('[href*="sign-up"]')}
    get loginWithMicrosoftBtn(){return $('//*[@class="LoginOAuth__OAuthButtonLabel-chtDdO iRdMaw"][contains(text(),"Microsoft")]')}
    async login (email, password) {
        await this.bussenessEmailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.submitBtn.click();
    }
    async clickSignUpLink(title){
        await this.signUpLink.click()
        await browser.pause(5000)
        await this.switchActiveWindow(title)
        await expect(browser).toHaveTitle(title)
    }
    async clickLoginWithMicrosoftBtn(title){
        await this.loginWithMicrosoftBtn.click()
        await this.switchActiveWindow(title)
        await expect(browser).toHaveTitle(title)
    }
    //async clickLoginBtn(){
       // await this.loginBtn.click()
    //}
    /*get tryForFreeButton() {
        return $('main button[type="submit"]');
    }
    get startYourFreeTrialLink() {
        return $('main div:last-child a[href="/sign-up"]');
    }    
    async clickTryForFreeButton() {
        await this.tryForFreeButton.click();
    }    
    async clickStartYourFreeTrialLink(){
        await this.startYourFreeTrialLink.click();
    }*/
}

module.exports = new LoginPage()