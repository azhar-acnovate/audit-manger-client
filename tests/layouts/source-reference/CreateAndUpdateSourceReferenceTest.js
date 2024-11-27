const { By, until } = require('selenium-webdriver');
const { default: TEST_CASE_BASE_URL } = require('../all-test/testCaseConfig');

async function createAndUpdateSourceReferenceTest(driver) {
    console.log('Starting Source Reference Home Navigation Test...');
    
    // Step 1: Navigate to Source Reference Home page
    console.log('Navigating to Source Reference Home page...');
    await driver.get(`${TEST_CASE_BASE_URL}/audit-manager/master-data-management/audit-preparation`);

    // Wait for the title to confirm the page loaded
    await driver.wait(until.elementLocated(By.xpath("//h6[contains(text(), 'Audit Preparation')]")), 30000);
    console.log("Source Reference Home title located.");
    await driver.sleep(6000);

    // Step 2: Navigate to Dashboard page
    console.log('Navigating to Dashboard...');
    await driver.get(`${TEST_CASE_BASE_URL}/audit-manager/dashboard`);
    await driver.wait(until.urlIs("http://localhost:3000/audit-manager/dashboard"), 10000);
    console.log("Dashboard loaded.");
    await driver.sleep(6000);

    // Step 3: Navigate to Source Reference Create page
    console.log('Navigating to Source Reference Create page...');
    await driver.get(`${TEST_CASE_BASE_URL}/audit-manager/master-data-management/audit-preparation/create`);
    await driver.sleep(4000);

    // Step 4: Fill in Source Reference details and save
    const sourceObjectNameField = await driver.wait(
        until.elementLocated(By.xpath("//input[@placeholder='Audit Reference']")),
        10000
    );
    await sourceObjectNameField.sendKeys('product');

    const sourceReferenceKeyField = await driver.wait(
        until.elementLocated(By.xpath("//input[@placeholder='Audit Reference Id']")),
        10000
    );
    await sourceReferenceKeyField.sendKeys('4321');

    const saveButton = await driver.wait(until.elementLocated(By.id('saveButton')), 10000);
    await saveButton.click();
    console.log("Source Reference created successfully.");
    await driver.sleep(6000);
}

module.exports = createAndUpdateSourceReferenceTest;
