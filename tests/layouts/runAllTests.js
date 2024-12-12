const { Builder } = require('selenium-webdriver');
const { login, logout } = require('../helpers/loginHelper');
const createAndUpdateSourceReferenceTest = require('./source-reference/CreateAndUpdateSourceReferenceTest');
const viewUserHomeTest = require('./view-user/viewUserHomeTest');
const createAuditTest = require('./view-audit/createAuditTest');
// const reportsHomeTest = require('./reporting/ReportsHomeTest'); // create new test
const exportReportTest = require('./export-report/exportReportTest');
const createOrUpdateUserTest = require('./view-user/createOrUpdateUserTest');


describe('Run All Tests with Single Login Session', function() {
  this.timeout(180000); // Adjust timeout as needed
  let driver;

  // Initialize the WebDriver instance once before all tests
  before(async function() {
    driver = await new Builder().forBrowser('MicrosoftEdge').build();
    await driver.manage().window().maximize();
    await login(driver); // Perform a single login before all tests
  });

  // Logout and quit WebDriver after all tests are complete
  after(async function() {
    await logout(driver); // Logout after all tests
    await driver.quit();
  });

  // Sequentially run each test

  it('should run Create or Update User Test', async function() {
    await createOrUpdateUserTest(driver); // Run the createOrUpdateUser test
  });

  it('should run User Home View Test', async function() {
    await viewUserHomeTest(driver); // Run the viewUserHomeTest
  });

  it('should run Create Audit Test', async function() {
    await createAuditTest(driver);
  });

  it('should run Export Report Test', async function () {
    await exportReportTest(driver);
  }); 

  it('should run Source Reference Test', async function() {
    await createAndUpdateSourceReferenceTest(driver);
  });

  // it('should run Reports Home Test', async function() {
  //   await reportsHomeTest(driver);
  // });
});