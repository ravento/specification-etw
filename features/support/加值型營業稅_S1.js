module.exports = function() {
    this.Given(/^進入稅務入口網營業稅試算功能$/, function () {
        browser.url('http://www.etax.nat.gov.tw/etwmain/front/ETW158W3');
    });
    this.When(/^填入銷項稅額"([^"]*)"$/, function (outputTax) {
        browser.setValue('input[name="outputTax"]', outputTax);
    });
    this.When(/^填入進項稅額"([^"]*)"$/, function (vat) {
        browser.setValue('input[name="vat"]', vat);
    });
    this.Then(/^計算結果應為"([^"]*)"$/, function (result) {
        browser.click('#etwForm > div > div.section > table > tbody > tr:nth-child(3) > td > input[type="button"]:nth-child(8)');
        browser.waitUntil(function(){
            if ( browser.getText('#tax1') != "0") {
                return true;
            } else {
                return false;
            }
        }, 60000);
        expect(browser.getText('#tax1')).toEqual(result);
    });
};

