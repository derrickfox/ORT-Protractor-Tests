exports.config = {
    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Framework to use. Jasmine 2 is recommended.
    framework: 'jasmine2',

    // Spec patterns are relative to the current working directly when
    // protractor is called.

    //specs: ['../test/*_spec.js'],
    specs: ['../test/rnai_projects_dashboard_spec.js','../test/instrumentation_instruments_dashboard_spec.js'],
    //specs: ['../test/instrumentation_instruments_dashboard_spec.js'],
    //specs: ['../test/rnai_projects_dashboard_spec.js'],
    //specs: ['../test/manageInst_spec.js'],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000,
        isVerbose: true,
        print: function() {}
    },

    // Remove this block to return to normal console outputs.
    onPrepare: function() {
        var SpecReporter = require('jasmine-spec-reporter');
        // add jasmine spec reporter
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
    }

};