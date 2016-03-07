module.exports = function() {
    this.Given(/^進入稅務入口網營業稅試算功能，選擇保險業之再保費收入$/, function () {
        browser.url('http://www.etax.nat.gov.tw/etwmain/front/ETW158W3');
        browser.waitForExist('#sales');
        browser.selectByIndex('select', 2);
    });
    this.When(/^填入銷售額"([^"]*)"$/, function (sales) {
        browser.setValue('input[name="sales"]', sales);
    });
    this.Then(/^稅率應該為"([^"]*)"且計算結果應為"([^"]*)"$/, function (taxRate, result) {
        browser.click('#etwForm > div > div.section > table > tbody > tr:nth-child(6) > td > input[type="button"]:nth-child(8)');
        browser.waitUntil(function(){
            if ( browser.getText('#tax2') != "0") {
                return true;
            } else {
                return false;
            }
        }, 60000);
        expect(browser.getValue('#taxRate')).toEqual(taxRate);
        expect(browser.getText('#tax2')).toEqual(result);
    });
};

