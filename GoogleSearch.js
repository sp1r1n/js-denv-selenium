"use strict";

var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();

function logTitle() {
	browser.getTitle().then(function(title) {
		console.log('Current Page Title: ' + title);
	});
}

async function example() {
	let driver = await new Builder().forBrowser('chrome').build();
	try {
		await driver.get('https://trading.coinflex.com/users/sign_in');
		driver.sleep(1000)
		await driver.findElement(browser.By.xpath("//label[@for='user-form__checkbox']")).click();
		await driver.findElement(webdriver.By.name("commit")).click();
	} finally {
/*
		await driver.quit();
*/
	}
}

function clickLink(link) {
	link.click();
}

function handleFailure(err) {
	console.error('Something went wrong\n', err.stack, '\n');
	closeBrowser();
}

function findTutsPlusLink() {
	return browser.findElements(webdriver.By.css('[href="http://code.tutsplus.com/"]')).then(function(result) {
		return result[0];
	});
}

function closeBrowser() {
	browser.quit();
}
example();
/*
browser.findElement(webdriver.By.name('btnG')).click();
browser.wait(findTutsPlusLink, 2000).then(clickLink).then(logTitle).then(closeBrowser, handleFailure);*/
