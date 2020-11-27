const { Builder, By, Key, until } = require('selenium-webdriver');
require("chromedriver");
const { expect } = require('@jest/globals');

describe('Test that user priviledges are working effectively', () => {

    afterAll(async () => {
        await driver.quit();
    }, 15000);

    jest.setTimeout(10000);

    it('should log in as a restricted user, see the welcome message for restricted users and sign out', async () => {
        let driver;
        driver = new Builder().forBrowser('chrome').build();
        await driver.manage().setTimeouts({ implicit: 10000 });

        await driver.get('http://localhost:3000/login');

        const usernameField = await driver.findElement(By.xpath('//*[@id="root"]/main/div/div/div/div/form/div/div[1]/input'));
        const passwordField = await driver.findElement(By.xpath('//*[@id="root"]/main/div/div/div/div/form/div/div[2]/input'));

        await usernameField.sendKeys('jason');
        await passwordField.sendKeys('password', Key.ENTER);

        await driver.sleep(2000);

        const message = await driver.findElement(By.xpath('//*[@id="root"]/main/div/div/div/h2')).getAttribute('innerHTML');

        expect(message).toBe('Welcome jason you have been given restrict privelidges')

        const signOutButton = await driver.findElement(By.xpath('//*[@id="root"]/main/div/div/header/div/button'));
        await signOutButton.click();
        await driver.sleep(2000);

        const actualUrl = await driver.getCurrentUrl();
        expect(actualUrl).toBe('http://localhost:3000/login');
    })

    it('should log in as editor and see create option', async () => {
        let driver;
        driver = new Builder().forBrowser('chrome').build();
        await driver.manage().setTimeouts({ implicit: 10000 });

        await driver.get('http://localhost:3000/login');

        const usernameField = await driver.findElement(By.xpath('//*[@id="root"]/main/div/div/div/div/form/div/div[1]/input'));
        const passwordField = await driver.findElement(By.xpath('//*[@id="root"]/main/div/div/div/div/form/div/div[2]/input'));

        await usernameField.sendKeys('barry');
        await passwordField.sendKeys('password', Key.ENTER);

        await driver.sleep(2000);

        const actualUrl = await driver.getCurrentUrl();
        const createQuizButton = await driver.findElement(By.xpath('//*[@id="root"]/main/div/div/div/a/button'));


        expect(actualUrl).toBe('http://localhost:3000/');
        expect(createQuizButton).toBeTruthy();

    });

    it('should log in as viewer and see the see answers option', async () => {
        let driver;
        driver = new Builder().forBrowser('chrome').build();
        await driver.manage().setTimeouts({ implicit: 10000 });

        await driver.get('http://localhost:3000/login');

        const usernameField = await driver.findElement(By.xpath('//*[@id="root"]/main/div/div/div/div/form/div/div[1]/input'));
        const passwordField = await driver.findElement(By.xpath('//*[@id="root"]/main/div/div/div/div/form/div/div[2]/input'));

        await usernameField.sendKeys('brett');
        await passwordField.sendKeys('password', Key.ENTER);

        await driver.sleep(2000);

        const quiz = await driver.findElement(By.xpath('//*[@id="root"]/main/div/div/div/div/a'));

        await quiz.click();

        await driver.sleep(2000);

        const actualUrl = await driver.getCurrentUrl();
        expect(actualUrl).toBe('http://localhost:3000/quiz/Animals');

        const showAnswersButton = await driver.findElement(By.xpath('//*[@id="root"]/main/div/div/div/button'));

        await showAnswersButton.click();

        const firstCorrectAnswer = await driver.findElement(By.xpath('//*[@id="root"]/main/div/div/div/div/div[1]/div[1]/div'))

        expect(firstCorrectAnswer).toBeTruthy();
    });


})