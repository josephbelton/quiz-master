const { Builder, By, Key, until } = require('selenium-webdriver');
require("chromedriver");
const { expect } = require('@jest/globals');

describe('Test that quizzes can be created / viewed and be checked for answers effectively', () => {

    afterAll(async () => {
        await driver.quit();
    }, 15000);

    jest.setTimeout(30000);


    it('should log in as an editor and create a new course that can be seen on the dashboard', async () => {
        let driver;
        driver = new Builder().forBrowser('chrome').build();
        await driver.manage().setTimeouts({ implicit: 30000 });

        await driver.get('http://localhost:3000/login');

        const usernameField = await driver.findElement(By.xpath('//*[@id="root"]/main/div/div/div/div/form/div/div[1]/input'));
        const passwordField = await driver.findElement(By.xpath('//*[@id="root"]/main/div/div/div/div/form/div/div[2]/input'));

        await usernameField.sendKeys('barry');
        await passwordField.sendKeys('password', Key.ENTER);

        await driver.sleep(2000);

        const createQuizButton = await driver.findElement(By.xpath('//*[@id="root"]/main/div/div/div/a/button'));
        createQuizButton.click()

        await driver.sleep(2000);

        const quizNameField = await driver.findElement(By.xpath('//*[@id="create"]/div/div[1]/input'))
        const numberOfQuestionsField = await driver.findElement(By.xpath('//*[@id="create"]/div/div[2]/input'))

        await quizNameField.sendKeys('JavaScript');
        await numberOfQuestionsField.sendKeys('2');

        const question1Field = await driver.findElement(By.xpath('//*[@id="create"]/div/div[3]/div[1]/input'))
        const howManyAnswers1Field = await driver.findElement(By.xpath('//*[@id="create"]/div/div[3]/div[2]/input'))
        const correctAnswer1Field = await driver.findElement(By.xpath('//*[@id="create"]/div/div[3]/div[3]/input'))

        await question1Field.sendKeys('What year was JavaScript created?');
        await howManyAnswers1Field.sendKeys('2');
        await correctAnswer1Field.sendKeys('1');

        const answer1Question1 = await driver.findElement(By.xpath('//*[@id="create"]/div/div[3]/div[4]/div/input'));
        const answer2Question1 = await driver.findElement(By.xpath('//*[@id="create"]/div/div[3]/div[5]/div/input'));

        await answer1Question1.sendKeys('1990');
        await answer2Question1.sendKeys('1995');

        const question2Field = await driver.findElement(By.xpath('//*[@id="create"]/div/div[4]/div[1]/input'))
        const howManyAnswers2Field = await driver.findElement(By.xpath('//*[@id="create"]/div/div[4]/div[2]/input'))
        const correctAnswer2Field = await driver.findElement(By.xpath('//*[@id="create"]/div/div[4]/div[3]/input'));

        await question2Field.sendKeys('Who created Javascript?');
        await howManyAnswers2Field.sendKeys('2');
        await correctAnswer2Field.sendKeys('2');

        const answer1Question2 = await driver.findElement(By.xpath('//*[@id="create"]/div/div[4]/div[4]/div/input'));
        const answer2Question2 = await driver.findElement(By.xpath('//*[@id="create"]/div/div[4]/div[5]/div/input'));

        await answer1Question2.sendKeys('Brendan Eich');
        await answer2Question2.sendKeys('James Gosling');

        const submitButton = await driver.findElement(By.xpath('//*[@id="create"]/div/button'));
        await submitButton.click()

        const successMessage = await driver.findElement(By.xpath('//*[@id="root"]/main/div/div/div/p'));
        expect(successMessage).toBeTruthy();

        const backToDashboardButton = await driver.findElement(By.xpath('//*[@id="root"]/main/div/div/header/div/a/button'));
        await backToDashboardButton.click();

        const newQuiz = await driver.findElement(By.xpath('//*[@id="root"]/main/div/div/div/div/a[2]'));
        await newQuiz.click();

        const title = await driver.findElement(By.xpath('//*[@id="root"]/main/div/div/div/h1')).getAttribute('innerHTML');
        expect(title).toBe('JavaScript')
    })
})