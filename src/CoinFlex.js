const {Builder, By, Key, until} = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();


async function coinFlex() {
    try {
        await driver.get('https://trading.coinflex.com/users/sign_in');
        await findAnyElement(By.xpath("//label[@for='user-form__checkbox']")).then(clickElement);
        await driver.wait(until.elementsLocated(By.xpath("//*[contains(.,'DASHBOARD')]", 60000)));
        await driver.get('https://coinflex.trade.tt/live/');
        await driver.wait(until.elementLocated(By.xpath("//span[@class='title'][contains(text(), 'Instrument Bar')]", 20000)));
        await findAnyElement(By.xpath("//div[@data-help-id='orderticket-panel005']//div[@class='caret-container']")).then(clickElement);
        await findAnyElement(By.xpath("//a[contains(.,'TT Bracket')]")).then(clickElement);
        await findAnyElement(By.xpath("//div[@name='StopOrderType_ctrl']//span[@class='caret']")).then(clickElement);
        await findAnyElement(By.xpath("//a[contains(.,'TT Stop')]")).then(clickElement);

        await driver.wait(until.elementLocated(By.xpath("//div[@data-help-id='orderticket-panel002']//input", 3000)));
        await driver.findElement(By.xpath("//div[@data-help-id='orderticket-panel002']//input")).clear();
        await driver.findElement(By.xpath("//div[@data-help-id='orderticket-panel002']//input")).click();
        await driver.findElement(By.xpath("//div[@data-help-id='orderticket-panel002']//input")).sendKeys(0.0001);
/*
        await findAnyElement(By.xpath("//div[@class='quantity-price-wrapper']//label[contains(.,'Quantity')]']")).then(clickElement);
*/

        await driver.wait(until.elementLocated(By.xpath("//div[@name='ProfitTarget_ctrl']//input"), 3000));
        await driver.findElement(By.xpath("//div[@name='ProfitTarget_ctrl']//input")).clear();
        await driver.findElement(By.xpath("//div[@name='ProfitTarget_ctrl']//input")).sendKeys(5000);
        await driver.wait(until.elementLocated(By.xpath("//div[@name='StopTarget_ctrl']//input"), 3000));
        await driver.findElement(By.xpath("//div[@name='StopTarget_ctrl']//input")).clear();
        await driver.findElement(By.xpath("//div[@name='StopTarget_ctrl']//input")).sendKeys(5000);
        await driver.wait(until.elementLocated(By.xpath("//div[@data-help-id='orderticket-panel003']//input", 3000)));
        await driver.findElement(By.xpath("//div[@data-help-id='orderticket-panel003']//input")).clear();
        await driver.findElement(By.xpath("//div[@data-help-id='orderticket-panel003']//input")).click();
        await driver.findElement(By.xpath("//div[@data-help-id='orderticket-panel003']//input")).sendKeys(20000);

        await findAnyElement(By.xpath("//div[@class='order-buttons']//button[contains(@class, 'btn-buy-broker')]")).then(clickElement);
        await findAnyElement(By.xpath("//div[@class='order-buttons order-confirmation-buttons']//button[contains(@class, 'btn-buy')]")).then(clickElement);
        await findAnyElement(By.xpath("//div[@class='order-buttons']//button[contains(@class, 'btn-flip-sell')]")).then(clickElement);

        await driver.wait(until.elementLocated(By.xpath("//div[@data-help-id='orderticket-panel003']//input", 3000)));
        await driver.findElement(By.xpath("//div[@data-help-id='orderticket-panel003']//input")).clear();
        await driver.findElement(By.xpath("//div[@data-help-id='orderticket-panel003']//input")).click();
        await driver.findElement(By.xpath("//div[@data-help-id='orderticket-panel003']//input")).sendKeys(20000);
        await findAnyElement(By.xpath("//div[@class='order-buttons']//button[contains(@class, 'btn-sell-broker')]")).then(clickElement);
        await findAnyElement(By.xpath("//div[@class='order-buttons order-confirmation-buttons']//button[contains(@class, 'btn-sell')]")).then(clickElement);
    } catch (e) {
        console.log(e);
    }

}

async function clickElement(By) {
    By.click();
}

async function typeText(By, String) {
    By.sendKeys(String);
}

async function findAnyElement(By) {
    driver.wait(until.elementLocated(By), 10000);
    return driver.findElement(By).then(function (result) {
        return result;
    });
}

coinFlex();
