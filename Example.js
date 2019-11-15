const {Builder, By, Key, until} = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();

async function example() {
    try {
        await driver.get('https://trading.coinflex.com/users/sign_in');
        await driver.findElement(By.xpath("//label[@for='user-form__checkbox']")).click();
        await driver.sleep(30000)
        await driver.get('https://coinflex.trade.tt/live/');
        await driver.wait(until.elementLocated(By.xpath("//span[@class='title'][contains(text(), 'Instrument Bar')]", 20000)))
        await driver.findElement(By.xpath("//div[@data-help-id='orderticket-panel002']//input")).sendKeys("100.00");

    } finally {
    }
}

example();
