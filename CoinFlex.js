const {Builder, By, Key, until} = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();


async function coinFlex() {
    try {
        await driver.get('https://trading.coinflex.com/users/sign_in');
        await findAnyElement(By.xpath("//label[@for='user-form__checkbox']")).then(clickElement);
        await driver.wait(until.elementsLocated(By.xpath("//*[contains(.,'DASHBOARD')]", 60000)));
        await driver.get('https://coinflex.trade.tt/live/');
        await driver.wait(until.elementLocated(By.xpath("//span[@class='title'][contains(text(), 'Instrument Bar')]", 20000)))
        await driver.findElement(By.xpath("//div[@data-help-id='orderticket-panel002']//input")).sendKeys("100.00");
        await findAnyElement(By.xpath("//div[@data-help-id='orderticket-panel005']//div[@class='caret-container']")).then(clickElement);
        await driver.wait(until.elementLocated(By.xpath("//a[contains(.,'TT Bracket')]", 3000)))
        await findAnyElement(By.xpath("//a[contains(.,'TT Bracket')]")).then(clickElement);
        await driver.wait(until.elementLocated(By.xpath("//div[@name='ProfitTarget_ctrl']//input"), 3000));
        await driver.findElement(By.xpath("//div[@name='ProfitTarget_ctrl']//input")).clear();
        await driver.findElement(By.xpath("//div[@name='ProfitTarget_ctrl']//input")).sendKeys(5000);
        await driver.wait(until.elementLocated(By.xpath("//div[@name='StopTarget_ctrl']//input"), 3000));
        await driver.findElement(By.xpath("//div[@name='StopTarget_ctrl']//input")).clear();
        await driver.findElement(By.xpath("//div[@name='StopTarget_ctrl']//input")).sendKeys(5000);
        await findAnyElement(By.xpath("//div[@data-help-id='orderticket-panel001']//span[contains(., '100%')]")).then(clickElement);
        await findAnyElement(By.xpath("//div[@class='order-buttons']//button[contains(@class, 'btn-buy-broker')]")).then(clickElement);
        await findAnyElement(By.xpath("//div[@class='order-buttons order-confirmation-buttons']//button[contains(@class, 'btn-buy')]")).then(clickElement);
        await findAnyElement(By.xpath("//div[@class='order-buttons']//button[contains(@class, 'btn-flip-sell')]")).then(clickElement);
        await findAnyElement(By.xpath("//div[@data-help-id='orderticket-panel001']//span[contains(., '100%')]")).then(clickElement);
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
    return driver.findElement(By).then(function (result) {
        return result;
    });
}

coinFlex();
