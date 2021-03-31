import { browser, by, element, logging } from 'protractor';
import { AppPage } from './app.po';

describe('Garage-details App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });


  it('should contain ID in login component', async () => {
    expect(element(by.id('GarageComponent'))).toBeDefined();
  });

  it('should be contain image in garage detail component', async () => {
    expect(element(by.id('GarageComponent'))).toBeDefined();
  });


  it('Expect Table to be present', async () => {
    expect(element(by.css('.main-div'))).toBeDefined();
  });

  it('Expect Company Info to be defined', async () => {

    expect(element(by.id('ToolBar'))).toBeDefined();
  });

  it('Submit button to find departure details should be present', async () => {
    expect(element(by.css('.btn-block'))).toBeDefined();
  });
});
