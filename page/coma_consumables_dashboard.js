var coma_consumables_dashboard = function() {

    // Title
    this.getTitle = function() {
        return element(by.css('h2.ng-binding.ng-scope')).getInnerHtml();
    };

    this.getLeftSidePanel = function() {
        return element(by.css('ls-filter'));
    };

    this.getClearButton = function() {
        return element(by.css('a.pull-right'));
    };

    this.getSearchBar = function() {
        return element(by.id('input_1'));
    };

    this.getMDcard = function () {
        return element(by.css('md-card'));
    };

    this.getMoreButton = function() {
        return element(by.css('button.md-button.md-ink-ripple'));
    };

    this.clickFirstFilterOption = function() {
        return element(by.css('md-list-item[value="0"]'));
    };
};

module.exports = new coma_consumables_dashboard();
