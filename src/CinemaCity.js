const {Builder, By, Key, until} = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();
async function cinemaCity() {
    try {
        while (true) {
            await driver.get('https://www.sfcinemacity.com/showtime/cinema/9936');
            await driver.wait(until.elementIsNotVisible(driver.findElement(By.xpath("//div[@id='loading']")), 60000));
            await findAnyElement(By.xpath("//a[contains(.,'ENG')]")).then(clickElement);
            await driver.wait(until.elementsLocated(By.xpath("//p[contains(.,'24 Nov 2019')]", 2000)));
            await findAnyElement(By.xpath("//p[contains(.,'24 Nov 2019')]")).then(clickElement);
            await driver.wait(until.elementsLocated(By.xpath("//h1[contains(.,'The Cave')]//following::button[contains(.,'16:15')]", 2000)));
            await findAnyElement(By.xpath("//h1[contains(.,'The Cave')]//following::button[contains(.,'16:15')]")).then(clickElement);
            await driver.wait(until.elementsLocated(By.xpath("//button[@class='button-seat seat-available']", 2000)));
            await findAnyElement(By.xpath("//button[@class='button-seat seat-available']")).then(clickElement);
            await driver.wait(until.elementsLocated(By.xpath("//button[contains(@class, 'button-continue btn-block is-selected')]", 2000)));
            await findAnyElement(By.xpath("//button[contains(@class, 'button-continue btn-block is-selected')]")).then(clickElement);
            await driver.sleep(300000);

        }
    } catch (e) {
        console.log(e);
    }
    async function clickElement(By) {
        By.click();
    }

    async function findAnyElement(By) {
        return driver.findElement(By).then(function (result) {
            return result;
        });
    }

}
cinemaCity();
