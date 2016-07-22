/*global describe, it, expect, browser*/

describe('Projects Dashboard: ', function() {

    ////read in config file
    //var fs = require('fs');
    //var config = JSON.parse(fs.readFileSync('../../config.json', {encoding: 'utf8'}));
    //var userName = config.facility.SSFacility.User.replace("nih\\", "");
    //var password = config.facility.SSFacility.Password;
    //
    //
    ////Log-in page using user and pass from config
    //beforeAll(function() {
    //    browser.get('http://localhost:8000/#/rnai/projects');
    //    browser.sleep(3000);
    //    browser.driver.findElement(by.id('USER')).sendKeys(userName);
    //    browser.sleep(3000);
    //    browser.driver.findElement(by.id('PASSWORD')).sendKeys(password);
    //    browser.driver.findElement(by.id('Image2')).click();
    //    browser.sleep(3000);
    //    browser.get('http://localhost:8000/#/rnai/projects');
    //    browser.sleep(3000);
    //});

    var project_dashboard = require('../page/rnai_projects_dashboard.js');

    it('Should have a title that says "Consumables".', function(){
        browser.get('http://localhost:8000/#/rnai/projects');
        var myTitle = project_dashboard.getTitle();
        expect(myTitle).toBe('Consumables');
    });

    it('Should have a left side navigation panel.', function(){
        var nav = project_dashboard.getLeftSidePanel();
        expect(nav.isPresent()).toBeTruthy();
    });

    it('Should have a "Clear" button on the filter.', function(){
        var clearButton = project_dashboard.getClearButton();
        expect(clearButton.isPresent()).toBeTruthy();
    });

    it('Should have a search bar on the filter.', function(){
        var searchBar = project_dashboard.getSearchBar();
        expect(searchBar.isPresent()).toBeTruthy();
    });

    it('Should have at least one item.', function(){
        var card = project_dashboard.getMDcard();
        expect(card.isPresent()).toBeTruthy();
    });

    it('Should have a "Show More" button.', function(){
        var button = project_dashboard.getMoreButton();
        expect(button.isPresent()).toBeTruthy();
    });

    //it('Should click the "Show More" button.', function(){
    //    var button = project_dashboard.getMoreButton();
    //    browser.sleep(3000);
    //    button.click();
    //});

    //it('Should select the first filter option.', function(){
    //    var checkBox = project_dashboard.clickFirstFilterOption();
    //    checkBox.click();
    //});
});
